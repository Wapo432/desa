import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export default function Vision() {
  return (
    <section id="profil" className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 0.05, scale: 1 }}
            className="absolute -top-24 -left-12 text-village-green z-0"
          >
            <Quote size={320} />
          </motion.div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h4 className="text-village-earth font-bold uppercase tracking-[0.2em] text-xs mb-6">Visi & Misi Kami</h4>
              <h2 className="text-5xl md:text-6xl font-serif font-bold text-village-green mb-8 leading-tight">
                Mewujudkan <span className="italic font-light">Kesejahteraan</span> Berbasis Kearifan Lokal.
              </h2>
              <p className="text-village-text/70 text-lg leading-relaxed mb-8">
                Desa Lestari percaya bahwa kemajuan tidak harus mengorbankan akar budaya. Kami berdedikasi untuk menciptakan ekosistem desa yang modern namun tetap selaras dengan alam dan tradisi luhur nenek moyang.
              </p>
              <div className="space-y-4">
                {[
                  'Pemberdayaan Ekonomi Kreatif Masyarakat',
                  'Pelestarian Lingkungan Hidup & Hutan Desa',
                  'Digitalisasi Layanan Publik yang Inklusif'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-village-green font-medium">
                    <div className="h-1.5 w-1.5 rounded-full bg-village-earth" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square rounded-[60px] overflow-hidden rotate-3 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=1000"
                  alt="Rural Life"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-village-earth text-white p-10 rounded-[40px] shadow-xl -rotate-6 hidden md:block">
                <p className="font-serif text-3xl font-bold italic mb-2">"Gotong Royong"</p>
                <p className="text-xs uppercase tracking-widest font-bold opacity-70">Prinsip Utama Kami</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
