import React, { useState } from 'react';

const OrchestratePage = () => {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const [showToast, setShowToast] = useState(false);

  const skillContent = {
    "AI fluency": "Pick the right model for the job. Route by cost and quality. Cache runs. Measure lifts not guesses.",
    "Ethical judgment": "Provenance and audits in the product. Clear rules for usage and training. Safe by default.",
    "Data storytelling": "Publish time to value and ARPU lift. Share creator earnings trends. Show trust metrics.",
    "Systems thinking": "One manifest and one index. SLAs for core services. Teams ship in parallel.",
    "Community leadership": "Reward authors. Forecast demand. Insights before publish. Fair payouts across surfaces.",
    "Influence": "Explain the why. Align design and eng and legal. Remove friction. Keep the bar high."
  };

  const notes = {
    qa1: `Retrieval. vector then lexical. Ranker with LTR. Session model for next best. Bandits for exploration. Metrics CTR and time to first useful asset and conversion.`,
    qa2: `C2PA sign on output. Store inputs and model and prompt. License attach at gen time. Public verify. Audit export for enterprise. Region pin.`,
    qa3: `Agents. brief then brand then safety then export. Memory per project. Tools. Search and gen and provenance and CMS publish. Guardrails before publish.`
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 1200);
    });
  };

  return (
    <div className="orchestrator-page">
      <style>{`
        .orchestrator-page {
          font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Arial, sans-serif;
          background: #ffffff;
          color: #0f172a;
          line-height: 1.6;
        }
        .orchestrator-page * { box-sizing: border-box; }
        .wrap { max-width: 1200px; margin: 0 auto; padding: 20px; }
        .hero { display: grid; gap: 14px; margin: 6px 0 18px; }
        .kicker { color: #64748b; font-weight: 700; letter-spacing: 0.02em; }
        .hero-grid { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 18px; }
        @media (max-width: 900px) { .hero-grid { grid-template-columns: 1fr; } }
        .card { background: #ffffff; border: 1px solid #e2e8f0; border-radius: 14px; padding: 16px; }
        .panel { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 14px; padding: 16px; }
        .graph { position: relative; height: 240px; border: 1px dashed #e2e8f0; border-radius: 12px; background: #fff; }
        .node { position: absolute; display: flex; align-items: center; justify-content: center; width: 90px; height: 90px; border-radius: 50%; color: #fff; font-weight: 700; box-shadow: 0 6px 18px rgba(2,6,23,0.08); }
        .node.center { left: calc(50% - 60px); top: calc(50% - 60px); width: 120px; height: 120px; background: #00a862; }
        .node.cust { left: 18px; top: 18px; background: #2563eb; }
        .node.cont { right: 18px; top: 18px; background: #f59e0b; }
        .node.enter { left: 18px; bottom: 18px; background: #7c3aed; }
        .node.agents { right: 18px; bottom: 18px; background: #ef4444; }
        .connector { position: absolute; border-top: 2px solid #dbe3ea; width: 38%; }
        .c1 { left: 120px; top: 60px; transform: rotate(8deg); }
        .c2 { right: 120px; top: 60px; transform: rotate(-8deg); }
        .c3 { left: 120px; bottom: 60px; transform: rotate(-8deg); }
        .c4 { right: 120px; bottom: 60px; transform: rotate(8deg); }
        .grid3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
        @media (max-width: 900px) { .grid3 { grid-template-columns: 1fr; } }
        .card h3 { font-size: 16px; margin: 0 0 8px; }
        .skills { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
        @media (max-width: 900px) { .skills { grid-template-columns: 1fr; } }
        .wheel { position: relative; aspect-ratio: 1; min-height: 280px; border: 1px solid #e2e8f0; border-radius: 14px; }
        .slice { position: absolute; inset: 10px; border-radius: 50%; display: flex; align-items: center; justify-content: center; }
        .slice button { all: unset; cursor: pointer; background: #fff; border: 1px solid #e2e8f0; padding: 8px 10px; border-radius: 10px; box-shadow: 0 6px 18px rgba(2,6,23,0.06); }
        .s1 { transform: translate(0, -32%); } .s2 { transform: translate(34%, -10%); } .s3 { transform: translate(34%, 28%); }
        .s4 { transform: translate(0, 48%); } .s5 { transform: translate(-34%, 28%); } .s6 { transform: translate(-34%, -10%); }
        .skill-detail { min-height: 120px; }
        .logos { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }
        @media (max-width: 900px) { .logos { grid-template-columns: 1fr 1fr; } }
        .logo-card { background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 12px; }
        .bubble { font-size: 14px; color: #0f172a; background: #fff; border-left: 4px solid #00a862; padding: 10px; border-radius: 8px; }
        .split { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        @media (max-width: 900px) { .split { grid-template-columns: 1fr; } }
        .good { border-left: 4px solid #00a862; }
        .warn { border-left: 4px solid #ef4444; }
        details { border: 1px solid #e2e8f0; border-radius: 12px; background: #fff; margin: 10px 0; }
        summary { cursor: pointer; padding: 12px 14px; font-weight: 700; }
        .acc { padding: 10px 14px; border-top: 1px solid #e2e8f0; }
        .btn { display: inline-block; padding: 10px 14px; border-radius: 10px; background: #00a862; color: #fff; font-weight: 700; text-decoration: none; cursor: pointer; border: none; }
        .btn:hover { background: #00824c; }
        .tag { display: inline-block; font-size: 12px; border: 1px solid #e2e8f0; border-radius: 999px; padding: 4px 8px; margin: 4px 6px 0 0; color: #64748b; background: #fff; }
        .toast { position: fixed; left: 50%; bottom: 18px; transform: translateX(-50%); background: #0f172a; color: #fff; padding: 10px 14px; border-radius: 10px; opacity: 0; pointer-events: none; transition: opacity 0.2s; z-index: 1000; }
        .toast.show { opacity: 1; }
        h1, h2, h3 { margin: 0 0 8px; }
        p { margin: 0 0 10px; color: #64748b; }
      `}</style>

      <div className="wrap">
        <section className="hero">
          <div className="kicker">The modern AI product manager</div>
          <h1>The orchestrator</h1>
          <p>You want more than features. You want alignment. Customers. Contributors. Enterprise. Agents. One cadence.</p>
          <div className="hero-grid">
            <div className="panel">
              <h2>Lens</h2>
              <p>Products do not fail because models are weak. They fail when people are not on the bus. My job is to align people and outcomes so AI becomes a growth engine.</p>
              <div className="graph" aria-hidden="true">
                <div className="connector c1"></div>
                <div className="connector c2"></div>
                <div className="connector c3"></div>
                <div className="connector c4"></div>
                <div className="node center">Orchestrate</div>
                <div className="node cust">Customer</div>
                <div className="node cont">Contributor</div>
                <div className="node enter">Enterprise</div>
                <div className="node agents">Agents</div>
              </div>
              <div>
                <span className="tag">Strategy</span>
                <span className="tag">Community</span>
                <span className="tag">Trust</span>
                <span className="tag">Monetisation</span>
              </div>
            </div>
            <div className="card">
              <h2>How I apply it</h2>
              <div className="grid3">
                <div>
                  <h3>Define the asset</h3>
                  <p>From files to kits and storefronts and APIs. Clear manifest. Clear lineage.</p>
                </div>
                <div>
                  <h3>Align incentives</h3>
                  <p>Contributors earn fairly. Customers get speed and safety. Enterprise gets control.</p>
                </div>
                <div>
                  <h3>Ship outcomes</h3>
                  <p>Win with time saved and risk reduced. Measure and publish the lift.</p>
                </div>
              </div>
              <p style={{ marginTop: '8px' }}>
                <a className="btn" href="#skills">View 2025 skill set</a>
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className="skills">
          <div className="card">
            <h2>Skill wheel</h2>
            <p>Tap a node to see how I use it on this role.</p>
            <div className="wheel" aria-label="Skill wheel">
              {Object.keys(skillContent).map((skill, index) => (
                <div key={skill} className={`slice s${index + 1}`}>
                  <button onClick={() => setSelectedSkill(skill)}>
                    {skill}
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="panel">
            <h2>How it shows up</h2>
            <div className="skill-detail">
              {selectedSkill ? (
                <>
                  <h3>{selectedSkill}</h3>
                  <p>{skillContent[selectedSkill]}</p>
                </>
              ) : (
                <p>Select a skill to see examples for Envato AI PM.</p>
              )}
            </div>
            <div>
              <span className="tag">Index and manifest</span>
              <span className="tag">Provenance</span>
              <span className="tag">Recsys</span>
              <span className="tag">APIs</span>
              <span className="tag">Agentic flows</span>
            </div>
          </div>
        </section>

        <section className="card" style={{ marginTop: '18px' }}>
          <h2>How leading teams view PM now</h2>
          <div className="logos">
            <div className="logo-card">
              <h3>Microsoft</h3>
              <div className="bubble">PMs guide agents with memory and feedback. Treat AI like a co worker. Ship loops not demos.</div>
            </div>
            <div className="logo-card">
              <h3>Apple</h3>
              <div className="bubble">Ship simple and private by default. Quality and safety as features. Craft wins adoption.</div>
            </div>
            <div className="logo-card">
              <h3>Meta</h3>
              <div className="bubble">Scale matters. Measure learning loops. Balance growth with integrity and trust.</div>
            </div>
            <div className="logo-card">
              <h3>OpenAI</h3>
              <div className="bubble">Make AI useful and reliable. Align models to user intent. Be clear about limits.</div>
            </div>
          </div>
        </section>

        <section style={{ marginTop: '18px' }}>
          <div className="split">
            <div className="card good">
              <h2>New PM model</h2>
              <details open>
                <summary>People first</summary>
                <div className="acc">Adoption beats novelty. I design for trust and rewards so people lean in.</div>
              </details>
              <details>
                <summary>Outcomes over features</summary>
                <div className="acc">Time to first useful asset. Time from brief to publish. That is how we win.</div>
              </details>
              <details>
                <summary>Orchestrate teams</summary>
                <div className="acc">Platform SLAs. Independent squads. Shared manifest. Ship in parallel.</div>
              </details>
            </div>
            <div className="card warn">
              <h2>Old traps</h2>
              <details open>
                <summary>Feature factory</summary>
                <div className="acc">Busy roadmaps with low adoption. No thanks.</div>
              </details>
              <details>
                <summary>Tech first</summary>
                <div className="acc">Great models. No community. Product stalls.</div>
              </details>
              <details>
                <summary>One off integrations</summary>
                <div className="acc">Custom glue each time. Slow and brittle.</div>
              </details>
            </div>
          </div>
        </section>

        <section style={{ marginTop: '18px' }}>
          <div className="panel">
            <h2>Proof points I can show</h2>
            <p>Pick any area and I can go deep. If we run short on time, here is a quick index.</p>
            <div className="grid3">
              <div className="card">
                <h3>Search and recsys</h3>
                <p>Two stage retrieval. Session model. Bandits for exploration. Clear KPIs and lifts.</p>
                <button className="btn" onClick={() => copyToClipboard(notes.qa1)}>Copy notes</button>
              </div>
              <div className="card">
                <h3>Trust and provenance</h3>
                <p>C2PA on outputs. License attach. Public verify. Audit exports. Region pinning.</p>
                <button className="btn" onClick={() => copyToClipboard(notes.qa2)}>Copy notes</button>
              </div>
              <div className="card">
                <h3>Agentic flows</h3>
                <p>Brief and brand and safety and export agents. Guardrails before publish.</p>
                <button className="btn" onClick={() => copyToClipboard(notes.qa3)}>Copy notes</button>
              </div>
            </div>
          </div>
        </section>

        <section style={{ marginTop: '18px' }}>
          <div className="card">
            <h2>Pre empted Q and A</h2>
            <details>
              <summary>What is AI product management to you</summary>
              <div className="acc">Align people and outcomes. Define the asset. Reward contributors. Make customer outcomes faster and safer. The model is a lever. The community is the moat.</div>
            </details>
            <details>
              <summary>How do you handle integrations</summary>
              <div className="acc">One manifest and one unified index. Public APIs and SDKs reuse the same contract. Every plugin rides that contract.</div>
            </details>
            <details>
              <summary>How do you handle M and A</summary>
              <div className="acc">Unify contributors and customers first. One payout ledger. One contract. Then harmonise manifests and provenance.</div>
            </details>
            <details>
              <summary>How do you keep speed</summary>
              <div className="acc">Infra SLAs. Independent squads. Canary and kill switch. Measure time to value.</div>
            </details>
            <details>
              <summary>What are your first 90 days</summary>
              <div className="acc">Ship manifest and index. C2PA by default. One enterprise connector. Contributor insights. One agentic workflow pilot.</div>
            </details>
          </div>
        </section>

        <section style={{ marginTop: '18px' }}>
          <div className="panel">
            <h2>Closing</h2>
            <p>Let us align people and outcomes. Then talk tech as deep as you want. That is how we keep speed and trust.</p>
            <button className="btn" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              Back to top
            </button>
          </div>
        </section>
      </div>

      {showToast && (
        <div className="toast show">
          Copied to clipboard
        </div>
      )}
    </div>
  );
};

export default OrchestratePage;