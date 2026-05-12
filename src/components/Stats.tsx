import { motion } from 'motion/react';
import { Users, LandPlot, Sprout, Landmark } from 'lucide-react';

export default function Stats() {
  const stats = [
    { label: 'Penduduk', value: '4,520', icon: Users, suffix: 'Jiwa' },
    { label: 'Luas Wilayah', value: '12.4', icon: LandPlot, suffix: 'km²' },
    { label: 'Komoditas', value: 'Padi', icon: Sprout, suffix: 'Unggul' },
    { label: 'Dusun', value: '6', icon: Landmark, suffix: 'Wilayah' },
  ];

  return (
    <section className="py-24 bg-village-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="text-center group"
            >
              <div className="inline-flex p-4 rounded-3xl bg-village-green/5 text-village-green mb-6 group-hover:bg-village-green group-hover:text-white transition-all duration-300">
                <stat.icon className="h-8 w-8" />
              </div>
              <h3 className="text-4xl font-serif font-bold text-village-green mb-1">{stat.value}</h3>
              <p className="text-village-text/60 font-medium uppercase tracking-wider text-xs">{stat.label}</p>
              <p className="text-village-green/40 text-[10px] mt-1 font-bold">{stat.suffix}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
