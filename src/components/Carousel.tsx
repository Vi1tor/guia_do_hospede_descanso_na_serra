import React, { useEffect, useState } from 'react';

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
  interval = 5000,
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
    <div className={`overflow-hidden ${fill ? '' : 'relative'} ${className}`}>
      <div className={fill ? 'absolute inset-0 w-full h-full' : 'relative w-full h-full'}>
        {images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              i === index ? 'opacity-100' : 'opacity-0'
            } ${imageClassName}`}
          />
        ))}
      </div>

      {showDots && images.length > 1 && (
        <div className="absolute bottom-4 sm:bottom-8 left-0 right-0 flex justify-center gap-2 z-20">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Ver foto ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === index ? 'w-6 bg-white' : 'w-2 bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
