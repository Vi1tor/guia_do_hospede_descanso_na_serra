/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { HomeScreen } from './components/HomeScreen';
import { MenuScreen } from './components/MenuScreen';
import { CategoryScreen } from './components/CategoryScreen';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { CATEGORIES } from './data';

export type ScreenType = 'home' | 'menu' | 'category';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('home');
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);

  const navigateTo = (screen: ScreenType, categoryId?: string) => {
    if (categoryId) setActiveCategoryId(categoryId);
    setCurrentScreen(screen);
  };

  const activeCategory = CATEGORIES.find(c => c.id === activeCategoryId) || null;

  return (
    <div className="relative w-full min-h-[100dvh] bg-surface-50 overflow-hidden flex flex-col">
      <AnimatePresence mode="wait">
        {currentScreen === 'home' && (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-0 z-10"
          >
            <HomeScreen onEnter={() => navigateTo('menu')} />
          </motion.div>
        )}

        {currentScreen === 'menu' && (
          <motion.div
            key="menu"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute inset-0 z-10 bg-surface-50 overflow-y-auto"
          >
            <MenuScreen 
              onSelectCategory={(id) => navigateTo('category', id)} 
              onBack={() => navigateTo('home')} 
            />
          </motion.div>
        )}

        {currentScreen === 'category' && activeCategory && (
          <motion.div
            key={`category-${activeCategory.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute inset-0 z-20 bg-surface-50 overflow-y-auto"
          >
            <CategoryScreen 
              category={activeCategory} 
              onBack={() => navigateTo('menu')}
              onHome={() => navigateTo('home')}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <FloatingWhatsApp />
    </div>
  );
}

