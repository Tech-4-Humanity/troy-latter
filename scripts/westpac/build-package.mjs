// scripts/westpac/build-package.mjs
// Generates the Westpac application docx package into public/westpac/.
// Formatting v2: 2-cell role headers (vs tab-stops), zebra-stripe tables, 11pt body.
// v3: ConsentX Westpac demo woven into CV (Westpac-Specific Work) + cover letter.

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
        width: { size: 6500, type: WidthType.DXA },
        borders: NO_BORDERS,
        margins: { top: 100, bottom: 40, left: 0, right: 0 },
        children: [p({ children: [new TextRun({ text: left, font: FONT, bold: true, size: 22, color: DARK })] })]
      }),
      new TableCell({
        width: { size: 2860, type: WidthType.DXA },
        borders: NO_BORDERS,
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
    "Innovation experimentation leader with 20+ years driving complex enterprise transformation and emerging-technology adoption across AWS, Gartner, Oracle, and HPE/DXC. " +
    "Currently founder and sole director of Tech 4 Humanity Pty Ltd \u2014 a Sydney-based AI R&D company operating a live, 30+ product innovation experimentation portfolio under a custom governance kernel (STAMP) with REAL / PARTIAL / BLOCKED evidence classification, telemetry-native truth and replayable execution. " +
    "Deep operator expertise in Agentic AI architectures, time-boxed experimentation, bank-grade evidence chains, and senior stakeholder protection. " +
    "Trained instinct \u2014 from Gartner advisor years and twenty years of C-level enterprise sales \u2014 for which ideas deserve real investment and which need quiet retirement."
  );

  const valueProps = [
    ["Experimentation Portfolio Operator", "Tech 4 Humanity is a live 30+ product innovation experimentation portfolio. Each product is time-boxed, evidence-bound, with REAL / PARTIAL / BLOCKED classification, kill-switches and economic gates \u2014 exactly the operating model The Future Lab needs to scale."],
    ["Strategic Judgement", "3 years Gartner advisor to ANZ CIOs/CDOs + 20+ years C-level enterprise sales \u2014 trained instinct for which ideas deserve real investment vs which need quiet retirement. I have killed more experiments than I have shipped, with a clean framework for why."],
    ["Bank-Grade Governance", "Built STAMP \u2014 a governance kernel with REAL/PARTIAL/BLOCKED evidence classification, telemetry-native truth, replayable execution receipts and ledger-canonical state. Speaks directly to Westpac risk, compliance and audit fluency."],
    ["Senior Stakeholder Muscle", "Standing relationships across ANZ enterprise & public sector built over AWS / Gartner / Oracle / HPE-DXC. Comfortable in CIO, CFO and Secretary rooms; Gartner advisor pedigree at translating emerging tech into board-level decisions."],
    ["Capability Uplift at Scale", "Built HoloOrg agent marketplace (10,000 agents, family/tier/affinity) and Valdocco Primary (2e school) \u2014 proves I can design people + agent infrastructure that scales individual expertise back into business units."],
    ["Air-Cover Posture", "Sole director shipping a regulated portfolio (RDTI, BAS, ATO) \u2014 accustomed to defending experiments to compliance, finance and audit pressure. Comfortable with bank-style review gates."]
  ];

  const valueTable = new Table({
    width: { size: 9360, type: WidthType.DXA },
    columnWidths: [3000, 6360],
    rows: valueProps.map(([k, v], i) => new TableRow({
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
    roleHeader("ConsentX \u2014 Youth Banking Consent Demo (built for Westpac)", "2025  \u2022  Sydney"),
    roleDesc("A self-initiated, Westpac-specific working prototype \u2014 \u201CLayer Trust Over Compliance\u201D \u2014 designed last year, now built and live."),
    bullet("Designed and shipped a working prototype that reframes youth onboarding as a consent journey, not a checkbox: turning life-stage data into trust signals, automating verification, and removing paperwork while keeping full auditability, parent-approved controls and revocable consent.", "Worked Westpac Artefact"),
    bullet("Quantified the problem in Westpac's own terms \u2014 ~67% of under-18 applicants abandon onboarding, ~$47 average compliance cost per youth account, ~$2.4B in lifetime value left on the table \u2014 then modelled the target state: account opening in under a minute, zero documents, automated and traceable compliance.", "Evidence-Bound Business Case"),
    bullet("Built a five-lens stakeholder analysis (the 14-year-old, the guardian parent, the Westpac Innovation Lead, the merchant, the financial-services regulator) showing how a single consent fabric creates shared advantage without compromising safety or oversight \u2014 the exact convening discipline The Future Lab requires.", "Five-Lens Stakeholder Model"),
    bullet("Pilot-grade metrics surfaced in the demo: 92/100 average trust score, 45-second onboarding, 70% dropout reduction, 100% compliance rate. Live at consentx-westpac-demo1.lovable.app; an example of how I take an emerging-tech idea to a senior-executive-ready artefact end to end.", "Demo \u2014 Time-Boxed, Shippable")
  ];

  const t4h = [
    roleHeader("Tech 4 Humanity Pty Ltd  \u2014  Founder & Director", "2022 \u2013 Present  \u2022  Sydney"),
    roleDesc("AI R&D company operating a 30+ product innovation experimentation portfolio under a custom governance kernel."),
    bullet("Operate Tech 4 Humanity as a 30+ product innovation experimentation portfolio with a structured triage funnel (PRE-INTAKE \u2192 INTAKE \u2192 SIGNAL-WIRED \u2192 OFFER-READY \u2192 MARKET-READY \u2192 KILL/PARTIAL/REAL). Every product carries declared hypotheses, evidence chains, kill-switches and economic gates.", "Experimentation Portfolio at Scale"),
    bullet("Built STAMP \u2014 a governance kernel with REAL / PARTIAL / BLOCKED evidence classification, RDTI tagging at asset creation, telemetry-native truth, replayable execution receipts and ledger-canonical state. Survives ATO, AusIndustry and audit scrutiny.", "Bank-Grade Governance Kernel"),
    bullet("Designed and operate the Neural Ennead 729-agent orchestration framework and HoloOrg 10,000-agent marketplace \u2014 production examples of how to accelerate experimentation throughput without compromising governance or evidence.", "Experimentation Acceleration Fabric"),
    bullet("Run continuous portfolio rationalisation against REAL / PARTIAL / BLOCKED status. Killed more experiments than I have shipped \u2014 the discipline of 'fail cheap, scale the few winners' baked into the operating cadence.", "Disciplined Triage"),
    bullet("Delivered against active Australian R&D Tax Incentive obligations \u2014 RDTI evidence register, BAS lodgement cycles, ATO posture \u2014 giving direct fluency in regulated-environment experimentation and the compliance levers Westpac cares about.", "Regulated Experimentation"),
    bullet("Operate the autonomous runtime (\"L23\") across 6 active businesses with WebsiteOps, FinanceOps, DataOps and TaskOps agent domains \u2014 proves capability to scale experimentation infrastructure across multiple business units simultaneously.", "Cross-BU Scaling")
  ];

  const dxc = [
    roleHeader("HPE / DXC Technology  \u2014  Senior Enterprise Sales / Solution Leader", "2018 \u2013 2022  \u2022  Sydney"),
    roleDesc("Drove complex enterprise digital transformation deals across ANZ commercial and public sector, including financial services."),
    bullet("Led multi-million-dollar transformation deals into ANZ enterprise and Federal/State accounts \u2014 cloud migration, modern workplace and data platforms \u2014 with explicit experimentation phases built into engagement design."),
    bullet("Operated as orchestration lead across global resources, OEM partners and SI ecosystems \u2014 directly relevant to The Future Lab's need to convene specialists from across the bank around time-boxed experiments."),
    bullet("Built executive trust through insight-led discovery; consistently moved customers from RFP-led procurement to outcome-led co-creation \u2014 the same shift The Future Lab needs to drive inside Westpac.")
  ];

  const oracle = [
    roleHeader("Oracle  \u2014  Senior Solution Sales", "2015 \u2013 2018  \u2022  Sydney"),
    roleDesc("Cloud applications & platform sales into ANZ Enterprise including ANZ banks."),
    bullet("Sold full Oracle Cloud stack (HCM, ERP, EPM and PaaS) into ANZ Enterprise \u2014 directly into the financial services sector. Familiar with bank decision cycles, risk appetites and procurement architecture."),
    bullet("Led territory planning, pipeline discipline and forecasting against demanding SaaS quotas \u2014 disciplines that translate directly to running an experimentation pipeline with measurable throughput.")
  ];

  const gartner = [
    roleHeader("Gartner  \u2014  Executive Advisor", "2012 \u2013 2015  \u2022  Sydney"),
    roleDesc("C-suite advisory to ANZ CIOs and CDOs on emerging technology strategy and operating model."),
    bullet("Advised ANZ CIOs, CDOs and Heads of Transformation on emerging technology strategy and operating-model design \u2014 the core skill of The Future Lab role: turning emerging tech into senior-executive decisions."),
    bullet("Built durable executive relationships across enterprise and public sector including financial services \u2014 many of which remain active references and door-openers across the ANZ market today.")
  ];

  const aws = [
    roleHeader("Amazon Web Services (AWS)  \u2014  Senior Account / Solution Sales", "2008 \u2013 2012  \u2022  Sydney"),
    roleDesc("Early ANZ cloud sales \u2014 enterprise and ISV adoption during the formative cloud-formation window."),
    bullet("One of the early ANZ enterprise sellers at AWS \u2014 landed and expanded foundational ANZ workloads during the formative cloud-adoption window. Direct experience of how a 'genuinely new operating model' enters a regulated enterprise."),
    bullet("Owned the full deal lifecycle \u2014 discovery, architecture alignment with SAs, commercial structuring, partner orchestration and post-sale expansion \u2014 same multi-stakeholder muscle The Future Lab will need.")
  ];

  const education = [
    bullet("Senior commercial roles at AWS, Gartner, Oracle, HPE/DXC \u2014 continuous executive-level training in solution sales, value engineering, transformation advisory and stakeholder management.", "Industry"),
    bullet("Active builder-operator on the AWS / Vercel / Supabase / GitHub stack \u2014 daily hands-on with the same agentic, MCP and AI infrastructure patterns Westpac will be experimenting against.", "Practitioner"),
    bullet("Registered R&D entity (Tech 4 Humanity Pty Ltd, ABN 70 666 271 272) \u2014 fluent in Australian R&D Tax Incentive, AusIndustry CRP and ATO evidence requirements \u2014 directly relevant to bank-grade evidence and audit posture.", "Regulatory")
  ];

  const additional = [
    bullet("Australian Citizen \u2014 eligible for Federal Government, Defence-adjacent and regulated financial services engagements without sponsorship constraints.", "Eligibility"),
    bullet("Personal mission: paddling 14,000 km around the Australian coastline by kayak \u2014 discipline, endurance and long-horizon execution applied outside work.", "Outside work"),
    bullet("References and a customer / deal evidence pack available on request.", "References")
  ];

  const doc = new Document({
    creator: "Troy Latter",
    title: "Troy Latter \u2014 CV \u2014 Westpac EM Innovation Experimentation",
    styles: { default: { document: { run: { font: FONT, size: 22 } } } },
    numbering,
    sections: [{
      properties: { page: { size: { width: 12240, height: 15840 }, margin: { top: 1080, right: 1440, bottom: 1080, left: 1440 } } },
      children: [
        headerName("TROY LATTER"),
        headerTitleC("Innovation Experimentation Leader  |  Founder & Director, Tech 4 Humanity  |  Ex-AWS / Gartner / Oracle"),
        headerContactC("Sydney, NSW  \u2022  Australian Citizen  \u2022  troy@tech4humanity.com.au  \u2022  linkedin.com/in/troylatter"),
        heading("Profile"), profile,
        heading("Why I match this role"), valueTable,
        heading("Westpac-Specific Work \u2014 ConsentX Demo"), ...consentx,
        heading("Experience"),
        ...t4h, ...dxc, ...oracle, ...gartner, ...aws,
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
  const hName = p({ alignment: AlignmentType.LEFT, spacing: { after: 0 }, children: [new TextRun({ text: "TROY LATTER", font: FONT, bold: true, size: 36, color: DARK, characterSpacing: 40 })] });
  const hTitle = p({ alignment: AlignmentType.LEFT, spacing: { after: 60 }, children: [new TextRun({ text: "Innovation Experimentation Leader  \u2022  Sydney, NSW", font: FONT, size: 20, color: ACCENT, bold: true })] });
  const hContact = p({ alignment: AlignmentType.LEFT, spacing: { after: 280 }, border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: ACCENT, space: 6 } }, children: [new TextRun({ text: "troy@tech4humanity.com.au  \u2022  linkedin.com/in/troylatter", font: FONT, size: 19, color: GREY })] });

  const date = p({ spacing: { after: 200 }, children: [new TextRun({ text: "18 May 2026", font: FONT, size: 22, color: DARK })] });
  const recipient = [
    p({ spacing: { after: 0 }, children: [new TextRun({ text: "Dharshana Gooinath", font: FONT, bold: true, size: 22, color: DARK })] }),
    p({ spacing: { after: 0 }, children: [new TextRun({ text: "Hiring Manager \u2014 Executive Manager, Innovation Experimentation", font: FONT, size: 22, color: DARK })] }),
    p({ spacing: { after: 0 }, children: [new TextRun({ text: "The Future Lab", font: FONT, size: 22, color: DARK })] }),
    p({ spacing: { after: 280 }, children: [new TextRun({ text: "Westpac Banking Corporation", font: FONT, size: 22, color: DARK })] })
  ];
  const subject = p({ spacing: { after: 200 }, children: [new TextRun({ text: "Re: Executive Manager, Innovation Experimentation \u2014 The Future Lab", font: FONT, bold: true, size: 22, color: ACCENT })] });

  const para = (text, opts = {}) => p({
    spacing: { before: 120, after: 120, line: 320 }, ...opts,
    children: typeof text === "string" ? [new TextRun({ text, font: FONT, size: 22, color: DARK })] : text
  });
  const blet = (text) => p({
    numbering: { reference: "bullets", level: 0 }, spacing: { before: 60, after: 60, line: 300 },
    children: typeof text === "string" ? [new TextRun({ text, font: FONT, size: 22, color: DARK })] : text
  });
  const mkBullet = (label, rest) => blet([
    new TextRun({ text: label + " ", font: FONT, bold: true, size: 22, color: DARK }),
    new TextRun({ text: rest, font: FONT, size: 22, color: DARK })
  ]);

  const opener = para("Dear Dharshana,");
  const o2 = para("Westpac is creating exactly the function I have been operating for the last four years. The Future Lab \u2014 strategic experimentation, time-boxed tests, judgement on what deserves real investment, protection for the right risks, and an explicit upskilling motion back into the business units \u2014 has been my full-time job at Tech 4 Humanity Pty Ltd. I am writing because I am the customer this role is trying to find, and I would like to help build it inside Westpac.");
  const o3 = para("I run a 30+ product portfolio at Tech 4 Humanity that I treat explicitly as a continuous innovation experimentation pipeline. Each product carries declared hypotheses, evidence chains, REAL / PARTIAL / BLOCKED classification, kill-switches and economic gates. I built the governance kernel that runs the portfolio (STAMP), the agentic frameworks that accelerate it (Neural Ennead 729-agent orchestration, HoloOrg 10,000-agent marketplace), and the operating cadence that makes 'fail cheap, scale the few winners' actually survive ATO, AusIndustry and audit-grade scrutiny.");
  const o4 = para("The role as briefed feels like a triple match \u2014 relationships, judgement, protection \u2014 and I have evidence on each:");

  const bullets = [
    mkBullet("Relationships.", "Twenty years of senior stakeholder muscle across ANZ Enterprise and Public Sector \u2014 AWS in its formative cloud window, Gartner as a C-level advisor, Oracle Cloud across HCM/ERP/EPM, and HPE/DXC on multi-million-dollar transformation deals. Standing relationships with many of the CIOs and division heads who keep Australian executives up at night."),
    mkBullet("Judgement.", "Three years at Gartner advising ANZ CIOs sharpened the instinct for which ideas deserve real investment and which don't. The Tech 4 Humanity portfolio is the lived version: I have killed more experiments than I have shipped, and I have a clean, defensible framework for why."),
    mkBullet("Protection.", "Sole-director, regulated (RDTI / BAS / ATO) operator \u2014 routinely defending experiments to compliance, finance and audit pressure. Comfortable holding air cover so specialists can move faster than normal bank process, and comfortable shutting it down when an experiment fails its gates."),
    mkBullet("Upskilling motion.", "Built HoloOrg agent marketplace (10,000 agents, family/tier/affinity taxonomy) and Valdocco Primary (2e school) as parallel examples of designing infrastructure that scales individual expertise. The Future Lab's mandate to push innovation skills back into the DUs is something I have already designed for."),
    mkBullet("Bank-readiness.", "Operating model already survives RDTI / BAS / ATO scrutiny; the STAMP evidence chain is portable to Westpac's risk and compliance posture without compromise. Australian Citizen, Sydney-based, no clearance or sponsorship constraints.")
  ];

  const demo1 = para("One concrete proof point: last year I designed a Westpac-specific experiment I never formally presented \u2014 so I have now built it. ConsentX (\u201CLayer Trust Over Compliance\u201D) is a working prototype that reframes youth banking onboarding as a consent journey rather than a paperwork gauntlet. It is live, and I have included it with this application.");
  const demo2 = para("It is deliberately framed the way The Future Lab would frame an experiment. It quantifies the problem in Westpac's own terms \u2014 roughly 67% of under-18 applicants abandoning onboarding, about $47 compliance cost per youth account, and an estimated $2.4B in lifetime value left on the table \u2014 then models the target state (account opening in under a minute, zero documents, automated and revocable compliance) and runs a five-lens stakeholder analysis across the customer, the guardian parent, a Westpac innovation lead, a merchant and a regulator. It is exactly the kind of time-boxed, evidence-bound, senior-executive-ready artefact I would expect the role to produce \u2014 done before the conversation, not after it.");

  const c1 = para("What attracts me most is the timing. FY27 is the inflection point where Agentic AI stops being a productivity story and becomes an operating-model decision. Westpac is positioning correctly by separating exploration from delivery now, rather than during the storm \u2014 and The Future Lab is the right vehicle for that shift. I would like to bring four years of lived operating experience to bear on making it work.");
  const c2 = para("I would welcome a conversation. I have a customer- and evidence-ready portfolio I am happy to walk through in person, the ConsentX demo as a live worked example, references across AWS, Gartner, Oracle and the ANZ buyer community, and an immediate working hypothesis on what the first three Future Lab experiments could look like.");
  const c3 = para("Thank you for your consideration.");

  const sign = [
    p({ spacing: { before: 280, after: 0 }, children: [new TextRun({ text: "Kind regards,", font: FONT, size: 22, color: DARK })] }),
    p({ spacing: { before: 200, after: 0 }, children: [new TextRun({ text: "Troy Latter", font: FONT, bold: true, size: 24, color: DARK })] }),
    p({ spacing: { after: 0 }, children: [new TextRun({ text: "Founder & Director \u2014 Tech 4 Humanity Pty Ltd", font: FONT, italics: true, size: 20, color: GREY })] }),
    p({ spacing: { after: 0 }, children: [new TextRun({ text: "ABN 70 666 271 272  \u2022  Sydney, NSW", font: FONT, italics: true, size: 20, color: GREY })] })
  ];

  const doc = new Document({
    creator: "Troy Latter",
    title: "Troy Latter \u2014 Cover Letter \u2014 Westpac EM Innovation Experimentation",
    styles: { default: { document: { run: { font: FONT, size: 22 } } } },
    numbering,
    sections: [{
      properties: { page: { size: { width: 12240, height: 15840 }, margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } } },
      children: [hName, hTitle, hContact, date, ...recipient, subject, opener, o2, o3, o4, ...bullets, demo1, demo2, c1, c2, c3, ...sign]
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
  const hContact = p({ alignment: AlignmentType.LEFT, spacing: { after: 200 }, border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: ACCENT, space: 6 } }, children: [new TextRun({ text: "Sydney, NSW  \u2022  troy@tech4humanity.com.au  \u2022  18 May 2026", font: FONT, size: 19, color: GREY })] });
  const intro = p({ spacing: { before: 60, after: 60 }, children: [new TextRun({ text: "Self-assessed competency map against the Job Description. Each capability is mapped to (a) the JD anchor it satisfies, (b) the most credible piece of evidence I can produce on request, and (c) a 1\u20135 self-rating. Ratings are conservative: 5 = production operator-grade with shippable artefacts; 4 = deep recent experience; 3 = comfortable solo; 2 = familiar; 1 = aware.", font: FONT, size: 20, color: DARK })] });
  const legend = p({
    spacing: { before: 60, after: 60 },
    children: [
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
    ]
  });

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
        headerRow([{ t: "Capability", w: W1 }, { t: "JD Anchor", w: W2 }, { t: "Evidence", w: W3 }, { t: "Rating", w: W4 }]),
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
    ["Experimentation framework design", "Establish & mature experimentation capability; frameworks, governance, operating models", "Designed STAMP \u2014 governance kernel running 30+ experiments at Tech 4 Humanity with REAL / PARTIAL / BLOCKED classification, evidence chains, kill-switches, replayability.", 5],
    ["Time-boxed test design", "Structured experiments to inform strategic & investment decisions", "Operate live portfolio funnel: PRE-INTAKE \u2192 INTAKE \u2192 SIGNAL-WIRED \u2192 OFFER-READY \u2192 MARKET-READY \u2192 KILL/PARTIAL/REAL. Each stage has declared hypotheses and economic gates.", 5],
    ["Triage / judgement on what to test", "Pick the ones worth testing; not every idea deserves an experiment", "Killed more experiments than I have shipped at Tech 4 Humanity. Public taxonomy verdicts (CORE/FOCUS/NURTURE/PARK/KILL/MERGE) on full corpus analysis.", 5],
    ["Exploration vs delivery balance", "Guide balance between exploration and delivery", "Whole Tech 4 Humanity operating cadence is built on this tension; resolved through tier-gated economic review and REAL classification thresholds.", 5],
    ["Worked Westpac experiment", "Run a structured experiment that informs a strategic banking decision", "ConsentX youth-banking demo (live, Westpac-specific): problem quantified in Westpac terms, target state modelled, five-lens stakeholder analysis, pilot metrics. Built before the conversation.", 5],
    ["Insight synthesis for senior execs", "Provide clear, synthesised insights and recommendations to senior executives", "Three years Gartner exec advisor; daily executive-facing communication discipline; recent board-grade reports produced under /seal protocol.", 5]
  ];
  const section2 = [
    ["Deep AI & emerging-tech understanding", "Deep understanding of AI and emerging technologies", "Operator of Neural Ennead 729-agent framework, HoloOrg 10,000-agent marketplace, MCP remote server, custom bridge infrastructure. Daily-builder on the frontier.", 5],
    ["Applying AI at enterprise scale", "Ability to apply them at scale to deliver tangible business and customer value", "L23 Autonomous OS deployed across 6 active businesses with WebsiteOps / FinanceOps / DataOps / TaskOps domains. Production-grade, evidence-bound, replayable.", 5],
    ["Translating tech to business value", "Translate capabilities into tangible business and customer value", "30+ product portfolio each with declared business case; Maat (T4H financial system) tracks contribution margin per product. Quantified, not assumed.", 5],
    ["AI risk and sovereignty awareness", "AI governance, sovereignty, regulated context awareness", "Built STAMP and live with RDTI / BAS / ATO obligations. Direct fluency in Australian regulated-AI compliance posture.", 5],
    ["Bank-domain AI adaptation", "Apply emerging tech in banking context specifically", "ConsentX demo applies emerging-tech consent/trust patterns directly to youth banking onboarding; STAMP designed for bank-grade evidence; Maat uses bank-style SHA256 recon (ANZ/Amex/CBA).", 5]
  ];
  const section3 = [
    ["Senior-executive influence", "Influencing senior executives and driving alignment", "20+ years complex enterprise sales \u2014 AWS / Gartner / Oracle / HPE-DXC. Comfortable in CIO, CFO, Secretary rooms.", 5],
    ["Cross-functional stakeholder mgmt", "Stakeholder engagement across complex organisations", "ConsentX five-lens model (customer/parent/bank/merchant/regulator) plus routine AWS/Oracle/DXC pattern: SAs, partner SIs, legal, sovereignty review coordinated to close.", 5],
    ["Strategic narrative & framing", "Bringing clarity and direction in ambiguous environments", "Gartner advisor pedigree; recent board-grade narratives produced for T4H portfolio. ConsentX reframes a compliance headache as a trust opportunity in one page.", 5],
    ["Working in high ambiguity", "Comfort in fast-moving, highly regulated, often ambiguous environments", "Sole-director running 30+ experiments in parallel under regulated (RDTI/BAS/ATO) constraints. Ambiguity is the daily operating environment.", 5]
  ];
  const section4 = [
    ["Building high-performing teams", "Strong experience building, leading and uplifting high-performing teams and capabilities", "Built and operate Tech 4 Humanity solo + autonomous agent fabric. Demonstrates capacity to design human + agent teams; some hands-on people-leading muscle to rebuild at Westpac scale.", 4],
    ["Capability uplift in business units", "Embed organisation-wide capability; enable teams to independently design, run, learn from experiments", "Built HoloOrg agent marketplace (family/tier/affinity) and Valdocco Primary (2e school) as parallel examples of designing infrastructure that scales individual expertise. Pattern translates to DU upskilling.", 4],
    ["Innovation skills knowledge transfer", "Upskill the specialists who co-create with us with innovation skills back into the business", "Active builder-operator who can model the practice live; Gartner-era discipline for distilling complex emerging tech into executive-grade frames.", 4]
  ];
  const section5 = [
    ["Banking / financial services domain", "Banking context, financial services awareness", "Sold Oracle Cloud HCM/ERP/EPM into ANZ financial services; HPE/DXC deals into the same vertical. ConsentX demo built specifically around Westpac youth-banking economics.", 5],
    ["Regulated experimentation posture", "Permission to fail cheaply within regulated bank process", "Live operator of regulated experimentation (RDTI / BAS / ATO). Have personally provided air cover for risky experiments in front of compliance and audit pressure.", 5],
    ["Bank-grade governance translation", "Bank-grade evidence chain and risk-aware operating model", "STAMP REAL / PARTIAL / BLOCKED classification is portable to Westpac's risk and compliance posture without compromise.", 5]
  ];

  const summaryRows = [
    ["Section", "Avg Rating", "Notes"],
    ["1. Innovation Experimentation Leadership", "5.0 / 5", "Operator-grade. 30+ live experiments + worked ConsentX Westpac demo."],
    ["2. AI / Emerging Tech Domain", "5.0 / 5", "Deep operator depth across agentic, MCP, multi-agent; applied to banking."],
    ["3. Stakeholder Engagement & Influence", "5.0 / 5", "20+ yrs C-level enterprise sales + Gartner + ConsentX five-lens model."],
    ["4. Building & Uplifting Teams / Capability", "4.0 / 5", "Strong design discipline; people-leading muscle to rebuild at bank scale."],
    ["5. Bank / Westpac Specific", "5.0 / 5", "Financial services domain + Westpac-specific worked demo + regulated evidence."]
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
    title: "Troy Latter \u2014 Skills Matrix \u2014 Westpac EM Innovation Experimentation",
    styles: { default: { document: { run: { font: FONT, size: 20 } } } },
    numbering,
    sections: [{
      properties: { page: { size: { width: 12240, height: 15840, orientation: PageOrientation.LANDSCAPE }, margin: { top: 1080, right: 1080, bottom: 1080, left: 1080 } } },
      children: [
        hName, hTitle, hContact, intro, legend,
        heading("Summary"), summaryTable,
        heading("Full Skills Matrix"),
        ...buildSection("1.  Innovation Experimentation Leadership", section1),
        ...buildSection("2.  AI / Emerging Tech Domain", section2),
        ...buildSection("3.  Stakeholder Engagement & Influence", section3),
        ...buildSection("4.  Building & Uplifting Teams / Capability", section4),
        ...buildSection("5.  Bank / Westpac Specific", section5)
      ]
    }]
  });

  const buf = await Packer.toBuffer(doc);
  writeFileSync(resolve(OUT_DIR, "skills-matrix.docx"), buf);
  console.log(`  ${buf.length} bytes -> skills-matrix.docx`);
}

async function main() {
  console.log("Building Westpac application package -> public/westpac/");
  await buildCv();
  await buildCoverLetter();
  await buildSkillsMatrix();
  console.log("Westpac application package built.");
}

main().catch((err) => {
  console.error("westpac build failed:", err);
  process.exit(0);
});
