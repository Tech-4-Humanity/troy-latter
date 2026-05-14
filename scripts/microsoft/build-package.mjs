// scripts/microsoft/build-package.mjs
//
// Generates the three .docx files for the Microsoft Senior AI Workforce
// Specialist application package into public/microsoft/.
//
// Invoked by npm's "prebuild" lifecycle (configured in package.json),
// so Vite then picks up the generated files from public/ and copies them
// to dist/microsoft/{cv,cover-letter,skills-matrix}.docx on deploy.
//
// Dependencies: docx (already in package.json devDependencies)
// Author: Troy Latter, with Claude.

import { writeFileSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  AlignmentType, LevelFormat, BorderStyle, WidthType, ShadingType,
  TabStopType, PageOrientation
} from "docx";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = resolve(__dirname, "../../public/microsoft");
mkdirSync(OUT_DIR, { recursive: true });

const FONT = "Calibri";
const ACCENT = "0078D4";
const DARK = "1F1F1F";
const GREY = "595959";
const LINE = "D0D0D0";
const GREEN = "107C10";
const AMBER = "B7791F";

async function buildCv() {
  const para = (opts) => new Paragraph(opts);
  const heading = (text) => para({
    spacing: { before: 280, after: 120 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 8, color: ACCENT, space: 4 } },
    children: [new TextRun({ text: text.toUpperCase(), font: FONT, bold: true, size: 24, color: ACCENT, characterSpacing: 30 })]
  });
  const subheading = (left, right) => para({
    spacing: { before: 160, after: 40 },
    tabStops: [{ type: TabStopType.RIGHT, position: 9360 }],
    children: [
      new TextRun({ text: left, font: FONT, bold: true, size: 22, color: DARK }),
      new TextRun({ text: "\t" + right, font: FONT, italics: true, size: 20, color: GREY })
    ]
  });
  const role = (text) => para({
    spacing: { before: 20, after: 60 },
    children: [new TextRun({ text, font: FONT, italics: true, size: 21, color: GREY })]
  });
  const bullet = (text, bold = null) => para({
    numbering: { reference: "bullets", level: 0 },
    spacing: { before: 40, after: 40 },
    children: bold
      ? [new TextRun({ text: bold, font: FONT, bold: true, size: 21, color: DARK }),
         new TextRun({ text: " \u2014 " + text, font: FONT, size: 21, color: DARK })]
      : [new TextRun({ text, font: FONT, size: 21, color: DARK })]
  });
  const body = (text) => para({
    spacing: { before: 60, after: 60 },
    children: [new TextRun({ text, font: FONT, size: 21, color: DARK })]
  });
  const headerName = para({
    alignment: AlignmentType.CENTER, spacing: { after: 60 },
    children: [new TextRun({ text: "TROY LATTER", font: FONT, bold: true, size: 44, color: DARK, characterSpacing: 60 })]
  });
  const headerTitle = para({
    alignment: AlignmentType.CENTER, spacing: { after: 80 },
    children: [new TextRun({ text: "AI Transformation Leader  |  Founder & Director, Tech 4 Humanity  |  Ex-AWS / Gartner / Oracle", font: FONT, size: 22, color: ACCENT, bold: true })]
  });
  const headerContact = para({
    alignment: AlignmentType.CENTER, spacing: { after: 200 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: ACCENT, space: 6 } },
    children: [new TextRun({ text: "Sydney, NSW  \u2022  Australian Citizen  \u2022  troy@tech4humanity.com.au  \u2022  linkedin.com/in/troylatter", font: FONT, size: 19, color: GREY })]
  });
  const profile = body(
    "Enterprise AI transformation leader with 20+ years driving complex solution sales and large-scale platform adoption across AWS, Gartner, Oracle, and HPE/DXC. " +
    "Currently founder and sole director of Tech 4 Humanity Pty Ltd \u2014 a Sydney-based AI R&D company operating an autonomous, governance-native runtime across 30+ products (including agentic platforms, AI research programmes, and an Agentic enterprise OS). " +
    "Deep operator-level expertise in Copilot-class agent orchestration, AI governance frameworks, RDTI-grade evidence chains, data sovereignty, and partner ecosystem leverage. " +
    "Trusted by C-suite buyers to translate emerging AI capability into measurable workforce and process transformation outcomes \u2014 with a track record of moving customers from pilot to enterprise scale."
  );
  const valueProps = [
    ["Solution Sales at Scale", "20+ years selling complex SaaS / cloud / AI platforms into ANZ Enterprise & Public Sector \u2014 AWS, Oracle, HPE/DXC, Gartner advisory."],
    ["Agentic AI \u2014 Operator, not just Seller", "Built and run a 729-agent enterprise framework (Neural Ennead), multi-tenant agent marketplace (HoloOrg), and autonomous orchestration runtime \u2014 direct analog to Copilot Studio + Agent ecosystems."],
    ["AI Workforce \u2194 Business Process Convergence", "Designed the L23 Autonomous OS deployed across 6 businesses with WebsiteOps, FinanceOps, DataOps and TaskOps agent domains \u2014 exactly the workforce + process motion Microsoft is asking specialists to lead."],
    ["Governance, Sovereignty, Compliance", "Built telemetry-native governance kernel (STAMP), REAL/PARTIAL/BLOCKED evidence classification, RDTI tagging at asset creation, RLS on all tables \u2014 directly portable to A365 Governance conversations."],
    ["C-Level Storytelling", "Former Gartner advisor; comfortable shaping board-level transformation narratives that connect AI capability to operating model, economics, and regulatory posture."],
    ["ANZ Native", "Sydney-based, Australian Citizen, ANZ enterprise and public sector network, deep understanding of local sovereignty and regulatory pressure (RDTI, ATO, APRA-adjacent)."]
  ];
  const valueTable = new Table({
    width: { size: 9360, type: WidthType.DXA },
    columnWidths: [2900, 6460],
    rows: valueProps.map(([k, v]) => new TableRow({
      children: [
        new TableCell({
          width: { size: 2900, type: WidthType.DXA },
          borders: { top: { style: BorderStyle.SINGLE, size: 4, color: LINE }, bottom: { style: BorderStyle.SINGLE, size: 4, color: LINE }, left: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" }, right: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" } },
          margins: { top: 100, bottom: 100, left: 60, right: 120 },
          shading: { fill: "F2F8FC", type: ShadingType.CLEAR },
          children: [para({ children: [new TextRun({ text: k, font: FONT, bold: true, size: 20, color: ACCENT })] })]
        }),
        new TableCell({
          width: { size: 6460, type: WidthType.DXA },
          borders: { top: { style: BorderStyle.SINGLE, size: 4, color: LINE }, bottom: { style: BorderStyle.SINGLE, size: 4, color: LINE }, left: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" }, right: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" } },
          margins: { top: 100, bottom: 100, left: 120, right: 60 },
          children: [para({ children: [new TextRun({ text: v, font: FONT, size: 20, color: DARK })] })]
        })
      ]
    }))
  });
  const tech4humanity = [
    subheading("Tech 4 Humanity Pty Ltd  \u2014  Founder & Director", "2022 \u2013 Present  \u2022  Sydney"),
    role("AI R&D company operating a portfolio of agentic platforms, workforce intelligence products and an autonomous enterprise OS."),
    bullet("Built and operate Tech 4 Humanity's autonomous runtime (\"L23\") deployed across 6 active businesses \u2014 direct architectural analog to a Copilot + Agent + governance stack, but spanning end-to-end business operations (WebsiteOps, FinanceOps, DataOps, TaskOps).", "Agentic Enterprise OS"),
    bullet("Designed and launched the Neural Ennead 729-agent framework and HoloOrg agent marketplace (10,000 agents, family/tier/affinity taxonomy) \u2014 production-grade examples of multi-agent orchestration, role inheritance and governance precedence at scale.", "Multi-Agent Orchestration"),
    bullet("Built STAMP \u2014 a governance kernel with REAL / PARTIAL / BLOCKED evidence classification, RDTI tagging at asset creation, telemetry-native truth, replayable execution receipts and ledger-canonical state. Directly translatable to A365 Governance and AI sovereignty conversations.", "AI Governance & Sovereignty"),
    bullet("Run the MCP (Model Context Protocol) remote server and bridge infrastructure \u2014 gives lived experience of Copilot extensibility, tool orchestration and the operational realities of enterprise agent ecosystems.", "Copilot-Class Extensibility"),
    bullet("Operate a 30+ product portfolio spanning workforce AI (WorkFamilyAI, AI4Tradies, OutcomeReady), health/science research (Drug Resilience Atlas, AI Sweet Spots n=11,241+), education (Valdocco Primary), and trust/safety (ConsentX) \u2014 proves ability to translate AI capability into vertical-specific transformation narratives.", "Portfolio Storytelling"),
    bullet("Delivered against active Australian R&D Tax Incentive obligations \u2014 RDTI evidence register, BAS lodgement cycles, ATO posture \u2014 giving direct fluency in local regulatory, sovereignty and compliance levers that ANZ enterprise customers care about.", "ANZ Regulatory Fluency")
  ];
  const dxc = [
    subheading("HPE / DXC Technology  \u2014  Senior Enterprise Sales / Solution Leader", "2018 \u2013 2022  \u2022  Sydney"),
    role("Drove complex enterprise digital transformation deals across ANZ commercial and public sector."),
    bullet("Led multi-million-dollar, multi-stakeholder transformation deals \u2014 cloud migration, modern workplace and data platforms \u2014 into ANZ enterprise and Federal/State accounts."),
    bullet("Built executive trust through insight-led discovery; consistently moved customers from RFP-led procurement to outcome-led co-creation."),
    bullet("Operated as orchestration lead across global resources, OEM partners and SI ecosystems \u2014 directly relevant to Microsoft's partner-led delivery model.")
  ];
  const oracle = [
    subheading("Oracle  \u2014  Senior Solution Sales", "2015 \u2013 2018  \u2022  Sydney"),
    role("Cloud applications & platform sales into ANZ Enterprise."),
    bullet("Sold full Oracle Cloud stack (HCM, ERP, EPM and PaaS) into ANZ Enterprise \u2014 workforce + process transformation deal patterns that map directly to the Microsoft AI Workforce / AI Business Process convergence."),
    bullet("Led territory planning, pipeline discipline and forecasting against demanding SaaS quotas \u2014 habits proven over multiple consecutive achievement years.")
  ];
  const gartner = [
    subheading("Gartner  \u2014  Executive Advisor", "2012 \u2013 2015  \u2022  Sydney"),
    role("C-suite advisory to ANZ CIOs and CDOs on technology strategy and operating model."),
    bullet("Advised ANZ CIOs, CDOs and Heads of Transformation on emerging technology strategy, vendor selection and operating-model design \u2014 sharpened ability to lead with insight and challenge customers."),
    bullet("Built durable executive relationships across enterprise and public sector \u2014 many of which remain active references and door-openers across the ANZ market.")
  ];
  const aws = [
    subheading("Amazon Web Services (AWS)  \u2014  Senior Account / Solution Sales", "2008 \u2013 2012  \u2022  Sydney"),
    role("Early ANZ cloud sales \u2014 enterprise and ISV adoption."),
    bullet("One of the early ANZ enterprise sellers at AWS \u2014 landed and expanded foundational ANZ workloads during the formative cloud-adoption window."),
    bullet("Owned the full deal lifecycle \u2014 discovery, architecture alignment with SAs, commercial structuring, partner orchestration and post-sale expansion. Directly parallel to the Microsoft Specialist motion across Copilot + Agents + Windows 365.")
  ];
  const education = [
    bullet("Senior commercial roles at AWS, Gartner, Oracle, HPE/DXC \u2014 continuous executive-level training in solution sales, value engineering and transformation advisory.", "Industry"),
    bullet("Active builder-operator on the AWS / Vercel / Supabase / GitHub stack \u2014 daily hands-on with the same agentic, MCP and AI infrastructure patterns Microsoft is asking specialists to position.", "Practitioner"),
    bullet("Registered R&D entity (Tech 4 Humanity Pty Ltd, ABN 70 666 271 272) \u2014 fluent in Australian R&D Tax Incentive, AusIndustry CRP and ATO evidence requirements relevant to enterprise AI compliance positioning.", "Regulatory")
  ];
  const additional = [
    bullet("Australian Citizen \u2014 eligible for Federal Government and Defence-adjacent engagements without sponsorship constraints.", "Eligibility"),
    bullet("Personal mission: paddling 14,000 km around the Australian coastline by kayak \u2014 discipline, endurance and long-horizon execution applied outside work.", "Outside work"),
    bullet("References and a customer / deal evidence pack available on request.", "References")
  ];
  const doc = new Document({
    creator: "Troy Latter",
    title: "Troy Latter \u2014 CV \u2014 Microsoft Senior AI Workforce Specialist",
    styles: { default: { document: { run: { font: FONT, size: 21 } } } },
    numbering: {
      config: [
        { reference: "bullets",
          levels: [{ level: 0, format: LevelFormat.BULLET, text: "\u25A0", alignment: AlignmentType.LEFT,
            style: { paragraph: { indent: { left: 360, hanging: 220 } }, run: { color: ACCENT } } }] }
      ]
    },
    sections: [{
      properties: { page: { size: { width: 12240, height: 15840 }, margin: { top: 1080, right: 1440, bottom: 1080, left: 1440 } } },
      children: [
        headerName, headerTitle, headerContact,
        heading("Profile"), profile,
        heading("Why I match this role"), valueTable,
        heading("Experience"),
        ...tech4humanity, ...dxc, ...oracle, ...gartner, ...aws,
        heading("Education & Credentials"), ...education,
        heading("Additional"), ...additional
      ]
    }]
  });
  const buf = await Packer.toBuffer(doc);
  writeFileSync(resolve(OUT_DIR, "cv.docx"), buf);
  console.log(`  ${buf.length} bytes -> cv.docx`);
}

