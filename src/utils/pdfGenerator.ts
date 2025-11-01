import jsPDF from 'jspdf';

interface CVSection {
  type: 'heading1' | 'heading2' | 'heading3' | 'paragraph' | 'bullet' | 'bold';
  content: string;
}

export class ProfessionalCVPDF {
  private doc: jsPDF;
  private y: number = 15;
  private pageWidth: number;
  private margin: number = 15;

  constructor() {
    this.doc = new jsPDF({
      format: 'a4',
      unit: 'mm',
      orientation: 'portrait'
    });

    // Add metadata
    this.doc.setProperties({
      title: 'CV - Troy Latter',
      subject: 'Professional Resume',
      author: 'Troy Latter',
      keywords: 'CV, Resume, Professional',
      creator: 'AI CV Generator'
    });

    this.pageWidth = this.doc.internal.pageSize.getWidth();
    this.margin = 15; // Reduced margins for better space utilisation
  }

  // Parse markdown into structured sections
  parseMarkdown(markdown: string): CVSection[] {
    const lines = markdown.split('\n');
    const sections: CVSection[] = [];

    for (const line of lines) {
      if (line.startsWith('# ')) {
        sections.push({ type: 'heading1', content: line.substring(2) });
      } else if (line.startsWith('### ')) {
        sections.push({ type: 'heading3', content: line.substring(4) });
      } else if (line.startsWith('## ')) {
        sections.push({ type: 'heading2', content: line.substring(3) });
      } else if (line.startsWith('• ') || line.startsWith('- ')) {
        sections.push({ type: 'bullet', content: line.substring(2) });
      } else if (line.startsWith('**') && line.endsWith('**')) {
        sections.push({ type: 'bold', content: line.replace(/\*\*/g, '') });
      } else if (line.trim()) {
        sections.push({ type: 'paragraph', content: line.trim() });
      }
    }

    return sections;
  }

  // Check if we need a new page
  checkPageBreak(requiredSpace: number = 10) {
    if (this.y + requiredSpace > 280) {
      this.doc.addPage();
      this.y = 20;
    }
  }

  // Detect if this is a categorized skills section
  private isCategorizedSkills(sections: CVSection[], startIndex: number): boolean {
    if (startIndex === 0) return false;
    
    const prevSection = sections[startIndex - 1];
    if (prevSection?.type === 'heading2') {
      const heading = prevSection.content.toLowerCase();
      if (heading.includes('competenc') || 
          heading.includes('skill') || 
          heading.includes('strength')) {
        
        // Look ahead: do we have bold headings followed by bullets?
        let hasCategories = false;
        for (let i = startIndex; i < Math.min(startIndex + 10, sections.length); i++) {
          if (sections[i].type === 'bold' && 
              i + 1 < sections.length && 
              sections[i + 1].type === 'bullet') {
            hasCategories = true;
            break;
          }
        }
        return hasCategories;
      }
    }
    return false;
  }

  // Render categorized skills in 2-column layout
  private addCategorizedSkills(sections: CVSection[], startIndex: number): number {
    interface SkillCategory {
      name: string;
      skills: string[];
    }
    
    const categories: SkillCategory[] = [];
    let currentCategory: SkillCategory | null = null;
    let i = startIndex;
    
    // Collect all categories and their skills
    while (i < sections.length) {
      const section = sections[i];
      
      // Stop at next major heading
      if (section.type === 'heading1' || section.type === 'heading2') {
        break;
      }
      
      // New category header
      if (section.type === 'bold') {
        if (currentCategory) {
          categories.push(currentCategory);
        }
        currentCategory = {
          name: section.content,
          skills: []
        };
      }
      
      // Add skill to current category
      if (section.type === 'bullet' && currentCategory) {
        currentCategory.skills.push(section.content);
      }
      
      i++;
    }
    
    // Don't forget the last category
    if (currentCategory) {
      categories.push(currentCategory);
    }
    
    // Now render in 2-column layout
    if (categories.length === 0) return i;
    
    const colWidth = (this.pageWidth - (3 * this.margin)) / 2;
    const colGap = this.margin;
    const leftX = this.margin;
    const rightX = this.margin + colWidth + colGap;
    
    let leftY = this.y;
    let rightY = this.y;
    let useLeftColumn = true;
    
    for (const category of categories) {
      // Determine target column (balance by height)
      const targetX = useLeftColumn ? leftX : rightX;
      let currentY = useLeftColumn ? leftY : rightY;
      
      // Check page break
      if (currentY > 260) {
        this.doc.addPage();
        leftY = 20;
        rightY = 20;
        currentY = 20;
        this.y = 20;
      }
      
      // Render category heading
      this.doc.setFontSize(10);
      this.doc.setFont('helvetica', 'bold');
      this.doc.setTextColor(15, 23, 42); // slate-900
      
      // Word wrap category name if needed
      const categoryLines = this.doc.splitTextToSize(category.name, colWidth);
      for (const line of categoryLines) {
        this.doc.text(line, targetX, currentY);
        currentY += 5;
      }
      currentY += 2;
      
      // Render skills
      this.doc.setFontSize(9);
      this.doc.setFont('helvetica', 'normal');
      this.doc.setTextColor(51, 65, 85); // slate-700
      
      for (const skill of category.skills) {
        // Bullet
        this.doc.setTextColor(37, 99, 235);
        this.doc.setFont('helvetica', 'bold');
        this.doc.text('•', targetX + 1, currentY);
        
        // Skill text with word wrap
        this.doc.setFont('helvetica', 'normal');
        this.doc.setTextColor(51, 65, 85);
        const skillLines = this.doc.splitTextToSize(skill, colWidth - 6);
        
        for (let lineIdx = 0; lineIdx < skillLines.length; lineIdx++) {
          this.doc.text(skillLines[lineIdx], targetX + 6, currentY);
          if (lineIdx < skillLines.length - 1) {
            currentY += 4;
          }
        }
        currentY += 5;
      }
      
      // Add spacing after category
      currentY += 4;
      
      // Update column heights
      if (useLeftColumn) {
        leftY = currentY;
      } else {
        rightY = currentY;
      }
      
      // Switch columns for better balance
      useLeftColumn = leftY <= rightY;
    }
    
    // Set Y to the tallest column
    this.y = Math.max(leftY, rightY) + 6;
    
    return i;
  }

