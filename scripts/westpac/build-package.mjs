// scripts/westpac/build-package.mjs
// Westpac application package -> public/westpac/
// SOURCE OF TRUTH: Troy-Latter-CV-VirginAustralia-v6.1.docx (user-verified canonical CV).
// No content here is sourced from memory, Supabase, or prior AI-generated drafts.

import { writeFileSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  AlignmentType, LevelFormat, BorderStyle, WidthType, ShadingType, PageOrientation
} from "docx";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = resolve(__dirname, "../../public/westpac");
mkdirSync(OUT_DIR, { recursive: true });

const FONT   = "Calibri";
const ACCENT = "D5002B";
const DARK   = "1B1B1B";
const GREY   = "5A5A5A";
const LINE   = "D0D0D0";
const GREEN  = "107C10";
const AMBER  = "B7791F";
const ZEBRA  = "FAFAFA";
const TINT   = "FDF1F3";

const noB = { style: BorderStyle.NONE, size: 0, color: "FFFFFF" };
const NO_BORDERS = { top: noB, bottom: noB, left: noB, right: noB };
const p = (opts) => new Paragraph(opts);

const heading = (text) => p({
  spacing: { before: 280, after: 120 },
  border: { bottom: { style: BorderStyle.SINGLE, size: 8, color: ACCENT, space: 4 } },
  children: [new TextRun({ text: text.toUpperCase(), font: FONT, bold: true, size: 24, color: ACCENT, characterSpacing: 30 })]
});

const roleHeader = (left, right) => new Table({
  width: { size: 9360, type: WidthType.DXA },
  columnWidths: [6500, 2860],
  borders: { ...NO_BORDERS, insideHorizontal: noB, insideVertical: noB },
  rows: [new TableRow({
    children: [
      new TableCell({
        width: { size: 6500, type: WidthType.DXA }, borders: NO_BORDERS,
        margins: { top: 100, bottom: 40, left: 0, right: 0 },
        children: [p({ children: [new TextRun({ text: left, font: FONT, bold: true, size: 22, color: DARK })] })]
      }),
      new TableCell({
        width: { size: 2860, type: WidthType.DXA }, borders: NO_BORDERS,
        margins: { top: 100, bottom: 40, left: 0, right: 0 },
        children: [p({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: right, font: FONT, italics: true, size: 20, color: GREY })] })]
      })
    ]
  })]
});

const roleDesc = (text) => p({
  spacing: { before: 20, after: 80 },
  children: [new TextRun({ text, font: FONT, italics: true, size: 21, color: GREY })]
});

const bullet = (text, label = null) => p({
  numbering: { reference: "bullets", level: 0 },
  spacing: { before: 60, after: 60, line: 280 },
  children: label
    ? [new TextRun({ text: label, font: FONT, bold: true, size: 22, color: DARK }),
       new TextRun({ text: " \u2014 " + text, font: FONT, size: 22, color: DARK })]
    : [new TextRun({ text, font: FONT, size: 22, color: DARK })]
});

const body = (text) => p({
  spacing: { before: 60, after: 60, line: 280 },
  children: [new TextRun({ text, font: FONT, size: 22, color: DARK })]
});

const numbering = {
  config: [{
    reference: "bullets",
    levels: [{ level: 0, format: LevelFormat.BULLET, text: "\u25A0", alignment: AlignmentType.LEFT,
      style: { paragraph: { indent: { left: 360, hanging: 220 } }, run: { color: ACCENT } } }]
  }]
};

const headerName = (text) => p({
  alignment: AlignmentType.CENTER, spacing: { after: 60 },
  children: [new TextRun({ text, font: FONT, bold: true, size: 44, color: DARK, characterSpacing: 60 })]
});
const headerTitleC = (text) => p({
  alignment: AlignmentType.CENTER, spacing: { after: 80 },
  children: [new TextRun({ text, font: FONT, size: 22, color: ACCENT, bold: true })]
});
const headerContactC = (text) => p({
  alignment: AlignmentType.CENTER, spacing: { after: 200 },
  border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: ACCENT, space: 6 } },
  children: [new TextRun({ text, font: FONT, size: 19, color: GREY })]
});

