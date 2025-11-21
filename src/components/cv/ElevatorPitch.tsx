import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Copy, Phone, Mail, Users, Briefcase } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ElevatorPitchProps {
  content: string;
  trackType: "WORK" | "JOB";
}

interface ParsedPitches {
  networking?: string;
  coldEmail?: string;
  linkedIn?: string;
  phoneScreen?: string;
}

function parsePitches(content: string): ParsedPitches {
  const pitches: ParsedPitches = {};
  
  // Parse different pitch types
  const networkingMatch = content.match(/NETWORKING.*?["'](.+?)["']/s);
  const emailMatch = content.match(/(?:COLD EMAIL|EMAIL).*?["'](.+?)["']/s);
  const linkedInMatch = content.match(/LINKEDIN.*?["'](.+?)["']/s);
  const phoneMatch = content.match(/PHONE.*?["'](.+?)["']/s);

  if (networkingMatch) pitches.networking = networkingMatch[1].trim();
  if (emailMatch) pitches.coldEmail = emailMatch[1].trim();
  if (linkedInMatch) pitches.linkedIn = linkedInMatch[1].trim();
  if (phoneMatch) pitches.phoneScreen = phoneMatch[1].trim();

  // If no structured format found, use the whole content as networking pitch
  if (Object.keys(pitches).length === 0) {
    pitches.networking = content.trim();
  }

  return pitches;
}

export function ElevatorPitch({ content, trackType }: ElevatorPitchProps) {
  const { toast } = useToast();
  const pitches = parsePitches(content);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: `${label} copied to clipboard`,
    });
  };

  const PitchCard = ({ 
    title, 
    icon: Icon, 
    pitch, 
    context 
  }: { 
    title: string; 
    icon: any; 
    pitch?: string; 
    context: string;
  }) => {
    if (!pitch) return null;

    return (
      <Card className="border-l-4 border-l-primary">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon className="h-4 w-4 text-primary" />
              <CardTitle className="text-base">{title}</CardTitle>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => copyToClipboard(pitch, title)}
            >
              <Copy className="h-4 w-4" />
            </Button>
          </div>
          <CardDescription className="text-xs">{context}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm leading-relaxed">{pitch}</p>
          <div className="mt-3 flex items-center gap-2">
            <Badge variant="outline" className="text-xs">
              ~30 seconds
            </Badge>
            <Badge variant="secondary" className="text-xs">
              {trackType}
            </Badge>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">Elevator Pitches</h3>
          <p className="text-sm text-muted-foreground">
            30-second pitches optimized for different scenarios
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <PitchCard
          title="Networking Events"
          icon={Users}
          pitch={pitches.networking}
          context="In-person introductions, conferences, meetups"
        />
        
        <PitchCard
          title="Cold Email"
          icon={Mail}
          pitch={pitches.coldEmail}
          context="First contact via email, InMail messages"
        />
        
        <PitchCard
          title="LinkedIn InMail"
          icon={Briefcase}
          pitch={pitches.linkedIn}
          context="Professional networking, connection requests"
        />
        
        <PitchCard
          title="Phone Screens"
          icon={Phone}
          pitch={pitches.phoneScreen}
          context="Initial recruiter calls, brief introductions"
        />
      </div>
    </div>
  );
}
