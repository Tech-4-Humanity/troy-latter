import { supabase } from '@/integrations/supabase/client';

interface PageContent {
  title: string;
  content: string;
  url: string;
}

// Basic site content extraction for initial knowledge base
const sitePages: PageContent[] = [
  {
    title: "Troy's Executive Profile",
    url: "/",
    content: `Troy is a senior innovation and AI executive with extensive experience in digital transformation, 
    artificial intelligence implementation, and strategic innovation leadership. He has a proven track record 
    of driving organizational change and implementing cutting-edge technology solutions across various industries.
    
    His expertise spans AI strategy development, digital transformation initiatives, innovation frameworks, 
    and executive leadership. Troy has successfully led teams through complex technological transitions and 
    has extensive experience in developing and executing AI adoption strategies for large enterprises.
    
    Key areas of expertise include:
    - AI and Machine Learning Strategy
    - Digital Transformation Leadership
    - Innovation Management
    - Executive Advisory and Consulting
    - Organizational Change Management
    - Technology Implementation
    - Strategic Planning and Execution`
  },
  {
    title: "Core Competencies",
    url: "/core-competencies",
    content: `Troy's core competencies span across multiple domains of technology leadership and innovation:
    
    Strategic AI Implementation:
    - Developing enterprise AI strategies
    - Leading AI transformation initiatives
    - Implementing machine learning solutions
    - AI ethics and governance
    
    Digital Transformation:
    - Organizational change management
    - Technology adoption strategies
    - Process automation and optimization
    - Digital culture development
    
    Innovation Leadership:
    - Innovation framework development
    - Creating innovation ecosystems
    - Startup and enterprise collaboration
    - Emerging technology evaluation
    
    Executive Leadership:
    - Cross-functional team leadership
    - Stakeholder management
    - Strategic decision making
    - Performance optimization`
  },
  {
    title: "Innovation Frameworks",
    url: "/innovation-frameworks",
    content: `Troy has developed and implemented various innovation frameworks throughout his career:
    
    1. The Innovation Maturity Model - A comprehensive framework for assessing and improving 
    organizational innovation capabilities across multiple dimensions.
    
    2. AI Readiness Assessment - A structured approach to evaluating organizational readiness 
    for AI implementation, covering technical, cultural, and strategic factors.
    
    3. Digital Transformation Roadmap - A methodology for planning and executing digital 
    transformation initiatives with measurable outcomes.
    
    4. Innovation Ecosystem Design - Framework for creating collaborative environments 
    that foster innovation between internal teams and external partners.
    
    These frameworks have been successfully applied across multiple organizations, 
    resulting in improved innovation outcomes and accelerated technology adoption.`
  },
  {
    title: "Leadership Style and Approach",
    url: "/leadership-style",
    content: `Troy's leadership style is characterized by:
    
    Collaborative Leadership:
    - Building consensus across diverse stakeholders
    - Facilitating cross-functional collaboration
    - Creating inclusive decision-making processes
    
    Data-Driven Decision Making:
    - Using analytics to inform strategic choices
    - Implementing measurement frameworks
    - Continuous improvement through feedback loops
    
    Innovation-Focused Approach:
    - Encouraging experimentation and learning
    - Creating safe spaces for failure and iteration
    - Promoting creative problem-solving
    
    Transformational Leadership:
    - Inspiring teams toward ambitious goals
    - Developing future leaders
    - Creating lasting organizational change
    
    Troy believes in empowering teams, fostering innovation, and driving results through 
    collaborative leadership and strategic thinking.`
  }
];

export const ingestBasicSiteContent = async () => {
  console.log('Starting site content ingestion...');
  
  for (const page of sitePages) {
    try {
      const { data, error } = await supabase.functions.invoke('ingest-content', {
        body: {
          title: page.title,
          content: page.content,
          sourceType: 'site',
          sourceUrl: page.url,
        },
      });

      if (error) {
        console.error(`Error ingesting ${page.title}:`, error);
      } else {
        console.log(`Successfully ingested: ${page.title}`, data);
      }
    } catch (error) {
      console.error(`Failed to ingest ${page.title}:`, error);
    }
  }
  
  console.log('Site content ingestion completed');
};

// Function to ingest LinkedIn articles from Supabase storage
export const ingestLinkedInArticles = async () => {
  try {
    console.log('Fetching LinkedIn articles from storage...');
    
    const { data: files, error: listError } = await supabase.storage
      .from('linkedin articles')
      .list();

    if (listError) {
      console.error('Error listing LinkedIn articles:', listError);
      return;
    }

    console.log(`Found ${files?.length || 0} files in LinkedIn articles bucket`);

    if (files) {
      for (const file of files) {
        try {
          const { data: fileData, error: downloadError } = await supabase.storage
            .from('linkedin articles')
            .download(file.name);

          if (downloadError) {
            console.error(`Error downloading ${file.name}:`, downloadError);
            continue;
          }

          const content = await fileData.text();
          
          const { data, error } = await supabase.functions.invoke('ingest-content', {
            body: {
              title: file.name.replace(/\.(txt|md|html)$/, ''),
              content: content,
              sourceType: 'linkedin_article',
              filePath: `linkedin articles/${file.name}`,
            },
          });

          if (error) {
            console.error(`Error ingesting ${file.name}:`, error);
          } else {
            console.log(`Successfully ingested LinkedIn article: ${file.name}`, data);
          }
        } catch (error) {
          console.error(`Failed to process ${file.name}:`, error);
        }
      }
    }
  } catch (error) {
    console.error('Error in LinkedIn articles ingestion:', error);
  }
};

// Combined ingestion function
export const ingestAllContent = async () => {
  await ingestBasicSiteContent();
  await ingestLinkedInArticles();
};