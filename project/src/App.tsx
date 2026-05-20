import { Phone, MapPin, Clock, Heart, AlertTriangle, Mail } from 'lucide-react';

const photos = [
  'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/596590/pexels-photo-596590.jpeg?auto=compress&cs=tinysrgb&w=800',
];

const videos = [
  'https://www.w3schools.com/html/mov_bbb.mp4',
  'https://www.w3schools.com/html/movie.mp4',
];

export default function App() {
  return (
    <div className="min-h-screen bg-amber-50 font-sans">
      {/* Hero Banner */}
      <header className="relative bg-gradient-to-br from-red-600 to-orange-500 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
          <span className="absolute top-4 left-8 text-9xl">🐱</span>
          <span className="absolute bottom-4 right-8 text-9xl">🐱</span>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 py-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 mb-4 text-sm font-semibold tracking-wide uppercase">
            <AlertTriangle size={14} />
            Acil Duyuru
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-3 leading-tight drop-shadow">
            KAYIP KEDİ
          </h1>
          <p className="text-xl font-light opacity-90 mb-1">Bulmamıza yardım edin!</p>
          <p className="text-sm opacity-75">İlan tarihi: 18 Mayıs 2026</p>
        </div>
      </header>

      {/* Cat Info Card */}
      <section className="max-w-4xl mx-auto px-4 -mt-6 mb-10">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-orange-500 px-6 py-3 flex items-center gap-2">
            <Heart size={18} className="text-white" fill="white" />
            <span className="text-white font-bold text-lg">Pamuk — Turuncu Tekir</span>
          </div>
          <div className="grid md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            <div className="px-6 py-5">
              <p className="text-xs uppercase text-gray-400 font-semibold tracking-widest mb-1">Cinsi / Rengi</p>
              <p className="text-gray-800 font-medium">Turuncu-Beyaz Tekir</p>
            </div>
            <div className="px-6 py-5">
              <p className="text-xs uppercase text-gray-400 font-semibold tracking-widest mb-1">Yaşı</p>
              <p className="text-gray-800 font-medium">3 Yaşında, Erkek</p>
            </div>
            <div className="px-6 py-5">
              <p className="text-xs uppercase text-gray-400 font-semibold tracking-widest mb-1">Ayırt Edici Özellik</p>
              <p className="text-gray-800 font-medium">Sol kulağında küçük çentik</p>
            </div>
          </div>
          <div className="px-6 py-5 bg-red-50 border-t border-red-100">
            <div className="flex items-start gap-3">
              <MapPin size={18} className="text-red-500 mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-gray-800">Kaybolduğu Yer</p>
                <p className="text-gray-600 text-sm">Kadıköy, Moda Caddesi civarı — İstanbul</p>
              </div>
            </div>
          </div>
          <div className="px-6 py-5 border-t border-gray-100">
            <div className="flex items-start gap-3">
              <Clock size={18} className="text-orange-500 mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-gray-800">Kaybolma Tarihi &amp; Saati</p>
                <p className="text-gray-600 text-sm">18 Mayıs 2026, Sabah 08:00 civarı</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photos Section */}
      <section className="max-w-4xl mx-auto px-4 mb-12">
        <h2 className="text-2xl font-black text-gray-800 mb-1">Fotoğraflar</h2>
        <p className="text-gray-500 text-sm mb-5">Gördüğünüzde lütfen hemen iletişime geçin</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {photos.map((src, i) => (
            <div
              key={i}
              className="relative group rounded-xl overflow-hidden shadow-md aspect-square bg-gray-100 cursor-pointer"
            >
              <img
                src={src}
                alt={`Pamuk fotograf ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs rounded-full px-2 py-0.5">
                {i + 1} / {photos.length}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Videos Section */}
      <section className="max-w-4xl mx-auto px-4 mb-12">
        <h2 className="text-2xl font-black text-gray-800 mb-1">Videolar</h2>
        <p className="text-gray-500 text-sm mb-5">Pamuk'un kaybolmadan önceki görüntüleri</p>
        <div className="grid md:grid-cols-2 gap-5">
          {videos.map((src, i) => (
            <div key={i} className="rounded-xl overflow-hidden shadow-md bg-black">
              <video
                src={src}
                controls
                className="w-full aspect-video object-cover"
                preload="metadata"
              />
              <div className="px-4 py-2 bg-gray-900 text-gray-300 text-xs">
                Video {i + 1} —{' '}
                {i === 0 ? 'Evde oynuyor (Nisan 2026)' : 'Bahcede geziniyor (Mayis 2026)'}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Description */}
      <section className="max-w-4xl mx-auto px-4 mb-12">
        <div className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-orange-400">
          <h2 className="text-xl font-bold text-gray-800 mb-3">Açıklama</h2>
          <p className="text-gray-600 leading-relaxed text-sm">
            Pamuk, 18 Mayıs 2026 sabahı Kadıköy Moda Caddesi civarında kaybolmuştur. Turuncu ve beyaz
            renkte, orta boylu, çok sevecen bir erkek kedidir. Sol kulağında küçük bir çentik
            bulunmaktadır. Yakasında mavi renkli bir tasma ile birlikte isim etiketi vardı; ancak
            kaybolduğunda tasmasını takmıyor olabilir.
          </p>
          <p className="text-gray-600 leading-relaxed text-sm mt-3">
            Pamuk insanlara karşı çok dostanedir, yabancılara da yaklaşır. Eğer gördüyseniz ya da
            bulduysanız lütfen derhal arayın. Onu bulan kişiye{' '}
            <span className="font-bold text-orange-600">ödül verilecektir.</span>
          </p>
        </div>
      </section>

      {/* Reward Banner */}
      <section className="max-w-4xl mx-auto px-4 mb-12">
        <div className="bg-gradient-to-r from-amber-400 to-orange-400 rounded-2xl p-6 text-center shadow-lg">
          <p className="text-white text-sm font-semibold uppercase tracking-widest mb-1">Ödül</p>
          <p className="text-white text-4xl font-black">1.000 ₺</p>
          <p className="text-white/90 text-sm mt-1">Pamuk'u bulana veya doğru bilgi verene</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-2xl font-black text-gray-800 mb-5">İletişim</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <a
            href="tel:+905551234567"
            className="flex items-center gap-4 bg-white rounded-2xl shadow-md p-5 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 group"
          >
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center group-hover:bg-green-200 transition-colors">
              <Phone size={22} className="text-green-600" />
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold">Telefon (7/24)</p>
              <p className="text-gray-800 font-bold text-lg">+90 555 123 45 67</p>
            </div>
          </a>

          <a
            href="tel:+905557654321"
            className="flex items-center gap-4 bg-white rounded-2xl shadow-md p-5 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 group"
          >
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
              <Phone size={22} className="text-blue-600" />
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold">Yedek Hat</p>
              <p className="text-gray-800 font-bold text-lg">+90 555 765 43 21</p>
            </div>
          </a>

          <a
            href="mailto:pamukbulun@gmail.com"
            className="flex items-center gap-4 bg-white rounded-2xl shadow-md p-5 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 group md:col-span-2"
          >
            <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center group-hover:bg-orange-200 transition-colors">
              <Mail size={22} className="text-orange-600" />
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold">E-posta</p>
              <p className="text-gray-800 font-bold text-lg">pamukbulun@gmail.com</p>
            </div>
          </a>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-2xl font-black text-gray-800 mb-3">Son Görüldüğü Bölge</h2>
        <div className="rounded-2xl overflow-hidden shadow-md bg-gray-200 relative" style={{ height: 260 }}>
          <img
            src="https://images.pexels.com/photos/447592/pexels-photo-447592.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Moda Caddesi"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
            <MapPin size={36} className="text-red-400 mb-2 drop-shadow" />
            <p className="text-white font-bold text-lg drop-shadow">Kadıköy — Moda Caddesi</p>
            <p className="text-white/80 text-sm">İstanbul, Türkiye</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-6 text-center text-sm">
        <p className="font-semibold text-white mb-1">Pamuk'u bulmanıza yardımcı olun</p>
        <p className="opacity-60">Tüm bildirimler için iletişime geçin · pamukbulun@gmail.com</p>
        <p className="opacity-40 mt-2 text-xs">© 2026 — Kayıp Kedi İlanı</p>
      </footer>
    </div>
  );
}
