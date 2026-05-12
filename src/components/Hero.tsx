import { motion } from 'motion/react';
import { ArrowRight, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1518173946687-a4c8a9ba336f?auto=format&fit=crop&q=80&w=2000"
          alt="Indonesian Village Rice Fields"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-village-green/30 mix-blend-multiply" />
        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-village-cream" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-2 text-white/90 mb-6 bg-white/10 backdrop-blur-sm w-fit px-4 py-1.5 rounded-full border border-white/20">
            <MapPin className="h-4 w-4" />
            <span className="text-sm font-medium tracking-wide uppercase">Kecamatan Alam Indah</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-serif text-white mb-6 leading-[0.9] tracking-tight">
            Harmoni Alam <br />
            <span className="italic font-light">Membangun Budaya</span>
          </h1>
          
          <p className="text-xl text-white/90 mb-10 font-light leading-relaxed max-w-lg">
            Selamat datang di Desa Lestari. Sebuah permata tersembunyi yang menjaga kearifan lokal di tengah kemajuan zaman modern.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-village-green text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:bg-village-green/90 transition-all shadow-lg hover:shadow-village-green/20">
              Jelajahi Desa
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-medium hover:bg-white/20 transition-all">
              Lihat Profil
            </button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Gradient at Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-village-cream to-transparent" />
    </section>
  );
}
