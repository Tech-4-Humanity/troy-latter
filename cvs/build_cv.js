const fs = require('fs');
const {
  Document, Packer, Paragraph, TextRun, AlignmentType,
  HeadingLevel, LevelFormat, BorderStyle, TabStopType, TabStopPosition,
  PageOrientation
} = require('docx');

// Tight rule paragraph used as a horizontal divider
const rule = () => new Paragraph({
  border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: "2E75B6", space: 1 } },
  spacing: { before: 60, after: 120 }
});

const h1 = (text) => new Paragraph({
  heading: HeadingLevel.HEADING_1,
  children: [new TextRun({ text })]
});

const h2 = (text) => new Paragraph({
  heading: HeadingLevel.HEADING_2,
  children: [new TextRun({ text })]
});

// Role line: "Title — Company" left, "Dates" right (tab stop)
const roleLine = (title, company, dates) => new Paragraph({
  tabStops: [{ type: TabStopType.RIGHT, position: 9360 }],
  spacing: { before: 120, after: 40 },
  children: [
    new TextRun({ text: title, bold: true, size: 22 }),
    new TextRun({ text: " — ", size: 22 }),
    new TextRun({ text: company, italics: true, size: 22 }),
    new TextRun({ text: "\t", size: 22 }),
    new TextRun({ text: dates, size: 22, color: "555555" })
  ]
});

const subline = (text) => new Paragraph({
  spacing: { before: 0, after: 60 },
  children: [new TextRun({ text, size: 20, color: "555555", italics: true })]
});

const bullet = (text, runs = null) => new Paragraph({
  numbering: { reference: "bullets", level: 0 },
  spacing: { before: 20, after: 20 },
  children: runs || [new TextRun({ text, size: 22 })]
});

const bulletBoldStart = (lead, body) => new Paragraph({
  numbering: { reference: "bullets", level: 0 },
  spacing: { before: 20, after: 20 },
  children: [
    new TextRun({ text: lead, bold: true, size: 22 }),
    new TextRun({ text: body, size: 22 })
  ]
});

const para = (text, opts = {}) => new Paragraph({
  spacing: { before: opts.before || 0, after: opts.after || 80 },
  children: [new TextRun({ text, size: 22 })]
});

// HEADER
const nameBlock = new Paragraph({
  alignment: AlignmentType.CENTER,
  spacing: { after: 60 },
  children: [new TextRun({ text: "TROY LATTER", bold: true, size: 44, font: "Arial" })]
});

const titleBlock = new Paragraph({
  alignment: AlignmentType.CENTER,
  spacing: { after: 60 },
  children: [new TextRun({
    text: "Founder & Technical Director  |  AI Platform Engineering  |  Enterprise Technology Leadership",
    size: 22, color: "2E75B6"
  })]
});

const contactBlock = new Paragraph({
  alignment: AlignmentType.CENTER,
  spacing: { after: 120 },
  children: [new TextRun({
    text: "Sydney, Australia  •  Tech 4 Humanity Pty Ltd (ABN 70 666 271 272)  •  [email]  •  [phone]  •  [LinkedIn]",
    size: 20, color: "555555"
  })]
});

// SUMMARY
const summary = [
  h1("Profile"),
  para(
    "Senior technology executive and hands-on engineering leader with a career spanning major enterprise IT organisations and, most recently, the design and operation of a 30+ business AI R&D and commercialisation portfolio. I build production AI infrastructure end-to-end — from autonomous agent fleets and governance kernels to compliance-grade data platforms and revenue automation. Equally comfortable in the boardroom and at the keyboard: I architect, I ship, I run the on-call.",
    { after: 120 }
  )
];

// CORE CAPABILITIES (no table — three bulleted columns would be over-engineered; keep tight)
const capabilities = [
  h1("Core Capabilities"),
  bulletBoldStart("AI Platforms & Agents — ", "Multi-agent system design (729-agent Neural Ennead), MCP server architecture, LLM tool orchestration, prompt-engineering at scale, RAG pipelines, evaluator-led QA."),
  bulletBoldStart("Cloud & Data Infrastructure — ", "AWS (Lambda, API Gateway, S3, IAM, CloudWatch, ap-southeast-2), Supabase / Postgres at scale (multi-schema, RLS, pg_cron), Vercel, GitHub Actions, infrastructure-as-code, observability."),
  bulletBoldStart("Engineering Leadership — ", "Solo-founder execution velocity paired with enterprise-grade governance: architectural review boards, build-control kernels, change-management discipline, compliance-by-design (RDTI, BAS, privacy)."),
  bulletBoldStart("Commercialisation — ", "Translating R&D into product: pricing, fulfilment automation, customer onboarding, financial controls, statutory reporting, IP capture."),
  bulletBoldStart("Languages & Stack — ", "Python, JavaScript / TypeScript, SQL (Postgres / PL/pgSQL), Bash, React. Comfortable across data, backend, and platform layers.")
];

