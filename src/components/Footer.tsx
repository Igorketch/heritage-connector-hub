import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import mandjaraLogo from '@/assets/mandjara-logo.png';

export const Footer = () => {
  const { t } = useLanguage();

  const footerLinks = {
    organisation: [
      { name: t('nav.history'), href: '/context' },
      { name: t('nav.peoples'), href: '/peoples' },
      { name: t('nav.mission'), href: '/mission' },
      { name: t('nav.values'), href: '/values' },
      { name: t('nav.team'), href: '/team' },
    ],
    ressources: [
      { name: t('footer.publications'), href: '/publications' },
      { name: t('footer.events'), href: '#' },
      { name: t('footer.gallery'), href: '#' },
      { name: t('footer.partners'), href: '#' },
    ],
    legal: [
      { name: t('footer.legal_notices'), href: '#' },
      { name: t('footer.privacy'), href: '#' },
      { name: t('footer.terms'), href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-heritage-earth border-t border-heritage-cream/10">
      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img src={mandjaraLogo} alt="International Mandjara Heritage" className="h-16 w-auto" />
            </Link>
            <p className="text-heritage-cream/60 leading-relaxed mb-6 max-w-md">
              {t('footer.description')}
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-heritage-cream/5 flex items-center justify-center text-heritage-cream/60 hover:bg-heritage-gold hover:text-heritage-earth transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-serif font-bold text-heritage-cream mb-4">{t('footer.organisation')}</h4>
            <ul className="space-y-3">
              {footerLinks.organisation.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-heritage-cream/60 hover:text-heritage-gold transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-heritage-cream mb-4">{t('footer.resources')}</h4>
            <ul className="space-y-3">
              {footerLinks.ressources.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-heritage-cream/60 hover:text-heritage-gold transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-heritage-cream mb-4">{t('footer.legal')}</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-heritage-cream/60 hover:text-heritage-gold transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-heritage-cream/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-heritage-cream/40 text-sm text-center md:text-left">
              © {new Date().getFullYear()} International Mandjara Heritage. {t('footer.rights')}
            </p>
            <p className="text-heritage-cream/40 text-sm">
              {t('footer.tagline')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
