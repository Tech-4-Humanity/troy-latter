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
      await navigator.clipboard.writeText(cv);
      setCopied(true);
      toast.success("CV copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      toast.error("Failed to copy CV");
    }
  };

  const handleDownload = async () => {
    try {
      // Convert markdown to HTML
      const htmlContent = await marked.parse(cv);
      
      // Create PDF with professional settings
      const doc = new jsPDF({
        format: 'a4',
        unit: 'mm',
        orientation: 'portrait'
      });
      
      // Convert HTML to PDF with styling
      await doc.html(`
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
              font-size: 11pt;
              line-height: 1.6;
              color: #1a1a1a;
            }
            h1 {
              font-size: 28pt;
              font-weight: 800;
              margin-bottom: 4pt;
              color: #0f172a;
              letter-spacing: -0.02em;
            }
            h2 {
              font-size: 16pt;
              font-weight: 700;
              margin-top: 24pt;
              margin-bottom: 12pt;
              padding-bottom: 8pt;
              border-bottom: 2px solid #e2e8f0;
              color: #1e40af;
            }
            h3 {
              font-size: 13pt;
              font-weight: 600;
              margin-top: 16pt;
              margin-bottom: 8pt;
            }
            p {
              margin: 8pt 0;
            }
            ul {
              margin: 8pt 0;
              padding-left: 20pt;
              list-style: none;
            }
            li {
              margin: 6pt 0;
              position: relative;
            }
            li::before {
              content: "•";
              position: absolute;
              left: -20pt;
              color: #1e40af;
              font-weight: bold;
            }
            strong {
              font-weight: 600;
              color: #0f172a;
            }
          </style>
        </head>
        <body>${htmlContent}</body>
        </html>
      `, {
        callback: (pdf) => {
          pdf.save(`CV-TroyMagennis-${new Date().toISOString().split('T')[0]}.pdf`);
          toast.success("CV downloaded as PDF!");
        },
        x: 15,
        y: 15,
        width: 180, // A4 width minus margins
        windowWidth: 800,
        html2canvas: {
          scale: 0.75,
          useCORS: true,
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