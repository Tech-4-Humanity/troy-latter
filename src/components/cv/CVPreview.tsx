import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, Copy, Check } from "lucide-react";
import { toast } from "sonner";
import ReactMarkdown from "react-markdown";

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

  const handleDownload = () => {
    const blob = new Blob([cv], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `CV-TroyMagennis-${new Date().toISOString().split('T')[0]}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success("CV downloaded successfully!");
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

      <div className="border rounded-lg p-6 bg-card max-h-[600px] overflow-y-auto prose prose-sm dark:prose-invert max-w-none">
        <ReactMarkdown>{cv}</ReactMarkdown>
      </div>
    </div>
  );
}