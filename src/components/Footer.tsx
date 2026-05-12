import { Leaf, Instagram, Twitter, Facebook, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="kontak" className="bg-village-green text-white py-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-12 mb-20">
          <div className="md:col-span-4">
            <div className="flex items-center gap-2 mb-8">
              <Leaf className="h-8 w-8" />
              <span className="font-serif text-3xl font-bold tracking-tight">Desa Lestari</span>
            </div>
            <p className="text-white/70 leading-relaxed mb-8 max-w-sm">
              Mewujudkan desa yang mandiri, sejahtera, dan religius melalui pelestarian budaya dan pengelolaan sumber daya alam yang berkelanjutan.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="h-10 w-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-village-green transition-all">
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-bold text-lg mb-8 uppercase tracking-wider text-xs text-white/40">Navigasi</h4>
            <ul className="space-y-4 text-white/70">
              {['Beranda', 'Profil Desa', 'Layanan Publik', 'Transparansi', 'Berita'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-bold text-lg mb-8 uppercase tracking-wider text-xs text-white/40">Tautan Penting</h4>
            <ul className="space-y-4 text-white/70">
              {['Kementerian Desa', 'Pemerintah Provinsi', 'Pemerintah Kabupaten', 'Lapor Desa', 'Bumdes'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-bold text-lg mb-8 uppercase tracking-wider text-xs text-white/40">Hubungi Kami</h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <MapPin className="h-6 w-6 text-white/40 shrink-0" />
                <span className="text-white/70">Jl. Raya Hijau No. 12, Desa Lestari, Kec. Alam Indah, 12345</span>
              </li>
              <li className="flex gap-4">
                <Phone className="h-6 w-6 text-white/40 shrink-0" />
                <span className="text-white/70">+62 812-3456-7890</span>
              </li>
              <li className="flex gap-4">
                <Mail className="h-6 w-6 text-white/40 shrink-0" />
                <span className="text-white/70">info@desalestari.id</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-12 flex flex-col md:row justify-between items-center gap-6">
          <p className="text-white/40 text-sm">
            © 2026 Pemerintah Desa Lestari. Developed with heart for the community.
          </p>
          <div className="flex gap-8 text-xs text-white/40 font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-white">Kebijakan Privasi</a>
            <a href="#" className="hover:text-white">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
