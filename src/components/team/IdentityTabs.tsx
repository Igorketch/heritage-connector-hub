import { useRef, KeyboardEvent } from 'react';

export interface IdentityTab {
  id: string;
  label: string;
}

interface IdentityTabsProps {
  tabs: IdentityTab[];
  activeTab: string | null;
  onChange: (id: string) => void;
  ariaLabel: string;
  panelId?: string;
}

export const IdentityTabs = ({ tabs, activeTab, onChange, ariaLabel, panelId }: IdentityTabsProps) => {
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  const focusTab = (index: number) => {
    const len = tabs.length;
    const next = (index + len) % len;
    refs.current[next]?.focus();
    onChange(tabs[next].id);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        e.preventDefault();
        focusTab(index + 1);
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        e.preventDefault();
        focusTab(index - 1);
        break;
      case 'Home':
        e.preventDefault();
        focusTab(0);
        break;
      case 'End':
        e.preventDefault();
        focusTab(tabs.length - 1);
        break;
    }
  };

  return (
    <div
      role="tablist"
      aria-label={ariaLabel}
      aria-orientation="horizontal"
      className="flex flex-wrap justify-center gap-3 mb-16"
    >
      {tabs.map((cat, index) => {
        const isActive = activeTab === cat.id;
        return (
          <button
            key={cat.id}
            ref={(el) => (refs.current[index] = el)}
            role="tab"
            type="button"
            id={`tab-${cat.id}`}
            aria-selected={isActive}
            aria-controls={panelId}
            tabIndex={isActive || (activeTab === null && index === 0) ? 0 : -1}
            onClick={() => onChange(cat.id)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 border focus:outline-none focus-visible:ring-2 focus-visible:ring-heritage-gold focus-visible:ring-offset-2 focus-visible:ring-offset-heritage-earth min-h-11 ${
              isActive
                ? 'bg-heritage-gold text-heritage-earth border-heritage-gold shadow-lg shadow-heritage-gold/20'
                : 'bg-heritage-earth/50 text-heritage-cream/70 border-heritage-gold/30 hover:border-heritage-gold/60 hover:text-heritage-cream'
            }`}
          >
            {cat.label}
          </button>
        );
      })}
    </div>
  );
};