async function buildCv() {
  const profile = body(
    "Technology transformation leader with 15+ years embedding AI, data, and digital solutions into complex, " +
    "regulated organisations across Australia and APAC. Direct aviation and transport experience across three " +
    "employers \u2014 airport systems, border technology, and post-COVID travel reopening programs. Built Holo-Org, " +
    "a 5,000-agent AI operating platform demonstrating enterprise-scale human-AI collaboration. Prosci-certified " +
    "change practitioner with cloud certifications across AWS, Azure, and GCP, and a current AGSVA NV2 security " +
    "clearance. Experienced at identifying high-value AI use cases, redesigning workflows for human-AI collaboration, " +
    "and driving measurable outcomes through structured change management \u2014 from concept to production to adoption."
  );

  const whyRows = [
    ["Experimentation in regulated environments", "Delivered emerging-technology programs inside aviation, border, defence and health \u2014 environments where experiments must be safe, evidenced and adoption-led. This is the experimentation discipline a bank actually needs."],
    ["AI use-case identification at scale", "50+ CIO/CDO engagements at AWS and 100+ SME workshops at Unisys spent finding which AI ideas are worth real investment, then designing the test. Triage is the core skill, not an afterthought."],
    ["A built artefact, not a deck", "Holo-Org is a working 5,000-agent AI operating platform mapping agents to real business functions with adoption metrics \u2014 evidence I take ideas from concept to production, not just slideware."],
    ["Adoption built in", "Prosci ADKAR certified. Every initiative I run carries a change-management playbook, training plan and continuous-improvement loop \u2014 the upskilling motion The Future Lab needs to push back into the business units."],
    ["Senior-stakeholder fluency", "Ministerial briefings, Australian Border Force and cross-agency alignment during border reopening; C-suite advisory across government and enterprise. Comfortable in the rooms this role operates in."],
    ["Bank-grade compliance posture", "Current AGSVA NV2 clearance, TOGAF 9, delivery inside defence and health governance frameworks \u2014 directly transferable to Westpac's risk and compliance expectations."]
  ];

  const whyTable = new Table({
    width: { size: 9360, type: WidthType.DXA },
    columnWidths: [3000, 6360],
    rows: whyRows.map(([k, v], i) => new TableRow({
      children: [
        new TableCell({
          width: { size: 3000, type: WidthType.DXA },
          borders: { top: { style: BorderStyle.SINGLE, size: 4, color: LINE }, bottom: { style: BorderStyle.SINGLE, size: 4, color: LINE }, left: noB, right: noB },
          margins: { top: 100, bottom: 100, left: 60, right: 120 },
          shading: { fill: i % 2 === 0 ? TINT : "FFFFFF", type: ShadingType.CLEAR },
          children: [p({ children: [new TextRun({ text: k, font: FONT, bold: true, size: 20, color: ACCENT })] })]
        }),
        new TableCell({
          width: { size: 6360, type: WidthType.DXA },
          borders: { top: { style: BorderStyle.SINGLE, size: 4, color: LINE }, bottom: { style: BorderStyle.SINGLE, size: 4, color: LINE }, left: noB, right: noB },
          margins: { top: 100, bottom: 100, left: 120, right: 60 },
          shading: { fill: i % 2 === 0 ? TINT : "FFFFFF", type: ShadingType.CLEAR },
          children: [p({ children: [new TextRun({ text: v, font: FONT, size: 20, color: DARK })] })]
        })
      ]
    }))
  });

  const consentx = [
    roleHeader("ConsentX \u2014 Youth Banking Consent Prototype (self-initiated, for Westpac)", "2025  \u2022  Sydney"),
    roleDesc("A self-built working prototype exploring a Westpac-specific idea \u2014 not a pilot, and not a deck."),
    bullet("Built a working prototype that reframes youth banking onboarding as a consent journey rather than a paperwork process \u2014 turning life-stage data into trust signals, automating verification, and keeping auditability, parent-approved controls and revocable consent intact.", "What I built"),
    bullet("Framed it the way an experimentation function would: a defined problem hypothesis, a modelled target state (fast, document-light, revocable, traceable onboarding), and a five-lens stakeholder analysis across the customer, the guardian parent, a bank innovation lead, a merchant and a regulator.", "How it is framed"),
    bullet("Deliberately scoped as a concept prototype to make the idea concrete and testable \u2014 the kind of cheap, fast, evidence-oriented artefact The Future Lab is meant to produce before a big conversation, not after it. Live at consentx-westpac-demo1.lovable.app.", "Why it matters")
  ];

  const t4h = [
    roleHeader("Tech 4 Humanity (Holo-Org)  \u2014  Founder & AI Transformation Architect", "2023 \u2013 Present  \u2022  Sydney"),
    roleDesc("AI transformation consultancy and platform builder. Holo-Org is a production 5,000-agent AI operating model."),
    bullet("Architected and deployed Holo-Org \u2014 an enterprise-scale AI platform mapping 5,000 autonomous agents to business functions including HR, finance, operations and customer experience. A working system with adoption metrics, not a concept deck.", "Holo-Org platform"),
    bullet("Designed a human-AI collaboration framework ensuring every agent has a defined scope, a human partner, a feedback loop and a measurable KPI \u2014 focused on augmentation, not replacement.", "Human-AI design"),
    bullet("Built LLM orchestration, RAG pipelines, multi-model architecture and agent frameworks; a daily hands-on AI practitioner across Claude, GPT-4 and open-source models.", "Hands-on practitioner"),
    bullet("Developed WorkFamilyAI, demonstrating AI adoption in non-technical consumer contexts \u2014 proving the adoption methodology works beyond enterprise IT.", "Adoption beyond IT"),
    bullet("Created an adoption-first delivery methodology: every AI initiative includes a change-management playbook, a training plan and a continuous-improvement cycle.", "Adoption-first method")
  ];

  const aws = [
    roleHeader("Amazon Web Services (AWS)  \u2014  Senior Consultant, AI & Data Strategy", "Dec 2019 \u2013 May 2023  \u2022  Sydney"),
    roleDesc("Trusted advisor to government and enterprise CIOs on AI readiness, platform modernisation and transformation strategy."),
    bullet("Led Australia's post-COVID international border reopening technology strategy \u2014 coordinated airlines, airports, the Australian Border Force and health agencies; travel pilots to New Zealand; digital health credentials; ministerial briefings.", "Border reopening"),
    bullet("Delivered 50+ CIO/CDO engagements across government, health, defence and enterprise \u2014 from AI readiness assessments to full transformation roadmaps with measurable adoption milestones.", "50+ CIO engagements"),
    bullet("Coordinated global COVID-19 response data architecture with the WHO \u2014 pandemic modelling, vaccine distribution analytics and cross-border health intelligence sharing.", "WHO data architecture"),
    bullet("Designed data strategies including lakehouse architectures, real-time analytics pipelines and ML deployment frameworks for agencies processing 10M+ events daily.", "Data strategy at scale"),
    bullet("Led the Cross River Rail Digital Twin AI/ML strategy \u2014 Queensland's largest transport infrastructure ($5.4B) \u2014 reducing planning errors 30% and delivering $25M+ in cost avoidance.", "Cross River Rail")
  ];

  const unisys = [
    roleHeader("Unisys Corporation  \u2014  Senior Consultant, Digital Transformation", "2016 \u2013 2020  \u2022  Sydney & APAC"),
    roleDesc("Emerging-technology delivery across government, aviation and critical infrastructure in Australia and APAC."),
    bullet("Delivered airport technology programs at Changi Airport (Singapore), Hong Kong International Airport and Sri Lanka \u2014 security-screening modernisation, passenger processing and innovation labs."),
    bullet("Led Cross River Rail digital-twin architecture \u2014 $5.4B transport infrastructure, multi-vendor coordination, real-time operational dashboards."),
    bullet("Facilitated 100+ workshops with business SMEs to identify AI and automation use cases, redesigning workflows for adoption in non-technical stakeholder environments."),
    bullet("Developed LLM pilots for BlueScope Steel and Officeworks procurement workflows, achieving a 30% reduction in procurement cycle times.")
  ];

  const oracle = [
    roleHeader("Oracle Corporation  \u2014  Enterprise Architect, Government & Aviation", "Jul 2012 \u2013 Jun 2016  \u2022  Canberra & Sydney"),
    roleDesc("Solution architecture for national security, government and aviation infrastructure programs."),
    bullet("Delivered the Visa Transformation Program for the Department of Home Affairs \u2014 modernised 200+ secure systems enabling streamlined global travel processing for millions of users."),
    bullet("Architected Australian airport systems \u2014 baggage-handling integration, customs and border processing, visa systems and passenger user-experience platforms."),
    bullet("Rebuilt a 150-site Malaysian health network after program overruns, delivering 40% under the revised budget while improving connectivity 60%."),
    bullet("Led enterprise architecture for government platforms including identity management and citizen services with direct compliance-framework integration.")
  ];

  const hp = [
    roleHeader("HP Enterprise Services  \u2014  Solutions Architect", "2008 \u2013 2012  \u2022  Canberra"),
    roleDesc("Enterprise architecture and solution design for government and defence clients."),
    bullet("Directed Defence's $250M SC2S secure content-sharing program enabling classified data exchange across agencies."),
    bullet("Contributed to a $180M Malaysian government technology program \u2014 cross-border delivery and multi-vendor coordination."),
    bullet("Transitioned HP SM9 to ServiceNow for DHS and Defence, applying ITIL and SIAM frameworks.")
  ];

  const certs = [
    bullet("Prosci ADKAR (change management).", "Change"),
    bullet("AWS Solutions Architect | Azure AI Engineer | Google Cloud Professional | Oracle Cloud Architect.", "Cloud & AI"),
    bullet("TOGAF 9 | ITIL v4 Foundation | SAFe Agilist.", "Architecture & delivery"),
    bullet("AGSVA NV2 Security Clearance (current).", "Security"),
    bullet("Master of Commerce (Marketing), University of New South Wales. Bachelor of Economics (Law/Industrial Relations), University of Wollongong.", "Education")
  ];

  const doc = new Document({
    creator: "Troy Latter",
    title: "Troy Latter \u2014 CV \u2014 Westpac Innovation Experimentation",
    styles: { default: { document: { run: { font: FONT, size: 22 } } } },
    numbering,
    sections: [{
      properties: { page: { size: { width: 12240, height: 15840 }, margin: { top: 1080, right: 1440, bottom: 1080, left: 1440 } } },
      children: [
        headerName("TROY LATTER"),
        headerTitleC("AI Transformation Lead  |  Founder, Tech 4 Humanity (Holo-Org)  |  NV2 Cleared"),
        headerContactC("Sydney / Brisbane  \u2022  Australian Citizen  \u2022  troy.latter@gmail.com  \u2022  0424 882 136  \u2022  linkedin.com/in/theinnovater"),
        heading("Profile"), profile,
        heading("Why I match this role"), whyTable,
        heading("Westpac-Specific Work \u2014 ConsentX Prototype"), ...consentx,
        heading("Professional Experience"),
        ...t4h, ...aws, ...unisys, ...oracle, ...hp,
        heading("Certifications & Education"), ...certs
      ]
    }]
  });

  const buf = await Packer.toBuffer(doc);
  writeFileSync(resolve(OUT_DIR, "cv.docx"), buf);
  console.log(`  ${buf.length} bytes -> cv.docx`);
}

