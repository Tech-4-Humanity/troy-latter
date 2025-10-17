# Troy Latter Executive Portfolio

A comprehensive digital portfolio showcasing executive leadership, innovation strategies, and AI product management expertise.

## Project Overview

This portfolio demonstrates deep experience in:
- AI Product Management & Strategy
- Executive Leadership & Transformation
- Innovation Frameworks & Implementation
- Enterprise Architecture & Cloud Platforms
- Defense & Security Solutions

## Features

### Core Portfolio Sections
- **Executive Profile**: Leadership background and core competencies
- **Innovation Journey**: Framework-driven approach to organizational transformation
- **Strategic Projects**: Case studies and implementation examples
- **Technical Whitepapers**: Deep-dive research and analysis
- **Industry Expertise**: Sector-specific knowledge and applications

### Interactive Microsites
- **Envato AI Product Strategy**: Comprehensive strategy for creative marketplace AI integration
- **Interview Preparation**: Structured presentations for specific opportunities
- **Lab3 & Agentforce**: Targeted solutions for specialized platforms

### AI-Powered Features
- **Intelligent Chatbot**: Voice and text-enabled assistant for portfolio exploration
- **AI CV Generator**: Automated CV tailoring based on job descriptions
- **Dynamic Content**: Context-aware information delivery
- **Real-time Analytics**: Usage tracking and performance metrics

## Technology Stack

### Frontend
- **React 18**: Modern component architecture
- **TypeScript**: Type-safe development
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first styling framework
- **shadcn/ui**: Component library with design system

### Backend & Infrastructure
- **Supabase**: Backend as a service
  - Authentication & user management
  - PostgreSQL database
  - Real-time subscriptions
  - Edge functions for AI/API integrations
- **Vercel**: Deployment and hosting

### AI & Integrations
- **OpenAI**: Natural language processing
- **HeyGen**: AI avatar generation
- **Speech Recognition**: Voice interaction capabilities
- **Embedding Search**: RAG (Retrieval Augmented Generation)

## Envato Microsite Style & Conventions

The Envato microsite follows specific design and content conventions:

### Typography
- **No em dashes**: Use spaced hyphens " - " instead of em dashes (—)
- **En dashes for ranges**: Keep en dashes (–) for numeric ranges only (e.g., $100–200M)
- **Consistent spacing**: Ensure natural reading flow without double spaces

### Design Tokens
- **Envato Green Palette**: Primary brand colors defined in tailwind.config.ts
- **Gradient System**: Envato-specific gradients for visual hierarchy
- **Component Theming**: All UI components use Envato semantic tokens

### Content Structure
Current Envato microsite routes:
- `/microsites/envato` - Main overview and strategic paths
- `/microsites/envato/summary` - Context, messaging, and strategic analysis
- `/microsites/envato/assets` - Asset strategy and market expansion
- `/microsites/envato/orchestrator` - AI Product Management framework

### Content Management
Content lives in dedicated data files and components within `src/pages/microsites/envato/`
Edit content directly in React components or import from curriculum data files.

## Sitemap Management

When adding new pages to the project, update `public/sitemap.xml`:
- Include full canonical URLs
- Set appropriate changefreq (weekly/monthly) based on content type
- Assign priority scores (0.7-1.0) based on page importance
- No URL fragments or anchors in sitemap entries

## Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # shadcn/ui components
│   ├── home/            # Homepage sections
│   └── responsibilities/ # Role-specific components
├── pages/               # Route components
│   ├── microsites/      # Specialized mini-sites
│   │   ├── envato/      # Envato strategy microsite
│   │   ├── interview-prep/ # Interview presentations
│   │   └── lab3/        # Lab3 solution architecture
│   └── [various pages] # Portfolio sections
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
└── integrations/        # External service integrations
    └── supabase/        # Database and auth
```

### Key Routing Structure

#### Main Portfolio
- `/` - Homepage with overview
- `/about-troy` - Executive biography
- `/core-competencies` - Skills and expertise
- `/innovation-journey` - Transformation methodology
- `/strategic-projects` - Implementation case studies
- `/whitepapers` - Technical documentation
- `/tools/cv-generator` - AI-powered CV generation tool
- `/faqs` - Frequently asked questions

#### Microsites
- `/microsites/envato` - AI Product Strategy for Creative Marketplace
- `/microsites/envato/orchestrator` - Detailed orchestration framework
- `/microsites/envato/summary` - Context and positioning
- `/microsites/interview-prep` - Structured interview presentations
- `/microsites/lab3` - Specialized platform strategy
- `/microsites/agentforce` - Salesforce ecosystem solutions

## Database Schema

### Core Tables
- `envato_strategy_notes` - User notes and annotations
- `resource_access_requests` - Gated content access tracking
- Various data tables for portfolio content and analytics

### Row Level Security (RLS)
- User-specific data isolation
- Public read access for portfolio content
- Secure handling of contact information

## Development

### Prerequisites
- Node.js 18+ with npm/yarn
- Git for version control

### Local Setup
```bash
# Clone the repository
git clone [repository-url]
cd troy-latter-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

### Environment Setup
The project uses Supabase for backend services. Configuration is handled through:
- `src/integrations/supabase/client.ts` - Database connection
- Environment variables for sensitive keys (managed via deployment platform)

### Build and Deploy
```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## Content Management

### Portfolio Content
Content is structured through:
- Static data files (`src/pages/microsites/*/curriculum.ts`)
- Database-stored user interactions
- Dynamic content generation for AI features

### Microsite Architecture
Each microsite follows a consistent pattern:
- `Index.tsx` - Main landing page
- `components/` - Microsite-specific components
- Data files for structured content
- Deep-linking support with anchor navigation

## AI Features

### Chatbot Integration
- RAG-powered responses using embedded portfolio content
- Voice recognition and synthesis
- Context-aware conversations
- Integration with Supabase for conversation history

### Content Intelligence
- Semantic search across all portfolio content
- Dynamic content recommendations
- Usage analytics and optimization

## Performance & Analytics

### Optimization
- Lazy loading for images and components
- Code splitting by route
- Optimized bundle sizes
- CDN delivery for static assets

### Monitoring
- Real-time analytics via Supabase
- Performance tracking
- User engagement metrics
- Error monitoring and reporting

## Security & Compliance

### Data Protection
- GDPR-compliant data handling
- Secure authentication flows
- Encrypted data storage
- Privacy-focused analytics

### Access Control
- Role-based permissions
- Gated content protection
- Secure API endpoints
- Content provenance tracking

## Deployment

The application is deployed on Vercel with:
- Automatic deployments from main branch
- Preview deployments for pull requests
- Environment variable management
- Custom domain configuration

### Production URL
[Production deployment URL]

## License

This portfolio is proprietary and confidential. All rights reserved.

## Contact

For technical inquiries or collaboration opportunities:
- Email: [contact information]
- LinkedIn: [profile link]
- Portfolio: [production URL]

---

*Built with modern web technologies to showcase executive leadership in the AI and innovation space.*