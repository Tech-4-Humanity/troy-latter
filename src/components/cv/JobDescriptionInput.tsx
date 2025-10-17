import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface JobDescriptionInputProps {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

export function JobDescriptionInput({ value, onChange, disabled }: JobDescriptionInputProps) {
  const charCount = value.length;
  const minChars = 50;
  const maxChars = 5000;
  const isValid = charCount >= minChars && charCount <= maxChars;

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <Label htmlFor="job-description" className="text-base font-semibold">
          Paste Job Description
        </Label>
        <span className={`text-sm ${isValid ? 'text-muted-foreground' : 'text-destructive'}`}>
          {charCount} / {maxChars} characters
          {charCount < minChars && ` (minimum ${minChars})`}
        </span>
      </div>
      <Textarea
        id="job-description"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Paste the complete job description here. Include requirements, responsibilities, qualifications, and any other relevant details to generate the best-tailored CV..."
        className="min-h-[300px] resize-y font-mono text-sm"
        disabled={disabled}
        maxLength={maxChars}
      />
      {!isValid && charCount > 0 && (
        <p className="text-sm text-destructive">
          {charCount < minChars 
            ? `Please add at least ${minChars - charCount} more characters` 
            : 'Maximum character limit reached'}
        </p>
      )}
    </div>
  );
}