
import React from 'react';
import { useInView } from '../../hooks/useInView';
import './AnimatedSection.css';

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function AnimatedSection({ children, className = '', delay = 0 }: Props) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={`animated-section ${inView ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
