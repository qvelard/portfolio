'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink, Github, Pause, Play } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Project } from '@/lib/projects';

interface ProjectsCarouselProps {
  projects: Project[];
}

const AUTOPLAY_MS = 6000;

export function ProjectsCarousel({ projects }: ProjectsCarouselProps) {
  const [[currentIndex, direction], setState] = useState<[number, number]>([0, 0]);
  const [isPlaying, setIsPlaying] = useState(true);

  const count = projects.length;

  const paginate = useCallback(
    (dir: number) => {
      setState(([prev]) => [(prev + dir + count) % count, dir]);
    },
    [count]
  );

  const goTo = (index: number) => {
    setState(([prev]) => [index, index > prev ? 1 : -1]);
  };

  // Auto-play
  useEffect(() => {
    if (!isPlaying || count <= 1) return;
    const interval = setInterval(() => paginate(1), AUTOPLAY_MS);
    return () => clearInterval(interval);
  }, [isPlaying, count, paginate, currentIndex]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') paginate(-1);
      if (e.key === 'ArrowRight') paginate(1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [paginate]);

  if (count === 0) return null;

  const project = projects[currentIndex];

  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 80 : -80 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -80 : 80 }),
  };

  return (
    <div
      className="relative"
      role="region"
      aria-roledescription="carousel"
      aria-label="Featured projects"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      <div className="relative overflow-hidden rounded-2xl border bg-card shadow-sm">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <Card className="border-0 shadow-none bg-transparent">
              <div className="grid md:grid-cols-2">
                {/* Project Image — framed, never cropped */}
                <div className="relative h-64 sm:h-80 md:h-auto md:min-h-[440px] overflow-hidden bg-gradient-to-br from-muted/60 to-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 h-full w-full object-contain p-6 sm:p-8"
                  />
                </div>

                {/* Project Content */}
                <CardContent className="flex flex-col justify-center gap-6 p-8 md:p-10">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>{project.date}</span>
                      <span aria-hidden>•</span>
                      <span>{project.role}</span>
                    </div>

                    <h3 className="text-2xl font-bold leading-tight">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed line-clamp-4">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 4}
                      </Badge>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3">
                    <Button asChild>
                      <Link href={`/projects/${project.slug}`}>
                        View Details
                      </Link>
                    </Button>

                    {project.github && (
                      <Button asChild variant="outline" size="sm">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                    )}

                    {project.demo && (
                      <Button asChild variant="outline" size="sm">
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </div>
            </Card>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        {count > 1 && (
          <>
            <Button
              variant="outline"
              size="icon"
              aria-label="Previous project"
              className="absolute left-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background z-10"
              onClick={() => paginate(-1)}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              aria-label="Next project"
              className="absolute right-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background z-10"
              onClick={() => paginate(1)}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </>
        )}
      </div>

      {/* Controls: indicators + play/pause + counter */}
      {count > 1 && (
        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            type="button"
            aria-label={isPlaying ? 'Pause autoplay' : 'Play autoplay'}
            onClick={() => setIsPlaying((p) => !p)}
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </button>

          <div className="flex items-center gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to project ${index + 1}`}
                aria-current={index === currentIndex}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-6 bg-primary'
                    : 'w-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                onClick={() => goTo(index)}
              />
            ))}
          </div>

          <span className="text-sm tabular-nums text-muted-foreground">
            {currentIndex + 1} / {count}
          </span>
        </div>
      )}
    </div>
  );
}
