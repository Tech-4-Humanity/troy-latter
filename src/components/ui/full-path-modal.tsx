import * as React from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { toast } from "@/hooks/use-toast"

interface PathStep {
  phase: string;
  items: string[];
}

interface Story {
  title: string;
  situation: string;
  problem: string;
  resolution: string;
  outcome: string;
}

interface PathData {
  category: string;
  growthThesis: string;
  productAIStrategy: string;
  actions: string;
  steps: PathStep[];
  plan14?: { title: string; text: string }[];
  stories?: Story[];
}

interface FullPathModalProps {
  isOpen: boolean;
  onClose: () => void;
  pathName: string;
  pathData: PathData;
}

const FullPathModal: React.FC<FullPathModalProps> = ({ isOpen, onClose, pathName, pathData }) => {
  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text).then(() => {
      toast({
        title: "Copied!",
        description: `${type} copied to clipboard`,
        duration: 2000,
      });
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{pathName}</DialogTitle>
          <Badge variant="secondary" className="w-fit mt-2">{pathData.category}</Badge>
        </DialogHeader>
        
        <div className="space-y-6 mt-6">
          {/* Growth Thesis */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Growth Thesis</h3>
            <p className="text-muted-foreground">{pathData.growthThesis}</p>
          </div>
          
          {/* Product AI Strategy */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Product AI Strategy</h3>
            <p className="text-muted-foreground">{pathData.productAIStrategy}</p>
          </div>
          
          {/* Actions */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Key Actions</h3>
            <p className="text-muted-foreground">{pathData.actions}</p>
          </div>
          
          <Separator />
          
          {/* 14-Point Execution Plan */}
          <div>
            <h3 className="text-xl font-bold mb-4">14-Point Execution Plan</h3>
            <div className="space-y-3">
              {pathData.plan14 ? (
                pathData.plan14.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 bg-muted/30 rounded-lg p-3">
                    <span className="bg-primary text-primary-foreground rounded-full w-7 h-7 flex items-center justify-center text-sm font-medium flex-shrink-0">
                      {index + 1}
                    </span>
                    <div>
                      <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.text}</p>
                    </div>
                  </div>
                ))
              ) : (
                pathData.steps.map((step, stepIndex) => (
                  <div key={stepIndex} className="bg-muted/50 rounded-lg p-4">
                    <h4 className="font-semibold text-primary mb-3">{step.phase}</h4>
                    <div className="grid gap-2">
                      {step.items.map((item, itemIndex) => {
                        const itemNumber = stepIndex * 4 + itemIndex + 1; // Assuming 4 items per step for numbering
                        return (
                          <div key={itemIndex} className="flex items-start gap-2">
                            <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mt-0.5 flex-shrink-0">
                              {itemNumber}
                            </span>
                            <p className="text-sm text-muted-foreground">{item}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Sample Stories Section */}
          {pathData.stories && pathData.stories.length > 0 && (
            <>
              <Separator />
              <div>
                <h3 className="text-xl font-bold mb-4">Sample Stories</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Future case studies showing how this path could impact different stakeholders
                </p>
                <Accordion type="single" collapsible className="w-full">
                  {pathData.stories.map((story, index) => (
                    <AccordionItem key={index} value={`story-${index}`}>
                      <AccordionTrigger className="text-left">
                        {story.title}
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-4">
                          <div>
                            <h5 className="font-semibold text-sm mb-1">Situation</h5>
                            <p className="text-sm text-muted-foreground">{story.situation}</p>
                          </div>
                          <div>
                            <h5 className="font-semibold text-sm mb-1">Problem</h5>
                            <p className="text-sm text-muted-foreground">{story.problem}</p>
                          </div>
                          <div>
                            <h5 className="font-semibold text-sm mb-1">Resolution</h5>
                            <p className="text-sm text-muted-foreground">{story.resolution}</p>
                          </div>
                          <div>
                            <h5 className="font-semibold text-sm mb-1">Outcome</h5>
                            <p className="text-sm text-muted-foreground">{story.outcome}</p>
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => copyToClipboard(
                              `${story.title}\n\nSituation: ${story.situation}\n\nProblem: ${story.problem}\n\nResolution: ${story.resolution}\n\nOutcome: ${story.outcome}`,
                              "Story"
                            )}
                          >
                            Copy story
                          </Button>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FullPathModal;