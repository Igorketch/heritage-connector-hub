import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import mandjaraLogo from '@/assets/mandjara-logo.png';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTeamDropdownOpen, setIsTeamDropdownOpen] = useState(false);
  const [isRessourcesDropdownOpen, setIsRessourcesDropdownOpen] = useState(false);
  const [isMobileTeamOpen, setIsMobileTeamOpen] = useState(false);
  const [isMobileRessourcesOpen, setIsMobileRessourcesOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const navLinks = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.history'), href: '/context' },
    { name: t('nav.peoples'), href: '/peoples' },
    { name: t('nav.mission'), href: '/mission' },
    { name: t('nav.values'), href: '/values' },
    { name: t('nav.contact'), href: '/contact' },
  ];

  const teamSubLinks = [
    { name: t('nav.team.parrains'), href: '/team/parrains' },
    { name: t('nav.team.membres_honneur'), href: '/team/membres-honneur' },
    { name: t('nav.team.conseil'), href: '/team/conseil-administration' },
    { name: t('nav.team.bureau'), href: '/team/bureau-executif' },
    { name: t('nav.team.representants'), href: '/team/representants-nationaux' },
    { name: t('nav.team.comite'), href: '/team/comite-sages' },
  ];

  const ressourcesSubLinks = [
    { name: t('nav.publications'), href: '/publications' },
    { name: t('nav.evenements'), href: '/evenements' },
    { name: t('nav.galerie'), href: '/galerie' },
    { name: t('nav.partenaires'), href: '/partenaires' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMobileTeamOpen(false);
    setIsMobileRessourcesOpen(false);
  }, [location.pathname]);

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href.split('#')[0]);
  };
  const isTeamActive = () => location.pathname.startsWith('/team');
  const isRessourcesActive = () =>
    location.pathname.startsWith('/publications') ||
    location.pathname.startsWith('/evenements') ||
    location.pathname.startsWith('/galerie') ||
    location.pathname.startsWith('/partenaires');

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-heritage-earth/95 backdrop-blur-md shadow-heritage py-3' : 'bg-heritage-earth/80 backdrop-blur-sm py-5'}`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group shrink-0">
            <div className="relative -my-3">
              <img
                alt="International Mandjara Heritage"
                src={mandjaraLogo}
                className="h-12 sm:h-14 md:h-16 lg:h-20 xl:h-24 2xl:h-28 w-auto aspect-square object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-md"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map(link => (
              <Link key={link.href} to={link.href} className={`relative text-sm tracking-wide group transition-colors duration-300 ${isActive(link.href) ? 'text-heritage-gold font-semibold' : 'text-heritage-cream/80 hover:text-heritage-gold font-medium'}`}>
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-heritage-gold transition-all duration-300 ${isActive(link.href) ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </Link>
            ))}

            {/* Ressources Dropdown */}
            <div className="relative" onMouseLeave={() => setIsRessourcesDropdownOpen(false)}>
              <button onClick={() => setIsRessourcesDropdownOpen(!isRessourcesDropdownOpen)} className={`relative text-sm tracking-wide group transition-colors duration-300 flex items-center gap-1 ${isRessourcesActive() ? 'text-heritage-gold font-semibold' : 'text-heritage-cream/80 hover:text-heritage-gold font-medium'}`}>
                {t('nav.ressources')}
                <ChevronDown size={14} className={`transition-transform duration-200 ${isRessourcesDropdownOpen ? 'rotate-180' : ''}`} />
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-heritage-gold transition-all duration-300 ${isRessourcesActive() ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </button>

              <AnimatePresence>
                {isRessourcesDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-heritage-earth border border-heritage-gold/20 rounded-lg shadow-xl overflow-hidden z-50"
                  >
                    <div className="py-2">
                      {ressourcesSubLinks.map(subLink => (
                        <Link key={subLink.href} to={subLink.href} className="block px-4 py-2.5 text-sm text-heritage-cream/80 hover:text-heritage-gold hover:bg-heritage-gold/10 transition-colors">
                          {subLink.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Team Dropdown */}
            <div className="relative" onMouseLeave={() => setIsTeamDropdownOpen(false)}>
              <button onClick={() => setIsTeamDropdownOpen(!isTeamDropdownOpen)} className={`relative text-sm tracking-wide group transition-colors duration-300 flex items-center gap-1 ${isTeamActive() ? 'text-heritage-gold font-semibold' : 'text-heritage-cream/80 hover:text-heritage-gold font-medium'}`}>
                {t('nav.team')}
                <ChevronDown size={14} className={`transition-transform duration-200 ${isTeamDropdownOpen ? 'rotate-180' : ''}`} />
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-heritage-gold transition-all duration-300 ${isTeamActive() ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </button>

              <AnimatePresence>
                {isTeamDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-heritage-earth border border-heritage-gold/20 rounded-lg shadow-xl overflow-hidden z-50"
                  >
                    <div className="py-2">
                      {teamSubLinks.map(subLink => (
                        <Link key={subLink.href} to={subLink.href} className="block px-4 py-2.5 text-sm text-heritage-cream/80 hover:text-heritage-gold hover:bg-heritage-gold/10 transition-colors">
                          {subLink.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* CTA + Language Switcher */}
          <div className="hidden lg:flex items-center gap-3">
            <LanguageSwitcher />
            <Link to="/donation">
              <Button variant="gold" size="default">
                {t('nav.donate')}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-heritage-cream p-2" aria-label="Toggle menu">
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-6 space-y-2">
                {navLinks.map((link, index) => (
                  <motion.div key={link.href} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }}>
                    <Link to={link.href} className={`block py-3 px-4 rounded-lg transition-colors ${isActive(link.href) ? 'text-heritage-gold bg-heritage-gold/10 font-semibold' : 'text-heritage-cream/90 hover:text-heritage-gold hover:bg-heritage-cream/5'}`}>
                      {link.name}
                    </Link>
                  </motion.div>
                ))}

                {/* Mobile Ressources Submenu */}
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: navLinks.length * 0.1 }}>
                  <button onClick={() => setIsMobileRessourcesOpen(!isMobileRessourcesOpen)} className={`w-full flex items-center justify-between py-3 px-4 rounded-lg transition-colors ${isRessourcesActive() ? 'text-heritage-gold bg-heritage-gold/10 font-semibold' : 'text-heritage-cream/90 hover:text-heritage-gold hover:bg-heritage-cream/5'}`}>
                    {t('nav.ressources')}
                    <ChevronDown size={18} className={`transition-transform duration-200 ${isMobileRessourcesOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {isMobileRessourcesOpen && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden">
                        <div className="ml-4 mt-1 space-y-1 border-l-2 border-heritage-gold/30 pl-4">
                          {ressourcesSubLinks.map(subLink => (
                            <Link key={subLink.href} to={subLink.href} className="block py-2 text-sm text-heritage-cream/70 hover:text-heritage-gold transition-colors">
                              {subLink.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Mobile Team Submenu */}
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: (navLinks.length + 1) * 0.1 }}>
                  <button onClick={() => setIsMobileTeamOpen(!isMobileTeamOpen)} className={`w-full flex items-center justify-between py-3 px-4 rounded-lg transition-colors ${isTeamActive() ? 'text-heritage-gold bg-heritage-gold/10 font-semibold' : 'text-heritage-cream/90 hover:text-heritage-gold hover:bg-heritage-cream/5'}`}>
                    {t('nav.team')}
                    <ChevronDown size={18} className={`transition-transform duration-200 ${isMobileTeamOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {isMobileTeamOpen && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden">
                        <div className="ml-4 mt-1 space-y-1 border-l-2 border-heritage-gold/30 pl-4">
                          {teamSubLinks.map(subLink => (
                            <Link key={subLink.href} to={subLink.href} className="block py-2 text-sm text-heritage-cream/70 hover:text-heritage-gold transition-colors">
                              {subLink.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                <Link to="/donation" className="block mt-4">
                  <Button variant="gold" className="w-full">
                    {t('nav.donate')}
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};