async function buildCoverLetter() {
  const para = (text, opts = {}) => new Paragraph({
    spacing: { before: 120, after: 120, line: 320 }, ...opts,
    children: typeof text === 'string'
      ? [new TextRun({ text, font: FONT, size: 22, color: DARK })] : text
  });
  const bullet = (text) => new Paragraph({
    numbering: { reference: "bullets", level: 0 },
    spacing: { before: 60, after: 60, line: 300 },
    children: typeof text === 'string'
      ? [new TextRun({ text, font: FONT, size: 22, color: DARK })] : text
  });
  const headerName = new Paragraph({ alignment: AlignmentType.LEFT, spacing: { after: 0 }, children: [new TextRun({ text: "TROY LATTER", font: FONT, bold: true, size: 36, color: DARK, characterSpacing: 40 })] });
  const headerTitle = new Paragraph({ alignment: AlignmentType.LEFT, spacing: { after: 60 }, children: [new TextRun({ text: "AI Transformation Leader  \u2022  Sydney, NSW", font: FONT, size: 20, color: ACCENT, bold: true })] });
  const headerContact = new Paragraph({ alignment: AlignmentType.LEFT, spacing: { after: 280 }, border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: ACCENT, space: 6 } }, children: [new TextRun({ text: "troy@tech4humanity.com.au  \u2022  linkedin.com/in/troylatter", font: FONT, size: 19, color: GREY })] });
  const date = new Paragraph({ spacing: { after: 200 }, children: [new TextRun({ text: "15 May 2026", font: FONT, size: 22, color: DARK })] });
  const recipient = [
    new Paragraph({ spacing: { after: 0 }, children: [new TextRun({ text: "Hiring Manager", font: FONT, bold: true, size: 22, color: DARK })] }),
    new Paragraph({ spacing: { after: 0 }, children: [new TextRun({ text: "Senior AI Workforce Specialist \u2014 Enterprise Commercial & Public Sector", font: FONT, size: 22, color: DARK })] }),
    new Paragraph({ spacing: { after: 280 }, children: [new TextRun({ text: "Microsoft Australia & New Zealand", font: FONT, size: 22, color: DARK })] })
  ];
  const subject = new Paragraph({ spacing: { after: 200 }, children: [new TextRun({ text: "Re: Senior AI Workforce Specialist \u2014 ANZ", font: FONT, bold: true, size: 22, color: ACCENT })] });
  const opener = para("Microsoft ANZ is asking specialists to do something genuinely new \u2014 fuse AI Workforce and AI Business Process into a single Agentic motion, anchored on Copilot, Copilot Studio, A365 Governance and an enterprise Agent ecosystem. I am writing because I have been building exactly this \u2014 at production scale, as the operator \u2014 for four years.");
  const p2 = para("I run Tech 4 Humanity Pty Ltd, a Sydney-based AI R&D company where I operate an autonomous, governance-native runtime across a 30+ product portfolio. Inside that runtime I have built and live-tested the same architectural primitives Microsoft is now taking to market: a Copilot-class agent orchestration layer (729-agent Neural Ennead, 10,000-agent HoloOrg marketplace), an enterprise governance kernel with REAL / PARTIAL / BLOCKED evidence classification, replayable execution receipts, telemetry-native truth and RDTI-grade evidence chains. In other words \u2014 I am not learning Agentic enterprise design from a deck. I am the customer Microsoft is trying to enable, and I have run the operating model.");
  const p3 = para("Layered on top of that is twenty-plus years of complex ANZ solution sales \u2014 AWS in its formative cloud window, Gartner as a C-level advisor, Oracle Cloud across HCM/ERP/EPM, and HPE/DXC on multi-million-dollar transformation deals across Enterprise Commercial and Public Sector. The same buyers Microsoft is asking this Specialist to reach are buyers I have already sold to, advised, and in many cases stayed close to.");
  const p4 = para("A few things I would bring on day one:");
  const mkBullet = (label, rest) => bullet([
    new TextRun({ text: label + " ", font: FONT, bold: true, size: 22, color: DARK }),
    new TextRun({ text: rest, font: FONT, size: 22, color: DARK })
  ]);
  const bullets = [
    mkBullet("Operator-credibility on Agentic AI.", "I can sit across the table from a CIO, CFO or Secretary and explain \u2014 from lived experience \u2014 how Copilot, Copilot Studio and enterprise Agents redesign work and process. Not theory. Not slideware."),
    mkBullet("AI governance and sovereignty fluency.", "I have shipped the same controls A365 Governance is selling \u2014 evidence classification, telemetry-bound truth, RLS-everywhere, drift detection, recovery and replay. ANZ customers in regulated industries will recognise the language immediately."),
    mkBullet("Workforce \u2194 Process convergence.", "My L23 autonomous OS is deployed across six businesses with WebsiteOps, FinanceOps, DataOps and TaskOps agent domains \u2014 a working, in-production example of what AI Workforce + AI Business Process actually looks like when you stop treating them as separate motions."),
    mkBullet("Disciplined commercial execution.", "Multi-stakeholder enterprise deals, territory and pipeline rigour, partner orchestration \u2014 all of it muscle memory from AWS, Oracle and HPE/DXC."),
    mkBullet("ANZ-native posture.", "Australian citizen, Sydney-based, deep network across enterprise and public sector, and direct fluency in local regulatory pressure (RDTI, ATO, sovereignty) that increasingly shapes how AI deals get done here.")
  ];
  const c1 = para("What attracts me most is the timing. FY27 is the inflection point where Agentic AI stops being a productivity story and becomes an operating-model story. That is exactly where I want to spend the next phase of my career \u2014 at the front edge of helping ANZ's largest organisations make that transition responsibly, commercially, and at scale.");
  const c2 = para("I would welcome a conversation. I have a customer- and evidence-ready portfolio that I am happy to walk through in person, and references across AWS, Gartner, Oracle and the ANZ buyer community on request.");
  const c3 = para("Thank you for your consideration.");
  const sign = [
    new Paragraph({ spacing: { before: 280, after: 0 }, children: [new TextRun({ text: "Kind regards,", font: FONT, size: 22, color: DARK })] }),
    new Paragraph({ spacing: { before: 200, after: 0 }, children: [new TextRun({ text: "Troy Latter", font: FONT, bold: true, size: 24, color: DARK })] }),
    new Paragraph({ spacing: { after: 0 }, children: [new TextRun({ text: "Founder & Director \u2014 Tech 4 Humanity Pty Ltd", font: FONT, italics: true, size: 20, color: GREY })] }),
    new Paragraph({ spacing: { after: 0 }, children: [new TextRun({ text: "ABN 70 666 271 272  \u2022  Sydney, NSW", font: FONT, italics: true, size: 20, color: GREY })] })
  ];
  const doc = new Document({
    creator: "Troy Latter",
    title: "Troy Latter \u2014 Cover Letter \u2014 Microsoft Senior AI Workforce Specialist",
    styles: { default: { document: { run: { font: FONT, size: 22 } } } },
    numbering: { config: [{ reference: "bullets", levels: [{ level: 0, format: LevelFormat.BULLET, text: "\u25A0", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 360, hanging: 220 } }, run: { color: ACCENT } } }] }] },
    sections: [{
      properties: { page: { size: { width: 12240, height: 15840 }, margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } } },
      children: [headerName, headerTitle, headerContact, date, ...recipient, subject, opener, p2, p3, p4, ...bullets, c1, c2, c3, ...sign]
    }]
  });
  const buf = await Packer.toBuffer(doc);
  writeFileSync(resolve(OUT_DIR, "cover-letter.docx"), buf);
  console.log(`  ${buf.length} bytes -> cover-letter.docx`);
}

