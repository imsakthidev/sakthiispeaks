"use client";
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTheme } from 'next-themes';

export default function FloatingOrbs() {
  const { scrollY } = useScroll();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => setMounted(true), []);
  
  const y1 = useTransform(scrollY, [0, 3000], [0, 300]);
  const y2 = useTransform(scrollY, [0, 3000], [0, -300]);

  const isLight = mounted && resolvedTheme === 'light';
  const purpleOp = isLight ? 0.3 : 0.15;
  const blueOp = isLight ? 0.2 : 0.1;

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: -1 }}>
      <motion.div
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-10%',
          width: '50vw',
          height: '50vw',
          borderRadius: '50%',
          background: `radial-gradient(circle, rgba(124, 58, 237, ${purpleOp}) 0%, rgba(124, 58, 237, 0) 70%)`,
          filter: 'blur(60px)',
          y: y1
        }}
      />
      
      <motion.div
        style={{
          position: 'absolute',
          bottom: '-20%',
          left: '-10%',
          width: '60vw',
          height: '60vw',
          borderRadius: '50%',
          background: `radial-gradient(circle, rgba(59, 130, 246, ${blueOp}) 0%, rgba(59, 130, 246, 0) 70%)`,
          filter: 'blur(60px)',
          y: y2
        }}
      />
    </div>
  );
}