// EXPERIENCE
const experience = [
  h1("Experience"),

  roleLine("Founder & Sole Director", "Tech 4 Humanity Pty Ltd", "Sydney  •  20XX – Present"),
  subline("AI R&D and commercialisation. 30+ business portfolio across CORE, SIGNAL, MISSION, RETAIL, and FUN groups."),
  bulletBoldStart("Built an autonomous execution platform ", "running on AWS ap-southeast-2 + Supabase + Vercel + GitHub: single-bridge Lambda invocation, multi-schema Postgres (S1 write, S2 read), RLS enforced, pg_cron-driven ops cycle, audit-grade reality ledger."),
  bulletBoldStart("Designed the STAMP governance kernel ", "(formerly AGOE) — a build-control + dispatch system with runway gates, canonical change ledger, and cross-LLM scratchpad broadcasting state to operators in real time."),
  bulletBoldStart("Architected the Wave 10 enforcement spine ", "— an 8-component contract that prevents partial deployments and silent regressions across the portfolio; any missing component fails the wave."),
  bulletBoldStart("Operates a 67-function Lambda fleet ", "post-rationalisation (down from 363) with full observability, deprecation tagging, and secret rotation in cap_secrets."),
  bulletBoldStart("Lead R&D programmes: ", "AI Sweet Spots cognitive-profiling research (11,000+ participants, 9 cognitive profiles), 7-Dimensions Digital Child Protection, Drug Resilience Atlas, AI4Tradies operating system."),
  bulletBoldStart("Built the Neural Ennead ", "— a 729-agent (9×9×9) coordination architecture underpinning WorkFamilyAI and HoloOrg products."),
  bulletBoldStart("Maintains compliance posture ", "across BAS quarterly reporting, RDTI evidence registers (timesheets, bank statements, GitHub commits, AWS billing), and Div7A loan management — evidence chain is automated, not retrofitted."),
  bulletBoldStart("Tech stack: ", "Python, TypeScript, SQL, Bash, React, AWS Lambda / API Gateway / S3 / IAM, Supabase, Vercel, GitHub Actions, Anthropic Claude API, MCP."),

  roleLine("Senior IT Executive Roles", "Major Enterprise Technology Organisations", "20XX – 20XX"),
  subline("Multiple senior leadership roles spanning enterprise IT delivery, platform engineering, and technology strategy."),
  bullet("Led technology functions at scale across major enterprise organisations — accountable for architecture, delivery, vendor and partner relationships, and operational performance."),
  bullet("Managed multi-million-dollar programme budgets, cross-functional engineering teams, and complex stakeholder ecosystems spanning business, finance, risk, and external regulators."),
  bullet("Delivered platform consolidations, cloud migrations, and operating-model changes across heterogeneous estates."),
  bullet("Built engineering capability: hiring, mentoring, and embedding modern engineering practices (CI/CD, observability, on-call discipline, blameless review).")
];

// SELECTED PROJECTS
const projects = [
  h1("Selected Projects"),

  bulletBoldStart("AI Sweet Spots — ", "Cognitive-profiling research programme (11,241+ participants, 9 cognitive profiles). Full-stack: data collection, profile-inference pipeline, participant registry, statutory R&D reporting."),
  bulletBoldStart("Drug Resilience Atlas / OutcomeReady — ", "Standalone peer programme to AI Sweet Spots. Survey API, deployment pipeline, participant registry."),
  bulletBoldStart("AI4Tradies Operating System — ", "Commercial-pack OS for trades businesses; payment-receipt schema, automated phase advancement, fulfilment automation."),
  bulletBoldStart("MCP Bridge / T4H Remote MCP Server — ", "v3.5.0 production MCP server (Vercel-hosted) connecting LLM clients to the T4H control plane. Dual-header auth, deferred-tool loading, allowlisted Lambda invocation."),
  bulletBoldStart("STAMP Governance Kernel — ", "Build-control and dispatch system with runway gates, canonical change ledger, cross-LLM broadcast.")
];

// EDUCATION & PROFESSIONAL
const education = [
  h1("Education & Professional"),
  bullet("[Degree, Institution, Year]"),
  bullet("[Professional certifications — e.g. AWS, security, governance]"),
  bullet("Australian permanent resident / citizen [as applicable]")
];

// PERSONAL
const personal = [
  h1("Beyond Work"),
  para(
    "Working toward paddling the full Australian coastline — approximately 14,000 km — as a personal endurance project. The same posture I bring to engineering: plan in detail, execute on schedule, and respect the conditions you can't control.",
    { after: 0 }
  )
];

const doc = new Document({
  creator: "Troy Latter",
  title: "Troy Latter — CV",
  styles: {
    default: { document: { run: { font: "Arial", size: 22 } } }, // 11pt
    paragraphStyles: [
      {
        id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 26, bold: true, font: "Arial", color: "2E75B6" },
        paragraph: {
          spacing: { before: 240, after: 80 },
          outlineLevel: 0,
          border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: "2E75B6", space: 2 } }
        }
      },
      {
        id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 24, bold: true, font: "Arial" },
        paragraph: { spacing: { before: 180, after: 80 }, outlineLevel: 1 }
      }
    ]
  },
  numbering: {
    config: [
      {
        reference: "bullets",
        levels: [{
          level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 360, hanging: 240 } } }
        }]
      }
    ]
  },
  sections: [{
    properties: {
      page: {
        size: { width: 11906, height: 16838 }, // A4
        margin: { top: 1080, right: 1080, bottom: 1080, left: 1080 } // 0.75"
      }
    },
    children: [
      nameBlock,
      titleBlock,
      contactBlock,
      ...summary,
      ...capabilities,
      ...experience,
      ...projects,
      ...education,
      ...personal
    ]
  }]
});

Packer.toBuffer(doc).then(buf => {
  const out = "/mnt/user-data/outputs/Troy_Latter_CV.docx";
  fs.writeFileSync(out, buf);
  console.log("written:", out, "bytes:", buf.length);
});