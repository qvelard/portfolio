import Link from 'next/link';
import { Github, Linkedin, X, Mail } from 'lucide-react';

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/qvelard',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    href: 'www.linkedin.com/in/quentin-velard',
    icon: Linkedin,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/quentinvelard',
    icon: X,
  },
  {
    name: 'Email',
    href: 'mailto:quentin.velard1@gmail.com',
    icon: Mail,
  },
  {
    name: 'Hugging Face',
    href: 'https://huggingface.co/qvelard',
    icon: () => <span style={{fontSize: 20}}>🤗</span>,
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-3 sm:px-8 lg:px-16">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row md:items-start">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <Link href="/v1" className="font-bold text-lg">
              Quentin Velard
            </Link>
            <p className="text-sm text-muted-foreground">
              Data Scientist
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
          <p>© {new Date().getFullYear()} Quentin Velard. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}