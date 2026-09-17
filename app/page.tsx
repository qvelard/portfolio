'use client';

import { motion } from 'framer-motion';
import { ParticleField } from '@/components/particle-field';

export default function HomePage() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background">
      <ParticleField />

      <motion.div
        initial={{ opacity: 0, scale: 0.92, filter: 'blur(12px)' }}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="relative select-none"
      >
        <motion.div
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg
            viewBox="0 0 200 120"
            role="img"
            aria-label="QV"
            className="h-40 w-auto sm:h-56 lg:h-64"
          >
            <defs>
              <linearGradient id="qv-stroke" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#e2e8f0" />
                <stop offset="100%" stopColor="#64748b" />
              </linearGradient>
            </defs>
            <text
              x="50%"
              y="50%"
              dominantBaseline="central"
              textAnchor="middle"
              fontFamily="var(--font-inter, ui-sans-serif, system-ui, sans-serif)"
              fontSize="96"
              fontWeight="700"
              letterSpacing="2"
              fill="url(#qv-stroke)"
            >
              QV
            </text>
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
}
