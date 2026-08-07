import { computed, reactive } from 'vue'

export type Language = 'id' | 'en'

const state = reactive<{
  language: Language
}>({
  language: 'en',
})
const experienceYears = new Date().getFullYear() - 2016

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
      eyebrow: 'ABOUT US',
      title: 'Built on Trust.',
      subtitle: `${experienceYears} Years of Experience in the Growtopia Community`,

      description:
        'Our journey began in 2016 as BGL resellers within the Growtopia community. Over the years, we have built our reputation through more than 15,000 transactions and long-standing relationships with players and hosters from around the world.',

      commitment:
        'Today, we continue to serve customers worldwide — from the United States and Europe to the Middle East, Asia, and beyond. Transactions are available 24/7 through Facebook, Discord, and WhatsApp, with no holidays and no closing hours.',

      founder: 'Owner & Operator',

      transactions: 'Successful Transactions',
      secureMarketplace: 'Worldwide Customer Reach',
      fastResponse: 'Service Availability',

      badges: {
        worldwide: 'Worldwide Service',
        trusted: 'Trusted Reseller',
        support: 'Multi-Platform Support',
      },

      profiles: {
        vilencia: {
          store: 'Pucaa Store',
          role: 'Owner & Operator',
          description:
            'Managing Pucaa Store with a focus on trusted service, clear communication, and a seamless DL and BGL transaction experience.',
        },

        cindy: {
          store: 'Cipan Store',
          role: 'Owner & Operator',
          description:
            'Managing Cipan Store and serving the Growtopia community with a long-standing focus on reliable transactions and customer service.',
        },
      },

      reputation: {
        title: 'Trusted Across the Community',
        description:
          'Our services have been built through years of direct transactions across Facebook, Discord, and WhatsApp. We are also trusted resellers on Discord GTID and GTMart, serving customers from different parts of the world.',
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
      eyebrow: 'WHY CHOOSE US',
      titleBefore: 'Why players choose',
      titleHighlight: 'Us.',

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

      stock: {
        title: 'Always in Stock',
        description:
          'DL and BGL are kept available so you can buy the currency you need without unnecessary waiting.',
      },

      bulk: {
        title: 'We Buy in Bulk',
        description:
          'Have a large amount of DL or BGL to sell? We accept bulk transactions with competitive prices.',
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
        'Stay updated with our latest marketplace news, promotions, events, and community updates.',
    },

    faq: {
      eyebrow: 'FAQ',
      titleBefore: 'Questions,',
      titleHighlight: 'answered.',
      description:
        'Everything you need to know before making a transaction with us.',

      items: [
        {
          question: 'Are transactions with us safe?',
          answer:
            'We handle DL and BGL transactions directly through our admins. Transaction details are confirmed before the process continues.',
        },
        {
          question: 'Do you serve international customers?',
          answer:
            'Yes. We welcome customers from different countries. Payment methods can be arranged based on your location and agreement with the admin.',
        },
        {
          question: 'When can I contact an admin?',
          answer:
            'Our admins are available 24 hours a day, every day, including weekends and public holidays.',
        },
        {
          question: 'How do I make a transaction?',
          answer:
            'Choose the service you need, contact one of our admins through WhatsApp, and provide your transaction details. Our admin will guide you through the process.',
        },
        {
          question: 'Is the transaction completed through the website?',
          answer:
            'No. The website serves as an information hub and connects you with our official admins. Transaction confirmation and processing are handled directly through the available contact channels.',
        },
      ],
    },

    cta: {
      eyebrow: 'READY TO START?',
      titleBefore: "Let's make your",
      titleHighlight: 'transaction easier.',
      description:
        'Have questions or want to make a transaction? Our admins are ready to help.',
      button: 'Contact Admin',
    },

    footer: {
      description: 'A trusted digital marketplace since 2016.',

      navigation: 'Navigation',

      connect: 'Connect',

      community: 'Community',

      channelNote:
        'Stay connected with us for the latest updates, announcements, and community news.',

      copyright: 'All Rights Reserved.',

      marketplace: 'Digital Marketplace',
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
      eyebrow: 'TENTANG KAMI',
      title: 'Dibangun dengan Kepercayaan.',
      subtitle: `${experienceYears} Tahun Berpengalaman di Komunitas Growtopia`,

      description:
        'Perjalanan kami dimulai pada tahun 2016 sebagai reseller BGL di komunitas Growtopia. Selama bertahun-tahun, kami membangun reputasi melalui lebih dari 15.000 transaksi serta hubungan jangka panjang dengan player dan hoster dari berbagai negara.',

      commitment:
        'Hingga saat ini, kami terus melayani pelanggan dari seluruh dunia — mulai dari Amerika Serikat dan Eropa hingga Timur Tengah, Asia, dan berbagai wilayah lainnya. Transaksi tersedia 24/7 melalui Facebook, Discord, dan WhatsApp, tanpa hari libur maupun jam tutup.',

      founder: 'Owner & Operator',

      transactions: 'Transaksi Berhasil',
      secureMarketplace: 'Jangkauan Pelanggan Global',
      fastResponse: 'Ketersediaan Layanan',

      badges: {
        worldwide: 'Layanan Worldwide',
        trusted: 'Trusted Reseller',
        support: 'Multi-Platform Support',
      },

      profiles: {
        vilencia: {
          store: 'Pucaa Store',
          role: 'Owner & Operator',
          description:
            'Mengelola Pucaa Store dengan fokus pada pelayanan terpercaya, komunikasi yang jelas, serta pengalaman transaksi DL dan BGL yang nyaman dan lancar.',
        },

        cindy: {
          store: 'Cipan Store',
          role: 'Owner & Operator',
          description:
            'Mengelola Cipan Store dan melayani komunitas Growtopia dengan pengalaman panjang dalam transaksi terpercaya dan pelayanan pelanggan.',
        },
      },

      reputation: {
        title: 'Dipercaya di Komunitas',
        description:
          'Layanan kami dibangun melalui pengalaman transaksi selama bertahun-tahun melalui Facebook, Discord, dan WhatsApp. Kami juga merupakan trusted reseller di Discord GTID dan GTMart, serta melayani pelanggan dari berbagai belahan dunia.',
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
      eyebrow: 'MENGAPA MEMILIH KAMI',
      titleBefore: 'Mengapa pemain memilih',
      titleHighlight: 'Kami.',

      international: {
        title: 'Internasional',
        description:
          'Melayani pemain dan hoster dari berbagai negara dengan marketplace yang dapat diakses secara global.',
      },

      availability: {
        title: 'Tersedia 24/7',
        description:
          'Layanan kami beroperasi sepanjang waktu, setiap hari — tanpa hari libur dan tanpa jam tutup.',
      },

      affordable: {
        title: 'Harga Terjangkau',
        description:
          'Harga DL dan BGL yang kompetitif untuk menjaga transaksi digital tetap terjangkau.',
      },

      secure: {
        title: 'Transaksi Aman',
        description:
          'Setiap transaksi dipantau dan ditangani dengan baik untuk memberikan pengalaman marketplace yang lebih aman.',
      },

      stock: {
        title: 'Stok Selalu Tersedia',
        description:
          'DL dan BGL selalu kami sediakan agar kamu bisa membeli currency yang dibutuhkan tanpa perlu menunggu lama.',
      },

      bulk: {
        title: 'Terima Penjualan Bulk',
        description:
          'Punya DL atau BGL dalam jumlah besar untuk dijual? Kami menerima transaksi bulk dengan harga yang kompetitif.',
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
        'Dapatkan update marketplace, promo, event, serta informasi terbaru dari kami dan komunitas.',
    },

    faq: {
      eyebrow: 'FAQ',
      titleBefore: 'Pertanyaan,',
      titleHighlight: 'terjawab.',
      description:
        'Informasi penting yang perlu kamu ketahui sebelum melakukan transaksi bersama kami.',

      items: [
        {
          question: 'Apakah transaksi bersama kami aman?',
          answer:
            'Kami menangani transaksi DL dan BGL secara langsung melalui admin. Detail transaksi akan dikonfirmasi terlebih dahulu sebelum proses dilanjutkan.',
        },
        {
          question: 'Apakah kami melayani pelanggan internasional?',
          answer:
            'Ya. Kami terbuka untuk pelanggan dari berbagai negara. Metode pembayaran dapat disesuaikan berdasarkan lokasi dan kesepakatan dengan admin.',
        },
        {
          question: 'Kapan saya bisa menghubungi admin?',
          answer:
            'Admin kami tersedia 24 jam setiap hari, termasuk akhir pekan dan hari libur.',
        },
        {
          question: 'Bagaimana cara melakukan transaksi?',
          answer:
            'Pilih layanan yang kamu butuhkan, hubungi salah satu admin melalui WhatsApp, lalu sampaikan detail transaksi. Admin kami akan membantu mengarahkan prosesnya hingga selesai.',
        },
        {
          question: 'Apakah transaksi dilakukan langsung melalui website?',
          answer:
            'Tidak. Website berfungsi sebagai pusat informasi dan penghubung dengan admin resmi kami. Konfirmasi serta proses transaksi dilakukan melalui kontak yang tersedia.',
        },
      ],
    },

    cta: {
      eyebrow: 'SIAP MEMULAI?',
      titleBefore: 'Mari buat',
      titleHighlight: 'transaksimu lebih mudah.',
      description:
        'Punya pertanyaan atau ingin melakukan transaksi? Admin kami siap membantu.',
      button: 'Hubungi Admin',
    },

    footer: {
      description: 'Marketplace digital terpercaya sejak 2016.',

      navigation: 'Navigasi',

      connect: 'Terhubung',

      community: 'Komunitas',

      channelNote:
        'Tetap terhubung bersama kami untuk mendapatkan update, pengumuman, dan informasi terbaru dari komunitas.',

      copyright: 'Hak Cipta Dilindungi.',

      marketplace: 'Marketplace Digital',
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