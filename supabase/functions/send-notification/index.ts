import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface NotificationRequest {
  userEmail: string;
  userName: string;
  userCompany?: string;
  userMessage?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { userEmail, userName, userCompany, userMessage }: NotificationRequest = await req.json();

    console.log('Sending notification emails for:', { userEmail, userName });

    // Send confirmation email to user
    const userEmailResponse = await resend.emails.send({
      from: "Troy's AI Assistant <onboarding@resend.dev>",
      to: [userEmail],
      subject: "Welcome to Troy's AI Assistant!",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #333;">Welcome ${userName}!</h1>
          <p>Thank you for your interest in connecting with Troy's AI Assistant.</p>
          <p>You now have access to chat with Troy's AI assistant, which can answer questions about:</p>
          <ul>
            <li>Troy's professional experience and achievements</li>
            <li>AI and innovation expertise</li>
            <li>Digital transformation leadership</li>
            <li>Strategic projects and initiatives</li>
          </ul>
          <p>Start chatting to learn more about Troy's work and expertise!</p>
          <p style="color: #666; font-size: 14px; margin-top: 30px;">
            Best regards,<br>
            Troy's AI Assistant
          </p>
        </div>
      `,
    });

    console.log('User confirmation email sent:', userEmailResponse);

    // Send notification to Troy (replace with Troy's actual email)
    const troyEmailResponse = await resend.emails.send({
      from: "AI Assistant Notifications <onboarding@resend.dev>",
      to: ["onboarding@resend.dev"], // Replace with Troy's email: troy@example.com
      subject: "New AI Assistant Lead",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #333;">New Lead from AI Assistant</h1>
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="border-bottom: 1px solid #ddd;">
              <td style="padding: 10px; font-weight: bold;">Name:</td>
              <td style="padding: 10px;">${userName}</td>
            </tr>
            <tr style="border-bottom: 1px solid #ddd;">
              <td style="padding: 10px; font-weight: bold;">Email:</td>
              <td style="padding: 10px;">${userEmail}</td>
            </tr>
            ${userCompany ? `
            <tr style="border-bottom: 1px solid #ddd;">
              <td style="padding: 10px; font-weight: bold;">Company:</td>
              <td style="padding: 10px;">${userCompany}</td>
            </tr>
            ` : ''}
            ${userMessage ? `
            <tr style="border-bottom: 1px solid #ddd;">
              <td style="padding: 10px; font-weight: bold;">Message:</td>
              <td style="padding: 10px;">${userMessage}</td>
            </tr>
            ` : ''}
            <tr>
              <td style="padding: 10px; font-weight: bold;">Date:</td>
              <td style="padding: 10px;">${new Date().toLocaleString()}</td>
            </tr>
          </table>
          <p style="color: #666; font-size: 14px;">
            This lead was generated from the AI Assistant on your portfolio site.
          </p>
        </div>
      `,
    });

    console.log('Troy notification email sent:', troyEmailResponse);

    return new Response(
      JSON.stringify({ 
        success: true,
        userEmailResponse,
        troyEmailResponse
      }), 
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-notification function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
