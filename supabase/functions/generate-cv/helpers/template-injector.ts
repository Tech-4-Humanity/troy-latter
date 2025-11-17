// Template injection utility for HTML CV templates

interface CVData {
  name: string;
  title: string;
  contact: string;
  summary: string;
  experience: Array<{
    title: string;
    company: string;
    dates: string;
    location: string;
    description?: string;
    achievements: Array<{ category: string; text: string }>;
  }>;
  skills: Array<{
    category: string;
    items: string[];
  }>;
  certifications: Array<{
    category: string;
    items: string[];
  }>;
  matchScore?: number;
}

export function injectContentIntoTemplate(htmlTemplate: string, data: CVData): string {
  let result = htmlTemplate;
  
  // Replace basic placeholders
  result = result.replace(/\{\{name\}\}/g, data.name);
  result = result.replace(/\{\{title\}\}/g, data.title);
  result = result.replace(/\{\{summary\}\}/g, data.summary);
  
  // Inject contact information
  const contactHTML = data.contact;
  result = result.replace(/\{\{contact\}\}/g, contactHTML);
  
  // Inject match score badge
  const matchScoreHTML = data.matchScore ? `
    <div class="match-score-badge ${data.matchScore >= 80 ? 'score-high' : data.matchScore >= 60 ? 'score-medium' : 'score-low'}">
      <span class="score">${data.matchScore}%</span>
      <span class="label">JD Match</span>
    </div>
  ` : '';
  result = result.replace(/\{\{matchScore\}\}/g, matchScoreHTML);
  
  // Inject experience section
  const experienceHTML = data.experience.map(job => `
    <div class="experience-item">
      <div class="job-header">
        <div>
          <div class="job-title">${escapeHtml(job.title)}</div>
          <div class="company">${escapeHtml(job.company)}</div>
        </div>
        <div class="date-location">
          <div>${escapeHtml(job.dates)}</div>
          <div>${escapeHtml(job.location)}</div>
        </div>
      </div>
      ${job.description ? `<p class="job-description">${escapeHtml(job.description)}</p>` : ''}
      <ul class="achievements">
        ${job.achievements.map(a => `<li><strong>${escapeHtml(a.category)}:</strong> ${escapeHtml(a.text)}</li>`).join('')}
      </ul>
    </div>
  `).join('');
  
  result = result.replace(/\{\{experience\}\}/g, experienceHTML);
  
  // Inject skills section
  const skillsHTML = `
    <div class="skills-grid">
      ${data.skills.map(category => `
        <div class="skill-category">
          <h3>${escapeHtml(category.category)}</h3>
          <ul>
            ${category.items.map(item => `<li>${escapeHtml(item)}</li>`).join('')}
          </ul>
        </div>
      `).join('')}
    </div>
  `;
  
  result = result.replace(/\{\{skills\}\}/g, skillsHTML);
  
  // Inject certifications section
  const certificationsHTML = data.certifications.length > 0 ? `
    <div class="certifications-grid">
      ${data.certifications.map(category => `
        <div class="cert-category">
          <h3>${escapeHtml(category.category)}</h3>
          <ul>
            ${category.items.map(item => `<li>${escapeHtml(item)}</li>`).join('')}
          </ul>
        </div>
      `).join('')}
    </div>
  ` : '';
  
  result = result.replace(/\{\{certifications\}\}/g, certificationsHTML);
  
  return result;
}

export function parseMarkdownToStructuredData(markdown: string, profile: any, matchScore?: number): CVData {
  // Extract name from profile or markdown
  const nameMatch = markdown.match(/^#\s+(.+)$/m);
  const name = nameMatch ? nameMatch[1] : profile.full_name || 'Troy Latter';
  
  // Extract title (subtitle)
  const titleMatch = markdown.match(/^\*\*(.+)\*\*$/m);
  const title = titleMatch ? titleMatch[1] : profile.professional_title || 'Chief Technology Officer';
  
  // Extract executive summary
  const summaryMatch = markdown.match(/##\s*Executive Summary\s*\n+(.+?)(?=\n##|\n\*\*|$)/s);
  const summary = summaryMatch ? summaryMatch[1].trim() : profile.summary || '';
  
  // Build contact string from actual profile data
  const location = profile.location || 'Sydney, NSW, Australia';
  const email = profile.contact_email || profile.email || 'troy.latter@example.com';
  const linkedin = profile.linkedin_url || 'https://linkedin.com/in/troylatter';
  
  const contact = `
    <span data-icon="📍">${escapeHtml(location)}</span>
    <span data-icon="📧"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></span>
    <span data-icon="🔗"><a href="${escapeHtml(linkedin)}" target="_blank">LinkedIn</a></span>
  `;
  
  // Parse experience sections
  const experienceMatches = markdown.matchAll(/###\s*(.+?)\s*\n\*\*(.+?)\*\*\s*\n(.+?)\s*\n([\s\S]+?)(?=###|##\s+(?:Core|Skills|Education)|$)/g);
  const experience: CVData['experience'] = [];
  
  for (const match of experienceMatches) {
    const [, title, company, dateLocation, content] = match;
    const [dates, location] = dateLocation.split('|').map(s => s.trim());
    
    // Extract description (first paragraph)
    const descMatch = content.match(/^(.+?)(?=\n-|\n\*|$)/s);
    const description = descMatch ? descMatch[1].trim() : '';
    
    // Extract achievements (bullet points)
    const achievementMatches = content.matchAll(/[-\*]\s+\*\*(.+?):\*\*\s+(.+?)(?=\n[-\*]|$)/gs);
    const achievements: Array<{ category: string; text: string }> = [];
    
    for (const achMatch of achievementMatches) {
      achievements.push({
        category: achMatch[1].trim(),
        text: achMatch[2].trim()
      });
    }
    
    experience.push({
      title: title.trim(),
      company: company.trim(),
      dates: dates || '',
      location: location || '',
      description,
      achievements
    });
  }
  
  // Parse skills
  const skills: CVData['skills'] = [];
  const skillsMatch = markdown.match(/##\s*(?:Core Competencies|Skills)\s*\n([\s\S]+?)(?=\n##|$)/);
  
  if (skillsMatch) {
    const skillCategories = skillsMatch[1].matchAll(/\*\*(.+?):\*\*\s+(.+?)(?=\n\*\*|$)/gs);
    
    for (const catMatch of skillCategories) {
      const category = catMatch[1].trim();
      const items = catMatch[2].split(',').map(s => s.trim()).filter(s => s);
      skills.push({ category, items });
    }
  }
  
  // Parse certifications
  const certifications: CVData['certifications'] = [];
  const certsMatch = markdown.match(/##\s*(?:Micro Credentials|Certifications?|Technical Certifications)\s*\n([\s\S]+?)(?=\n##|$)/);
  
  if (certsMatch) {
    const certCategories = certsMatch[1].matchAll(/\*\*(.+?):\*\*\s+(.+?)(?=\n\*\*|$)/gs);
    
    for (const catMatch of certCategories) {
      const category = catMatch[1].trim();
      const items = catMatch[2].split(',').map(s => s.trim()).filter(s => s);
      certifications.push({ category, items });
    }
  }
  
  return {
    name,
    title,
    contact,
    summary,
    experience,
    skills,
    certifications,
    matchScore
  };
}

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, m => map[m]);
}
