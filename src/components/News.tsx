import { motion } from 'motion/react';
import { Calendar, ChevronRight } from 'lucide-react';

export default function News() {
  const articles = [
    {
      title: 'Panen Raya Musim Penghujan: Hasil Melimpah',
      date: '10 Mei 2026',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800',
      category: 'Ekonomi',
    },
    {
      title: 'Pembangunan Jalan Desa Tahap 2 Dimulai',
      date: '05 Mei 2026',
      image: 'https://images.unsplash.com/photo-1541888941297-dc590d29a5ec?auto=format&fit=crop&q=80&w=800',
      category: 'Pembangunan',
    },
    {
      title: 'Festival Budaya Desa Lestari: Merayakan Tradisi',
      date: '28 April 2026',
      image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800',
      category: 'Sosial Budaya',
    },
  ];

  return (
    <section id="berita" className="py-24 bg-village-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-16 px-4">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-village-green mb-4">Warta Desa</h2>
            <p className="text-village-text/60">Kabar terbaru dan perkembangan terkini dari lingkungan desa kami.</p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-village-green font-bold hover:gap-3 transition-all">
            Lihat Semua Berita <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {articles.map((article, index) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-4/3 rounded-[40px] overflow-hidden mb-6">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-village-green uppercase tracking-wider">
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-village-text/40 text-xs font-bold uppercase tracking-widest mb-3 px-2">
                <Calendar className="h-4 w-4" />
                {article.date}
              </div>
              <h3 className="text-2xl font-serif font-bold text-village-green group-hover:text-village-earth transition-colors px-2 leading-tight">
                {article.title}
              </h3>
              <p className="mt-4 text-village-text/60 text-sm px-2 line-clamp-2">
                Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus suscipit tortor eget felis porttitor volutpat.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
