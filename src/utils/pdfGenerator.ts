import jsPDF from 'jspdf';

interface CVSection {
  type: 'heading1' | 'heading2' | 'heading3' | 'paragraph' | 'bullet' | 'bold';
  content: string;
}

export class ProfessionalCVPDF {
  private doc: jsPDF;
  private y: number = 20;
  private pageWidth: number;
  private margin: number = 20;

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
    this.checkPageBreak(20);
    this.doc.setFontSize(28);
    this.doc.setFont('helvetica', 'bold');
    this.doc.setTextColor(15, 23, 42); // slate-900
    this.doc.text(text, this.margin, this.y);
    this.y += 12;

    // Underline
    this.doc.setDrawColor(37, 99, 235); // blue-600
    this.doc.setLineWidth(0.8);
    this.doc.line(this.margin, this.y, this.pageWidth - this.margin, this.y);
    this.y += 8;
  }

  // Render heading 2 (Section titles)
  addHeading2(text: string) {
    this.checkPageBreak(15);
    this.y += 6;
    this.doc.setFontSize(14);
    this.doc.setFont('helvetica', 'bold');
    this.doc.setTextColor(37, 99, 235); // blue-600
    this.doc.text(text, this.margin, this.y);
    this.y += 6;

    // Thin underline
    this.doc.setDrawColor(37, 99, 235);
    this.doc.setLineWidth(0.5);
    this.doc.line(this.margin, this.y, this.pageWidth - this.margin, this.y);
    this.y += 6;
  }

  // Render heading 3 (Job titles)
  addHeading3(text: string) {
    this.checkPageBreak(12);
    this.y += 4;
    this.doc.setFontSize(12);
    this.doc.setFont('helvetica', 'bold');
    this.doc.setTextColor(30, 41, 59); // slate-800
    this.doc.text(text, this.margin, this.y);
    this.y += 7;
  }

  // Render bold text (company names, dates)
  addBold(text: string) {
    this.checkPageBreak(8);
    this.doc.setFontSize(10);
    this.doc.setFont('helvetica', 'bold');
    this.doc.setTextColor(15, 23, 42);
    this.doc.text(text, this.margin, this.y);
    this.y += 6;
  }

  // Render paragraph
  addParagraph(text: string) {
    this.checkPageBreak(10);
    this.doc.setFontSize(10);
    
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
        this.y += 5;
        this.checkPageBreak(7);
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
    
    this.y += 7;
  }

  // Render bullet point with inline bold support
  addBullet(text: string) {
    this.checkPageBreak(8);
    this.doc.setFontSize(10);
    
    // Bullet symbol
    this.doc.setTextColor(37, 99, 235);
    this.doc.setFont('helvetica', 'bold');
    this.doc.text('•', this.margin + 2, this.y);
    
    // Parse into word-level tokens with formatting
    const tokens = this.parseToTokens(text);
    const maxWidth = this.pageWidth - (2 * this.margin) - 8;
    const indent = this.margin + 8;
    
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
        this.y += 5;
        this.checkPageBreak(6);
        
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
    
    this.y += 6;
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

    for (const section of sections) {
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
    }

    this.finalizeDocument();
    return this.doc;
  }
}

export function generateProfessionalPDF(markdown: string): jsPDF {
  const generator = new ProfessionalCVPDF();
  return generator.generate(markdown);
}
