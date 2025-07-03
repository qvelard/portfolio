'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Code, Palette, Zap } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ContactForm } from '@/components/contact-form';
import { ProjectsCarousel } from '@/components/projects-carousel';
import { getFeaturedProjects } from '@/lib/projects';

const skillCategories = [
  {
    category: 'Frontend',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    color: 'bg-blue-500/10 text-blue-700 dark:text-blue-300'
  },
  {
    category: 'Backend',
    technologies: ['Node.js', 'PostgreSQL', 'MongoDB', 'Redis'],
    color: 'bg-green-500/10 text-green-700 dark:text-green-300'
  },
  {
    category: 'DevOps & Cloud',
    technologies: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform'],
    color: 'bg-orange-500/10 text-orange-700 dark:text-orange-300'
  },
  {
    category: 'Tools & Languages',
    technologies: ['Python', 'FastAPI', 'PyTorch', 'Tensorflow', 'Jax','Langchain', 'Vercel', 'R', 'Git', 'VS Code', 'Figma'],
    color: 'bg-purple-500/10 text-purple-700 dark:text-purple-300'
  }
];

const features = [
  {
    icon: Code,
    title: 'Data Science & Machine Learning',
    description: 'Building predictive models, data analysis, NLP, computer vision, and automating AI pipelines for real-world applications.',
  },
  {
    icon: Palette,
    title: 'Full-Stack Development',
    description: 'Designing and developing robust web and mobile applications, from backend APIs to user interfaces, with a focus on performance and user experience.',
  },
  {
    icon: Zap,
    title: 'Project Management & Communication',
    description: 'Leading technical projects, writing clear documentation, scientific communication, and collaborating effectively with multidisciplinary teams.',
  },
];

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();

  return (
    <div className="flex flex-col gap-20 py-10">
      {/* Hero Section */}
      <section className="container pl-8 lg:pl-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <motion.h1 
                className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Quentin Velard
              </motion.h1>
              <motion.p 
                className="text-xl text-muted-foreground sm:text-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Data Scientist
              </motion.p>
            </div>
            
            <motion.p 
              className="text-lg text-muted-foreground max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              I am a data scientist with a passion for building scalable, user-centric applications.
            </motion.p>
            
            <motion.div 
              className="flex flex-col gap-4 sm:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button asChild size="lg" className="group">
                <Link href="/v1/projects">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="https://qvelard.github.io/portfolio/v1/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative lg:order-first"
          >
            <div className="relative mx-auto w-64 h-64 sm:w-80 sm:h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full opacity-20 blur-3xl"></div>
              <img
                src="https://qvelard.github.io/portfolio/v1/pdp.jpg"
                alt="Quentin Velard"
                className="relative w-full h-full object-cover rounded-full border-4 border-background shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="container lg:pl-4 lg:pr-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              I am a data scientist with a passion for building scalable, user-centric applications.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Technical Skills */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-center">Technical Expertise</h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {skillCategories.map((skillGroup, index) => (
                <motion.div
                  key={skillGroup.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${skillGroup.color}`}>
                    {skillGroup.category}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary" 
                        className="text-xs hover:bg-primary/10 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Featured Projects Carousel */}
      <section className="container pl-8 lg:pl-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of my recent work showcasing different technologies and problem-solving approaches.
            </p>
          </div>

          <ProjectsCarousel projects={featuredProjects} />

          <div className="text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/v1/projects">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="container pl-8 lg:pl-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Get in Touch</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? I&apos;d love to hear about it. Let&apos;s discuss how we can 
              work together to bring your ideas to life.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <ContactForm />
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button asChild variant="outline" size="lg">
              <a href="mailto:quentin@velard.fr">
                <Mail className="mr-2 h-4 w-4" />
                quentin@velard.fr
              </a>
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}