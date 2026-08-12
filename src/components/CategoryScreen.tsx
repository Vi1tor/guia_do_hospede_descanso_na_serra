import React, { useEffect } from 'react';
import { ArrowLeft, Home } from 'lucide-react';
import { CategoryData } from '../data';
import { motion } from 'motion/react';

interface Props {
  category: CategoryData;
  onBack: () => void;
  onHome: () => void;
}

export function CategoryScreen({ category, onBack, onHome }: Props) {
  // Scroll to top when category changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [category]);

  const Icon = category.icon;

  return (
    <div className="flex flex-col min-h-full pb-20">
      {/* Header */}
      <header className="sticky top-0 z-20 bg-surface-50/90 backdrop-blur-md border-b border-surface-200 px-4 py-4 flex items-center justify-between">
        <button 
          onClick={onBack}
          className="p-2 -ml-2 text-primary-900 hover:bg-surface-100 rounded-full transition-colors flex items-center gap-1"
          aria-label="Voltar"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        
        <h1 className="font-serif text-lg text-primary-900 font-semibold absolute left-1/2 -translate-x-1/2 text-center w-[200px] truncate">
          {category.title}
        </h1>
        
        <button 
          onClick={onHome}
          className="p-2 -mr-2 text-primary-900 hover:bg-surface-100 rounded-full transition-colors"
          aria-label="Ir para início"
        >
          <Home className="w-5 h-5" />
        </button>
      </header>

      {/* Content */}
      <main className="flex-1 px-4 py-6 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white rounded-full shadow-sm border border-surface-100 flex items-center justify-center text-primary-800">
              <Icon className="w-8 h-8 stroke-[1.5]" />
            </div>
          </div>

          <h2 className="text-center font-serif text-2xl text-primary-900 mb-8 font-medium">
            {category.title}
          </h2>

          <div className="max-w-md md:max-w-xl mx-auto">
            {category.content}
          </div>
        </motion.div>
      </main>
    </div>
  );
}
