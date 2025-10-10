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
import { Mail, User, Building, MessageSquare, Shield, Target } from 'lucide-react';

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  company: z.string().min(2, { message: "Company name is required for Lenovo access." }),
  interestLevel: z.enum(['viewing', 'partnership', 'procurement'], {
    required_error: "Please select your interest level."
  }),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

interface LenovoAccessGateProps {
  onAccessGranted: () => void;
}

export const LenovoAccessGate = ({ onAccessGranted }: LenovoAccessGateProps) => {
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
          company: data.company,
          message: `Interest Level: ${data.interestLevel}${data.message ? ` | ${data.message}` : ''}`,
          source: 'lenovo_microsite'
        });

      if (error) {
        if (import.meta.env.DEV) console.error('Error saving Lenovo lead:', error);
        throw new Error('Failed to save your information');
      }

      // Store access in localStorage for this session
      localStorage.setItem('lenovo-access-granted', 'true');
      localStorage.setItem('lenovo-user-email', data.email.toLowerCase());
      localStorage.setItem('lenovo-user-company', data.company);
      localStorage.setItem('lenovo-interest-level', data.interestLevel);

      toast({
        title: "Access Granted!",
        description: "You now have access to Lenovo strategic content.",
      });

      // Small delay for better UX
      setTimeout(() => {
        onAccessGranted();
      }, 500);

    } catch (error) {
      if (import.meta.env.DEV) console.error('Error in Lenovo access gate:', error);
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
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-lg mx-auto shadow-xl">
        <CardHeader className="text-center space-y-4">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-4 mx-auto">
            <Shield className="h-8 w-8 text-red-600" />
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900">
            Access Lenovo Strategic Content
          </CardTitle>
          <CardDescription className="text-base text-gray-600">
            This content contains strategic insights and partnership opportunities. 
            Please provide your details to access the Lenovo ANZ materials.
          </CardDescription>
          
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-sm">
            <div className="flex items-center gap-2 text-red-700 font-medium mb-2">
              <Target className="h-4 w-4" />
              What you'll access:
            </div>
            <ul className="text-red-600 space-y-1 text-left">
              <li>• Strategic positioning frameworks</li>
              <li>• Product portfolio insights</li>
              <li>• Partnership opportunity assessments</li>
              <li>• Market analysis and recommendations</li>
            </ul>
          </div>
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
                      Business Email *
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
                      Company *
                    </FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Your organisation" 
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="interestLevel"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <Target className="h-4 w-4" />
                      Interest Level *
                    </FormLabel>
                    <FormControl>
                      <select 
                        {...field}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="">Select your interest...</option>
                        <option value="viewing">Strategic Research & Analysis</option>
                        <option value="partnership">Partnership Opportunities</option>
                        <option value="procurement">Procurement & Solutions</option>
                      </select>
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
                      Specific Interests (Optional)
                    </FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Tell us about your specific Lenovo interests or questions..."
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
                className="w-full bg-red-600 hover:bg-red-700"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Granting Access..." : "Access Lenovo Content"}
              </Button>
            </form>
          </Form>
          
          <div className="mt-4 text-center text-xs text-gray-500">
            This information will be used to qualify strategic partnership opportunities 
            and provide relevant Lenovo insights.
          </div>
        </CardContent>
      </Card>
    </div>
  );
};