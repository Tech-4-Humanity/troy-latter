# CV Templates - Usage Guide & Metadata

## Template Overview

Three professionally designed CV formats optimised for ATS (Applicant Tracking Systems) and human readability. Each template contains identical content with different presentation styles.

---

## Template 1: Green Professional (HTML)
**File:** `ats_stylish_cv_green.html`

### Visual Style
- Forest green gradient header (#2d5f3f to #3a7d52)
- Clean, modern corporate aesthetic
- Professional but approachable tone

### Best Uses
- **Government & Public Sector Roles** - Signals stability, trust, environmental/sustainable focus
- **Consulting & Advisory Positions** - Professional without being cold
- **Technology Leadership Roles** - Modern design shows tech-savviness
- **Non-Profit/NGO Applications** - Green conveys mission-driven focus
- **Sustainability/Environmental Tech** - Colour alignment with sector values

### When to Choose Green
- Roles emphasising policy, governance, or public good
- Organisations with sustainability commitments
- When you want to project authority with warmth
- Government tenders and RFP responses

### Metadata
```
Format: HTML5
ATS-Compatibility: High (semantic HTML, clear hierarchy)
Print-Ready: Yes (optimised CSS @media print rules)
File Size: ~8KB
Browser Support: All modern browsers
Customisation Level: Medium (requires HTML/CSS knowledge)
```

---

## Template 2: Blue Corporate (HTML)
**File:** `ats_stylish_cv_blue.html`

### Visual Style
- Deep blue gradient header (#1e3a8a to #2563eb)
- Corporate, executive aesthetic
- Authoritative and strategic

### Best Uses
- **Fortune 100/Enterprise Roles** - Traditional corporate environments
- **Financial Services & Banking** - Blue signals trust, stability, security
- **Defence & National Security** - Professional, no-nonsense presentation
- **Cloud Platforms (AWS, Azure, Oracle)** - Aligns with tech sector blues
- **C-Suite & Executive Positions** - Conveys gravitas and leadership
- **Strategic Advisory Roles** - Premium, high-value positioning

### When to Choose Blue
- Conservative corporate cultures
- When applying to global multinationals
- High-stakes government/defence contracts
- Roles requiring security clearances
- Traditional industries (finance, insurance, telco)

### Metadata
```
Format: HTML5
ATS-Compatibility: High (semantic HTML, clear hierarchy)
Print-Ready: Yes (optimised CSS @media print rules)
File Size: ~8KB
Browser Support: All modern browsers
Customisation Level: Medium (requires HTML/CSS knowledge)
```

---

## Template 3: Markdown (Plain Text)
**File:** `cv_markdown.md`

### Visual Style
- Plain text with markdown formatting
- Universal compatibility
- Content-focused, zero styling

### Best Uses
- **GitHub/GitLab Profiles** - Native markdown rendering
- **Plain Text Submissions** - Systems that strip formatting
- **Email Body Content** - When attachments aren't accepted
- **Version Control** - Easy diff tracking, collaborative editing
- **Quick Customisation** - Edit in any text editor
- **ATS-First Environments** - Zero parsing ambiguity
- **Technical Documentation** - Consistent with dev culture
- **Startup/Tech Company Applications** - Shows you speak the language

### When to Choose Markdown
- Developer/engineer-heavy organisations
- When submitting via GitHub
- Lean startup cultures
- Command-line workflows
- Maximum ATS compatibility needed
- Quick iteration required

### Metadata
```
Format: Markdown (CommonMark)
ATS-Compatibility: Maximum (pure text, zero ambiguity)
Print-Ready: Via markdown-to-PDF converters
File Size: ~4KB
Browser Support: N/A (requires markdown renderer or converter)
Customisation Level: Easy (any text editor)
```

---

## ATS Optimisation Features (All Templates)

### ✅ What Makes These ATS-Friendly

1. **Clear Section Headers**
   - Standard naming: "PROFESSIONAL EXPERIENCE", "CORE COMPETENCIES"
   - No creative section names that confuse parsers

2. **Chronological Format**
   - Most recent first
   - Clear date ranges
   - Consistent formatting

3. **Keyword Density**
   - Role-specific terminology naturally embedded
   - Skills explicitly listed
   - Action verbs in achievements

4. **STAR Method Achievements**
   - Situation → Task → Action → Result
   - Quantified outcomes where possible
   - Clear impact statements

5. **No Parsing Traps**
   - No tables (HTML templates use CSS flex/grid)
   - No images or graphics in content areas
   - No headers/footers with critical info
   - No text boxes or columns that break reading order

6. **Consistent Formatting**
   - Same structure for all roles
   - Predictable hierarchy
   - Clean bullet points

---

## Customisation Instructions

### Green/Blue HTML Templates

**Quick Edits (No Code):**
1. Open in any text editor (VS Code, Sublime, Notepad++)
2. Find and replace text content between HTML tags
3. Update contact details in header section
4. Modify achievement bullets in `<ul class="achievements">` sections
5. Save and open in browser to preview

**Colour Customisation:**
```css
/* Green Template - Change these values */
background: linear-gradient(135deg, #2d5f3f 0%, #3a7d52 100%);
color: #2d5f3f;
border-left: 4px solid #3a7d52;

/* Blue Template - Change these values */
background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%);
color: #1e3a8a;
border-left: 4px solid #2563eb;
```

**Adding New Roles:**
Copy an existing `<div class="experience-item">` block and modify content.

**Print to PDF:**
Open in Chrome/Edge → Print → Save as PDF → Use default print settings

### Markdown Template

**Editing:**
- Use any text editor (VS Code, Typora, Obsidian, Notepad++)
- Maintain heading hierarchy (# ## ###)
- Keep list formatting consistent
- Preserve blank line spacing

**Converting to PDF:**
```bash
# Using pandoc
pandoc cv_markdown.md -o cv_troy_latter.pdf

# Using markdown-pdf (VS Code extension)
Right-click → Markdown PDF: Export (PDF)

# Using grip (GitHub-style rendering)
grip cv_markdown.md --export cv_troy_latter.html
```

---

## File Naming Best Practices

### For Applications
```
Troy_Latter_CV_[Company]_[Role]_2025.pdf
Troy_Latter_Resume_AWS_Solutions_Architect.pdf
Latter_Troy_CTO_Application_Acme_Corp.pdf
```

### For Your Records
```
cv_troy_latter_v2.1_green.html
cv_troy_latter_master_blue_20251019.html
cv_markdown_latest.md
```

---

## Metadata Summary Table

| Feature | Green HTML | Blue HTML | Markdown |
|---------|-----------|-----------|----------|
| **ATS Score** | 9/10 | 9/10 | 10/10 |
| **Visual Impact** | High | Very High | None |
| **Edit Difficulty** | Medium | Medium | Easy |
| **File Size** | 8KB | 8KB | 4KB |
| **Print Quality** | Excellent | Excellent | Good (via converter) |
| **Best Sector** | Public/Gov/Consulting | Corp/Finance/Defence | Tech/Startup/Dev |
| **Formality Level** | Professional | Executive | Technical |

---

## Quick Decision Matrix

**Choose GREEN if:**
- Government, public sector, or NGO role
- Emphasis on sustainability/policy
- Want approachable authority
- Conservative but not rigid environment

**Choose BLUE if:**
- Fortune 100/enterprise corporation
- Finance, banking, insurance
- Defence, security, intelligence
- Traditional C-suite position
- Need maximum executive presence

**Choose MARKDOWN if:**
- Tech-first organisation
- GitHub/GitLab submission
- Developer/engineer role
- Maximum ATS compatibility needed
- Quick iteration required
- Startup/lean culture

---

## Version Control Notes

**Current Version:** 1.0  
**Last Updated:** October 19, 2025  
**Content Source:** Troy Latter base CV (15+ years experience)  
**Maintained By:** Troy Latter / AI Assistant

**Change Log:**
- v1.0 (2025-10-19): Initial release with complete work history
- All roles from Unisys (2024-2025) to Canberra Consulting (2010-2013)
- STAR-method achievements throughout
- ATS-optimised structure and keywords

---

## Technical Specifications

### HTML Templates
```
DOCTYPE: HTML5
Character Encoding: UTF-8
Viewport: Responsive (width=device-width, initial-scale=1.0)
CSS: Embedded (no external dependencies)
JavaScript: None (pure HTML/CSS)
Fonts: System fonts (Segoe UI, Tahoma, sans-serif)
Icons: Unicode emoji (maximum compatibility)
```

### Markdown Template
```
Spec: CommonMark
Line Endings: LF (Unix-style)
Character Encoding: UTF-8
Max Line Length: None (natural wrapping)
Tables: GitHub Flavored Markdown compatible
```

---

## Support & Troubleshooting

### HTML Templates Won't Display Properly
- Ensure file extension is `.html`
- Open with modern browser (Chrome, Edge, Firefox, Safari)
- Check file wasn't corrupted during download
- Try different browser if issue persists

### PDF Export Issues
- Use Chrome or Edge for best print results
- Set margins to "Default" or "Minimum"
- Disable headers/footers in print dialog
- Choose "Save as PDF" not "Print"

### ATS Not Reading Properly
- Confirm you're submitting PDF (not HTML)
- Use Adobe Acrobat to verify text is selectable
- Test copy-paste from PDF - should maintain structure
- Consider markdown version for maximum compatibility

### Markdown Not Rendering
- Verify file has `.md` extension
- Use markdown preview in VS Code/Atom/Typora
- Check for broken formatting (unmatched symbols)
- Validate with online markdown viewer

---

## Contact & Customisation Requests

For template customisation, additional formats, or questions:
- **Email:** contact@troylaatter.com
- **LinkedIn:** linkedin.com/in/troylaatter

---

*Templates designed for maximum ATS compatibility while maintaining professional visual appeal. All content is based on verified work history and achievements.*