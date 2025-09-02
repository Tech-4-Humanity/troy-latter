import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { GlassmorphismCard, GlassmorphismCardContent } from '@/components/ui/glassmorphism-card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { toast } from '@/hooks/use-toast';
import { Star, Mail, User, Building, MessageSquare } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  company: z.string().optional(),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

interface LeadCaptureGateProps {
  onSuccess: () => void;
}

export const LeadCaptureGate = ({ onSuccess }: LeadCaptureGateProps) => {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      message: '',
    },
  });

  const onSubmit = (data: FormData) => {
    // Store form completion in localStorage
    localStorage.setItem('projects-access-granted', 'true');
    localStorage.setItem('lead-capture-data', JSON.stringify({
      ...data,
      timestamp: new Date().toISOString(),
    }));

    toast({
      title: "Thank you!",
      description: "You now have access to view all projects.",
    });

    // Small delay for better UX
    setTimeout(() => {
      onSuccess();
    }, 500);
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 mb-6">
          <Star className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-primary">Exclusive Access</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent mb-6">
          Access Project Portfolio
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
          Get exclusive access to our complete portfolio of innovative projects and ventures. 
          Leave your details to explore cutting-edge solutions across multiple industries.
        </p>
      </div>

      {/* Form Card */}
      <GlassmorphismCard className="border border-white/10 bg-gradient-to-br from-background/80 to-background/50 backdrop-blur-md">
        <GlassmorphismCardContent className="p-8 md:p-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/20 mb-4">
              <Mail className="h-7 w-7 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold text-foreground mb-2">
              Request Access
            </h2>
            <p className="text-muted-foreground">
              Complete the form below to unlock the full project showcase
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground font-medium">
                        <User className="inline h-4 w-4 mr-2" />
                        Full Name *
                      </FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your full name" 
                          {...field}
                          className="bg-background/50 border-border/50 focus:border-primary/50"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground font-medium">
                        <Mail className="inline h-4 w-4 mr-2" />
                        Email Address *
                      </FormLabel>
                      <FormControl>
                        <Input 
                          type="email" 
                          placeholder="your.email@company.com" 
                          {...field}
                          className="bg-background/50 border-border/50 focus:border-primary/50"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground font-medium">
                      <Building className="inline h-4 w-4 mr-2" />
                      Company / Organization
                    </FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Your company or organization (optional)" 
                        {...field}
                        className="bg-background/50 border-border/50 focus:border-primary/50"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground font-medium">
                      <MessageSquare className="inline h-4 w-4 mr-2" />
                      Message
                    </FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Tell us about your interest in these projects or how we might collaborate (optional)"
                        className="bg-background/50 border-border/50 focus:border-primary/50 min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="pt-4">
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-medium py-3 text-base transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting ? 'Processing...' : 'Get Access to Projects'}
                </Button>
              </div>

              <div className="text-center text-sm text-muted-foreground mt-6">
                Your information is secure and will only be used to provide you with relevant updates about our projects.
              </div>
            </form>
          </Form>
        </GlassmorphismCardContent>
      </GlassmorphismCard>
    </div>
  );
};