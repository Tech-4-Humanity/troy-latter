
import React from 'react';
import { PageTitle } from '@/components/PageTitle';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Linkedin, MapPin, Calendar, Download } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "troy.latter@gmail.com",
      href: "mailto:troy.latter@gmail.com",
      description: "Primary contact for executive consulting and speaking engagements"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+61 424 882 136",
      href: "tel:+61424882136",
      description: "Direct line for urgent matters and initial consultations"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/theinnovater",
      href: "https://linkedin.com/in/theinnovater",
      description: "Professional network and thought leadership content"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Sydney, Australia",
      href: "#",
      description: "AGSVA NV2 Security Clearance | Available for up to 50% travel"
    }
  ];

  const engagementTypes = [
    {
      title: "Executive Consulting",
      description: "Strategic technology advisory for CIOs, CTOs, and senior leadership teams",
      duration: "3-12 months",
      scope: "Digital transformation strategy, technology roadmaps, vendor selection"
    },
    {
      title: "Speaking Engagements",
      description: "Keynote presentations and panel discussions on AI, cloud, and digital innovation",
      duration: "Half-day to multi-day",
      scope: "Industry conferences, executive briefings, thought leadership events"
    },
    {
      title: "Advisory Roles",
      description: "Board advisory and strategic guidance for technology companies and government bodies",
      duration: "Ongoing",
      scope: "Product strategy, go-to-market planning, industry positioning"
    },
    {
      title: "Sales Enablement",
      description: "Technical sales training and executive relationship building programs",
      duration: "1-6 months",
      scope: "Team training, customer engagement, solution positioning"
    }
  ];

  const handleScheduleClick = () => {
    // For now, redirect to email - can be updated with actual Calendly link
    window.open('mailto:troy.latter@gmail.com?subject=Schedule a Consultation', '_blank');
  };

  const handleDownloadCV = () => {
    // Placeholder for CV download - would typically link to actual PDF
    console.log('CV download requested - implement with actual file');
    // For now, show a message or redirect to contact
    alert('CV available upon request. Please contact directly via email.');
  };

  return (
    <div className="animate-fade-in">
      <PageTitle title="Contact & Engagement" />
      
      {/* Contact Information */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {contactMethods.map((contact, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start">
                <contact.icon className="h-6 w-6 text-brand-accent mr-4 mt-1" />
                <div className="flex-1">
                  <h3 className="font-semibold text-brand-primary mb-2">{contact.title}</h3>
                  {contact.href !== "#" ? (
                    <a 
                      href={contact.href}
                      className="text-brand-accent hover:text-brand-accent/80 font-medium mb-2 block transition-colors"
                      target={contact.href.startsWith('http') ? '_blank' : '_self'}
                      rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {contact.value}
                    </a>
                  ) : (
                    <div className="text-brand-primary font-medium mb-2">{contact.value}</div>
                  )}
                  <p className="text-sm text-gray-600">{contact.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Engagement Types */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-brand-primary mb-6">Engagement Opportunities</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {engagementTypes.map((engagement, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-brand-primary mb-3">{engagement.title}</h3>
                <p className="text-gray-700 mb-4">{engagement.description}</p>
                <div className="space-y-2 text-sm">
                  <div><span className="font-medium">Duration:</span> {engagement.duration}</div>
                  <div><span className="font-medium">Scope:</span> {engagement.scope}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <Card className="text-center hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <Calendar className="h-8 w-8 text-brand-accent mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Schedule a Call</h3>
            <p className="text-sm text-gray-600 mb-4">Book a consultation to discuss your technology strategy</p>
            <Button 
              size="sm" 
              className="w-full hover:scale-105 transition-transform" 
              onClick={handleScheduleClick}
            >
              Schedule Now
            </Button>
          </CardContent>
        </Card>

        <Card className="text-center hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <Download className="h-8 w-8 text-brand-accent mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Download CV</h3>
            <p className="text-sm text-gray-600 mb-4">Get the complete professional profile and credentials</p>
            <Button 
              size="sm" 
              variant="outline" 
              className="w-full hover:scale-105 transition-transform" 
              onClick={handleDownloadCV}
            >
              Download PDF
            </Button>
          </CardContent>
        </Card>

        <Card className="text-center hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <Mail className="h-8 w-8 text-brand-accent mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Send Message</h3>
            <p className="text-sm text-gray-600 mb-4">Reach out directly for specific inquiries</p>
            <Button size="sm" variant="outline" className="w-full hover:scale-105 transition-transform" asChild>
              <a href="mailto:troy.latter@gmail.com?subject=Business Inquiry">Send Email</a>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Availability Note */}
      <Card className="bg-brand-light hover:shadow-lg transition-shadow">
        <CardContent className="p-6">
          <h3 className="font-semibold text-brand-primary mb-3">Current Availability</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Available for executive consulting and advisory roles</li>
            <li>• Open to speaking engagements and thought leadership opportunities</li>
            <li>• Proven track record with Salesforce ecosystem partners</li>
            <li>• Extensive APAC CIO/CTO network ready for activation</li>
            <li>• Available for up to 50% travel across APAC region</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default Contact;
