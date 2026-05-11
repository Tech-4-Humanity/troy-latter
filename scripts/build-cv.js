#!/usr/bin/env node
/**
 * Troy Latter — Executive CV Builder (DOCX with hyperlinks)
 *
 * Pattern: ExternalHyperlink wraps TextRun(s) styled as Hyperlink for clickable
 * blue+underlined links inside Word.
 *
 * Usage:
 *   npm install docx
 *   node scripts/build-cv.js
 *   Output: ./out/troy-latter-cv.docx
 *
 * Canonical: https://github.com/TML-4PM/troy-latter/blob/main/scripts/build-cv.js
 */

const {
  Document, Packer, Paragraph, TextRun, ExternalHyperlink,
  Table, TableRow, TableCell, HeadingLevel, AlignmentType,
  BorderStyle, WidthType, ShadingType,
} = require('docx');
const fs = require('fs');
const path = require('path');

const DARK = '1A1A1A';
const MUTED = '5A5A5A';
const LINK = '2563EB';

const noBorder = { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' };
const noBorders = { top: noBorder, bottom: noBorder, left: noBorder, right: noBorder };

/** Build a clickable hyperlink run. */
function link(text, url) {
  return new ExternalHyperlink({
    link: url,
    children: [new TextRun({ text, style: 'Hyperlink', size: 20, color: LINK, underline: {} })],
  });
}

function plain(text, opts = {}) {
  return new TextRun({ text, size: 20, color: opts.color || DARK, bold: opts.bold });
}

function row(label, ...cellChildren) {
  return new TableRow({
    children: [
      new TableCell({
        borders: noBorders,
        width: { size: 2400, type: WidthType.DXA },
        margins: { top: 60, bottom: 60, left: 100, right: 100 },
        shading: { fill: 'FAFAF8', type: ShadingType.CLEAR },
        children: [new Paragraph({ children: [plain(label, { bold: true })] })],
      }),
      new TableCell({
        borders: noBorders,
        width: { size: 7100, type: WidthType.DXA },
        margins: { top: 60, bottom: 60, left: 100, right: 100 },
        children: [new Paragraph({ children: cellChildren })],
      }),
    ],
  });
}

const doc = new Document({
  styles: {
    default: { document: { run: { font: 'Calibri', size: 22 } } },
    paragraphStyles: [
      { id: 'Heading1', name: 'Heading 1', basedOn: 'Normal', next: 'Normal', quickFormat: true,
        run: { size: 40, bold: true, font: 'Calibri', color: DARK },
        paragraph: { spacing: { before: 0, after: 100 }, outlineLevel: 0 } },
      { id: 'Heading2', name: 'Heading 2', basedOn: 'Normal', next: 'Normal', quickFormat: true,
        run: { size: 26, bold: true, font: 'Calibri', color: DARK },
        paragraph: { spacing: { before: 240, after: 80 } } },
    ],
  },
  sections: [{
    properties: { page: { margin: { top: 720, right: 720, bottom: 720, left: 720 } } },
    children: [
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [plain('Troy Latter')] }),
      new Paragraph({ children: [
        plain('Founder & CEO — '),
        link('Tech 4 Humanity Pty Ltd', 'https://abr.business.gov.au/ABN/View?id=70666271272'),
        plain(' (ABN 70 666 271 272) · Sydney, Australia'),
      ]}),
      new Paragraph({ children: [
        link('troylatter.com', 'https://troylatter.com'),
        plain(' · '),
        link('LinkedIn', 'https://www.linkedin.com/in/troylatter/'),
        plain(' · '),
        link('GitHub: TML-4PM', 'https://github.com/TML-4PM'),
      ]}),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [plain('Profile')] }),
      new Paragraph({ children: [
        plain('Sole director building a 30+ business portfolio across edtech ('),
        link('OutcomeReady', 'https://outcome-ready.com'),
        plain('), workforce AI ('),
        link('WorkFamilyAI', 'https://workfamilyai.com'),
        plain('), AI coaching ('),
        link('AHC on Holo-Org', 'https://ahc.holo-org.com'),
        plain('), consumer signal ('),
        link('MyNeuralSignal', 'https://myneuralsignal.com'),
        plain('), and research ('),
        link('AI Sweet Spots', 'https://aisweetspots.com'),
        plain(') — all running on a single self-built autonomous OS. AWS Lambda bridge, Supabase multi-schema, Vercel CC frontend ('),
        link('mcp-command-centre.vercel.app', 'https://mcp-command-centre.vercel.app'),
        plain('), and the '),
        link('TML-4PM', 'https://github.com/TML-4PM'),
        plain(' GitHub org (150+ repos).'),
      ]}),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [plain('Selected Builds (2024–2026)')] }),
      new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        rows: [
          row('Portfolio site', link('troylatter.com', 'https://troylatter.com'), plain(' — repo '), link('troy-latter', 'https://github.com/TML-4PM/troy-latter')),
          row('Command Centre', link('mcp-command-centre.vercel.app', 'https://mcp-command-centre.vercel.app')),
          row('Drug Resilience Atlas', link('TML-4PM/drug-resilience-atlas', 'https://github.com/TML-4PM/drug-resilience-atlas')),
          row('AI Sweet Spots', link('aisweetspots.com', 'https://aisweetspots.com'), plain(' — 11,241+ participants')),
          row('OutcomeReady', link('outcome-ready.com', 'https://outcome-ready.com'), plain(' · '), link('pilot', 'https://outcomeready-pilot.vercel.app')),
          row('WorkFamilyAI', link('workfamilyai.com', 'https://workfamilyai.com')),
          row('AHC', link('ahc.holo-org.com', 'https://ahc.holo-org.com')),
          row('HoloOrg', link('holoorg.vercel.app', 'https://holoorg.vercel.app'), plain(' — 10,000+ agents in production')),
          row('ConsentX', link('consentx.org', 'https://consentx.org')),
          row('Neural Ennead', link('neural-ennead-family.vercel.app', 'https://neural-ennead-family.vercel.app'), plain(' — 729 agents (9×9×9)')),
        ],
      }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [plain('Platform / Infrastructure')] }),
      new Paragraph({ bullet: { level: 0 }, children: [plain('AWS ap-southeast-2 — Lambda bridge, CloudFormation, IAM, SES, Route 53')] }),
      new Paragraph({ bullet: { level: 0 }, children: [plain('Supabase S1 (lzfgigiyqpuuxslsygjt) — multi-schema + pg_cron + RLS')] }),
      new Paragraph({ bullet: { level: 0 }, children: [plain('Vercel — 50+ projects, '), link('team dashboard', 'https://vercel.com/troys-projects-t4h-machine')] }),
      new Paragraph({ bullet: { level: 0 }, children: [plain('GitHub — '), link('TML-4PM organisation', 'https://github.com/TML-4PM'), plain(', 150+ repos')] }),
      new Paragraph({ bullet: { level: 0 }, children: [plain('MAAT — 6,070 real transactions via PDF/CSV pipeline')] }),
      new Paragraph({ bullet: { level: 0 }, children: [plain('RDTI — claims FY22-23 through FY25-26, '), link('AusIndustry', 'https://www.industry.gov.au/'), plain(' compliant')] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [plain('Selected Earlier Work')] }),
      new Paragraph({ bullet: { level: 0 }, children: [
        link('Malaysia Ministry of Health', 'https://www.moh.gov.my/'),
        plain(' — recovered national health digitisation programme through architecture redesign, vendor respecification, and stakeholder realignment.'),
      ]}),
      new Paragraph({ bullet: { level: 0 }, children: [
        link('AWS', 'https://aws.amazon.com/'),
        plain(' COVID border reopening — coordination with '),
        link('WHO', 'https://www.who.int/'), plain(', '),
        link('Home Affairs', 'https://www.homeaffairs.gov.au/'), plain(', '),
        link('DFAT', 'https://www.dfat.gov.au/'),
        plain('. Minister and C-suite briefings.'),
      ]}),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [plain('Contact')] }),
      new Paragraph({ children: [plain('troy@tech4humanity.com.au · '), link('LinkedIn', 'https://www.linkedin.com/in/troylatter/'), plain(' · '), link('troylatter.com', 'https://troylatter.com')] }),
    ],
  }],
});

const outDir = path.join(__dirname, '..', 'out');
fs.mkdirSync(outDir, { recursive: true });

Packer.toBuffer(doc).then(buffer => {
  const outPath = path.join(outDir, 'troy-latter-cv.docx');
  fs.writeFileSync(outPath, buffer);
  console.log(`[ok] wrote ${outPath} (${buffer.length} bytes)`);
});
