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
import { Mail, User, Building, MessageSquare, Shield } from 'lucide-react';

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  company: z.string().min(2, { message: "Company name is required." }),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

interface MicrositeAccessGateProps {
  micrositeName: string;
  onAccessGranted: () => void;
  customTitle?: string;
  customDescription?: string;
  brandColor?: string;
}

export const MicrositeAccessGate = ({ 
  micrositeName, 
  onAccessGranted,
  customTitle,
  customDescription,
  brandColor = 'blue'
}: MicrositeAccessGateProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const colorClasses = {
    red: { bg: 'bg-red-100', text: 'text-red-600', button: 'bg-red-600 hover:bg-red-700', border: 'border-red-200', bgLight: 'bg-red-50' },
    blue: { bg: 'bg-blue-100', text: 'text-blue-600', button: 'bg-blue-600 hover:bg-blue-700', border: 'border-blue-200', bgLight: 'bg-blue-50' },
    indigo: { bg: 'bg-indigo-100', text: 'text-indigo-600', button: 'bg-indigo-600 hover:bg-indigo-700', border: 'border-indigo-200', bgLight: 'bg-indigo-50' },
    purple: { bg: 'bg-purple-100', text: 'text-purple-600', button: 'bg-purple-600 hover:bg-purple-700', border: 'border-purple-200', bgLight: 'bg-purple-50' },
    green: { bg: 'bg-green-100', text: 'text-green-600', button: 'bg-green-600 hover:bg-green-700', border: 'border-green-200', bgLight: 'bg-green-50' },
  };

  const colors = colorClasses[brandColor as keyof typeof colorClasses] || colorClasses.blue;
  
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
          message: data.message || '',
          source: `microsite_${micrositeName.toLowerCase()}`
        });

      if (error) {
        if (import.meta.env.DEV) console.error(`Error saving ${micrositeName} lead:`, error);
        throw new Error('Failed to save your information');
      }

      // Store access in localStorage for this session
      localStorage.setItem(`${micrositeName}-access-granted`, 'true');
      localStorage.setItem(`${micrositeName}-user-email`, data.email.toLowerCase());
      localStorage.setItem(`${micrositeName}-user-name`, data.name);
      localStorage.setItem(`${micrositeName}-user-company`, data.company);

      toast({
        title: "Access Granted!",
        description: `You now have access to ${micrositeName} content.`,
      });

      // Small delay for better UX
      setTimeout(() => {
        onAccessGranted();
      }, 500);

    } catch (error) {
      if (import.meta.env.DEV) console.error(`Error in ${micrositeName} access gate:`, error);
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
    <div className={`min-h-screen bg-gradient-to-br from-${brandColor}-50 to-gray-50 flex items-center justify-center p-4`}>
      <Card className="w-full max-w-lg mx-auto shadow-xl">
        <CardHeader className="text-center space-y-4">
          <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${colors.bg} mb-4 mx-auto`}>
            <Shield className={`h-8 w-8 ${colors.text}`} />
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900">
            {customTitle || `Access ${micrositeName} Portfolio`}
          </CardTitle>
          <CardDescription className="text-base text-gray-600">
            {customDescription || `View strategic insights and capabilities tailored for ${micrositeName}. Please provide your details to access this exclusive content.`}
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
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <MessageSquare className="h-4 w-4" />
                      Message (Optional)
                    </FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Tell us about your interest..."
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
                className={`w-full ${colors.button}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Granting Access..." : `Access ${micrositeName} Content`}
              </Button>
            </form>
          </Form>
          
          <div className="mt-4 text-center text-xs text-gray-500">
            This information will be used to provide relevant insights and partnership opportunities.
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
