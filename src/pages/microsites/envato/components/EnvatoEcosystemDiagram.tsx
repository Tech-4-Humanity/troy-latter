import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const EnvatoEcosystemDiagram = () => {
  const ecosystemGroups = [
    {
      title: "Original AI Tools",
      items: [
        "Claude", "Gemini", "Perplexity", "Grok", "ChatGPT", "Copilot", 
        "Jasper", "Cyclic", "Zusatz", "Tactic", "Vini", "Tulip", 
        "Lark", "Flare", "Peddst", "Web", "feedly"
      ]
    },
    {
      title: "Tech Giants",
      items: [
        "Apple", "Reddit", "Salesforce", "Microsoft", "Google DeepMind", 
        "OpenAI", "Anthropic", "NVIDIA", "Meta", "Adobe"
      ]
    },
    {
      title: "Agentic AI Builders",
      items: [
        "Adept AI", "Cognition Labs", "Lindy", "Atera", "Hippocratic AI", 
        "MavenAGI", "Assistents.ai", "Rewind AI", "Cognosys", "AutoGPT", 
        "LangChain", "BabyAGI", "SuperAGI"
      ]
    },
    {
      title: "AI Platforms",
      items: [
        "AutoGen", "CrewAI", "IBM Watsonx", "UiPath", "ServiceNow", 
        "Tonkean", "SAP", "Zapier", "Make"
      ]
    },
    {
      title: "Creative AI Tools",
      items: [
        "Canva Magic Studio", "Runway ML", "Lightricks", "Reka", 
        "Adobe Firefly", "Databricks ImageAI", "Midjourney", 
        "Stable Diffusion", "DALL-E"
      ]
    },
    {
      title: "Digital Asset Managers",
      items: [
        "Orange Logic", "Aprimo", "Globality", "FourKites", "Kinaxis", 
        "Zycus", "Bynder", "Acquia DAM"
      ]
    },
    {
      title: "Ecosystems",
      items: [
        "Hugging Face", "AWS Bedrock", "Azure AI", "Google Cloud", 
        "Databricks", "Dataiku", "TensorFlow", "PyTorch"
      ]
    }
  ];

  return (
    <div id="ecosystem" className="mt-12 envato-gradient-subtle border border-envato-green-200 rounded-2xl overflow-hidden">
      <div className="envato-gradient text-white p-6">
        <h2 className="text-3xl font-bold mb-2">Envato Ecosystem</h2>
        <p className="text-white/90">
          Understanding the competitive landscape and positioning Envato within the broader AI and creative technology ecosystem.
        </p>
      </div>
      
      <div className="p-6">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-envato-green-600 mb-2">Center Family</h3>
          <p className="text-lg text-foreground">Envato, Shutterstock, Getty Images</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {ecosystemGroups.map((group, index) => (
            <Card key={index} className="border-envato-green-200 hover:border-envato-green-400 transition-colors">
              <CardHeader className="pb-3">
                <CardTitle className="text-envato-green-600 text-lg">{group.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {group.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EnvatoEcosystemDiagram;