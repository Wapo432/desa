import { motion } from 'motion/react';
import { FileText, Heart, ShieldCheck, HelpCircle } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Administrasi Desa',
      desc: 'Layanan administrasi kependudukan, surat pengantar, dan dokumen resmi lainnya secara efisien.',
      icon: FileText,
      color: 'bg-blue-50 text-blue-600',
    },
    {
      title: 'Kesehatan & Lansia',
      desc: 'Pelayanan Posyandu, kesehatan lingkungan, dan program dukungan bagi lansia serta anak-anak.',
      icon: Heart,
      color: 'bg-rose-50 text-rose-600',
    },
    {
      title: 'Kamtibmas',
      desc: 'Sistem pengamanan desa (Siskamling) dan kordinasi keamanan bersama masyarakat.',
      icon: ShieldCheck,
      color: 'bg-emerald-50 text-emerald-600',
    },
    {
      title: 'Layanan Aduan',
      desc: 'Sampaikan kritik, saran, atau laporan terkait permasalahan di lingkungan desa.',
      icon: HelpCircle,
      color: 'bg-amber-50 text-amber-600',
    },
  ];

  return (
    <section id="layanan" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-village-green mb-4">Layanan Masyarakat</h2>
          <p className="text-village-text/60 max-w-2xl mx-auto leading-relaxed">
            Kami berkomitmen memberikan pelayanan terbaik bagi seluruh warga Desa Lestari dengan transparansi dan kecepatan.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="p-8 rounded-[40px] border border-gray-100 bg-white shadow-sm hover:shadow-xl hover:border-village-green transition-all duration-300"
            >
              <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                <service.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-village-green mb-4">{service.title}</h3>
              <p className="text-village-text/60 leading-relaxed text-sm">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