async function buildCoverLetter() {
  const hName = p({ alignment: AlignmentType.LEFT, spacing: { after: 0 }, children: [new TextRun({ text: "TROY LATTER", font: FONT, bold: true, size: 36, color: DARK, characterSpacing: 40 })] });
  const hTitle = p({ alignment: AlignmentType.LEFT, spacing: { after: 60 }, children: [new TextRun({ text: "AI Transformation Lead  \u2022  Sydney / Brisbane", font: FONT, size: 20, color: ACCENT, bold: true })] });
  const hContact = p({ alignment: AlignmentType.LEFT, spacing: { after: 280 }, border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: ACCENT, space: 6 } }, children: [new TextRun({ text: "troy.latter@gmail.com  \u2022  0424 882 136  \u2022  linkedin.com/in/theinnovater", font: FONT, size: 19, color: GREY })] });

  const date = p({ spacing: { after: 200 }, children: [new TextRun({ text: "19 May 2026", font: FONT, size: 22, color: DARK })] });
  const recipient = [
    p({ spacing: { after: 0 }, children: [new TextRun({ text: "Hiring Manager", font: FONT, bold: true, size: 22, color: DARK })] }),
    p({ spacing: { after: 0 }, children: [new TextRun({ text: "Executive Manager, Innovation Experimentation \u2014 The Future Lab", font: FONT, size: 22, color: DARK })] }),
    p({ spacing: { after: 280 }, children: [new TextRun({ text: "Westpac Banking Corporation", font: FONT, size: 22, color: DARK })] })
  ];
  const subject = p({ spacing: { after: 200 }, children: [new TextRun({ text: "Re: Executive Manager, Innovation Experimentation \u2014 The Future Lab", font: FONT, bold: true, size: 22, color: ACCENT })] });

  const para = (text) => p({ spacing: { before: 120, after: 120, line: 320 }, children: [new TextRun({ text, font: FONT, size: 22, color: DARK })] });
  const blet = (label, rest) => p({
    numbering: { reference: "bullets", level: 0 }, spacing: { before: 60, after: 60, line: 300 },
    children: [new TextRun({ text: label + " ", font: FONT, bold: true, size: 22, color: DARK }),
               new TextRun({ text: rest, font: FONT, size: 22, color: DARK })]
  });

  const opener = para("Dear Hiring Manager,");
  const o2 = para("I am applying for the Executive Manager, Innovation Experimentation role in The Future Lab. For fifteen years my work has been one thing: getting emerging technology \u2014 and for the last several years, AI \u2014 adopted inside complex, regulated organisations where experiments have to be safe, evidenced and led through to real adoption. That is the discipline this role is built around, and it is what I do.");
  const o3 = para("Most recently I founded Tech 4 Humanity and built Holo-Org, a working 5,000-agent AI operating platform that maps agents to real business functions with adoption metrics rather than slideware. Before that, at AWS, I led Australia's post-COVID international border reopening technology strategy and delivered 50+ CIO and CDO engagements across government, health, defence and enterprise \u2014 the practical work of deciding which ideas are worth real investment and which are not. Earlier still, I delivered airport, border and visa systems at Unisys and Oracle, and defence platforms at HP.");
  const o4 = para("The role asks for three things I can evidence directly:");

  const bullets = [
    blet("Experimentation that survives a regulated environment.", "I have run emerging-technology programs inside aviation, border, defence and health \u2014 places where a failed experiment is not an option and governance is not negotiable. I hold a current AGSVA NV2 clearance and TOGAF 9, and have delivered inside defence and health governance frameworks. That posture transfers cleanly to a bank."),
    blet("Judgement on what to test.", "50+ CIO/CDO engagements at AWS and 100+ SME workshops at Unisys were largely spent separating the AI ideas worth a real experiment from the ones that should be quietly retired. Triage is the skill; I have done it at scale."),
    blet("Adoption, not just ideas.", "I am Prosci ADKAR certified and every initiative I run carries a change-management playbook, a training plan and a continuous-improvement loop. The Future Lab's mandate to push innovation skills back into the business units is exactly the motion I design for \u2014 Holo-Org and WorkFamilyAI are working proof."),
  ];

  const demo1 = para("As a concrete proof point, I built a Westpac-specific prototype rather than just describing one. ConsentX (\u201CLayer Trust Over Compliance\u201D) reframes youth banking onboarding as a consent journey rather than a paperwork process. I want to be precise about what it is: a self-built concept prototype \u2014 not a pilot, and it carries no pilot results. Its value is that it makes the idea concrete and testable, framed with a problem hypothesis, a modelled target state and a five-lens stakeholder analysis. It is the kind of cheap, fast artefact The Future Lab is meant to produce. It is live and linked from the application page.");
  const c1 = para("I would welcome a conversation. I can walk through Holo-Org and the ConsentX prototype as live worked examples, share references across my AWS and government engagements, and bring an initial view on what the first few Future Lab experiments could look like.");
  const c2 = para("Thank you for your consideration.");

  const sign = [
    p({ spacing: { before: 280, after: 0 }, children: [new TextRun({ text: "Kind regards,", font: FONT, size: 22, color: DARK })] }),
    p({ spacing: { before: 200, after: 0 }, children: [new TextRun({ text: "Troy Latter", font: FONT, bold: true, size: 24, color: DARK })] }),
    p({ spacing: { after: 0 }, children: [new TextRun({ text: "Founder \u2014 Tech 4 Humanity (Holo-Org)  \u2022  Sydney / Brisbane", font: FONT, italics: true, size: 20, color: GREY })] })
  ];

  const doc = new Document({
    creator: "Troy Latter",
    title: "Troy Latter \u2014 Cover Letter \u2014 Westpac Innovation Experimentation",
    styles: { default: { document: { run: { font: FONT, size: 22 } } } },
    numbering,
    sections: [{
      properties: { page: { size: { width: 12240, height: 15840 }, margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } } },
      children: [hName, hTitle, hContact, date, ...recipient, subject, opener, o2, o3, o4, ...bullets, demo1, c1, c2, ...sign]
    }]
  });

  const buf = await Packer.toBuffer(doc);
  writeFileSync(resolve(OUT_DIR, "cover-letter.docx"), buf);
  console.log(`  ${buf.length} bytes -> cover-letter.docx`);
}

