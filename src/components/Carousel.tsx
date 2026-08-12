import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

interface Props {
  images: string[];
  interval?: number;
  className?: string;
  imageClassName?: string;
  showDots?: boolean;
  fill?: boolean;
}

export function Carousel({
  images,
  interval = 4500,
  className = '',
  imageClassName = '',
  showDots = true,
  fill = false,
}: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setIndex(i => (i + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  if (images.length === 0) return null;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <AnimatePresence mode="sync">
        <motion.img
          key={images[index]}
          src={images[index]}
          alt=""
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: 'easeInOut' }}
          className={`${fill ? 'absolute inset-0 w-full h-full' : 'w-full h-full'} object-cover ${imageClassName}`}
        />
      </AnimatePresence>

      {showDots && images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Ver foto ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? 'w-5 bg-white' : 'w-1.5 bg-white/50'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
