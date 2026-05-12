import { motion } from 'motion/react';
import { Menu, X, Leaf } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Beranda', href: '#' },
    { name: 'Profil Desa', href: '#profil' },
    { name: 'Layanan', href: '#layanan' },
    { name: 'Berita', href: '#berita' },
    { name: 'Kontak', href: '#kontak' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-village-cream/80 backdrop-blur-md border-b border-village-green/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-2">
            <Leaf className="text-village-green h-8 w-8" />
            <span className="font-serif text-2xl font-bold text-village-green tracking-tight">Desa Lestari</span>
          </div>
          
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-village-text/70 hover:text-village-green font-medium transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-village-green p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-village-cream border-b border-village-green/10 px-4 pt-2 pb-6 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-village-text/80 hover:text-village-green"
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