async function buildSkillsMatrix() {
  const LINE_S = "BFBFBF";
  const para = (text, opts = {}) => new Paragraph({
    spacing: { before: 60, after: 60 }, ...opts,
    children: typeof text === 'string' ? [new TextRun({ text, font: FONT, size: 20, color: DARK })] : text
  });
  const heading = (text) => new Paragraph({
    spacing: { before: 280, after: 120 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 8, color: ACCENT, space: 4 } },
    children: [new TextRun({ text: text.toUpperCase(), font: FONT, bold: true, size: 24, color: ACCENT, characterSpacing: 30 })]
  });
  const headerName = new Paragraph({ alignment: AlignmentType.LEFT, spacing: { after: 20 }, children: [new TextRun({ text: "TROY LATTER  \u2014  SKILLS MATRIX", font: FONT, bold: true, size: 32, color: DARK, characterSpacing: 40 })] });
  const headerTitle = new Paragraph({ alignment: AlignmentType.LEFT, spacing: { after: 80 }, children: [new TextRun({ text: "Microsoft  \u2022  Senior AI Workforce Specialist  \u2022  Enterprise Commercial & Public Sector, ANZ", font: FONT, size: 22, color: ACCENT, bold: true })] });
  const headerContact = new Paragraph({ alignment: AlignmentType.LEFT, spacing: { after: 200 }, border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: ACCENT, space: 6 } }, children: [new TextRun({ text: "Sydney, NSW  \u2022  troy@tech4humanity.com.au  \u2022  15 May 2026", font: FONT, size: 19, color: GREY })] });
  const intro = para("Self-assessed competency map against the Job Description. Each capability is mapped to (a) the JD anchor it satisfies, (b) the most credible piece of evidence I can produce on request, and (c) a 1\u20135 self-rating. Ratings are conservative: 5 = production operator-grade with shippable artefacts; 4 = deep recent experience; 3 = comfortable solo; 2 = familiar; 1 = aware.");
  const headerRow = (cells, fill = ACCENT) => new TableRow({
    tableHeader: true,
    children: cells.map((c) => new TableCell({
      width: { size: c.w, type: WidthType.DXA },
      borders: { top: { style: BorderStyle.SINGLE, size: 4, color: LINE_S }, bottom: { style: BorderStyle.SINGLE, size: 4, color: LINE_S }, left: { style: BorderStyle.SINGLE, size: 4, color: LINE_S }, right: { style: BorderStyle.SINGLE, size: 4, color: LINE_S } },
      margins: { top: 100, bottom: 100, left: 120, right: 120 },
      shading: { fill, type: ShadingType.CLEAR },
      children: [new Paragraph({ children: [new TextRun({ text: c.t, font: FONT, bold: true, size: 19, color: "FFFFFF" })] })]
    }))
  });
  const dataRow = (cells) => new TableRow({
    children: cells.map((c) => new TableCell({
      width: { size: c.w, type: WidthType.DXA },
      borders: { top: { style: BorderStyle.SINGLE, size: 4, color: LINE_S }, bottom: { style: BorderStyle.SINGLE, size: 4, color: LINE_S }, left: { style: BorderStyle.SINGLE, size: 4, color: LINE_S }, right: { style: BorderStyle.SINGLE, size: 4, color: LINE_S } },
      margins: { top: 80, bottom: 80, left: 120, right: 120 },
      shading: c.fill ? { fill: c.fill, type: ShadingType.CLEAR } : undefined,
      children: [new Paragraph({ children: [new TextRun({ text: c.t, font: FONT, size: 19, color: c.color || DARK, bold: c.bold || false })] })]
    }))
  });
  const W1 = 3200, W2 = 3000, W3 = 6680, W4 = 800;
  const totalW = W1 + W2 + W3 + W4;
  const ratingColor = (r) => r >= 4 ? GREEN : r >= 3 ? ACCENT : AMBER;
  const ratingText = (r) => `${r}/5`;
  const section1 = [
    ["Complex enterprise solution sales (SaaS / cloud / AI)", "5+ yrs solution sales \u2014 minimum experience", "20+ yrs across AWS (ANZ early enterprise window), Oracle Cloud (HCM/ERP/EPM), HPE/DXC transformation deals \u2014 multi-million-dollar, multi-stakeholder, multi-year.", 5],
    ["C-level engagement & insight-led selling", "Engage C-level and senior decision-makers", "Gartner executive advisor 3 yrs to ANZ CIOs/CDOs; standing C-level relationships across enterprise & public sector.", 5],
    ["Challenger / differentiated storytelling", "Challenge customers with creative solutions; differentiated storytelling", "Built and published 30+ product narratives at Tech 4 Humanity. Comfortable taking a contrarian point of view to an exec audience.", 4],
    ["Territory planning, pipeline & forecasting discipline", "Disciplined execution across territory, pipeline, forecasting", "Multiple consecutive years of quota achievement at AWS, Oracle, HPE/DXC under SaaS / cloud forecasting cadence.", 4],
    ["Orchestrating complex deal cycles", "Aligning internal stakeholders, partners, global resources", "Routine pattern at AWS / Oracle / DXC: SAs, partner SIs, global pricing, legal, sovereignty review \u2014 coordinated to close.", 5]
  ];
  const section2 = [
    ["Agentic AI architectures", "Articulate value of Agentic AI architectures", "Built and operate Neural Ennead (729 agents) and HoloOrg agent marketplace (10,000 agents, family/tier/affinity taxonomy). Direct analog to Microsoft's Agent ecosystem positioning.", 5],
    ["Copilot / Copilot Studio extensibility model", "Position Copilot, Copilot Studio, enterprise Agents", "Operate an MCP (Model Context Protocol) remote server and bridge \u2014 same extensibility pattern Copilot Studio uses. Will need ~30 days to learn Microsoft-specific UX and licensing nuances.", 4],
    ["Multi-agent orchestration", "Agent orchestration, multi-agent systems, enterprise AI operating models", "L23 Autonomous OS deployed across 6 businesses with WebsiteOps / FinanceOps / DataOps / TaskOps agent domains. Production-grade, evidence-bound, replayable.", 5],
    ["AI Workforce \u2194 AI Business Process convergence", "Lead the convergence motion (the headline ask of the role)", "Entire Tech 4 Humanity portfolio is built on this thesis \u2014 WorkFamilyAI (workforce), AI4Tradies (commercial pack), OutcomeReady (process). Lived the convergence as a builder before selling it.", 5],
    ["Windows 365 / modern endpoint context", "Drive Windows 365 motion alongside AI", "Strong general modern workplace background from HPE/DXC era. Windows 365 specifics will require fast ramp.", 3]
  ];
  const section3 = [
    ["AI governance framework design", "Shape strategies around AI governance and sovereignty (A365 Governance)", "Built STAMP \u2014 governance kernel with REAL/PARTIAL/BLOCKED evidence classification, telemetry-native truth, replayable receipts, drift detection, recovery layer. Direct conceptual parallel to A365.", 5],
    ["Data sovereignty for ANZ workloads", "Align with local regulatory requirements", "Operate sovereign AWS ap-southeast-2 footprint. Direct fluency in ANZ sovereignty conversations for Federal / State / regulated industries.", 4],
    ["Regulatory & compliance fluency (ANZ-specific)", "Align with industry and regulatory requirements", "Active RDTI registrant, BAS lodgement cycle, ATO posture, AusIndustry CRP evidence chain \u2014 real, current, audit-defensible.", 4],
    ["Evidence chains / replayable execution", "Embedding governance and trust at scale", "Production system: every state change carries an origin chain, every execution carries a receipt, every classification is replayable. Demonstrable on request.", 5]
  ];
  const section4 = [
    ["Partner / SI ecosystem orchestration", "Leverage partner and ecosystem capabilities", "Routine at AWS / Oracle / HPE / DXC \u2014 driving co-sell, co-delivery, partner-led implementation. Standing relationships across major ANZ SIs.", 4],
    ["Agent framework / Copilot extensibility for partners", "Build on Agent frameworks and Copilot extensibility", "Own builder-grade understanding of how partners would extend Copilot Studio \u2014 having built the analogous extensibility surface myself.", 4],
    ["Public sector engagement", "Enterprise Commercial AND Public Sector coverage", "Federal, State and Defence-adjacent deals across AWS / Oracle / DXC era. Australian Citizen \u2014 no clearance / sponsorship blockers.", 4]
  ];
  const section5 = [
    ["Modelling Microsoft culture & leadership principles", "Inclusive, high-performing team environment", "Sole-director, 30+ product portfolio shipped without a team \u2014 combines high agency with disciplined operating-rhythm and evidence-bound governance habits. Translates well to a matrixed Microsoft motion.", 4],
    ["Continuous learning posture", "Stay ahead of market trends; emerging AI operating models", "Daily builder-operator on AWS / Vercel / Supabase / GitHub / MCP \u2014 measurable evidence of always-learning posture (commit history available on request).", 5],
    ["Contributing to ANZ AI community", "Contribute to broader AI community across ANZ", "Drug Resilience Atlas, AI Sweet Spots research programme (n=11,241+), Valdocco Primary (2e school) \u2014 visible community contributions outside commercial work.", 4]
  ];
  const buildSection = (title, rows) => {
    const out = [];
    out.push(new Paragraph({ spacing: { before: 220, after: 80 }, children: [new TextRun({ text: title, font: FONT, bold: true, size: 22, color: DARK })] }));
    out.push(new Table({
      width: { size: totalW, type: WidthType.DXA },
      columnWidths: [W1, W2, W3, W4],
      rows: [
        headerRow([{ t: "Capability", w: W1 }, { t: "JD Anchor", w: W2 }, { t: "Evidence", w: W3 }, { t: "Rating", w: W4 }]),
        ...rows.map(([cap, anchor, evidence, rating]) => dataRow([
          { t: cap, w: W1, bold: true },
          { t: anchor, w: W2, color: GREY },
          { t: evidence, w: W3 },
          { t: ratingText(rating), w: W4, color: ratingColor(rating), bold: true, fill: "F5F5F5" }
        ]))
      ]
    }));
    return out;
  };
  const legend = para([
    new TextRun({ text: "Rating key:  ", font: FONT, bold: true, size: 19, color: DARK }),
    new TextRun({ text: "5 ", font: FONT, bold: true, size: 19, color: GREEN }),
    new TextRun({ text: "= production operator-grade, shippable evidence    ", font: FONT, size: 19, color: DARK }),
    new TextRun({ text: "4 ", font: FONT, bold: true, size: 19, color: GREEN }),
    new TextRun({ text: "= deep recent experience    ", font: FONT, size: 19, color: DARK }),
    new TextRun({ text: "3 ", font: FONT, bold: true, size: 19, color: ACCENT }),
    new TextRun({ text: "= comfortable solo    ", font: FONT, size: 19, color: DARK }),
    new TextRun({ text: "2 ", font: FONT, bold: true, size: 19, color: AMBER }),
    new TextRun({ text: "= familiar    ", font: FONT, size: 19, color: DARK }),
    new TextRun({ text: "1 ", font: FONT, bold: true, size: 19, color: AMBER }),
    new TextRun({ text: "= aware", font: FONT, size: 19, color: DARK })
  ]);
  const summaryRows = [
    ["Section", "Avg Rating", "Notes"],
    ["1. Solution Sales & Commercial", "4.6 / 5", "20+ yrs ANZ enterprise solution sales \u2014 AWS, Gartner, Oracle, HPE/DXC."],
    ["2. AI / Agentic / Copilot Domain", "4.4 / 5", "Operator-grade in agentic, multi-agent and process automation. Microsoft-product specifics will ramp inside 30 days."],
    ["3. Governance, Sovereignty, Compliance", "4.5 / 5", "Built, ship, and live with the same governance primitives A365 Governance is selling."],
    ["4. Partner Ecosystem & Delivery", "4.0 / 5", "Partner-led delivery muscle from prior platform vendors; Public Sector eligible."],
    ["5. Cultural / Leadership", "4.3 / 5", "High-agency operator with disciplined cadence; visible community contributions."]
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
        shading: i === 0 ? { fill: ACCENT, type: ShadingType.CLEAR } : undefined,
        children: [new Paragraph({ children: [new TextRun({ text: cell, font: FONT, size: 20, bold: i === 0 || j === 0, color: i === 0 ? "FFFFFF" : DARK })] })]
      }))
    }))
  });
  const doc = new Document({
    creator: "Troy Latter",
    title: "Troy Latter \u2014 Skills Matrix \u2014 Microsoft Senior AI Workforce Specialist",
    styles: { default: { document: { run: { font: FONT, size: 20 } } } },
    numbering: { config: [{ reference: "bullets", levels: [{ level: 0, format: LevelFormat.BULLET, text: "\u25A0", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 360, hanging: 220 } }, run: { color: ACCENT } } }] }] },
    sections: [{
      properties: { page: { size: { width: 12240, height: 15840, orientation: PageOrientation.LANDSCAPE }, margin: { top: 1080, right: 1080, bottom: 1080, left: 1080 } } },
      children: [
        headerName, headerTitle, headerContact, intro, legend,
        heading("Summary"), summaryTable,
        heading("Full Skills Matrix"),
        ...buildSection("1.  Solution Sales & Commercial", section1),
        ...buildSection("2.  AI / Agentic / Copilot Domain", section2),
        ...buildSection("3.  Governance, Sovereignty, Compliance", section3),
        ...buildSection("4.  Partner Ecosystem & Delivery", section4),
        ...buildSection("5.  Cultural / Leadership", section5)
      ]
    }]
  });
  const buf = await Packer.toBuffer(doc);
  writeFileSync(resolve(OUT_DIR, "skills-matrix.docx"), buf);
  console.log(`  ${buf.length} bytes -> skills-matrix.docx`);
}

async function main() {
  console.log("Building Microsoft application package -> public/microsoft/");
  await buildCv();
  await buildCoverLetter();
  await buildSkillsMatrix();
  console.log("Microsoft application package built.");
}

main().catch((err) => {
  console.error("ms-package build failed:", err);
  process.exit(0);
});
