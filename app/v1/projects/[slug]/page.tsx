import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github, Calendar, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { getProjectBySlug, projects } from '@/lib/projects';
import { Breadcrumb } from '@/components/breadcrumb';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} - Quentin Velard`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.image],
    },
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="container py-10">
      <div className="space-y-8">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: 'Home', href: '/public/v1' },
            { label: 'Projects', href: '/public/v1/projects' },
            { label: project.title, href: `/public/v1/projects/${project.slug}` },
          ]}
        />

        {/* Back button */}
        <Button asChild variant="ghost" className="mb-6">
          <Link href="/v1/projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>

        {/* Project Header */}
        <div className="container mx-auto px-3 sm:px-8 lg:px-16">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              {project.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{project.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{project.role}</span>
              </div>
            </div>

            <p className="text-lg text-muted-foreground max-w-3xl">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              {project.github && (
                <Button asChild>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View Source
                  </a>
                </Button>
              )}
              {project.demo && (
                <Button asChild variant="outline">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              )}
              {project.blog && (
                <Button asChild variant="outline">
                  <a
                    href={project.blog}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read Article
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>



        {/* Project Details */}
        <Card>
          <CardContent className="container mx-auto px-3 sm:px-8 lg:px-16">
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Project Overview</h2>
              {project.longDescription.split('\n\n').map((paragraph, index) => {
                const trimmedParagraph = paragraph.trim();
                
                // Check if paragraph is a heading (starts with # or contains specific patterns)
                if (trimmedParagraph.startsWith('##') || trimmedParagraph.startsWith('🗝️') || trimmedParagraph.startsWith('🔧') || trimmedParagraph.startsWith('📈') || trimmedParagraph.startsWith('🌟') || trimmedParagraph.startsWith('🚧')) {
                  return (
                    <h3 key={index} className="text-lg font-semibold mb-3 mt-6 text-foreground">
                      {trimmedParagraph.replace(/^[#🗝️🔧📈🌟🚧]+ /, '')}
                    </h3>
                  );
                }
                
                // Check if paragraph is a subheading (starts with ### or specific patterns)
                if (trimmedParagraph.startsWith('###') || trimmedParagraph.startsWith('📋') || trimmedParagraph.startsWith('⚡') || trimmedParagraph.startsWith('🎯')) {
                  return (
                    <h4 key={index} className="text-base font-medium mb-2 mt-4 text-foreground">
                      {trimmedParagraph.replace(/^[#📋⚡🎯]+ /, '')}
                    </h4>
                  );
                }
                
                // Check if paragraph is a code block or technical content
                if (trimmedParagraph.includes('//') || trimmedParagraph.includes('{') || trimmedParagraph.includes('}')) {
                  return (
                    <pre key={index} className="bg-muted p-3 rounded-md text-sm font-mono mb-4 overflow-x-auto">
                      <code>{trimmedParagraph}</code>
                    </pre>
                  );
                }
                
                // Regular paragraph
                if (trimmedParagraph.length > 0) {
                  return (
                    <p key={index} className="mb-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
                      {trimmedParagraph}
                    </p>
                  );
                }
                
                return null;
              })}
            </div>
          </CardContent>
        </Card>

        {/* Navigation to other projects */}
        <Separator />
        
        <div className="text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/v1/projects">
              View All Projects
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}