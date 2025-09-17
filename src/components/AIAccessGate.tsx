
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { toast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Mail, User, Building, MessageSquare, Bot } from 'lucide-react';

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  company: z.string().optional(),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

interface AIAccessGateProps {
  onAccessGranted: () => void;
  title?: string;
  description?: string;
  waitlistOnly?: boolean;
}

export const AIAccessGate = ({ 
  onAccessGranted, 
  title,
  description,
  waitlistOnly = false
}: AIAccessGateProps) => {
  // Set default titles based on mode
  const defaultTitle = waitlistOnly 
    ? "Troy's AI Assistant is being reconstructed"
    : "Access Troy's AI Assistant";
  const defaultDescription = waitlistOnly
    ? "We're improving the experience. Leave your email and we'll notify you when it's live."
    : "Get personalized insights about Troy's expertise and experience";
  
  const finalTitle = title || defaultTitle;
  const finalDescription = description || defaultDescription;
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      name: '',
      company: '',
      message: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('ai_leads')
        .insert({
          email: data.email.toLowerCase(),
          name: data.name,
          company: data.company || null,
          message: data.message || null,
          source: waitlistOnly ? 'ai_assistant_waitlist' : 'ai_assistant'
        });

      if (error) {
        if (import.meta.env.DEV) console.error('Error saving AI lead:', error);
        throw new Error('Failed to save your information');
      }

      if (waitlistOnly) {
        toast({
          title: "Thanks!",
          description: "We'll let you know as soon as it's available.",
        });
      } else {
        // Store access in localStorage for this session
        localStorage.setItem('ai-assistant-access-granted', 'true');
        localStorage.setItem('ai-assistant-user-email', data.email.toLowerCase());

        toast({
          title: "Access Granted!",
          description: "You now have access to Troy's AI assistant.",
        });

        // Small delay for better UX
        setTimeout(() => {
          onAccessGranted();
        }, 500);
      }

    } catch (error) {
      if (import.meta.env.DEV) console.error('Error in AI access gate:', error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to grant access. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4 mx-auto">
          <Bot className="h-6 w-6 text-primary" />
        </div>
        <CardTitle className="text-xl">{finalTitle}</CardTitle>
        <CardDescription className="text-sm">
          {finalDescription}
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Email Address *
                  </FormLabel>
                  <FormControl>
                    <Input 
                      type="email" 
                      placeholder="your.email@company.com" 
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    Full Name *
                  </FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Your full name" 
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <Building className="h-4 w-4" />
                    Company (Optional)
                  </FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Your organization" 
                      {...field}
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
                  <FormLabel className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4" />
                    What would you like to know? (Optional)
                  </FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Tell us about your interest or questions..."
                      className="min-h-[80px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button 
              type="submit" 
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? (waitlistOnly ? "Joining waitlist..." : "Granting Access...") : (waitlistOnly ? "Notify me" : "Access AI Assistant")}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
