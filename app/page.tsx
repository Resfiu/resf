'use client';

import { useState, useEffect } from 'react';
import AnimatedGreetings, { GREETINGS } from '@/components/Hello';
import Hero from '@/components/Hero';
import About from '@/components/About';
import PreviousWork from '@/components/PreviousWork';
import Goodbye from '@/components/Goodbye';
import { ReactLenis } from '@studio-freight/react-lenis';

const lenisOptions = {
  lerp: 0.05,
  duration: 1.2,
  smoothTouch: false,
  smooth: true,
};

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [hasSeenGreeting, setHasSeenGreeting] = useState(true);

  useEffect(() => {
    const seen = sessionStorage.getItem('hasSeenGreeting');
    setHasSeenGreeting(!!seen);
  }, []);

  useEffect(() => {
    if (!hasSeenGreeting) {
      document.body.style.overflow = 'hidden';
    }
  }, [hasSeenGreeting]);

  useEffect(() => {
    if (currentIndex < GREETINGS.length && !hasSeenGreeting) {
      const timer = setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
      }, getDuration(currentIndex));

      return () => clearTimeout(timer);
    } else if (currentIndex >= GREETINGS.length && !hasSeenGreeting) {
      setIsComplete(true);
      sessionStorage.setItem('hasSeenGreeting', 'true');
    }
  }, [currentIndex, hasSeenGreeting]);

  const getDuration = (index: number): number => {
    if (index < GREETINGS.length - 1 && index !== 0) {
      return 200;
    } else {
      return 1000;
    }
  };

  return (
    <ReactLenis root options={lenisOptions}>
      {!hasSeenGreeting && !isComplete ? (
        <AnimatedGreetings currentIndex={currentIndex} isComplete={isComplete} />
      ) : (
        <>
          <Hero />
          <About />
          <PreviousWork />
          <Goodbye />
        </>
      )}
    </ReactLenis>
  );
}
