import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Download, Copy, Check, ChevronDown, FileText, Code } from "lucide-react";
import { toast } from "sonner";
import ReactMarkdown from "react-markdown";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import "@/styles/cv-preview.css";

// Lazy load heavy libraries
const loadJsPDF = () => import("jspdf").then(mod => mod.jsPDF);
const loadMarked = () => import("marked").then(mod => mod.marked);
const loadDocx = () => import("docx");
const loadFileSaver = () => import("file-saver").then(mod => mod.saveAs);

interface CVPreviewProps {
  cv: string;
  cvHTML?: string;
  matchScore?: number;
  template?: string;
}

export function CVPreview({ cv, cvHTML, matchScore, template }: CVPreviewProps) {
  const [copied, setCopied] = useState(false);
  const [viewMode, setViewMode] = useState<'markdown' | 'html'>(cvHTML ? 'html' : 'markdown');

  // Memoize markdown parsing to prevent re-renders
  const markdownContent = useMemo(() => cv, [cv]);

  const handleCopy = async (format: 'html' | 'markdown') => {
    try {
      if (format === 'markdown') {
        await navigator.clipboard.writeText(cv);
        setCopied(true);
        toast.success("CV copied as plain text");
        setTimeout(() => setCopied(false), 2000);
        return;
      }

      // Convert markdown to HTML for rich formatting
      const marked = await loadMarked();
      const htmlContent = await marked.parse(cv);
      
      // Create styled HTML for Google Docs/Word compatibility
      const styledHTML = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: 'Inter', 'Calibri', sans-serif; font-size: 11pt; line-height: 1.6; color: #1a1a1a; max-width: 750px; margin: 0 auto; }
            h1 { font-size: 28pt; font-weight: 800; margin-bottom: 8pt; color: #0f172a; }
            h2 { font-size: 16pt; font-weight: 700; margin-top: 24pt; margin-bottom: 12pt; padding-bottom: 8pt; border-bottom: 2px solid #2563eb; color: #2563eb; }
            h3 { font-size: 13pt; font-weight: 600; margin-top: 16pt; margin-bottom: 8pt; color: #1e293b; }
            p { margin: 8pt 0; }
            ul { margin: 8pt 0; padding-left: 20pt; }
            li { margin: 6pt 0; }
            strong { font-weight: 600; color: #0f172a; }
          </style>
        </head>
        <body>${htmlContent}</body>
        </html>
      `;
      
      // Copy as both HTML and plain text for better compatibility
      const blob = new Blob([styledHTML], { type: 'text/html' });
      const clipboardItem = new ClipboardItem({
        'text/html': blob,
        'text/plain': new Blob([cv], { type: 'text/plain' })
      });
      
      await navigator.clipboard.write([clipboardItem]);
      setCopied(true);
      toast.success("CV copied! Ready to paste into Google Docs or Word");
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      // Fallback to plain text if ClipboardItem not supported
      try {
        await navigator.clipboard.writeText(cv);
        setCopied(true);
        toast.success("CV copied as text");
        setTimeout(() => setCopied(false), 2000);
      } catch (fallbackError) {
        toast.error("Failed to copy CV");
      }
    }
  };

  const parseMarkdownToDocx = async (markdown: string, docx: any) => {
    const { Paragraph, TextRun, HeadingLevel } = docx;
    const lines = markdown.split('\n');
    const children: any[] = [];
    
    lines.forEach(line => {
      if (line.startsWith('# ')) {
        children.push(new Paragraph({
          text: line.substring(2),
          heading: HeadingLevel.HEADING_1,
          spacing: { after: 200, before: 200 }
        }));
      } else if (line.startsWith('## ')) {
        children.push(new Paragraph({
          text: line.substring(3),
          heading: HeadingLevel.HEADING_2,
          spacing: { after: 200, before: 400 }
        }));
      } else if (line.startsWith('### ')) {
        children.push(new Paragraph({
          text: line.substring(4),
          heading: HeadingLevel.HEADING_3,
          spacing: { after: 100, before: 200 }
        }));
      } else if (line.startsWith('**') && line.endsWith('**')) {
        children.push(new Paragraph({
          children: [new TextRun({ text: line.replace(/\*\*/g, ''), bold: true })],
          spacing: { after: 100 }
        }));
      } else if (line.trim()) {
        children.push(new Paragraph({
          text: line.replace(/\*\*/g, ''),
          spacing: { after: 100 }
        }));
      }
    });
    
    return children;
  };

  const handleDownload = async (format: 'pdf' | 'html' | 'docx') => {
    try {
      const marked = await loadMarked();
      const htmlContent = cvHTML || await marked.parse(cv);
      
      if (format === 'html') {
        const saveAs = await loadFileSaver();
        const blob = new Blob([htmlContent], { type: 'text/html' });
        saveAs(blob, `CV-Troy-Latter-${new Date().toISOString().split('T')[0]}.html`);
        toast.success("HTML file downloaded!");
        return;
      }
      
      if (format === 'pdf' && !cvHTML) {
        const templateCSS = `
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; font-size: 11pt; line-height: 1.6; color: #1a1a1a; background: #f9fafb; padding: 40px 20px; }
          .container { max-width: 850px; margin: 0 auto; background: white; padding: 60px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
          h1 { font-size: 36pt; font-weight: 800; margin-bottom: 8pt; color: #0f172a; padding-bottom: 16pt; border-bottom: 3px solid #2563eb; }
          h2 { font-size: 16pt; font-weight: 700; margin-top: 32pt; margin-bottom: 16pt; padding-bottom: 8pt; border-bottom: 2px solid #2563eb; color: #2563eb; }
          h3 { font-size: 13pt; font-weight: 600; margin-top: 20pt; margin-bottom: 8pt; color: #1e293b; }
          p { margin: 8pt 0; line-height: 1.6; }
          ul { margin: 12pt 0; padding-left: 24pt; list-style: none; }
          li { margin: 8pt 0; position: relative; padding-left: 4pt; }
          li::before { content: "•"; position: absolute; left: -20pt; color: #2563eb; font-weight: bold; font-size: 14pt; }
          strong { font-weight: 600; color: #0f172a; }
          @media print { 
            .container { padding: 40px; box-shadow: none; }
            @page { size: A4 portrait; margin: 2cm 1.5cm; }
            h2, h3 { page-break-after: avoid; }
            p { orphans: 3; widows: 3; }
          }
        `;
        
        const saveAs = await loadFileSaver();
        const fullHTML = `<!DOCTYPE html><html><head><meta charset="utf-8"><title>CV - Troy Latter</title><style>${templateCSS}</style></head><body><div class="container">${htmlContent}</div></body></html>`;
        const blob = new Blob([fullHTML], { type: 'text/html' });
        saveAs(blob, `CV-Troy-Latter-${new Date().toISOString().split('T')[0]}.html`);
        toast.success("HTML CV downloaded!");
        return;
      }
      
      if (format === 'docx') {
        const docx = await loadDocx();
        const saveAs = await loadFileSaver();
        const { Document, Packer } = docx;
        
        const doc = new Document({
          sections: [{
            properties: {},
            children: await parseMarkdownToDocx(cv, docx)
          }]
        });
        
        const blob = await Packer.toBlob(doc);
        saveAs(blob, `CV-Troy-Latter-${new Date().toISOString().split('T')[0]}.docx`);
        toast.success("Word CV downloaded!");
        return;
      }
      
      // PDF format - use professional PDF generator
      const { generateProfessionalPDF } = await import('@/utils/pdfGenerator');
      const saveAs = await loadFileSaver();
      
      const doc = generateProfessionalPDF(cv);
      doc.save(`CV-Troy-Latter-${new Date().toISOString().split('T')[0]}.pdf`);
      toast.success("Professional CV downloaded!");
      return;
    } catch (error) {
      console.error('Download failed:', error);
      toast.error("Failed to download CV");
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">Generated CV</h3>
          {matchScore !== undefined && (
            <p className="text-sm text-muted-foreground">
              Match Score: <span className="font-semibold text-primary">{matchScore.toFixed(1)}%</span>
              {template && <span className="ml-2 text-xs">• {template === 'blue' ? 'Blue Comprehensive' : 'Green Executive'}</span>}
            </p>
          )}
        </div>
        <div className="flex gap-2">
          {cvHTML && (
            <div className="flex gap-1 border rounded-md p-1">
              <Button
                variant={viewMode === 'markdown' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('markdown')}
                className="h-7 px-2 text-xs"
              >
                Markdown
              </Button>
              <Button
                variant={viewMode === 'html' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('html')}
                className="h-7 px-2 text-xs"
              >
                Template
              </Button>
            </div>
          )}
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="gap-2">
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                {copied ? "Copied!" : "Copy"}
                <ChevronDown className="h-3 w-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem onClick={() => handleCopy('html')}>
                <FileText className="mr-2 h-4 w-4" />
                Copy as Rich Text
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleCopy('markdown')}>
                <Code className="mr-2 h-4 w-4" />
                Copy as Plain Text
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="default" size="sm" className="gap-2">
                <Download className="h-4 w-4" />
                Download
                <ChevronDown className="h-3 w-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem onClick={() => handleDownload('pdf')}>
                <FileText className="mr-2 h-4 w-4" />
                Download as PDF
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleDownload('html')}>
                <Code className="mr-2 h-4 w-4" />
                Download as HTML
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleDownload('docx')}>
                <FileText className="mr-2 h-4 w-4" />
                Download as Word
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {viewMode === 'html' && cvHTML ? (
        <div className="border rounded-lg overflow-hidden bg-white">
          <iframe
            srcDoc={cvHTML}
            className="w-full border-0"
            style={{ height: '800px' }}
            title="CV Template Preview"
            sandbox="allow-same-origin"
          />
        </div>
      ) : (
        <div className="cv-preview border rounded-lg p-8 bg-card max-h-[800px] overflow-y-auto">
          <ReactMarkdown>{markdownContent}</ReactMarkdown>
        </div>
      )}
    </div>
  );
}