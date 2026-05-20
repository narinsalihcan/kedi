import { Phone, MapPin, Clock, Heart, AlertTriangle, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';

const photos = [
  '/images/photo1.jpeg',
  '/images/photo2.jpeg',
  '/images/photo3.jpeg',
  '/images/photo4.jpeg',
];

const videos = [
  '/videos/clip1.mp4',
  '/videos/clip2.mp4',
];

export default function App() {
  const [viewer, setViewer] = useState<string | null>(null);
  const [zoom, setZoom] = useState<number>(1);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setViewer(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    setZoom(1);
  }, [viewer]);

  return (
    <div className="min-h-screen bg-amber-50 font-sans overflow-x-hidden">
      {/* Hero Banner */}
      <header className="relative bg-gradient-to-br from-red-600 to-orange-500 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
          <span className="absolute top-4 left-8 text-9xl hidden sm:block">🐱</span>
          <span className="absolute bottom-4 right-8 text-9xl hidden sm:block">🐱</span>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 py-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 mb-4 text-sm font-semibold tracking-wide uppercase">
            <AlertTriangle size={14} />
            Acil Duyuru
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-3 leading-tight drop-shadow">
            KAYIP KEDİ TOMAS!
          </h1>
          <p className="text-xl font-light opacity-90 mb-1">Bulmamıza yardım edin!</p>
          <p className="text-sm opacity-75">Telefon: 05319419075</p>
          <p className="text-sm opacity-75">İsim: Salihcan Narin</p>
        </div>
      </header>

      {/* Cat Info Card */}
      <section className="max-w-4xl mx-auto px-4 -mt-6 mb-10">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="px-6 py-3 flex items-center gap-2 bg-white">
            <Heart size={18} className="text-red-500" fill="red" />
          </div>
          <div className="grid md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            <div className="px-6 py-5">
              <p className="text-xs uppercase text-gray-400 font-semibold tracking-widest mb-1">Cinsi / Rengi</p>
              <p className="text-gray-800 font-medium">Tekir / Ağırlıklı olarak bembeyaz tüylere sahip; sırtında ve yanlarında koyu kahverengi ve siyah renklerin iç içe geçtiği tekir desenli yamaları var.</p>
            </div>
            <div className="px-6 py-5">
              <p className="text-xs uppercase text-gray-400 font-semibold tracking-widest mb-1">Yaşı</p>
              <p className="text-gray-800 font-medium">4 Yaşında, Erkek</p>
            </div>
            <div className="px-6 py-5">
              <p className="text-xs uppercase text-gray-400 font-semibold tracking-widest mb-1">Ayırt Edici Özellik</p>
              <p className="text-gray-800 font-medium">İki kulağının tam ortasında çok belirgin bir "M" harfi deseni yer alıyor</p>
            </div>
          </div>
          <div className="px-6 py-5 bg-red-50 border-t border-red-100">
            <div className="flex items-start gap-3">
              <MapPin size={18} className="text-red-500 mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-gray-800">Kaybolduğu Yer</p>
                <p className="text-gray-600 text-sm">Mersin / Toroslar (Korukent Mahallesi Toki Evleri Civarı)</p>
              </div>
            </div>
          </div>
          <div className="px-6 py-5 border-t border-gray-100">
            <div className="flex items-start gap-3">
              <Clock size={18} className="text-orange-500 mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-gray-800">Kaybolma Tarihi &amp; Saati</p>
                <p className="text-gray-600 text-sm">15 Mayıs 2026, Sabah 08:00 civarı</p>
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
              onClick={() => setViewer(src)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setViewer(src); }}
              className="relative group rounded-xl overflow-hidden shadow-md aspect-square bg-gray-100 cursor-pointer"
            >
              <img
                src={src}
                alt={`Tomas fotograf ${i + 1}`}
                className="w-full h-full max-w-full object-cover transition-transform duration-300 group-hover:scale-105 pointer-events-none"
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
        <p className="text-gray-500 text-sm mb-5">Tomas'un kaybolmadan önceki görüntüleri</p>
        <div className="grid md:grid-cols-2 gap-5">
          {videos.map((src, i) => (
            <div key={i} className="rounded-xl overflow-hidden shadow-md bg-black">
              <video
                src={src}
                controls
                className="w-full aspect-video object-cover"
                preload="metadata"
              />
                  {/* video caption removed as requested */}
            </div>
          ))}
        </div>
      </section>

          {viewer && (
            <div
              className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
              onClick={() => setViewer(null)}
            >
              <div className="absolute top-4 right-4 flex gap-2 z-50">
                <button
                  className="w-9 h-9 rounded bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
                  onClick={(e) => { e.stopPropagation(); setZoom(z => Math.max(1, +(z - 0.25).toFixed(2))); }}
                  aria-label="Zoom out"
                >
                  −
                </button>
                <button
                  className="w-9 h-9 rounded bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
                  onClick={(e) => { e.stopPropagation(); setZoom(1); }}
                  aria-label="Reset zoom"
                >
                  ↺
                </button>
                <button
                  className="w-9 h-9 rounded bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
                  onClick={(e) => { e.stopPropagation(); setZoom(z => Math.min(3, +(z + 0.25).toFixed(2))); }}
                  aria-label="Zoom in"
                >
                  +
                </button>
              </div>

              <button
                className="absolute top-4 left-4 text-white text-2xl p-2 z-50"
                onClick={(e) => { e.stopPropagation(); setViewer(null); }}
              >
                ✕
              </button>

              <div className="max-w-full max-h-full overflow-auto">
                <div className="flex items-center justify-center p-4">
                  <img
                    src={viewer}
                    alt="Büyük görüntü"
                    style={{
                      transform: `scale(${zoom})`,
                      transformOrigin: 'center',
                      width: viewer && /\.jpe?g$/i.test(viewer) ? '95vw' : '90vw',
                      height: 'auto',
                      maxHeight: '90vh',
                    }}
                    className="object-contain transition-transform duration-150"
                    onClick={(e) => e.stopPropagation()}
                  />
                </div>
              </div>
            </div>
          )}

      {/* Description */}
      <section className="max-w-4xl mx-auto px-4 mb-12">
        <div className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-orange-400">
          <h2 className="text-xl font-bold text-gray-800 mb-3">Açıklama</h2>
          <p className="text-gray-600 leading-relaxed text-sm">
            İsmi: Tomas
          </p>
          <p className="text-gray-600 leading-relaxed text-sm mt-3">
            Yaşı ve Cinsiyeti: 4 Yaşında, Erkek
          </p>
          <p className="text-gray-600 leading-relaxed text-sm mt-3">
            Ayırt Edici Özellikleri:
          </p>
          <p className="text-gray-600 leading-relaxed text-sm">
            Ağırlıklı olarak bembeyaz tüylere sahip; sırtında ve yanlarında koyu kahverengi ve siyah
            renklerin iç içe geçtiği tekir desenli yamaları var.
          </p>
          <p className="text-gray-600 leading-relaxed text-sm mt-3">
            Yüzünün üst kısmında çizgili desenleri mevcut ve iki kulağının tam ortasında çok belirgin
            bir "M" harfi deseni yer alıyor.
          </p>
          <p className="text-gray-600 leading-relaxed text-sm mt-3">
            Göğsü, yanakları ve burun çevresi tamamen beyaz. Burnunun ucu ise açık pembe renkte.
          </p>
          <p className="text-gray-600 leading-relaxed text-sm mt-3">
            Kaybolduğu Yer: En son Mersin / Toroslar (Korukent Mahallesi Toki Evleri Civarı)
          </p>
          <p className="text-gray-600 leading-relaxed text-sm mt-3">
            Kaybolduğu Tarih ve Saat: 15 Mayıs 2026, Sabah 08:00 civarı
          </p>
          <p className="text-gray-600 leading-relaxed text-sm mt-3">
            Tomas ev ortamına alışkın olduğu için dışarıda korkmuş ve ürkek davranıyor olabilir. Lütfen
            onu görürseniz ani hareketler yapıp korkutmadan bulunduğunuz yeri bize bildirin. Ailesi
            olarak onu çok merak ediyoruz ve evine dönmesini bekliyoruz.
          </p>
          <h3 className="text-lg font-semibold text-gray-800 mt-4">İletişim Bilgileri</h3>
          <p className="text-gray-600 leading-relaxed text-sm mt-2">Telefon: 05319419075</p>
          <p className="text-gray-600 leading-relaxed text-sm">İsim: Salihcan Narin</p>
        </div>
      </section>


      {/* Contact Section */}
      <section className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-2xl font-black text-gray-800 mb-5">İletişim</h2>
        <div className="grid md:grid-cols-1 gap-4">
          <a
            href="tel:05319419075"
            className="flex items-center gap-4 bg-white rounded-2xl shadow-md p-5 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 group md:col-span-1"
          >
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center group-hover:bg-green-200 transition-colors">
              <Phone size={22} className="text-green-600" />
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold">Telefon (7/24)</p>
              <p className="text-gray-800 font-bold text-lg">05319419075</p>
              <p className="text-sm text-gray-600">Salihcan Narin</p>
            </div>
          </a>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-2xl font-black text-gray-800 mb-3">Son Görüldüğü Bölge</h2>
        <div className="rounded-2xl overflow-hidden shadow-md bg-gray-200 relative" style={{ height: 260 }}>
          <iframe
            title="Mersin Toroslar - Korukent Mahallesi"
            src="https://maps.google.com/maps?q=Korukent%20Mahallesi%20Toki%20Evleri%20Toroslar%20Mersin&z=15&output=embed"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center pointer-events-none">
            <MapPin size={36} className="text-red-400 mb-2 drop-shadow" />
            <p className="text-white font-bold text-lg drop-shadow">Mersin — Toroslar (Korukent Mahallesi)</p>
            <p className="text-white/80 text-sm">Türkiye</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-6 text-center text-sm">
        <p className="font-semibold text-white mb-1">Tomas'u bulmanıza yardımcı olun</p>
        <p className="opacity-60">Tüm bildirimler için iletişime geçin · 05319419075</p>
        <p className="opacity-40 mt-2 text-xs">© 2026 — Kayıp Kedi İlanı</p>
      </footer>
      {/* Floating action buttons: phone call and WhatsApp */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        <a
          href="tel:05319419075"
          className="w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg flex items-center justify-center text-white"
          aria-label="Telefonu ara"
        >
          <Phone size={22} />
        </a>

        <a
          href="https://wa.me/905319419075"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg flex items-center justify-center text-white"
          aria-label="WhatsApp ile mesaj gönder"
        >
              <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path fill="#fff" d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58.13.37.04.78-.24 1.06l-2.2 2.2z"/>
              </svg>
        </a>
      </div>
    </div>
  );
}