async function buildSkillsMatrix() {
  const LINE_S = "BFBFBF";
  const hName = p({ alignment: AlignmentType.LEFT, spacing: { after: 20 }, children: [new TextRun({ text: "TROY LATTER  \u2014  SKILLS MATRIX", font: FONT, bold: true, size: 32, color: DARK, characterSpacing: 40 })] });
  const hTitle = p({ alignment: AlignmentType.LEFT, spacing: { after: 80 }, children: [new TextRun({ text: "Westpac  \u2022  Executive Manager, Innovation Experimentation  \u2022  The Future Lab", font: FONT, size: 22, color: ACCENT, bold: true })] });
  const hContact = p({ alignment: AlignmentType.LEFT, spacing: { after: 200 }, border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: ACCENT, space: 6 } }, children: [new TextRun({ text: "Sydney / Brisbane  \u2022  troy.latter@gmail.com  \u2022  19 May 2026", font: FONT, size: 19, color: GREY })] });
  const intro = p({ spacing: { before: 60, after: 60 }, children: [new TextRun({ text: "Self-assessed competency map. Every evidence cell is drawn from verified career history (AWS, Unisys, Oracle, HP, Tech 4 Humanity). Ratings are conservative: 5 = production-grade with shippable evidence; 4 = deep recent experience; 3 = comfortable solo; 2 = familiar; 1 = aware.", font: FONT, size: 20, color: DARK })] });

  const W1 = 3200, W2 = 3000, W3 = 6680, W4 = 800;
  const totalW = W1 + W2 + W3 + W4;
  const ratingColor = (r) => r >= 4 ? GREEN : r >= 3 ? ACCENT : AMBER;

  const headerRow = (cells) => new TableRow({
    tableHeader: true,
    children: cells.map((c) => new TableCell({
      width: { size: c.w, type: WidthType.DXA },
      borders: { top: { style: BorderStyle.SINGLE, size: 4, color: LINE_S }, bottom: { style: BorderStyle.SINGLE, size: 4, color: LINE_S }, left: { style: BorderStyle.SINGLE, size: 4, color: LINE_S }, right: { style: BorderStyle.SINGLE, size: 4, color: LINE_S } },
      margins: { top: 100, bottom: 100, left: 120, right: 120 },
      shading: { fill: ACCENT, type: ShadingType.CLEAR },
      children: [p({ children: [new TextRun({ text: c.t, font: FONT, bold: true, size: 19, color: "FFFFFF" })] })]
    }))
  });
  const dataRow = (cells, zebra = false) => new TableRow({
    children: cells.map((c) => new TableCell({
      width: { size: c.w, type: WidthType.DXA },
      borders: { top: { style: BorderStyle.SINGLE, size: 4, color: LINE_S }, bottom: { style: BorderStyle.SINGLE, size: 4, color: LINE_S }, left: { style: BorderStyle.SINGLE, size: 4, color: LINE_S }, right: { style: BorderStyle.SINGLE, size: 4, color: LINE_S } },
      margins: { top: 80, bottom: 80, left: 120, right: 120 },
      shading: c.fill ? { fill: c.fill, type: ShadingType.CLEAR } : (zebra ? { fill: ZEBRA, type: ShadingType.CLEAR } : undefined),
      children: [p({ children: [new TextRun({ text: c.t, font: FONT, size: 19, color: c.color || DARK, bold: c.bold || false })] })]
    }))
  });
  const buildSection = (title, rows) => {
    const out = [];
    out.push(p({ spacing: { before: 220, after: 80 }, children: [new TextRun({ text: title, font: FONT, bold: true, size: 22, color: DARK })] }));
    out.push(new Table({
      width: { size: totalW, type: WidthType.DXA },
      columnWidths: [W1, W2, W3, W4],
      rows: [
        headerRow([{ t: "Capability", w: W1 }, { t: "JD Anchor", w: W2 }, { t: "Evidence (verified)", w: W3 }, { t: "Rating", w: W4 }]),
        ...rows.map(([cap, anchor, evidence, rating], i) => dataRow([
          { t: cap, w: W1, bold: true },
          { t: anchor, w: W2, color: GREY },
          { t: evidence, w: W3 },
          { t: `${rating}/5`, w: W4, color: ratingColor(rating), bold: true, fill: "F5F5F5" }
        ], i % 2 === 1))
      ]
    }));
    return out;
  };

  const section1 = [
    ["AI use-case identification", "Identify and shape AI use cases with business SMEs", "50+ CIO/CDO engagements at AWS; 100+ SME workshops at Unisys; Holo-Org maps 5,000 agents to specific business functions.", 5],
    ["Structured experimentation", "Run structured tests to inform strategic decisions", "Emerging-tech programs delivered inside aviation, border, defence and health \u2014 evidence-led, adoption-tracked, governed.", 5],
    ["Workflow redesign for human-AI collaboration", "Redesign workflows for human-AI collaboration", "Holo-Org core design: every agent sits alongside a human function with a feedback loop and KPI. WorkFamilyAI tested in non-technical contexts.", 5],
    ["Concept-to-production delivery", "Partner with engineering to deliver AI solutions", "Solution-architecture background (Oracle, HP); AWS role bridged business strategy to engineering implementation; Holo-Org is a running system.", 5]
  ];
  const section2 = [
    ["Hands-on AI practitioner", "Deep understanding of AI / emerging tech", "Built LLM orchestration, RAG pipelines, multi-model architecture and agent frameworks; daily practitioner across Claude, GPT-4 and open-source models.", 5],
    ["AI at enterprise scale", "Apply emerging tech at scale for business value", "Holo-Org: 5,000-agent operating platform with adoption metrics across HR, finance, operations and customer experience.", 5],
    ["Data architecture", "Translate capability into tangible value", "Lakehouse, real-time pipelines and ML deployment for agencies processing 10M+ events daily (AWS).", 4],
    ["Banking-context application", "Apply emerging tech in a banking context", "ConsentX prototype built specifically around youth banking onboarding (concept prototype, no pilot data claimed).", 4]
  ];
  const section3 = [
    ["Senior-executive influence", "Influence senior executives, drive alignment", "Ministerial briefings and Australian Border Force / cross-agency alignment during border reopening; C-suite advisory across government and enterprise.", 5],
    ["Cross-functional stakeholder management", "Stakeholder engagement across complex orgs", "Coordinated airlines, airports, ABF and health agencies (AWS); multi-vendor coordination on $5.4B Cross River Rail.", 5],
    ["Working in ambiguity", "Comfort in fast-moving, regulated, ambiguous settings", "15+ years delivering emerging tech into regulated, safety-critical environments \u2014 aviation, border, defence, health.", 5]
  ];
  const section4 = [
    ["Change management", "Lead change management and training", "Prosci ADKAR certified; change programs led at organisational scale, not just training sessions.", 5],
    ["Capability uplift / knowledge transfer", "Upskill specialists; embed capability in the business", "Adoption-first methodology: every initiative ships a change playbook, training plan and improvement loop. WorkFamilyAI proves adoption beyond IT.", 4],
    ["Continuous optimisation", "Drive adoption and continuous optimisation", "Adoption metrics and feedback loops built into Holo-Org; border systems required continuous iteration under live conditions.", 4]
  ];
  const section5 = [
    ["Compliance & governance", "Ensure compliance and governance", "Current AGSVA NV2 clearance; TOGAF 9; delivery inside defence and health governance frameworks.", 5],
    ["Regulated delivery track record", "Permission to experiment within regulated process", "Visa Transformation Program (Home Affairs, 200+ secure systems); Defence $250M SC2S secure content-sharing program.", 5],
    ["Financial-services readiness", "Banking context / financial-services awareness", "Regulated, safety-critical delivery pattern transfers to banking; ConsentX prototype built around bank youth-onboarding economics.", 4]
  ];

  const summaryRows = [
    ["Section", "Avg", "Note"],
    ["1. Experimentation Leadership", "5.0 / 5", "Use-case triage + regulated experimentation, evidenced across AWS / Unisys / Holo-Org."],
    ["2. AI / Emerging Tech", "4.5 / 5", "Hands-on practitioner; Holo-Org is a running 5,000-agent platform."],
    ["3. Stakeholder Engagement", "5.0 / 5", "Ministerial / ABF / C-suite; multi-vendor coordination at $5.4B scale."],
    ["4. Change & Capability Uplift", "4.3 / 5", "Prosci ADKAR; adoption-first delivery methodology."],
    ["5. Regulated / Bank-Ready", "4.7 / 5", "NV2 cleared; defence & health governance delivery; bank-specific prototype."]
  ];
  const summaryTable = new Table({
    width: { size: totalW, type: WidthType.DXA },
    columnWidths: [4400, 1800, 7480],
    rows: summaryRows.map((r, i) => new TableRow({
      tableHeader: i === 0,
      children: r.map((cell, j) => new TableCell({
        width: { size: [4400, 1800, 7480][j], type: WidthType.DXA },
        borders: { top: { style: BorderStyle.SINGLE, size: 4, color: LINE_S }, bottom: { style: BorderStyle.SINGLE, size: 4, color: LINE_S }, left: { style: BorderStyle.SINGLE, size: 4, color: LINE_S }, right: { style: BorderStyle.SINGLE, size: 4, color: LINE_S } },
        margins: { top: 100, bottom: 100, left: 120, right: 120 },
        shading: i === 0 ? { fill: ACCENT, type: ShadingType.CLEAR } : (i % 2 === 0 ? { fill: ZEBRA, type: ShadingType.CLEAR } : undefined),
        children: [p({ children: [new TextRun({ text: cell, font: FONT, size: 20, bold: i === 0 || j === 0, color: i === 0 ? "FFFFFF" : DARK })] })]
      }))
    }))
  });

  const doc = new Document({
    creator: "Troy Latter",
    title: "Troy Latter \u2014 Skills Matrix \u2014 Westpac Innovation Experimentation",
    styles: { default: { document: { run: { font: FONT, size: 20 } } } },
    numbering,
    sections: [{
      properties: { page: { size: { width: 12240, height: 15840, orientation: PageOrientation.LANDSCAPE }, margin: { top: 1080, right: 1080, bottom: 1080, left: 1080 } } },
      children: [
        hName, hTitle, hContact, intro,
        heading("Summary"), summaryTable,
        heading("Full Skills Matrix"),
        ...buildSection("1.  Experimentation Leadership", section1),
        ...buildSection("2.  AI / Emerging Tech", section2),
        ...buildSection("3.  Stakeholder Engagement & Influence", section3),
        ...buildSection("4.  Change Management & Capability Uplift", section4),
        ...buildSection("5.  Regulated / Bank-Ready", section5)
      ]
    }]
  });

  const buf = await Packer.toBuffer(doc);
  writeFileSync(resolve(OUT_DIR, "skills-matrix.docx"), buf);
  console.log(`  ${buf.length} bytes -> skills-matrix.docx`);
}

async function main() {
  console.log("Building Westpac application package (verified-CV source) -> public/westpac/");
  await buildCv();
  await buildCoverLetter();
  await buildSkillsMatrix();
  console.log("Westpac application package built.");
}

main().catch((err) => { console.error("westpac build failed:", err); process.exit(0); });
