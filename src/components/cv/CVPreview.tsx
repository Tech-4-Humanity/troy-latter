import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, Copy, Check } from "lucide-react";
import { toast } from "sonner";
import ReactMarkdown from "react-markdown";
import { jsPDF } from "jspdf";
import { marked } from "marked";
import "@/styles/cv-preview.css";

interface CVPreviewProps {
  cv: string;
  matchScore?: number;
}

export function CVPreview({ cv, matchScore }: CVPreviewProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      // Convert markdown to HTML for rich formatting
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

  const handleDownload = async () => {
    try {
      // Convert markdown to HTML
      const htmlContent = await marked.parse(cv);
      
      // Professional template CSS with blue accents
      const templateCSS = `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');
        
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 11pt;
          line-height: 1.6;
          color: #1a1a1a;
          background: #f9fafb;
          padding: 40px 20px;
        }
        
        .container {
          max-width: 850px;
          margin: 0 auto;
          background: white;
          padding: 60px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }
        
        h1 {
          font-size: 36pt;
          font-weight: 800;
          margin-bottom: 8pt;
          color: #0f172a;
          padding-bottom: 16pt;
          border-bottom: 3px solid #2563eb;
        }
        
        h2 {
          font-size: 16pt;
          font-weight: 700;
          margin-top: 32pt;
          margin-bottom: 16pt;
          padding-bottom: 8pt;
          border-bottom: 2px solid #2563eb;
          color: #2563eb;
        }
        
        h3 {
          font-size: 13pt;
          font-weight: 600;
          margin-top: 20pt;
          margin-bottom: 8pt;
          color: #1e293b;
        }
        
        p { margin: 8pt 0; line-height: 1.6; }
        
        ul {
          margin: 12pt 0;
          padding-left: 24pt;
          list-style: none;
        }
        
        li {
          margin: 8pt 0;
          position: relative;
          padding-left: 4pt;
        }
        
        li::before {
          content: "•";
          position: absolute;
          left: -20pt;
          color: #2563eb;
          font-weight: bold;
          font-size: 14pt;
        }
        
        strong {
          font-weight: 600;
          color: #0f172a;
        }
        
        @media print {
          .container { padding: 40px; box-shadow: none; }
          h2 { page-break-after: avoid; }
          h3 { page-break-after: avoid; }
        }
      `;
      
      const fullHTML = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>${templateCSS}</style>
        </head>
        <body>
          <div class="container">
            ${htmlContent}
          </div>
        </body>
        </html>
      `;
      
      // Create PDF with optimized settings
      const doc = new jsPDF({
        format: 'a4',
        unit: 'mm',
        orientation: 'portrait',
        compress: true
      });
      
      await doc.html(fullHTML, {
        callback: (pdf) => {
          pdf.save(`CV-Troy-Latter-${new Date().toISOString().split('T')[0]}.pdf`);
          toast.success("Professional CV downloaded!");
        },
        x: 10,
        y: 10,
        width: 190,
        windowWidth: 850,
        html2canvas: {
          scale: 0.8,
          useCORS: true,
          letterRendering: true,
          logging: false
        }
      });
    } catch (error) {
      console.error('PDF generation failed:', error);
      toast.error("Failed to generate PDF");
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
            </p>
          )}
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handleCopy}
            className="gap-2"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" />
                Copy
              </>
            )}
          </Button>
          <Button
            variant="default"
            size="sm"
            onClick={handleDownload}
            className="gap-2"
          >
            <Download className="h-4 w-4" />
            Download
          </Button>
        </div>
      </div>

      <div className="cv-preview border rounded-lg p-8 bg-card max-h-[800px] overflow-y-auto">
        <ReactMarkdown>{cv}</ReactMarkdown>
      </div>
    </div>
  );
}