import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const BcorpDecisionFramework = () => {
  const scoringCriteria = [
    {
      name: "Business Viability",
      weight: "25%",
      description: "Market Value/TAM opportunity size, execution probability, time to revenue, competitive differentiation"
    },
    {
      name: "Community Impact",
      weight: "30%",
      description: "Creator empowerment, income growth, revenue diversification, community cohesion",
      highlight: true
    },
    {
      name: "B Corp Stakeholder Balance", 
      weight: "25%",
      description: "Creator wellbeing, social impact, governance alignment, stakeholder value balance"
    },
    {
      name: "Public Company Viability",
      weight: "20%",
      description: "Quarterly predictability, investor metrics story, competitive positioning, scalable growth"
    }
  ];

  const pathScores = [
    {
      path: "Creator Network",
      pathNumber: 2,
      business: 3.3,
      community: 5.0,
      bcorp: 4.0,
      publicCo: 3.25,
      final: 3.98,
      rank: 1,
      color: "bg-emerald-500",
      notes: "Highest overall. Strongest community alignment. Multi-stream creator income. Risk: moderation + volatility."
    },
    {
      path: "Vertical Expansion",
      pathNumber: 3,
      business: 3.5,
      community: 3.5,
      bcorp: 3.6,
      publicCo: 3.0,
      final: 3.43,
      rank: 2,
      color: "bg-blue-500",
      notes: "Balanced growth. Durable TAM in education/gaming/retail. Slower enterprise cycles."
    },
    {
      path: "Infrastructure",
      pathNumber: 1,
      business: 4.1,
      community: 2.75,
      bcorp: 3.2,
      publicCo: 3.75,
      final: 3.40,
      rank: 3,
      color: "bg-amber-500",
      notes: "ARR stabiliser. Strong enterprise trust. Weakest on community upside."
    },
    {
      path: "Platform Enabler",
      pathNumber: 4,
      business: 3.9,
      community: 2.25,
      bcorp: 2.8,
      publicCo: 4.0,
      final: 3.15,
      rank: 4,
      color: "bg-slate-500",
      notes: "Fast monetisation via APIs. High differentiation. Lower community + B Corp fit."
    },
    {
      path: "Radical Play",
      pathNumber: 5,
      business: 2.8,
      community: 3.5,
      bcorp: 2.6,
      publicCo: 2.75,
      final: 2.95,
      rank: 5,
      color: "bg-rose-500",
      notes: "Optionality. Future immersive/agentic AI upside. Very low near-term viability."
    }
  ];

  const portfolioStrategy = [
    {
      category: "Primary Focus",
      allocation: "70%",
      paths: [
        { name: "Creator Community Platform", percent: "50%", description: "Creator storefronts, subscriptions, workshops" },
        { name: "Education Vertical", percent: "20%", description: "Educational courseware and certification programs" }
      ]
    },
    {
      category: "Strategic Support", 
      allocation: "20%",
      paths: [
        { name: "Enterprise Compliance (Infrastructure)", percent: "15%", description: "Revenue stability during community platform scaling" },
        { name: "Platform API", percent: "5%", description: "SaaS ecosystem embedding" }
      ]
    },
    {
      category: "Future Optionality",
      allocation: "10%", 
      paths: [
        { name: "Immersive Creative Economy", percent: "10%", description: "3D/AR/VR creator early adopter community" }
      ]
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-foreground mb-4">
          B Corp + Community-First Decision Framework
        </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            A systematic approach to evaluating strategic direction using our 14-point analysis, 
            specifically calibrated for Envato's B Corp obligations, public company constraints, 
            and community-first DNA.
          </p>
      </div>

      {/* Scoring Formula */}
      <Card className="envato-gradient-subtle border-envato-green-200">
        <CardHeader>
          <CardTitle className="text-center text-envato-gray-900">Integrated Scoring Formula</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-envato-green-100">
            <p className="text-lg font-mono text-envato-gray-900">
              <strong>Final Score = </strong>
              <span className="text-blue-600">(Business Viability × 25%)</span> + 
              <span className="text-envato-green-600 font-bold"> (Community Impact × 30%)</span> + 
              <span className="text-purple-600">(B Corp Balance × 25%)</span> + 
              <span className="text-amber-600">(Public Co Viability × 20%)</span>
            </p>
            <p className="text-sm text-envato-gray-600 mt-2">
              Community health is existential • B Corp obligations are legal requirements • Public company metrics drive investor confidence
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Scoring Criteria */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {scoringCriteria.map((criteria, index) => (
          <Card key={index} className={criteria.highlight ? "ring-2 ring-envato-green-500/50 bg-envato-green-50/50" : "bg-white border-envato-green-100"}>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm text-envato-gray-900">{criteria.name}</CardTitle>
                <div className={criteria.highlight ? "envato-pill" : "envato-chip bg-envato-gray-100 text-envato-gray-700"}>
                  {criteria.weight}
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-xs text-envato-gray-600">{criteria.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Path Scores Table */}
      <Card>
        <CardHeader>
          <CardTitle>Strategic Path Comparison - 2025 (Corrected)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-2">Rank</th>
                  <th className="text-left py-3 px-2">Path</th>
                  <th className="text-center py-3 px-2">Business<br/><span className="text-xs text-muted-foreground">(25%)</span></th>
                  <th className="text-center py-3 px-2">Community<br/><span className="text-xs text-emerald-600 font-bold">(30%)</span></th>
                  <th className="text-center py-3 px-2">B Corp<br/><span className="text-xs text-muted-foreground">(25%)</span></th>
                  <th className="text-center py-3 px-2">Public Co<br/><span className="text-xs text-muted-foreground">(20%)</span></th>
                  <th className="text-center py-3 px-2 font-bold">Final Score</th>
                  <th className="text-left py-3 px-2">Notes</th>
                </tr>
              </thead>
              <tbody>
                {pathScores.map((path, index) => (
                  <tr key={index} className="border-b hover:bg-muted/50">
                    <td className="py-3 px-2">
                      <Badge variant="outline" className="w-8 h-8 rounded-full flex items-center justify-center">
                        {path.rank}
                      </Badge>
                    </td>
                    <td className="py-3 px-2">
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${path.color}`}></div>
                        <span className="font-medium">Path {path.pathNumber}: {path.path}</span>
                      </div>
                    </td>
                    <td className="text-center py-3 px-2 font-mono">{path.business}</td>
                    <td className="text-center py-3 px-2 font-mono font-bold text-emerald-600">{path.community}</td>
                    <td className="text-center py-3 px-2 font-mono">{path.bcorp}</td>
                    <td className="text-center py-3 px-2 font-mono">{path.publicCo}</td>
                    <td className="text-center py-3 px-2">
                      <Badge className={`${path.color} text-white font-bold`}>
                        {path.final}/5
                      </Badge>
                    </td>
                    <td className="py-3 px-2 text-sm text-muted-foreground max-w-xs">
                      {path.notes}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Portfolio Strategy */}
      <Card>
        <CardHeader>
          <CardTitle>B Corp Portfolio Strategy</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {portfolioStrategy.map((category, index) => (
            <div key={index} className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-lg">{category.category}</h3>
                <Badge variant="outline" className="text-lg px-3 py-1">
                  {category.allocation}
                </Badge>
              </div>
              <div className="space-y-2">
                {category.paths.map((path, pathIndex) => (
                  <div key={pathIndex} className="flex items-center justify-between bg-muted/50 rounded-md p-3">
                    <div>
                      <span className="font-medium">{path.name}</span>
                      <span className="text-sm text-muted-foreground ml-2">({path.percent})</span>
                    </div>
                    <p className="text-sm text-muted-foreground max-w-md text-right">
                      {path.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Key Insights */}
      <Card id="bcorp-moat" className="bg-gradient-to-r from-emerald-50 to-blue-50 border-emerald-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="text-emerald-600">🎯</span>
            The B Corp Competitive Moat
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            This isn't just about doing good - it's structural differentiation. Envato becomes the only creative platform where:
          </p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-emerald-600 mt-1">✓</span>
              <span><strong>Creator wellbeing is legally mandated</strong> (B Corp certification)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-600 mt-1">✓</span>
              <span><strong>Community impact must be measured and reported</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-600 mt-1">✓</span>
              <span><strong>Stakeholder value trumps pure profit maximization</strong></span>
            </li>
          </ul>
          <p className="text-sm text-muted-foreground mt-4 italic">
            Pure-profit platforms like Adobe or Canva cannot replicate this positioning without fundamental business model changes. 
            It's a defendable strategic advantage that aligns purpose with performance.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default BcorpDecisionFramework;