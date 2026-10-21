import React, { createContext, useContext, useEffect, useState } from 'react';

export type ColorPalette = 'emerald' | 'amber' | 'violet' | 'slate';
export type DisplayMode = 'dark' | 'light';

export interface ThemeOption {
  id: ColorPalette;
  name: string;
  dotColor: string;
  description: string;
}

export const THEME_OPTIONS: ThemeOption[] = [
  { id: 'emerald', name: 'Emerald & Mint', dotColor: '#10B981', description: 'Fresh Modern High-Tech' },
  { id: 'amber', name: 'Titanium & Amber', dotColor: '#F59E0B', description: 'Warm Luxury Studio' },
  { id: 'violet', name: 'Cosmic Violet', dotColor: '#8B5CF6', description: 'Deep Space Creative' },
  { id: 'slate', name: 'Monochrome Slate', dotColor: '#94A3B8', description: 'Swiss Minimalist' },
];

interface ThemeContextType {
  colorPalette: ColorPalette;
  mode: DisplayMode;
  isDark: boolean;
  setColorPalette: (palette: ColorPalette) => void;
  toggleMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [colorPalette, setColorPaletteState] = useState<ColorPalette>(() => {
    const saved = localStorage.getItem('portfolio-color-palette');
    return (saved === 'emerald' || saved === 'amber' || saved === 'violet' || saved === 'slate')
      ? saved
      : 'emerald';
  });

  const [mode, setMode] = useState<DisplayMode>(() => {
    const saved = localStorage.getItem('portfolio-mode');
    return (saved === 'light' || saved === 'dark') ? saved : 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    
    // Remove previous theme classes
    root.classList.remove('theme-emerald', 'theme-amber', 'theme-violet', 'theme-slate');
    root.classList.add(`theme-${colorPalette}`);

    // Update light/dark class
    root.classList.remove('light', 'dark');
    root.classList.add(mode);

    localStorage.setItem('portfolio-color-palette', colorPalette);
    localStorage.setItem('portfolio-mode', mode);
  }, [colorPalette, mode]);

  const setColorPalette = (palette: ColorPalette) => {
    setColorPaletteState(palette);
  };

  const toggleMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider
      value={{
        colorPalette,
        mode,
        isDark: mode === 'dark',
        setColorPalette,
        toggleMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
