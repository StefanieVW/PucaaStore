import { computed, reactive } from 'vue'

export type Language = 'id' | 'en'

const state = reactive<{
  language: Language
}>({
  language: 'en',
})

const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      howItWorks: 'How It Works',
      contact: 'Contact',
    },

    hero: {
      eyebrow: 'PREMIUM DIGITAL MARKETPLACE',
      titleBefore: 'Your Trusted',
      titleHighlight: 'DL & BGL',
      titleAfter: 'Marketplace.',
      description:
        'Buy and sell DL & BGL through a clean, secure, and reliable marketplace experience.',
      contact: 'Buy/Sell Here',
      explore: 'Explore Services',
      fast: 'Fast',
      transactions: 'Transactions',
      trusted: 'Trusted',
      service: 'Service',
      support: 'Support',
    },

    stats: {
        transactions: 'Successful Transactions',

        trusted: 'Trusted',

        support: 'Customer Support',

        instant: 'Instant Process',
    },

    about: {
        eyebrow: 'ABOUT PUCAA STORE',
        title: 'About PUCAA Store',
        subtitle: 'Trusted Digital Marketplace Since 2016',

        description:
            'PUCAA Store is a digital marketplace providing safe, fast, and reliable DL and BGL buying and selling services.',

        commitment:
            'We are committed to providing a comfortable transaction experience through professional service, transparent processes, and responsive customer support.',

        founder: 'Founder & Owner',

        trustedSince: 'Trusted Since 2016',
        transactions: '5000+ Transactions',
        secureMarketplace: 'Secure Marketplace',
        fastResponse: 'Fast Response',

        badges: {
            secure: 'Secure Marketplace',
            fast: 'Fast Process',
            response: 'Responsive Support',
        },
    },

    services: {
      eyebrow: 'OUR SERVICES',
      titleBefore: 'Everything you need,',
      titleHighlight: 'in one place.',
      description:
        'A simple marketplace for DL and BGL transactions, supported by a global Growtopia community.',

      buy: {
        title: 'Buy DL & BGL',
        description:
          'Find available DL and BGL offers and complete your purchase with ease.',
        action: 'Buy Now',
      },

      sell: {
        title: 'Sell DL & BGL',
        description:
          'Turn your available DL and BGL into value through a simple transaction process.',
        action: 'Sell Now',
      },

      global: {
        title: 'Global Community',
        description:
          'Connecting players and hosters worldwide. Language is never a barrier.',
        action: 'Learn More',
      },
    },

    trust: {
      eyebrow: 'WHY PUCAA',
      titleBefore: 'Why players choose',
      titleHighlight: 'PUCAA Store.',

      international: {
        title: 'International',
        description:
          'Serving players and hosters from different countries with a marketplace accessible worldwide.',
      },

      availability: {
        title: '24/7 Availability',
        description:
          'Our service operates around the clock, every day of the week — no holidays, no closing hours.',
      },

      affordable: {
        title: 'Affordable Prices',
        description:
          'Competitive DL and BGL prices designed to keep digital transactions accessible.',
      },

      secure: {
        title: 'Secure Transactions',
        description:
          'Every transaction is monitored and handled with care to provide a safer marketplace experience.',
      },
    },

    howItWorks: {
        eyebrow: 'HOW IT WORKS',
        titleBefore: 'Simple from',
        titleHighlight: 'start to finish.',

        steps: {
            choose: {
            title: 'Choose a Service',
            description:
                'Select whether you want to buy or sell DL/BGL.',
            },

            contact: {
            title: 'Contact Admin',
            description:
                'Send your request and transaction details.',
            },

            confirm: {
            title: 'Confirm Details',
            description:
                'Admin confirms availability and transaction information.',
            },

            complete: {
            title: 'Complete Transaction',
            description:
                'Finish the transaction with the provided instructions.',
            },
        },
    },

    payment: {
      eyebrow: 'PAYMENT METHODS',
      title: 'Flexible payment options',
      description:
        'We support a wide range of local and international payment methods.',
    },

    contact: {
      eyebrow: 'CONTACT',
      title: 'Get in touch.',
      description:
        'Choose the platform that is most convenient for contacting our admins.',
      adminLabel: 'ADMIN',
      button: 'Contact Now',
    },

    channel: {
      eyebrow: 'STAY CONNECTED',
      title: 'Join Our WhatsApp Channel',
      description:
        'Get marketplace updates, promotions, events, and the latest news from PUCAA Store.',
    },

    faq: {
      eyebrow: 'FAQ',
      titleBefore: 'Questions,',
      titleHighlight: 'answered.',
      description:
        'Everything you need to know before making a transaction with PUCAA Store.',

      items: [
        {
          question: 'Is PUCAA Store safe for transactions?',
          answer:
            'PUCAA Store handles DL and BGL transactions directly through our admins. Transaction details are confirmed before the process continues.',
        },
        {
          question: 'Does PUCAA Store serve international customers?',
          answer:
            'Yes. PUCAA Store welcomes customers from different countries. Payment methods can be arranged based on your location and agreement with the admin.',
        },
        {
          question: 'When can I contact the admin?',
          answer:
            'Our admins are available 24 hours a day, every day, including weekends and public holidays.',
        },
        {
          question: 'How do I make a transaction?',
          answer:
            'Choose the service you need, contact one of our admins through WhatsApp, and provide your transaction details. The admin will guide you through the process.',
        },
        {
          question: 'Is the transaction completed through the website?',
          answer:
            'No. The website provides information and connects you with our official admins. Transaction confirmation and processing are handled directly through the available contact channels.',
        },
      ],
    },

    cta: {
      eyebrow: 'READY TO START?',
      titleBefore: "Let's make your",
      titleHighlight: 'transaction easier.',
      description:
        'Have questions or want to make a transaction? Contact PUCAA STORE.',
      button: 'Contact Admin',
    },
  },

  id: {
    nav: {
      home: 'Beranda',
      about: 'Tentang',
      services: 'Layanan',
      howItWorks: 'Cara Kerja',
      contact: 'Kontak',
    },

    hero: {
      eyebrow: 'PREMIUM DIGITAL MARKETPLACE',
      titleBefore: 'Marketplace',
      titleHighlight: 'DL & BGL',
      titleAfter: 'Terpercaya.',
      description:
        'Beli dan jual DL & BGL melalui pengalaman marketplace yang aman, mudah, dan terpercaya.',
      explore: 'Lihat Layanan',
      contact: 'Jual/Beli Disini',
      fast: 'Transaksi',
      transactions: 'Cepat',
      trusted: 'Layanan',
      service: 'Terpercaya',
      support: 'Dukungan',
    },

    stats: {
        transactions: 'Transaksi Berhasil',

        trusted: 'Terpercaya',

        support: 'Customer Support',

        instant: 'Proses Instan',
    },

    about: {
        eyebrow: 'TENTANG PUCAA STORE',
        title: 'Tentang PUCAA Store',
        subtitle: 'Marketplace Digital Terpercaya Sejak 2016',

        description:
            'PUCAA Store merupakan marketplace digital yang menyediakan layanan jual beli DL dan BGL secara aman, cepat, dan terpercaya.',

        commitment:
            'Kami berkomitmen memberikan pengalaman transaksi yang nyaman melalui pelayanan profesional, proses yang transparan, dan customer support yang responsif.',

        founder: 'Founder & Owner',

        trustedSince: 'Terpercaya Sejak 2016',
        transactions: '5000+ Transaksi',
        secureMarketplace: 'Marketplace Aman',
        fastResponse: 'Respon Cepat',

        badges: {
            secure: 'Marketplace Aman',
            fast: 'Proses Cepat',
            response: 'Support Responsif',
        },
    },

    services: {
      eyebrow: 'LAYANAN KAMI',
      titleBefore: 'Semua yang kamu butuhkan,',
      titleHighlight: 'di satu tempat.',
      description:
        'Marketplace sederhana untuk transaksi DL dan BGL, didukung komunitas Growtopia dari berbagai penjuru dunia.',

      buy: {
        title: 'Beli DL & BGL',
        description:
          'Temukan penawaran DL dan BGL yang tersedia dan lakukan pembelian dengan mudah.',
        action: 'Beli Sekarang',
      },

      sell: {
        title: 'Jual DL & BGL',
        description:
          'Ubah DL dan BGL yang kamu miliki menjadi nilai melalui proses transaksi yang sederhana.',
        action: 'Jual Sekarang',
      },

      global: {
        title: 'Komunitas Global',
        description:
          'Menghubungkan player dan hoster dari berbagai penjuru dunia. Bahasa bukan hambatan.',
        action: 'Selengkapnya',
      },
    },

    trust: {
      eyebrow: 'KENAPA PUCAA',
      titleBefore: 'Kenapa player memilih',
      titleHighlight: 'PUCAA Store.',

      international: {
        title: 'International',
        description:
          'Melayani player dan hoster dari berbagai negara dengan marketplace yang dapat diakses secara global.',
      },

      availability: {
        title: 'Tersedia 24/7',
        description:
          'Layanan kami beroperasi sepanjang waktu, setiap hari — tanpa hari libur dan tanpa jam tutup.',
      },

      affordable: {
        title: 'Harga Terjangkau',
        description:
          'Harga DL dan BGL yang kompetitif agar transaksi digital tetap mudah dijangkau.',
      },

      secure: {
        title: 'Transaksi Aman',
        description:
          'Setiap transaksi dipantau dan ditangani dengan baik untuk memberikan pengalaman marketplace yang lebih aman.',
      },
    },

    howItWorks: {
        eyebrow: 'CARA KERJA',
        titleBefore: 'Mudah dari',
        titleHighlight: 'awal hingga selesai.',

        steps: {
            choose: {
            title: 'Pilih Layanan',
            description:
                'Pilih apakah kamu ingin membeli atau menjual DL/BGL.',
            },

            contact: {
            title: 'Hubungi Admin',
            description:
                'Kirim permintaan dan detail transaksi kamu.',
            },

            confirm: {
            title: 'Konfirmasi Detail',
            description:
                'Admin akan mengonfirmasi ketersediaan dan informasi transaksi.',
            },

            complete: {
            title: 'Selesaikan Transaksi',
            description:
                'Selesaikan transaksi sesuai instruksi yang diberikan.',
            },
        },
    },

    payment: {
      eyebrow: 'METODE PEMBAYARAN',
      title: 'Pilihan pembayaran yang fleksibel.',
      description:
        'Kami mendukung berbagai metode pembayaran lokal maupun internasional.',
    },

    contact: {
      eyebrow: 'HUBUNGI KAMI',
      title: 'Mari terhubung.',
      description:
        'Pilih platform yang paling nyaman untuk menghubungi admin kami.',
      adminLabel: 'ADMIN',
      button: 'Hubungi Sekarang',
    },

    channel: {
      eyebrow: 'TETAP TERHUBUNG',
      title: 'Gabung Saluran WhatsApp Kami',
      description:
        'Dapatkan update marketplace, promo, event, serta informasi terbaru PUCAA Store.',
    },

    faq: {
      eyebrow: 'FAQ',
      titleBefore: 'Pertanyaan,',
      titleHighlight: 'terjawab.',
      description:
        'Informasi penting yang perlu kamu ketahui sebelum melakukan transaksi di PUCAA Store.',

      items: [
        {
          question: 'Apakah PUCAA Store aman untuk transaksi?',
          answer:
            'PUCAA Store menangani transaksi DL dan BGL secara langsung melalui admin. Detail transaksi akan dikonfirmasi terlebih dahulu sebelum proses dilanjutkan.',
        },
        {
          question: 'Apakah PUCAA Store melayani pelanggan internasional?',
          answer:
            'Ya. PUCAA Store terbuka untuk pelanggan dari berbagai negara. Metode pembayaran dapat disesuaikan berdasarkan lokasi dan kesepakatan dengan admin.',
        },
        {
          question: 'Kapan saya bisa menghubungi admin?',
          answer:
            'Admin PUCAA Store tersedia 24 jam setiap hari, termasuk akhir pekan dan hari libur.',
        },
        {
          question: 'Bagaimana cara melakukan transaksi?',
          answer:
            'Pilih layanan yang kamu butuhkan, hubungi salah satu admin melalui WhatsApp, lalu sampaikan detail transaksi. Admin akan membantu prosesnya hingga selesai.',
        },
        {
          question: 'Apakah transaksi dilakukan langsung melalui website?',
          answer:
            'Tidak. Website digunakan sebagai pusat informasi dan penghubung dengan admin resmi. Konfirmasi serta proses transaksi dilakukan melalui kontak yang tersedia.',
        },
      ],
    },

    cta: {
      eyebrow: 'SIAP MEMULAI?',
      titleBefore: 'Mari buat',
      titleHighlight: 'transaksimu lebih mudah.',
      description:
        'Punya pertanyaan atau ingin melakukan transaksi? Hubungi PUCAA STORE.',
      button: 'Hubungi Admin',
    },
  },
}

export function useLanguage() {
  const language = computed({
    get: () => state.language,
    set: (value: Language) => {
      state.language = value
    },
  })

  const t = computed(() => translations[state.language])

  const setLanguage = (lang: Language) => {
    state.language = lang
  }

  return {
    language,
    t,
    setLanguage,
  }
}