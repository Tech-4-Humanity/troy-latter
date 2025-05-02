
import { PageTitle } from '@/components/PageTitle';
import { FeatureCard } from '@/components/FeatureCard';
import { Shield, Database, Server, AlertTriangle, Activity, Zap } from 'lucide-react';

const CustomerAsks = () => {
  return (
    <div>
      <PageTitle title="Customer Asks" />
      
      <div className="text-center mb-10">
        <p className="text-lg max-w-3xl mx-auto">
          Vault Cloud is Australia's only ASD‑certified, hyperscale sovereign cloud operator—trusted by the Australian Government,
          National Intelligence Community and Critical Infrastructure sector.
        </p>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-vault-primary mb-6">Tomorrow's Customers need Innovation</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            icon={Shield}
            title="Compliance & Audit Fatigue"
            imageSrc="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
          >
            <div className="space-y-4">
              <p className="font-medium">Problem: Agencies waste weeks manually gathering logs, checking configs and proving compliance to ASD/ACSC.</p>
              <p className="font-medium">AI + Agents PoCs:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Continuous Compliance Agent – real‑time IaC scan + auto audit reports</li>
                <li>Policy‑Driven Remediation Bot – suggests/enacts approved fix‑playbooks</li>
                <li>ChatOps Compliance Concierge – LLM chat interface for on‑demand compliance queries</li>
              </ul>
              
              <div className="mt-4 bg-vault-light p-4 rounded-md">
                <p className="font-semibold">🔹 Troy's STAR:</p>
                <p><strong>Situation:</strong> At the Department of Human Services, audit prep for myGov took ~2 weeks.</p>
                <p><strong>Task:</strong> Automate compliance checks and reporting.</p>
                <p><strong>Action:</strong> Built an AI "watchdog" agent that scanned Terraform/Ansible configs and auto‑generated ASD‑ready reports.</p>
                <p><strong>Result:</strong> Reduced audit prep time from 2 weeks to under 1 hour, and cut manual effort by 85%.</p>
              </div>
            </div>
          </FeatureCard>

          <FeatureCard
            icon={AlertTriangle}
            title="Threat Detection & Incident Response Overload"
            imageSrc="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
          >
            <div className="space-y-4">
              <p className="font-medium">Problem: Defence SOCs drown in false alerts and lack automation to contain threats.</p>
              <p className="font-medium">AI + Agents PoCs:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Autonomous Anomaly‑Detection Agent – federated model to surface only true positives</li>
                <li>Multi‑Agent Playbook Orchestrator – auto‑assembles forensics, containment, comms</li>
                <li>Predictive Threat Forecasting – ML pipeline modelling TTPs for pre‑emptive hardening</li>
              </ul>
              
              <div className="mt-4 bg-vault-light p-4 rounded-md">
                <p className="font-semibold">🔹 Troy's STAR:</p>
                <p><strong>Situation:</strong> At AWS, a major transport client faced 1,200+ security alerts/day.</p>
                <p><strong>Task:</strong> Drastically cut false positives and accelerate response.</p>
                <p><strong>Action:</strong> Deployed a custom anomaly‑detection agent trained on their traffic patterns, plus a coordinating bot to trigger containment scripts.</p>
                <p><strong>Result:</strong> Reduced alerts by 92%, improved mean‑time‑to‑contain from 4 hrs to 20 mins.</p>
              </div>
            </div>
          </FeatureCard>

          <FeatureCard
            icon={Database}
            title="Sovereign AI & LLM Risks"
            imageSrc="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
          >
            <div className="space-y-4">
              <p className="font-medium">Problem: Agencies crave Generative AI for intel analysis but fear data leakage and "hallucinations."</p>
              <p className="font-medium">AI + Agents PoCs:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>On‑Prem Sovereign LLM Framework – self‑hosted cluster with token telemetry & fine‑tuning controls</li>
                <li>Document‑Intelligence Agent – ingests classified docs, auto‑tags Impact Levels, cross‑links findings</li>
                <li>Bias & Hallucination Guard – agent layer that validates LLM outputs vs. internal KB</li>
              </ul>
              
              <div className="mt-4 bg-vault-light p-4 rounded-md">
                <p className="font-semibold">🔹 Troy's STAR:</p>
                <p><strong>Situation:</strong> At Unisys, intelligence analysts needed rapid document summarisation under full audit.</p>
                <p><strong>Task:</strong> Deliver a compliant, on‑prem LLM solution.</p>
                <p><strong>Action:</strong> Architected and deployed an ASD‑certified LLM cluster, plus an agent to auto‑validate outputs.</p>
                <p><strong>Result:</strong> Analysts cut research time by 60%, with zero data‑leak incidents in 12 months.</p>
              </div>
            </div>
          </FeatureCard>

          <FeatureCard
            icon={Activity}
            title="Operational Inefficiency & Cost Creep"
            imageSrc="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
          >
            <div className="space-y-4">
              <p className="font-medium">Problem: Critical‑infra teams over‑provision VMs/storage and do manual capacity planning.</p>
              <p className="font-medium">AI + Agents PoCs:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Autonomous Resource Broker – rightsizes/schedules workloads for 30% cost savings</li>
                <li>Predictive Capacity Planning – neural forecasts for peak‑demand prep</li>
                <li>FinOps Advisor Agent – conversational AI explaining cost anomalies and optimisations</li>
              </ul>
              
              <div className="mt-4 bg-vault-light p-4 rounded-md">
                <p className="font-semibold">🔹 Troy's STAR:</p>
                <p><strong>Situation:</strong> An energy provider on AWS was overspending by 25% monthly.</p>
                <p><strong>Task:</strong> Optimise resource utilisation with minimal manual ops.</p>
                <p><strong>Action:</strong> Rolled out an agent to monitor usage metrics and auto‑rightsizing policies.</p>
                <p><strong>Result:</strong> Delivered 28% monthly cost savings, with no performance impact.</p>
              </div>
            </div>
          </FeatureCard>

          <FeatureCard
            icon={Zap}
            title="Speed & Agility in High‑Stakes Environments"
            imageSrc="https://images.unsplash.com/photo-1518770660439-4636190af475"
          >
            <div className="space-y-4">
              <p className="font-medium">Problem: PoCs stall for months—innovation theatre that never reaches production.</p>
              <p className="font-medium">AI + Agents PoCs:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Rapid‑Start PoC Generator – IaC template library with AI prompts, live in &lt;1 hr</li>
                <li>Mission‑Tailored Demo Agents – drop‑in persona agents (e.g. "Energy Grid Sentinel")</li>
                <li>Fail‑Fast Insights Dashboard – surfaces feature usage vs. ignore rates for next sprint</li>
              </ul>
              
              <div className="mt-4 bg-vault-light p-4 rounded-md">
                <p className="font-semibold">🔹 Troy's STAR:</p>
                <p><strong>Situation:</strong> At Oracle, a federal digital‑twin PoC dragged on 10 weeks.</p>
                <p><strong>Task:</strong> Accelerate to demo in 48 hrs.</p>
                <p><strong>Action:</strong> Published a Terraform/Ansible template pack and pre‑trained demo agent "CityOps Coordinator."</p>
                <p><strong>Result:</strong> Live demo delivered in 42 hrs, securing an immediate £1 M follow‑on contract.</p>
              </div>
            </div>
          </FeatureCard>
        </div>
      </div>
      
      <div className="space-y-6 mb-10">
        <h2 className="text-2xl font-semibold text-vault-primary">Our Foundation</h2>
        <ul className="list-disc list-inside space-y-3 pl-4">
          <li className="text-vault-secondary">
            <span className="font-medium text-vault-primary">100% Australian‑owned:</span> Secure data centres strategically located in Canberra & Sydney with full sovereignty guarantees.
          </li>
          <li className="text-vault-secondary">
            <span className="font-medium text-vault-primary">Security by Design:</span> Zero‑Trust networking architecture, quantum‑hardened key management & SCEC Zone 5 Security Operations Centre.
          </li>
          <li className="text-vault-secondary">
            <span className="font-medium text-vault-primary">Innovation DNA:</span> First‑of‑a‑Kind PoCs in sovereign AI, battlefield clouds and regulated environments for critical infrastructure.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CustomerAsks;
