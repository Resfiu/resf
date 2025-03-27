'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const GREETINGS = [
  { text: 'Hola', language: 'Spanish' },
  { text: 'नमस्ते', language: 'Hindi' },
  { text: 'Ciao', language: 'Italian' },
  { text: '你好', language: 'Chinese' },
  { text: 'Bonjour', language: 'French' },
  { text: '안녕하세요', language: 'Korean' },
  { text: 'مرحبا', language: 'Arabic' },
  { text: 'Hallo', language: 'German' },
  { text: 'Hello!', language: 'English' },
];

interface AnimatedGreetingsProps {
  currentIndex: number;
  isComplete: boolean;
}

const AnimatedGreetings: React.FC<AnimatedGreetingsProps> = ({ currentIndex, isComplete }) => {
  if (isComplete) return null;

  return (
    <motion.div
      className="fixed inset-0 z-20 bg-[#f0f0f0] text-[#000]"
      initial={{ y: 0, borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
      exit={{
        y: '-100%',
        borderBottomLeftRadius: '100%',
        borderBottomRightRadius: '100%',
      }}
      transition={{ duration: 1, ease: 'easeInOut' }}
    >
      <div className="flex h-screen items-center justify-center">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="text-8xl"
        >
          {GREETINGS[currentIndex]?.text || ''}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AnimatedGreetings;
