import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Home, Search, Filter } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const TruScaleScenarios = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const scenarios = [
    {
      scenario: 'Hybrid AI model burst',
      lenovoProducts: ['TruScale IaaS', 'ThinkSystem SR675 V3 GPU', 'Lenovo XClarity'],
      partnerCloud: ['AWS SageMaker', 'ECR S3'],
      setupSummary: 'Run base training on TruScale GPUs then burst to cloud for peaks. Wire VPC to data on premises.',
      typicalTime: 'One to two days if capacity pre positioned. Up to six weeks if new kit',
      businessValue: 'Faster model cycles without capex. Clear runway for AI features',
      dollarLevers: 'Shift spend to opex. Pay only for peaks. Avoid idle GPU cost',
      resourceUsage: 'GPUs at 60 to 90 percent during runs. Cloud at peak only',
      execImpact: 'High',
      boardTakeaway: 'Proves AI speed with spend control',
      category: 'AI'
    },
    {
      scenario: 'Azure Arc governance on TruScale',
      lenovoProducts: ['TruScale IaaS', 'ThinkSystem servers'],
      partnerCloud: ['Azure Arc', 'Azure Policy', 'Defender'],
      setupSummary: 'Attach TruScale hosts to Arc. Apply policy and guardrails. Show compliance views',
      typicalTime: 'Two to five days',
      businessValue: 'Single control plane for hybrid. Audit ready posture',
      dollarLevers: 'Reduce audit hours. Avoid fines. Lower tool overlap',
      resourceUsage: 'Light CPU. Steady control plane calls',
      execImpact: 'High',
      boardTakeaway: 'Proves control without slowing delivery',
      category: 'Cloud'
    },
    {
      scenario: 'Anthos portable apps on TruScale',
      lenovoProducts: ['TruScale IaaS', 'ThinkAgile'],
      partnerCloud: ['Google Anthos', 'GKE', 'Vertex AI'],
      setupSummary: 'Stand GKE on premises. Move a container app between sites with one manifest',
      typicalTime: 'Three to seven days',
      businessValue: 'Cut lock in risk. Faster rollouts across sites',
      dollarLevers: 'Avoid dual tool spend. Right size nodes per app',
      resourceUsage: 'Pods 30 to 70 percent. Nodes auto scale',
      execImpact: 'Medium high',
      boardTakeaway: 'Shows true multi cloud choice',
      category: 'Cloud'
    },
    {
      scenario: 'SAP S4HANA dev test on TruScale with cloud DR',
      lenovoProducts: ['TruScale IaaS', 'ThinkSystem DM storage'],
      partnerCloud: ['AWS or Azure DR', 'Backup SaaS'],
      setupSummary: 'Provision HANA nodes on TruScale. Replicate logs to cloud. Failover runbook demo',
      typicalTime: 'One to two weeks',
      businessValue: 'De risk ERP change. Shorten upgrade cycles',
      dollarLevers: 'Cut idle DR cost. Pay per snapshot and egress only',
      resourceUsage: 'Memory heavy. Storage IOPS tested',
      execImpact: 'High',
      boardTakeaway: 'ERP can move and still hit RTO RPO',
      category: 'Enterprise'
    },
    {
      scenario: 'VMware on TruScale with cloud tether',
      lenovoProducts: ['TruScale IaaS', 'ThinkAgile VX'],
      partnerCloud: ['VMware HCX', 'AWS or Azure endpoints'],
      setupSummary: 'Migrate VMs with HCX to TruScale. Stretch to cloud for peak',
      typicalTime: 'One to two weeks',
      businessValue: 'Protect past VMware spend. Quick wins for ops',
      dollarLevers: 'Lift and shift without refactor cost',
      resourceUsage: 'Hosts 40 to 70 percent. Burst at end of month',
      execImpact: 'Medium',
      boardTakeaway: 'Moves now without big rewrite',
      category: 'Cloud'
    },
    {
      scenario: 'ServiceNow workflow with TruScale telemetry',
      lenovoProducts: ['Lenovo XClarity', 'TruScale portal'],
      partnerCloud: ['ServiceNow ITSM'],
      setupSummary: 'Send health and usage signals to ServiceNow. Auto tickets and change approval',
      typicalTime: 'Two to four days',
      businessValue: 'Cleaner ops. Faster fix times',
      dollarLevers: 'Reduce MTTR. Fewer outages. Lower overtime',
      resourceUsage: 'Low load. Steady event flow',
      execImpact: 'Medium',
      boardTakeaway: 'Ops gets simple and visible',
      category: 'Operations'
    },
    {
      scenario: 'Data lake extension with S3 or ADLS or BigQuery',
      lenovoProducts: ['ThinkSystem DM or DG storage', 'TruScale IaaS'],
      partnerCloud: ['AWS S3', 'Azure Data Lake', 'BigQuery'],
      setupSummary: 'Sync cold data to cloud. Keep hot data on premises. Run cloud analytics on a copy',
      typicalTime: 'Days to one week',
      businessValue: 'Faster insight. Lower hot storage cost',
      dollarLevers: 'Tiering saves spend. Pay per query in cloud',
      resourceUsage: 'Storage 50 to 80 percent. Network off peak',
      execImpact: 'High',
      boardTakeaway: 'Insight grows while cost stays flat',
      category: 'Data'
    },
    {
      scenario: 'HPC as a Service on TruScale with water cooling',
      lenovoProducts: ['TruScale HPCaaS', 'Lenovo Neptune cooling', 'ThinkSystem SD665 or SR665'],
      partnerCloud: ['Slurm or PBS', 'Cloud for overflow'],
      setupSummary: 'Stand a CPU GPU cluster. Queue jobs. Spill to cloud at peak',
      typicalTime: 'Hours to days once racked',
      businessValue: 'More jobs per watt. Faster time to result',
      dollarLevers: 'Energy cut. No capex. Pay per node hour',
      resourceUsage: 'Near full during jobs. Idle cost near zero',
      execImpact: 'High',
      boardTakeaway: 'Science speeds up within budget',
      category: 'HPC'
    },
    {
      scenario: 'Retail edge AI with Motorola and TruScale',
      lenovoProducts: ['ThinkEdge SE350', 'TruScale Edge', 'Motorola 5G devices'],
      partnerCloud: ['Google Vertex AI', 'AWS Rekognition'],
      setupSummary: 'Camera and handset feed to edge models. Send events to cloud for training',
      typicalTime: 'Five to ten days',
      businessValue: 'Shrink loss. Faster service. Better store flow',
      dollarLevers: 'Cut theft. Lift basket size. Pay per site',
      resourceUsage: 'Edge CPU 40 to 70 percent. Cloud at train time',
      execImpact: 'High',
      boardTakeaway: 'Every store gets smarter this quarter',
      category: 'Edge'
    },
    {
      scenario: 'Field service AR VR with ThinkReality and Motorola',
      lenovoProducts: ['ThinkReality A3 or VRX', 'TruScale Edge', 'Motorola 5G phones'],
      partnerCloud: ['ServiceNow FSM', 'Azure Remote Rendering'],
      setupSummary: 'Guided repair with heads up display. Pull 3D models from cloud. Sync work orders',
      typicalTime: 'Seven to fourteen days',
      businessValue: 'Fix on first visit. Faster ramp for new techs',
      dollarLevers: 'Cut truck rolls. Fewer returns. Pay per headset',
      resourceUsage: 'Edge GPU bursts. Phone uplink at site',
      execImpact: 'Medium high',
      boardTakeaway: 'Workforce scales without more headcount',
      category: 'AR/VR'
    },
    {
      scenario: 'Secure workplace with Lenovo Device as a Service',
      lenovoProducts: ['TruScale DaaS', 'ThinkPad and ThinkCentre', 'Motorola 5G'],
      partnerCloud: ['Microsoft 365', 'Intune'],
      setupSummary: 'Provision laptops and phones as a service. Zero touch enroll and manage',
      typicalTime: 'Five to ten days for pilot',
      businessValue: 'Lower device risk. Faster joiner mover leaver flow',
      dollarLevers: 'Shift to opex. Cut refresh spikes. Lower theft loss',
      resourceUsage: 'Endpoint CPU low. Network steady',
      execImpact: 'Medium',
      boardTakeaway: 'Fleet stays fresh and secure without big spikes',
      category: 'Workplace'
    },
    {
      scenario: 'Backup and cyber recovery',
      lenovoProducts: ['ThinkSystem DM SafeMode', 'TruScale storage'],
      partnerCloud: ['Veeam', 'AWS S3 immutability'],
      setupSummary: 'Immutable backups on premises and in cloud. Drill instant restore',
      typicalTime: 'Three to seven days',
      businessValue: 'Lower ransom risk. Proven restore time',
      dollarLevers: 'Cut outage cost. Pay per TB stored',
      resourceUsage: 'Storage heavy at backup windows',
      execImpact: 'High',
      boardTakeaway: 'We can restore within hours not days',
      category: 'Security'
    },
    {
      scenario: 'Factory vision and OT edge',
      lenovoProducts: ['ThinkEdge SE30 SE70', 'TruScale Edge'],
      partnerCloud: ['Azure IoT', 'Snowflake'],
      setupSummary: 'Run vision at the line. Send features to cloud lake. Close loop to PLCs',
      typicalTime: 'Seven to fourteen days',
      businessValue: 'Higher yield. Less scrap. Safer floors',
      dollarLevers: 'Reduce defect write offs. Pay per site and sensor',
      resourceUsage: 'Edge CPU 50 to 80 percent. Cloud at batch time',
      execImpact: 'High',
      boardTakeaway: 'Quality lifts while waste drops',
      category: 'Manufacturing'
    },
    {
      scenario: 'Contact center AI with TruScale as integration hub',
      lenovoProducts: ['TruScale IaaS', 'ThinkAgile'],
      partnerCloud: ['Genesys Cloud', 'Salesforce', 'AWS AI'],
      setupSummary: 'Run vector and workflow services on TruScale. Connect to CCaaS and CRM',
      typicalTime: 'One to two weeks',
      businessValue: 'Shorter handle time. Better CSAT',
      dollarLevers: 'Cut talk time minutes. Raise self service. Pay per seat',
      resourceUsage: 'CPU steady. GPU optional for speech',
      execImpact: 'Medium high',
      boardTakeaway: 'Service improves and cost per call falls',
      category: 'Customer Service'
    },
    {
      scenario: 'Sovereign data zone on TruScale',
      lenovoProducts: ['TruScale Private Cloud', 'ThinkSystem servers', 'DM storage'],
      partnerCloud: ['Local cloud endpoints', 'Key management'],
      setupSummary: 'Keep sensitive data on premises. Expose clean views to cloud apps',
      typicalTime: 'Two to four weeks',
      businessValue: 'Meet local law. Keep pace with cloud apps',
      dollarLevers: 'Avoid fines. Reduce data egress',
      resourceUsage: 'Storage 60 to 90 percent. Network filtered',
      execImpact: 'High',
      boardTakeaway: 'Compliance without slowing teams',
      category: 'Compliance'
    }
  ];

  const categories = ['all', 'AI', 'Cloud', 'Edge', 'Data', 'Security', 'Enterprise', 'Operations', 'HPC', 'AR/VR', 'Workplace', 'Manufacturing', 'Customer Service', 'Compliance'];

  const filteredScenarios = scenarios.filter(scenario => {
    const matchesSearch = scenario.scenario.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         scenario.lenovoProducts.some(product => product.toLowerCase().includes(searchTerm.toLowerCase())) ||
                         scenario.partnerCloud.some(cloud => cloud.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || scenario.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'High': return 'bg-green-100 text-green-800';
      case 'Medium high': return 'bg-yellow-100 text-yellow-800';
      case 'Medium': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <div className="sticky top-0 z-20 bg-red-600 border-b border-red-700">
        <div className="max-w-7xl mx-auto px-6 py-3 flex gap-3 items-center">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate('/microsites/lenovo/demo-choices')}
            className="text-white hover:bg-white/20 hover:text-white border-white/30"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Demo Choices
          </Button>
          <div className="h-4 w-px bg-white/30" />
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate('/microsites/lenovo')}
            className="text-white hover:bg-white/20 hover:text-white border-white/30"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Lenovo Site
          </Button>
          <div className="h-4 w-px bg-white/30" />
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate('/')}
            className="text-white hover:bg-white/20 hover:text-white border-white/30"
          >
            <Home className="w-4 h-4 mr-2" />
            Main Portfolio
          </Button>
        </div>
      </div>

      {/* Header */}
      <header className="bg-gradient-to-br from-black to-gray-800 text-white">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-5xl font-bold mb-4">TruScale Pilot Scenarios</h1>
          <p className="text-xl mb-6 opacity-90">
            15+ real-world pilot scenarios across AI, cloud, edge, and enterprise workloads
          </p>
          <p className="text-lg opacity-75 max-w-4xl">
            Each scenario shows scope, setup effort, money levers, and executive takeaways to prove value fast with TruScale.
          </p>
        </div>
      </header>

      {/* Filters */}
      <section className="py-6 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search scenarios, products, or partners..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-red-600 hover:bg-red-700" : ""}
                >
                  {category === 'all' ? 'All Categories' : category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Scenarios Table */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Filter className="w-5 h-5" />
                TruScale Pilot Scenarios ({filteredScenarios.length} scenarios)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="min-w-[200px]">Scenario</TableHead>
                      <TableHead className="min-w-[200px]">Lenovo Products</TableHead>
                      <TableHead className="min-w-[150px]">Partner Cloud/SaaS</TableHead>
                      <TableHead className="min-w-[250px]">Setup Summary</TableHead>
                      <TableHead className="min-w-[150px]">Typical Time</TableHead>
                      <TableHead className="min-w-[200px]">Business Value</TableHead>
                      <TableHead className="min-w-[150px]">Dollar Levers</TableHead>
                      <TableHead className="min-w-[150px]">Resource Usage</TableHead>
                      <TableHead className="min-w-[100px]">Exec Impact</TableHead>
                      <TableHead className="min-w-[200px]">Board Takeaway</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredScenarios.map((scenario, index) => (
                      <TableRow key={index} className="hover:bg-gray-50">
                        <TableCell className="font-medium">
                          <div className="space-y-1">
                            <div>{scenario.scenario}</div>
                            <Badge variant="outline" className="text-xs">
                              {scenario.category}
                            </Badge>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            {scenario.lenovoProducts.map((product, idx) => (
                              <Badge key={idx} variant="secondary" className="mr-1 mb-1 text-xs">
                                {product}
                              </Badge>
                            ))}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            {scenario.partnerCloud.map((partner, idx) => (
                              <Badge key={idx} variant="outline" className="mr-1 mb-1 text-xs">
                                {partner}
                              </Badge>
                            ))}
                          </div>
                        </TableCell>
                        <TableCell className="text-sm">{scenario.setupSummary}</TableCell>
                        <TableCell className="text-sm">{scenario.typicalTime}</TableCell>
                        <TableCell className="text-sm">{scenario.businessValue}</TableCell>
                        <TableCell className="text-sm">{scenario.dollarLevers}</TableCell>
                        <TableCell className="text-sm">{scenario.resourceUsage}</TableCell>
                        <TableCell>
                          <Badge className={getImpactColor(scenario.execImpact)}>
                            {scenario.execImpact}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-sm font-medium text-red-600">
                          {scenario.boardTakeaway}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600 mb-4">
              Notes show typical ranges. Real timing depends on kit availability, site readiness, and approvals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="bg-red-600 hover:bg-red-700">
                <Link to="/microsites/lenovo/demo-choices">
                  Back to Demo Choices
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/microsites/lenovo/technical-stack">
                  View Technical Stack
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TruScaleScenarios;