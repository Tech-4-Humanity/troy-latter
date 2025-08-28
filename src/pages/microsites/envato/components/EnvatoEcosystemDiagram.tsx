import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Building2, Cog, Palette, Database, Cloud, Globe } from 'lucide-react';

const EnvatoEcosystemDiagram = () => {
  const ecosystemGroups = [
    {
      title: "Original AI Tools",
      icon: Brain,
      items: [
        "Claude", "Gemini", "Perplexity", "Grok", "ChatGPT", "Copilot", 
        "Jasper", "Cyclic", "Zusatz", "Tactic", "Vini", "Tulip", 
        "Lark", "Flare", "Peddst", "Web", "feedly"
      ]
    },
    {
      title: "Tech Giants",
      icon: Building2,
      items: [
        "Apple", "Reddit", "Salesforce", "Microsoft", "Google DeepMind", 
        "OpenAI", "Anthropic", "NVIDIA", "Meta", "Adobe"
      ]
    },
    {
      title: "Agentic AI Builders",
      icon: Cog,
      items: [
        "Adept AI", "Cognition Labs", "Lindy", "Atera", "Hippocratic AI", 
        "MavenAGI", "Assistents.ai", "Rewind AI", "Cognosys", "AutoGPT", 
        "LangChain", "BabyAGI", "SuperAGI"
      ]
    },
    {
      title: "AI Platforms",
      icon: Globe,
      items: [
        "AutoGen", "CrewAI", "IBM Watsonx", "UiPath", "ServiceNow", 
        "Tonkean", "SAP", "Zapier", "Make"
      ]
    },
    {
      title: "Creative AI Tools",
      icon: Palette,
      items: [
        "Canva Magic Studio", "Runway ML", "Lightricks", "Reka", 
        "Adobe Firefly", "Databricks ImageAI", "Midjourney", 
        "Stable Diffusion", "DALL-E"
      ]
    },
    {
      title: "Digital Asset Managers",
      icon: Database,
      items: [
        "Orange Logic", "Aprimo", "Globality", "FourKites", "Kinaxis", 
        "Zycus", "Bynder", "Acquia DAM"
      ]
    },
    {
      title: "Ecosystems",
      icon: Cloud,
      items: [
        "Hugging Face", "AWS Bedrock", "Azure AI", "Google Cloud", 
        "Databricks", "Dataiku", "TensorFlow", "PyTorch"
      ]
    }
  ];

  return (
    <div id="ecosystem" className="mt-12 bg-gradient-to-br from-envato-green-50 via-envato-green-100 to-envato-green-50 border-2 border-envato-green-200 rounded-3xl overflow-hidden shadow-xl">
      <div className="envato-gradient text-white p-8 relative">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10">
          <h2 className="text-4xl font-bold mb-3">Envato Ecosystem</h2>
          <p className="text-white/95 text-lg">
            Understanding the competitive landscape and positioning Envato within the broader AI and creative technology ecosystem.
          </p>
        </div>
      </div>
      
      <div className="p-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-envato-green-600 rounded-full mb-4">
            <Globe className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-3xl font-bold text-envato-green-700 mb-3">Center Family</h3>
          <div className="envato-gradient-subtle border border-envato-green-300 rounded-xl p-4 max-w-md mx-auto">
            <p className="text-xl font-semibold text-envato-green-800">Envato, Shutterstock, Getty Images</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {ecosystemGroups.map((group, index) => {
            const IconComponent = group.icon;
            return (
              <Card key={index} className="group border-envato-green-200 hover:border-envato-green-400 hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-envato-green-100 rounded-lg group-hover:bg-envato-green-200 transition-colors">
                      <IconComponent className="h-5 w-5 text-envato-green-600" />
                    </div>
                    <CardTitle className="text-envato-green-700 text-lg font-semibold">{group.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-2">
                    {group.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-envato-green-400 rounded-full flex-shrink-0"></span>
                        <span className="text-sm text-envato-gray-700 hover:text-envato-green-700 transition-colors">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EnvatoEcosystemDiagram;