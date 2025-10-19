# Skills Visualizations

Interactive visualizations for analyzing and presenting your skill portfolio across multiple dimensions.

## Available Visualizations

### 1. Radar Chart (Skills Competency Radar)

**Purpose:** Compare your skill portfolio across domains against market benchmarks

**Best For:**
- Executive presentations and board meetings
- Career planning and gap analysis
- Recruitment and candidate profiling
- Proposal responses and RFPs

**How to Read:**
- **Blue filled area** = Your current skill competency
- **Green line** = Market average benchmark
- **Larger gaps** = Learning/growth opportunities
- **Uneven shape** = Specialization vs generalization

**Shape Interpretations:**
- **Balanced Circle**: Strong generalist with well-rounded skills
- **Spiky/Uneven**: Specialist with deep expertise in specific domains
- **Small Area**: Early career or transitioning roles
- **Large Area**: Experienced professional with broad capabilities

**Use Cases:**

#### For Executives
- Quick visual assessment of organizational capability
- Identify strategic skill gaps at a glance
- Export-ready graphics for presentations
- Benchmark team skills against market standards

#### For Career Planning
- See exactly where to focus learning efforts
- Track progress over time (compare historical snapshots)
- Identify emerging skill domains
- Balance specialization vs generalization strategies

#### For Recruiters
- Visual proof of competency breadth
- Easy comparison against role requirements
- Highlight unique strengths and specializations
- Professional visualization for candidate profiles

#### For Proposals
- Professional visualization for RFPs
- Demonstrate capability coverage to clients
- Show alignment with project needs
- Evidence-based competency claims

**Filtering Options:**
- Show all domains or select top 5/8
- Focus on specific skill categories
- Compare different time periods (future feature)

**Export Options:**
- PNG for presentations (coming soon)
- PDF for proposals (coming soon)
- SVG for design work (coming soon)

### 2. Bubble Chart (Coming Soon)

**Purpose:** Visualize skill positioning based on alignment score vs market demand

**Data Points:**
- X-axis: Market demand score
- Y-axis: Your alignment/proficiency score
- Bubble size: Number of projects/usage count
- Color: Domain category

**Strategic Quadrants:**
1. **High Demand, High Skill**: Competitive advantage
2. **High Demand, Low Skill**: Priority learning targets
3. **Low Demand, High Skill**: Niche expertise
4. **Low Demand, Low Skill**: Deprioritize or retire

### 3. Market vs Internal Heatmap (Coming Soon)

**Purpose:** Compare skill gaps across domains and job requirements

**Features:**
- X-axis: Skill domains
- Y-axis: Job descriptions or role requirements
- Cell color intensity: Skill gap (red = missing, green = strong)
- Interactive tooltips with detailed breakdowns

**Use Cases:**
- JD matching and gap analysis
- Team capability planning
- Recruitment needs assessment
- Training program prioritization

### 4. Skill Galaxy (Coming Soon)

**Purpose:** Force-directed network showing skill relationships and clustering

**Features:**
- Node size: Skill alignment score
- Node color: Domain category
- Edge thickness: Co-occurrence in projects
- Glow effect: Trending skills

**Use Cases:**
- Discover skill synergies
- Identify natural career paths
- Find complementary team members
- Understand skill ecosystem

## Data Sources

All visualizations pull from the `175+ Skills Matrix` table with the following key fields:

- `skill`: Skill name
- `domain`: Category (Cloud, AI/ML, Security, DevOps, etc.)
- `alignment_score`: Your proficiency (0-100)
- `market_demand_score`: Market benchmark (0-100)
- `skill_usage_count`: Number of CVs/projects featuring this skill
- `trend`: Rising, Stable, or Declining
- `recency_year`: Most recent usage

## Tips for Optimal Usage

### For Best Results
1. **Keep Skills Updated**: Regularly update your skills matrix from CVs and projects
2. **Add Context**: Include proof points and project examples for each skill
3. **Categorize Properly**: Ensure skills are assigned to the correct domains
4. **Track Trends**: Mark skills as Rising/Stable/Declining based on usage

### Common Pitfalls to Avoid
- Don't inflate alignment scores - be honest for accurate gap analysis
- Avoid too many domains - consolidate related skills (aim for 5-8 main domains)
- Update market demand scores periodically - the market evolves
- Don't ignore "soft" skills - leadership and communication matter

### Stakeholder-Specific Tips

**Executives:**
- Focus on strategic domains aligned with business goals
- Use for quarterly capability reviews
- Export for board presentations
- Compare team capabilities against competitors

**Career Planners:**
- Set 90-day learning goals based on radar gaps
- Track progress monthly
- Focus on high-demand, low-skill quadrants
- Balance specialization with breadth

**Recruiters:**
- Use radar chart in candidate presentations
- Compare multiple candidates visually
- Highlight unique skill combinations
- Match against JD requirements

## Interpretation Examples

### Example 1: Balanced Generalist
```
      Cloud: 85
    AI/ML: 78
 Security: 82
   DevOps: 80
Leadership: 75
```
**Interpretation**: Strong T-shaped professional with broad capabilities. Excellent for senior IC or management roles requiring cross-domain expertise.

### Example 2: Deep Specialist
```
      Cloud: 95
    AI/ML: 45
 Security: 50
   DevOps: 85
Leadership: 40
```
**Interpretation**: Cloud/DevOps specialist. Ideal for technical leadership in infrastructure. Consider building AI/ML skills for cloud-native ML platforms.

### Example 3: Emerging Professional
```
      Cloud: 60
    AI/ML: 55
 Security: 45
   DevOps: 50
Leadership: 35
```
**Interpretation**: Early-mid career. Focus on deepening 1-2 domains while building leadership skills. Consider specialization path.

## Future Enhancements

Planned features:
- Historical comparison (track progress over time)
- Team aggregation (visualize collective capabilities)
- Role requirement overlays (compare against specific JDs)
- AI-powered recommendations
- Competitive benchmarking
- Certification tracking integration

## Technical Details

**Built With:**
- Recharts (Radar, Bar, Area charts)
- React Query (data caching)
- Supabase (data source)
- Tailwind CSS (styling with semantic tokens)

**Performance:**
- Client-side caching for fast re-renders
- Lazy loading for heavy visualizations
- Optimized domain grouping algorithms
- Responsive design for all devices

## Support

For questions or feature requests:
1. Check the in-app tooltips and help text
2. Review this README
3. Contact the development team