  // Parse text into word-level tokens with formatting
  private parseToTokens(text: string): Array<{text: string, bold: boolean}> {
    const tokens: Array<{text: string, bold: boolean}> = [];
    const parts = this.parseBoldInline(text);
    
    for (const part of parts) {
      // Split into words while preserving spaces
      const words = part.text.split(/(\s+)/);
      for (const word of words) {
        if (word) {
          tokens.push({ text: word, bold: part.bold });
        }
      }
    }
    
    return tokens;
  }

  // Render a line of tokens
  private renderTokenLine(tokens: Array<{text: string, bold: boolean}>, x: number) {
    let currentX = x;
    
    for (const token of tokens) {
      this.doc.setFont('helvetica', token.bold ? 'bold' : 'normal');
      this.doc.setTextColor(
        token.bold ? 15 : 51,
        token.bold ? 23 : 65,
        token.bold ? 42 : 85
      );
      
      this.doc.text(token.text, currentX, this.y);
      currentX += this.doc.getTextWidth(token.text);
    }
  }

  // Parse inline bold text
  private parseBoldInline(text: string): Array<{ text: string; bold: boolean }> {
    const parts: Array<{ text: string; bold: boolean }> = [];
    const regex = /\*\*(.+?)\*\*/g;
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(text)) !== null) {
      // Add normal text before bold
      if (match.index > lastIndex) {
        parts.push({ text: text.substring(lastIndex, match.index), bold: false });
      }
      // Add bold text
      parts.push({ text: match[1], bold: true });
      lastIndex = regex.lastIndex;
    }

    // Add remaining text
    if (lastIndex < text.length) {
      parts.push({ text: text.substring(lastIndex), bold: false });
    }

    return parts.length > 0 ? parts : [{ text, bold: false }];
  }

  // Render heading 1 (Name)
  addHeading1(text: string) {
    this.checkPageBreak(18);
    this.doc.setFontSize(24);
    this.doc.setFont('helvetica', 'bold');
    this.doc.setTextColor(15, 23, 42); // slate-900
    this.doc.text(text, this.margin, this.y);
    this.y += 8;

    // Underline
    this.doc.setDrawColor(37, 99, 235); // blue-600
    this.doc.setLineWidth(0.6);
    this.doc.line(this.margin, this.y, this.pageWidth - this.margin, this.y);
    this.y += 6;
  }

  // Render heading 2 (Section titles)
  addHeading2(text: string) {
    this.checkPageBreak(12);
    this.y += 4;
    this.doc.setFontSize(13);
    this.doc.setFont('helvetica', 'bold');
    this.doc.setTextColor(37, 99, 235); // blue-600
    this.doc.text(text, this.margin, this.y);
    this.y += 5;

    // Thin underline
    this.doc.setDrawColor(37, 99, 235);
    this.doc.setLineWidth(0.4);
    this.doc.line(this.margin, this.y, this.pageWidth - this.margin, this.y);
    this.y += 4;
  }

  // Render heading 3 (Job titles)
  addHeading3(text: string) {
    this.checkPageBreak(10);
    this.y += 3;
    this.doc.setFontSize(11);
    this.doc.setFont('helvetica', 'bold');
    this.doc.setTextColor(30, 41, 59); // slate-800
    this.doc.text(text, this.margin, this.y);
    this.y += 5;
  }

  // Render bold text (company names, dates)
  addBold(text: string) {
    this.checkPageBreak(6);
    this.doc.setFontSize(9.5);
    this.doc.setFont('helvetica', 'bold');
    this.doc.setTextColor(15, 23, 42);
    this.doc.text(text, this.margin, this.y);
    this.y += 4;
  }

  // Render paragraph
  addParagraph(text: string) {
    this.checkPageBreak(8);
    this.doc.setFontSize(9.5);
    
    // Use token-based rendering for proper inline bold support
    const tokens = this.parseToTokens(text);
    const maxWidth = this.pageWidth - (2 * this.margin);
    
    let currentLine: typeof tokens = [];
    let currentLineWidth = 0;
    
    for (const token of tokens) {
      this.doc.setFont('helvetica', token.bold ? 'bold' : 'normal');
      const tokenWidth = this.doc.getTextWidth(token.text);
      
      if (currentLineWidth + tokenWidth > maxWidth && currentLine.length > 0) {
        this.renderTokenLine(currentLine, this.margin);
        this.y += 4;
        this.checkPageBreak(6);
        currentLine = [token];
        currentLineWidth = tokenWidth;
      } else {
        currentLine.push(token);
        currentLineWidth += tokenWidth;
      }
    }
    
    if (currentLine.length > 0) {
      this.renderTokenLine(currentLine, this.margin);
    }
    
    this.y += 5;
  }

  // Render bullet point with inline bold support
  addBullet(text: string) {
    this.checkPageBreak(6);
    this.doc.setFontSize(9.5);
    
    // Bullet symbol
    this.doc.setTextColor(37, 99, 235);
    this.doc.setFont('helvetica', 'bold');
    this.doc.text('•', this.margin + 1, this.y);
    
    // Parse into word-level tokens with formatting
    const tokens = this.parseToTokens(text);
    const maxWidth = this.pageWidth - (2 * this.margin) - 6;
    const indent = this.margin + 6;
    
    let currentLine: typeof tokens = [];
    let currentLineWidth = 0;
    
    for (const token of tokens) {
      // Set font for width calculation
      this.doc.setFont('helvetica', token.bold ? 'bold' : 'normal');
      const tokenWidth = this.doc.getTextWidth(token.text);
      
      // Check if adding this token exceeds line width
      if (currentLineWidth + tokenWidth > maxWidth && currentLine.length > 0) {
        // Render current line
        this.renderTokenLine(currentLine, indent);
        this.y += 4;
        this.checkPageBreak(5);
        
        // Start new line
        currentLine = [token];
        currentLineWidth = tokenWidth;
      } else {
        // Add token to current line
        currentLine.push(token);
        currentLineWidth += tokenWidth;
      }
    }
    
    // Render final line
    if (currentLine.length > 0) {
      this.renderTokenLine(currentLine, indent);
    }
    
    this.y += 4;
  }

  // Add footer with page numbers
  private addFooter(pageNum: number, totalPages: number) {
    this.doc.setFontSize(8);
    this.doc.setFont('helvetica', 'normal');
    this.doc.setTextColor(148, 163, 184); // slate-400

    const text = `Page ${pageNum} of ${totalPages}`;
    const textWidth = this.doc.getTextWidth(text);
    const x = (this.pageWidth - textWidth) / 2;

    this.doc.text(text, x, 287);
  }

  // Finalize document with page numbers
  private finalizeDocument() {
    const totalPages = this.doc.getNumberOfPages();
    for (let i = 1; i <= totalPages; i++) {
      this.doc.setPage(i);
      this.addFooter(i, totalPages);
    }
  }

  // Generate complete PDF
  generate(markdown: string): jsPDF {
    const sections = this.parseMarkdown(markdown);
    let i = 0;
    
    while (i < sections.length) {
      const section = sections[i];
      
      // Check if this is a categorized skills section
      if (section.type === 'heading2' && this.isCategorizedSkills(sections, i + 1)) {
        // Render the heading
        this.addHeading2(section.content);
        i++;
        
        // Render skills in columns
        i = this.addCategorizedSkills(sections, i);
        continue;
      }
      
      // Regular rendering for all other sections
      switch (section.type) {
        case 'heading1':
          this.addHeading1(section.content);
          break;
        case 'heading2':
          this.addHeading2(section.content);
          break;
        case 'heading3':
          this.addHeading3(section.content);
          break;
        case 'bold':
          this.addBold(section.content);
          break;
        case 'bullet':
          this.addBullet(section.content);
          break;
        case 'paragraph':
          this.addParagraph(section.content);
          break;
      }
      
      i++;
    }

    this.finalizeDocument();
    return this.doc;
  }
}

export function generateProfessionalPDF(markdown: string): jsPDF {
  const generator = new ProfessionalCVPDF();
  return generator.generate(markdown);
}
