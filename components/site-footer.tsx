import Link from 'next/link';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/alexjohnson',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/alexjohnson',
    icon: Linkedin,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/alexjohnsondev',
    icon: Twitter,
  },
  {
    name: 'Email',
    href: 'mailto:alex@alexjohnson.dev',
    icon: Mail,
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 pl-8 lg:pl-16">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row md:items-start">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <Link href="/v1" className="font-bold text-lg">
              Alex Johnson
            </Link>
            <p className="text-sm text-muted-foreground">
              Building exceptional digital experiences
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  <Icon className="h-5 w-5" />
                  <span className="sr-only">{social.name}</span>
                </a>
              );
            })}
          </div>
        </div>
        
        <div className="mt-6 border-t pt-6 text-center text-sm text-muted-foreground md:text-left">
          <p>© {new Date().getFullYear()} Alex Johnson. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}