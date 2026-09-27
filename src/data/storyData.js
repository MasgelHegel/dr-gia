/**
 * storyData.js — Data konten untuk website Case Study dr. Gia Pratama
 * Kewirausahaan 1 — Case Study 1: Success
 *
 * CATATAN EDITORIAL:
 * - Informasi berlabel [FAKTA] berasal dari sumber yang dapat diverifikasi.
 * - Informasi berlabel [INTERPRETASI] merupakan refleksi dan analisis penulis.
 * - Sumber utama: Podcast Raditya Dika "Cerita dari Ruang IGD" (Nov 2025),
 *   IMDB #BerhentiDiKamu (2021), Plex.tv cast data, Infludata Sep 2026,
 *   Linktree dr. Gia Pratama (Jan 2025), VOI.id (Sep 2026).
 */

export const storyData = {
  meta: {
    course: "Kewirausahaan 1",
    courseCode: "",
    assignment: "Case Study 1: Success",
    subjectName: "dr. Gia Pratama",
    fullSubjectName: "dr. Gia Pratama",
    // Judul utama dipilih berdasarkan dua fakta kuat yang terverifikasi:
    // (1) latar belakang sebagai dokter IGD aktif, (2) karya tulis yang lahir dari pengalaman nyata
    mainTitle: "Antara Ruang IGD dan Halaman Pertama",
    tagline: "Kisah seorang dokter yang membawa cerita dari balik pintu darurat ke tangan jutaan pembaca.",
    subtitle: "Perjalanan, Karya, dan Pelajaran dari dr. Gia Pratama"
  },

  // Quick Facts — hanya fakta yang terverifikasi
  quickFacts: {
    namaLengkap: "dr. Gia Pratama",
    pendidikan: "Fakultas Kedokteran Universitas YARSI, Jakarta",
    profesi: "Dokter (Kepala IGD)",
    bidang: "Kedokteran darurat, edukasi kesehatan, penulisan",
    bukuPertama: "Ubur-Ubur Lembur (2018)",
    bukuTerakhir: "Garda Detak: Antologi Gawat Darurat",
    totalBuku: "5 buku",
    adaptasiFilm: "#BerhentiDiKamu (Disney+ Hotstar, 2021)",
    mediaSosial: "@giapratamamd (Instagram, TikTok, X)",
    // [CATATAN] Tahun lahir tidak ditemukan dari sumber terverifikasi — tidak dicantumkan
  },

  heroStats: [
    { label: "Buku Ditulis", value: "5 Judul", desc: "Dari memoar IGD hingga novel yang diadaptasi layar lebar" },
    { label: "Adaptasi Film", value: "2021", desc: "#BerhentiDiKamu tayang di Disney+ Hotstar" },
    { label: "Debut Menulis", value: "2018", desc: "Ubur-Ubur Lembur sebagai buku pertama" },
    { label: "Identitas Digital", value: "@giapratamamd", desc: "Aktif berbagi edukasi kesehatan di media sosial" },
  ],

  // ─────────────────────────────────────────────────────────────
  // SECTION 1: INTRODUCTION
  // Gaya: storytelling natural, bukan biodata kaku
  // ─────────────────────────────────────────────────────────────
  introduction: {
    badge: "01 / PENGANTAR",
    title: "Antara Ruang IGD dan Halaman Pertama",
    subtitle: "Ada satu hal menarik ketika seorang dokter IGD memilih juga menjadi penulis — ia tidak kekurangan bahan cerita.",
    paragraphs: [
      "Kalau kamu pernah membaca novel atau menonton film #BerhentiDiKamu, mungkin kamu tahu tokoh utamanya adalah seorang dokter IGD bernama Gia. Yang mungkin tidak semua orang tahu: tokoh itu bukan semata-mata fiksi. Gia Pratama — penulisnya — memang benar seorang dokter, dan cerita yang ia tulis lahir dari pengalaman nyata di balik pintu unit gawat darurat.",
      "Dalam sebuah podcast bersama Raditya Dika (November 2025), dr. Gia bercerita dengan santai tentang hari-hari bertugas di IGD: tentang pasien yang datang dengan tangan yang nyaris lepas, tentang kasus kebidanan darurat di tengah malam di RSUD Garut, tentang bagaimana seorang dokter IGD harus bisa menangani nyaris semua kondisi karena mereka adalah garda pertama. Bukan kisah heroik yang disusun untuk konsumsi publik — lebih seperti obrolan jujur seorang profesional yang sudah kenyang dengan realita lapangan.",
      "Dan dari situlah menariknya figur ini untuk dibahas dalam konteks kewirausahaan. Bukan karena ia mendirikan perusahaan atau mengembangkan startup — melainkan karena ia memperlihatkan bagaimana seorang profesional bisa membangun dampak yang jauh melampaui batas pekerjaannya, cukup dengan jujur bercerita."
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // SECTION 2: PERJALANAN HIDUP — 5 Babak
  // [FAKTA] ditandai untuk membedakan dengan [INTERPRETASI PENULIS]
  // ─────────────────────────────────────────────────────────────
  lifeJourney: {
    badge: "02 / PERJALANAN HIDUP",
    title: "Lima Babak Perjalanan",
    subtitle: "Dari bangku kuliah di Jakarta Selatan, ke ruang gawat darurat Garut, hingga ke layar lebar nasional.",
    stages: [
      {
        number: "01",
        stage: "Awal Mula",
        heading: "Anak Jaksel yang Memilih Jalan Kedokteran",
        period: "Masa Kuliah",
        location: "FK Universitas YARSI, Jakarta",
        image: "/image/dr.gia2.png",
        imageCaption: "dr. Gia Pratama — masa awal perjalanan menuju dunia kedokteran.",
        imageCredit: "Koleksi foto dr. Gia Pratama",
        narrative: "Dalam podcast bersama Raditya Dika, dr. Gia menyebut dirinya sebagai \"anak Jaksel\" yang lama tinggal di Cinere. [FAKTA] Ia menempuh pendidikan dokter di Fakultas Kedokteran Universitas YARSI, Jakarta. Tidak banyak informasi publik tentang alasan spesifik ia memilih kedokteran, tapi perjalanan berikutnya memberi gambaran: ia tipe orang yang benar-benar masuk ke dalam pekerjaan yang ia geluti — bukan sekadar menyelesaikan tugas, tapi meresapi setiap pengalaman di dalamnya. [INTERPRETASI PENULIS: Karakter ini yang kemudian terlihat dalam cara ia bercerita — penuh detail yang hanya bisa datang dari seseorang yang benar-benar hadir, bukan dari ingatan yang sudah diproses ulang.]"
      },
      {
        number: "02",
        stage: "Pengalaman Lapangan",
        heading: "Malam-malam di RSUD Garut",
        period: "Masa Koas / Internship",
        location: "RSUD Garut, Jawa Barat",
        image: "/image/dr.gia3.png",
        imageCaption: "dr. Gia Pratama — pengalaman bertugas di lapangan.",
        imageCredit: "Koleksi foto dr. Gia Pratama",
        narrative: "[FAKTA] Dalam podcast yang sama, dr. Gia secara eksplisit menceritakan pengalamannya bertugas di IGD RSUD Garut. Salah satu kisah yang ia ceritakan: jam dua pagi, seorang pasien datang dengan kondisi uterus yang keluar dari tubuhnya akibat penanganan persalinan yang salah. Ia harus bertindak cepat, menghubungi konsultan kandungan, dan masuk ke kamar operasi dini hari. Pasien tersebut pulang sehat empat hari kemudian. Bagi dr. Gia, momen-momen seperti itulah yang paling membekas — bukan karena dramatis, tapi karena memperlihatkan betapa tipis jarak antara selamat dan tidak. [INTERPRETASI PENULIS: Pengalaman di daerah seperti ini — dengan keterbatasan sumber daya namun tekanan yang sama beratnya — kemungkinan besar membentuk cara dr. Gia melihat profesinya: bukan sebagai rutinitas, tapi sebagai sesuatu yang selalu membutuhkan kehadiran penuh.]"
      },
      {
        number: "03",
        stage: "Karier Klinis",
        heading: "Menjadi Kepala IGD",
        period: "Karier Praktik",
        location: "Jakarta",
        image: "/image/dr.gia4.png",
        imageCaption: "dr. Gia Pratama — dalam peran sebagai dokter dan kepala IGD.",
        imageCredit: "Koleksi foto dr. Gia Pratama",
        narrative: "[FAKTA] Dalam podcast Raditya Dika, dr. Gia menyebut bahwa ia pernah menjabat sebagai Kepala Instalasi Gawat Darurat — termasuk selama periode COVID-19. Ia juga menyebut bahwa pekerjaannya mencakup IGD dan hemodialisis (cuci darah), sehingga ia bekerja dengan \"darah dan air mata setiap hari\" — frasa yang ia ucapkan sendiri dalam percakapan tersebut. [FAKTA] Sebagai kepala IGD, ia memimpin tim yang menangani tiga kategori utama: penyakit menular, penyakit tidak menular, dan kecelakaan. [INTERPRETASI PENULIS: Posisi kepala IGD bukan hanya soal kompetensi klinis — ia juga menuntut kepemimpinan, pengambilan keputusan cepat, dan kemampuan mengelola tim di bawah tekanan tinggi. Semua itu adalah keterampilan yang relevan secara langsung dengan dunia kewirausahaan.]"
      },
      {
        number: "04",
        stage: "Menulis & Berkarya",
        heading: "Dari Twitter ke Toko Buku",
        period: "2018 — sekarang",
        location: "Platform digital & industri penerbitan nasional",
        image: "/image/dr.gia5.png",
        imageCaption: "dr. Gia Pratama — aktivitas menulis dan berkarya.",
        imageCredit: "Koleksi foto dr. Gia Pratama",
        narrative: "[FAKTA] Dalam podcast Raditya Dika, dr. Gia mengungkapkan bahwa ia mulai tertarik menulis setelah membaca buku-buku Raditya Dika — khususnya Kambing Jantan dan Cinta Brontosaurus. Ia bahkan bercerita sempat berjanji pada diri sendiri: kalau nulis buku, harus ketemu Radit dulu. [FAKTA] Buku pertamanya, Ubur-Ubur Lembur, terbit tahun 2018. Sampai saat podcast itu direkam, ia sudah menulis 5 buku. Buku terakhirnya adalah Garda Detak: Antologi Gawat Darurat — sebuah kumpulan 40 cerita pendek dari ruang IGD, dirancang agar setiap cerita bisa dibaca mandiri, mirip format Chicken Soup for the Soul tapi versi medis. [INTERPRETASI PENULIS: Yang menarik dari perjalanan ini bukan sekadar bahwa ia menulis di sela-sela pekerjaan — tapi bahwa ia menemukan format yang tepat untuk audiens yang ia pahami. Cerita pendek yang berdiri sendiri memungkinkan pembaca yang tidak punya banyak waktu tetap bisa masuk ke dalam dunia IGD sepotong demi sepotong.]"
      },
      {
        number: "05",
        stage: "Dampak Digital",
        heading: "Novel yang Menjadi Film, Dokter yang Menjadi Suara Publik",
        period: "2021 — sekarang",
        location: "Layar lebar & platform digital Indonesia",
        image: "/image/dr.gia6.png",
        imageCaption: "dr. Gia Pratama — membangun dampak melalui media dan komunikasi publik.",
        imageCredit: "Koleksi foto dr. Gia Pratama",
        narrative: "[FAKTA] Novel #BerhentiDiKamu karya dr. Gia Pratama diadaptasi menjadi film dan tayang di Disney+ Hotstar pada 12 Februari 2021. Film berdurasi 1 jam 40 menit ini disutradarai Indra Gunawan, diproduksi Putut Widjanarko, dengan Roger Danuarta sebagai pemeran dr. Gia Pratama dan Salshabilla Adriani sebagai lawan main. Menariknya, dalam credits film tersebut dr. Gia sendiri ikut berperan — sebagai ojol dan sebagai penulis novel. [FAKTA] Saat ini dr. Gia aktif di media sosial dengan akun @giapratamamd (Instagram, TikTok, dan X), dan pada September 2026 tercatat sebagai salah satu influencer Jakarta di bidang kesehatan dan keluarga. Bio resminya di berbagai platform berbunyi: 'Pengabdi Kemanusiaan. Penulis cerita. Pujangga dalam jiwa.' [FAKTA] Dr. Gia juga aktif memberikan edukasi kesehatan kepada publik. Pada 2026, ia dikutip media VOI.id terkait edukasi demam berdarah dan kewaspadaan terhadap gejala yang sering disalahartikan."
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // SECTION 3: QUOTE BANNER
  // Menggunakan kutipan reflektif — bukan quote palsu dari dr. Gia
  // ─────────────────────────────────────────────────────────────
  quoteSection: {
    quote: "Pengabdi Kemanusiaan. Penulis cerita. Pujangga dalam jiwa.",
    attribution: "— dr. Gia Pratama, bio resmi di seluruh platform media sosialnya",
    note: "Sumber: Linktree resmi drgiapratama (linktr.ee/drgiapratama) & profil Instagram @giapratamamd, diverifikasi September 2026."
  },

  // ─────────────────────────────────────────────────────────────
  // SECTION 4: PELAJARAN YANG DIPEROLEH
  // 4 paragraf narasi + 5 insight cards
  // Dibedakan secara eksplisit: mana fakta, mana interpretasi penulis
  // ─────────────────────────────────────────────────────────────
  lessons: {
    badge: "05 / PELAJARAN YANG DIPEROLEH",
    title: "Pelajaran yang Bisa Dipetik",
    subtitle: "Refleksi penulis atas perjalanan yang sudah dibahas — berdasarkan fakta yang ada, bukan asumsi.",
    narrativeParagraphs: [
      "Pelajaran pertama yang saya tangkap dari perjalanan dr. Gia adalah soal konsistensi dalam proses yang tidak terlihat. Sebelum bukunya ada di toko buku, sebelum filmnya tayang di Disney+ Hotstar, ada bertahun-tahun kerja di ruang IGD yang tidak ada kameranya. Ada malam-malam jaga, keputusan-keputusan berat, dan pasien yang datang dengan kondisi yang tidak selalu berakhir baik. Tulisan yang akhirnya muncul ke publik bukan datang dari kekosongan — ia lahir dari akumulasi pengalaman yang dikumpulkan dengan sungguh-sungguh. Saya rasa itu yang membuat kisah-kisahnya terasa beda: bukan karena gaya penulisannya saja, tapi karena ia punya bahan yang tidak semua orang punya.",
      "Pelajaran kedua — dan ini yang menarik dari sisi kewirausahaan — adalah soal bagaimana memanfaatkan apa yang sudah dimiliki. Dr. Gia tidak berhenti menjadi dokter untuk menjadi penulis. Ia tidak meninggalkan satu identitas demi yang lain. Justru sebaliknya: identitas dokternya adalah yang membuat tulisannya berharga. Buku Garda Detak dengan 40 cerita pendek dari IGD tidak bisa ditulis oleh sembarang orang — perlu seseorang yang benar-benar ada di ruangan itu. Ini yang dalam konteks kewirausahaan disebut sebagai competitive advantage — keunggulan yang sulit ditiru karena berakar pada pengalaman nyata.",
      "Pelajaran ketiga berkaitan dengan komunikasi. Salah satu hal yang saya perhatikan dari cara dr. Gia bercerita — baik di podcast maupun di karya tulisnya — adalah kemampuannya mentranslasikan hal-hal teknis menjadi sesuatu yang bisa dipahami dan dirasakan orang awam. Tentang bagaimana DBD bekerja di dalam tubuh, tentang apa yang terjadi saat seseorang kehilangan darah terlalu banyak, tentang kenapa donor darah itu penting — semua disampaikan tanpa menggurui. Kemampuan komunikasi seperti ini, dalam dunia bisnis maupun sosial, adalah aset yang sangat berharga. Banyak orang yang ahli tapi tidak bisa menjelaskan keahliannya. Dr. Gia bisa melakukan keduanya.",
      "Pelajaran keempat, dan mungkin yang paling relevan untuk konteks tugas ini, adalah soal membangun dampak melampaui lingkaran terdekat. Seorang dokter IGD, dalam pekerjaannya, berhadapan dengan pasien satu per satu. Tapi seorang dokter yang juga menulis bisa menjangkau ribuan — bahkan jutaan — pembaca yang mungkin tidak pernah bertemu dengannya secara langsung. [INTERPRETASI PENULIS: Ini bukan berarti menulis lebih penting dari praktik klinis. Tapi keduanya bisa berjalan beriringan, dan dampak yang dihasilkan bersifat berlipat ganda. Dalam bahasa kewirausahaan, ini adalah skalabilitas — kemampuan untuk meningkatkan dampak tanpa harus proporsional meningkatkan input waktu dan tenaga.]"
    ],
    cards: [
      {
        number: "01",
        title: "Konsistensi",
        subtitle: "Dampak Besar dari Proses yang Panjang",
        description: "Lima buku lahir dari bertahun-tahun menulis di sela-sela jadwal jaga. Tidak ada yang instan — setiap karya dibangun di atas akumulasi pengalaman nyata di lapangan.",
        iconName: "Clock"
      },
      {
        number: "02",
        title: "Competitive Advantage",
        subtitle: "Keunggulan yang Sulit Ditiru",
        description: "Identitas dokternya adalah modal paling kuat dalam tulisannya. Cerita dari dalam IGD tidak bisa ditulis sembarang orang — dan justru itulah yang membuatnya bernilai bagi pembaca.",
        iconName: "ShieldCheck"
      },
      {
        number: "03",
        title: "Kemampuan Komunikasi",
        subtitle: "Dari Bahasa Medis ke Bahasa Manusia",
        description: "Menerjemahkan hal teknis menjadi sesuatu yang bisa dirasakan orang awam adalah keterampilan tersendiri. Dr. Gia memperlihatkan bahwa keahlian klinis dan keahlian bercerita bisa tumbuh bersama.",
        iconName: "MessageCircle"
      },
      {
        number: "04",
        title: "Skalabilitas Dampak",
        subtitle: "Dari Satu Pasien ke Jutaan Pembaca",
        description: "Praktik klinis menjangkau pasien satu per satu. Buku dan media sosial memungkinkan satu pesan kesehatan menjangkau skala yang jauh lebih luas tanpa harus mengorbankan kualitas.",
        iconName: "TrendingUp"
      },
      {
        number: "05",
        title: "Personal Branding Organik",
        subtitle: "Reputasi yang Dibangun dari Substansi",
        description: "Bio dr. Gia — 'Pengabdi Kemanusiaan. Penulis cerita. Pujangga dalam jiwa.' — tidak mencerminkan strategi pemasaran. Ia mencerminkan identitas yang terbentuk secara konsisten dari cara ia bekerja dan berkarya.",
        iconName: "Sparkles"
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // SECTION 5: ENTREPRENEURIAL MINDSET
  // Analisis akademis dengan tetap membedakan fakta dan interpretasi
  // ─────────────────────────────────────────────────────────────
  entrepreneurship: {
    badge: "06 / NILAI KEWIRAUSAHAAN",
    title: "Apa Hubungannya dengan Kewirausahaan?",
    subtitle: "Kewirausahaan bukan hanya soal mendirikan bisnis. Ia tentang cara seseorang menciptakan nilai — dan kisah dr. Gia memberi banyak hal untuk dianalisis.",
    lead: "Satu hal yang perlu diperjelas di awal: saya tidak punya sumber yang menyatakan bahwa dr. Gia secara sadar menerapkan 'strategi kewirausahaan' dalam hidupnya. Yang saya lakukan di bagian ini adalah melihat perjalanan yang sudah terdokumentasi dari sudut pandang konsep-konsep kewirausahaan yang dipelajari. Pembeda antara fakta tentang dr. Gia dan interpretasi saya sebagai penulis tugas akan tetap ditandai secara eksplisit.",
    pillars: [
      {
        id: "value-creation",
        number: "01",
        title: "Value Creation",
        concept: "Menciptakan Nilai dari Keahlian yang Sudah Ada",
        explanation: "[FAKTA] Dr. Gia adalah dokter IGD aktif yang juga menulis buku berdasarkan pengalamannya. [INTERPRETASI PENULIS] Dalam teori kewirausahaan, value creation adalah proses mengubah sesuatu yang dimiliki menjadi sesuatu yang berguna bagi orang lain. Dr. Gia melakukannya dengan mengubah pengalaman klinisnya — yang sudah ada — menjadi narasi yang bisa dikonsumsi dan dirasakan publik luas.",
        application: "Pelajaran untuk mahasiswa: Nilai bisa diciptakan dari apa yang sudah kamu kuasai, bukan hanya dari ide baru yang belum pernah ada."
      },
      {
        id: "opportunity",
        number: "02",
        title: "Opportunity Recognition",
        concept: "Melihat Peluang di Kesenjangan Informasi",
        explanation: "[INTERPRETASI PENULIS] Ada kesenjangan nyata antara dunia medis dan pemahaman masyarakat awam tentang kesehatan. Dr. Gia — mungkin tanpa menyebutnya sebagai 'peluang bisnis' — mengisi kesenjangan itu. Buku-bukunya dan konten media sosialnya menjembatani dua dunia yang jarang bertemu: realita IGD dan keingintahuan publik tentang apa yang sebenarnya terjadi di dalam rumah sakit.",
        application: "Pelajaran untuk mahasiswa: Kesenjangan informasi antara yang ahli dan yang awam adalah salah satu peluang yang paling konsisten ada di hampir semua bidang."
      },
      {
        id: "branding",
        number: "03",
        title: "Personal Branding",
        concept: "Identitas yang Terbentuk dari Konsistensi",
        explanation: "[FAKTA] Bio resmi dr. Gia di Linktree dan media sosialnya adalah: 'Pengabdi Kemanusiaan. Penulis cerita. Pujangga dalam jiwa.' [INTERPRETASI PENULIS] Personal branding yang kuat tidak selalu direncanakan — ia seringkali terbentuk dari konsistensi perilaku dan karya dalam jangka panjang. Identitas dr. Gia sebagai dokter yang juga menulis sudah koheren: satu memperkuat yang lain.",
        application: "Pelajaran untuk mahasiswa: Personal brand yang paling kuat adalah yang mencerminkan siapa kamu sebenarnya — bukan yang dirancang untuk terlihat keren."
      },
      {
        id: "diversification",
        number: "04",
        title: "Diversifikasi Portofolio",
        concept: "Tidak Menggantungkan Diri pada Satu Jalur",
        explanation: "[FAKTA] Dr. Gia memiliki setidaknya dua jalur karya yang berjalan bersamaan: praktik klinis dan penulisan. Novel #BerhentiDiKamu bahkan berkembang lagi menjadi film layar lebar. [INTERPRETASI PENULIS] Diversifikasi bukan hanya tentang pendapatan — ia juga tentang dampak dan jangkauan. Setiap medium yang berbeda menjangkau audiens yang berbeda pula.",
        application: "Pelajaran untuk mahasiswa: Keahlian inti yang kuat bisa dikembangkan ke berbagai medium — tulisan, video, podcast, berbicara di depan publik — tanpa harus meninggalkan yang utama."
      },
      {
        id: "resilience",
        number: "05",
        title: "Resilience",
        concept: "Ketahanan yang Dibangun dari Tekanan Nyata",
        explanation: "[FAKTA] Bekerja di IGD — termasuk saat COVID-19 sebagai kepala instalasi — adalah lingkungan dengan tekanan dan risiko yang sangat tinggi. [INTERPRETASI PENULIS] Kemampuan untuk tetap berfungsi, bahkan berkarya, di tengah tekanan seperti itu adalah bentuk resilience yang tidak bisa dibangun dalam semalam. Ini relevan untuk kewirausahaan karena semua wirausahawan akan menghadapi periode tekanan tinggi.",
        application: "Pelajaran untuk mahasiswa: Resilience bukan sikap positif yang dipaksakan — ia dibangun dari pengalaman melewati kesulitan nyata dan tetap terus bergerak."
      },
      {
        id: "social-impact",
        number: "06",
        title: "Social Entrepreneurship",
        concept: "Dampak Sosial sebagai Tujuan Utama",
        explanation: "[FAKTA] Dalam podcast Raditya Dika, dr. Gia menghabiskan sebagian besar waktu untuk mengedukasi tentang bagaimana penyakit bekerja, bukan untuk mempromosikan dirinya. Ia juga dikutip media VOI.id (2026) memberikan edukasi publik tentang demam berdarah. [INTERPRETASI PENULIS] Ini pola yang konsisten dengan social entrepreneurship — di mana nilai sosial (edukasi, kesadaran kesehatan publik) adalah tujuan utama, bukan produk sampingan dari aktivitas komersial.",
        application: "Pelajaran untuk mahasiswa: Bisnis yang paling bertahan lama cenderung yang paling jelas memberikan nilai kepada komunitas di luar dirinya sendiri."
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // SECTION 6: MY TAKEAWAY — Sudut pandang personal mahasiswa
  // ─────────────────────────────────────────────────────────────
  myTakeaway: {
    badge: "07 / REFLEKSI PRIBADI",
    title: "Yang Saya Pelajari dari Kisah Ini",
    paragraphs: [
      "Saya awalnya membayangkan bahwa sosok 'success story' untuk tugas ini haruslah seseorang dengan karier yang dramatis — dari nol hingga ke puncak, penuh titik balik besar. Setelah meneliti dr. Gia, saya justru menemukan sesuatu yang berbeda: perjalanannya tidak terasa dramatis dari luar, tapi ketika dibaca lebih dekat, ia penuh dengan pilihan yang konsisten — untuk tetap menulis, untuk tetap bekerja di lapangan, untuk tetap bercerita dengan jujur tentang realita profesinya.",
      "Salah satu hal yang paling berkesan bagi saya adalah fakta bahwa ia mulai menulis karena terinspirasi membaca — dan bukan langsung sukses besar. Buku pertamanya terbit tahun 2018, dan ia baru punya lima buku sekarang. Itu bukan pertumbuhan eksplosif. Tapi setiap buku yang ia tulis punya akar yang kuat: pengalaman nyata, perspektif yang tidak bisa dipalsukan, dan audiens yang merasakannya. Dari perjalanan ini, saya belajar bahwa membangun sesuatu yang berarti memerlukan waktu — dan bahwa mulai dari apa yang sudah ada di tangan, bukan dari apa yang belum dimiliki, adalah langkah yang jauh lebih solid."
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // SECTION 7: KESIMPULAN
  // Minimal 1 paragraf — dibuat 2 paragraf yang kuat
  // ─────────────────────────────────────────────────────────────
  conclusion: {
    badge: "08 / KESIMPULAN",
    title: "Kesimpulan",
    subtitle: "Merangkum perjalanan, pelajaran, dan relevansinya dengan kewirausahaan.",
    paragraphs: [
      "Dr. Gia Pratama adalah contoh yang menarik untuk dibahas dalam konteks kewirausahaan bukan karena ia mendirikan perusahaan atau mengembangkan produk baru, melainkan karena ia memperlihatkan bagaimana seseorang bisa membangun dampak yang melampaui batas pekerjaannya dengan memanfaatkan apa yang sudah ia miliki. Ia adalah dokter IGD yang juga menulis — dan kedua identitas itu tidak berkonflik, justru saling menguatkan. Buku-bukunya lahir dari pengalaman klinis yang nyata, dan karirnya sebagai penulis membuat karyanya tidak bisa diduplikasi sembarang orang.",
      "Bagi mahasiswa yang sedang belajar kewirausahaan, kisah ini menawarkan sudut pandang yang perlu dipertimbangkan: bahwa kewirausahaan bukan hanya tentang ide besar yang belum ada, tapi juga tentang kemampuan melihat nilai dalam apa yang sudah kamu kuasai dan menemukan cara untuk menyampaikannya kepada orang yang membutuhkan. Konsistensi, kemampuan komunikasi, dan kemauan untuk berkarya dengan bahan yang sesungguhnya — tiga hal itu yang paling jelas terlihat dari perjalanan dr. Gia, dan ketiganya adalah keterampilan yang relevan di bidang apa pun."
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // SECTION 8: KARYA & BUKU
  // Hanya karya yang terverifikasi dari sumber kredibel
  // ─────────────────────────────────────────────────────────────
  works: [
    {
      id: "berhenti-di-kamu",
      title: "#BerhentiDiKamu",
      year: "Sebelum 2021",
      type: "Novel — Diadaptasi Layar Lebar",
      coverUrl: "/image/buku/berhentidikamu.png",
      coverFallback: "BDK",
      description: "Novel karya dr. Gia Pratama yang diadaptasi menjadi film dan tayang di Disney+ Hotstar pada 12 Februari 2021. Disutradarai Indra Gunawan, diproduksi Putut Widjanarko. Pemeran utama Roger Danuarta. Dr. Gia sendiri ikut berperan dalam film ini.",
      sourceText: "IMDB (tt11799834) & Plex.tv — diverifikasi 2026",
      sourceUrl: "https://watch.plex.tv/en-GB/movie/stoponyou"
    },
    {
      id: "perikardia",
      title: "Perikardia",
      year: "—",
      type: "Buku",
      coverUrl: "/image/buku/perikardia.png",
      coverFallback: "PR",
      description: "Salah satu karya dr. Gia Pratama. Perikardia adalah lapisan pembungkus jantung — pemilihan judul ini konsisten dengan latar belakang klinisnya sebagai dokter IGD.",
      sourceText: "Disebut dalam referensi online tentang karya dr. Gia Pratama",
      sourceUrl: null
    },
    {
      id: "garda-detak",
      title: "Garda Detak",
      year: "Disebutkan 2025",
      type: "Antologi",
      coverUrl: "/image/buku/gardadetak.png",
      coverFallback: "GD",
      description: "Antologi 40 cerita pendek dari ruang IGD — setiap cerita berdiri sendiri dan bisa dibaca dalam urutan apa pun. Dr. Gia mendeskripsikannya sebagai 'Chicken Soup for the Soul versi medis': ada diagnosis, ada konflik, ada kebijaksanaan.",
      sourceText: "Disebutkan langsung oleh dr. Gia dalam podcast Raditya Dika, November 2025",
      sourceUrl: "https://www.cockatoo.com/content/cerita-dari-ruang-igd"
    },
    {
      id: "cinta-3000-kaki",
      title: "Cinta 3.000 Kaki",
      year: "—",
      type: "Buku",
      coverUrl: "/image/buku/cinta31000kaki.png",
      coverFallback: "C3K",
      description: "Salah satu karya dr. Gia Pratama yang memperluas jangkauan tulisannya di luar tema medis — memperlihatkan sisi lain dari penulisnya yang ia sebut 'Pujangga dalam jiwa'.",
      sourceText: "Berdasarkan cover buku dari koleksi karya dr. Gia Pratama",
      sourceUrl: null
    },
    {
      id: "tentang-tubuhmu",
      title: "Tentang Tubuhmu",
      year: "—",
      type: "Buku Kesehatan",
      coverUrl: "/image/buku/tentangtubuhmu.png",
      coverFallback: "TT",
      description: "Karya dr. Gia Pratama yang membahas tentang tubuh manusia — sejalan dengan misinya sebagai edukator kesehatan publik yang ingin mendekatkan ilmu medis kepada masyarakat awam.",
      sourceText: "Berdasarkan cover buku dari koleksi karya dr. Gia Pratama",
      sourceUrl: null
    }
  ],

  // ─────────────────────────────────────────────────────────────
  // SECTION 9: GALLERY — Galeri dengan foto dr. Gia Pratama
  // Semua gambar menggunakan foto asli dari folder /public/image/
  // ─────────────────────────────────────────────────────────────
  gallery: [
    {
      id: "buku-debut",
      title: "Ubur-Ubur Lembur (2018)",
      category: "Buku Pertama",
      caption: "Buku debüt dr. Gia yang lahir dari inspirasi membaca karya Raditya Dika. Tebit 2018.",
      sourceName: "Disebutkan dalam podcast Raditya Dika, Nov 2025",
      sourceUrl: "https://www.cockatoo.com/content/cerita-dari-ruang-igd",
      imageUrl: "/image/dr.gia1.png",
      fallbackType: "book"
    },
    {
      id: "film-bdk",
      title: "Film #BerhentiDiKamu (2021)",
      category: "Adaptasi Film",
      caption: "Novel karya dr. Gia Pratama diadaptasi menjadi film, tayang di Disney+ Hotstar 12 Februari 2021. Sutradara: Indra Gunawan. Pemeran: Roger Danuarta, Salshabilla Adriani, Cut Meyriska.",
      sourceName: "IMDB (tt11799834) & Plex.tv",
      sourceUrl: "https://watch.plex.tv/en-GB/movie/stoponyou",
      imageUrl: "/image/dr.gia2.png",
      fallbackType: "film"
    },
    {
      id: "garda-detak-buku",
      title: "Garda Detak: Antologi Gawat Darurat",
      category: "Buku Terbaru",
      caption: "40 cerita pendek dari ruang IGD. Dirancang seperti 'Chicken Soup for the Soul versi medis' — setiap cerita berdiri sendiri dengan diagnosis, konflik, dan hikmah.",
      sourceName: "Podcast Raditya Dika 'Cerita dari Ruang IGD', Nov 2025",
      sourceUrl: "https://www.cockatoo.com/content/cerita-dari-ruang-igd",
      imageUrl: "/image/dr.gia3.png",
      fallbackType: "book"
    },
    {
      id: "igd-konteks",
      title: "Realita Ruang IGD",
      category: "Konteks Kerja",
      caption: "Ilustrasi konteks — bukan foto aktual. IGD menjadi latar belakang karya dan pengalaman dr. Gia: pasien dengan tangan yang nyaris lepas, kasus kebidanan darurat, penanganan COVID-19 sebagai kepala instalasi.",
      sourceName: "Konteks berdasarkan podcast Raditya Dika, Nov 2025",
      sourceUrl: "https://www.cockatoo.com/content/cerita-dari-ruang-igd",
      imageUrl: "/image/dr.gia4.png",
      fallbackType: "clinic"
    },
    {
      id: "edukasi-publik",
      title: "Edukasi Kesehatan Publik",
      category: "Aktivitas Digital",
      caption: "Ilustrasi konteks. Dr. Gia aktif di media sosial (@giapratamamd) sebagai edukator kesehatan, termasuk dikutip media internasional VOI.id (Sep 2026) tentang kewaspadaan demam berdarah.",
      sourceName: "VOI.id, September 2026; Infludata Jakarta Influencers, Sep 2026",
      sourceUrl: "https://voi.id/en/info-sehat/592800",
      imageUrl: "/image/dr.gia5.png",
      fallbackType: "seminar"
    },
    {
      id: "podcast-raditya",
      title: "Podcast 'Cerita dari Ruang IGD'",
      category: "Media & Podcast",
      caption: "Dalam podcast Raditya Dika (November 2025), dr. Gia bercerita tentang pengalaman di RSUD Garut, cara kerja IGD, dan membawa tiga buku termasuk Garda Detak sebagai hadiah untuk Raditya Dika.",
      sourceName: "Podcast Raditya Dika, tersedia di Cockatoo.com, Nov 2025",
      sourceUrl: "https://www.cockatoo.com/content/cerita-dari-ruang-igd",
      imageUrl: "/image/dr.gia1.png",
      fallbackType: "seminar"
    }
  ],

  // ─────────────────────────────────────────────────────────────
  // SECTION 10: SUMBER REFERENSI
  // Hanya sumber yang benar-benar dapat diakses dan diverifikasi
  // ─────────────────────────────────────────────────────────────
  references: [
    {
      no: 1,
      source: "Raditya Dika — Podcast / Cockatoo",
      title: "\"Cerita dari Ruang IGD\" — Transkrip Podcast dengan dr. Gia Pratama",
      link: "https://www.cockatoo.com/content/cerita-dari-ruang-igd",
      type: "Podcast Terverifikasi",
      note: "November 2025. Sumber primer. Berisi informasi tentang RSUD Garut, buku Ubur-Ubur Lembur (2018), Garda Detak, dan profesi dr. Gia sebagai kepala IGD."
    },
    {
      no: 2,
      source: "IMDB — Internet Movie Database",
      title: "#BerhentiDiKamu (2021) — tt11799834 — Adaptasi Film Novel dr. Gia Pratama",
      link: "https://www.imdb.com/title/tt11799834",
      type: "Database Film Internasional",
      note: "Konfirmasi tanggal rilis: 12 Februari 2021. Sutradara: Indra Gunawan. Produser: Putut Widjanarko."
    },
    {
      no: 3,
      source: "Plex.tv — #StopOnYou / #BerhentiDiKamu",
      title: "Cast & Crew — #BerhentiDiKamu (2021)",
      link: "https://watch.plex.tv/en-GB/movie/stoponyou",
      type: "Platform Streaming Internasional",
      note: "Konfirmasi cast: Roger Danuarta (dr. Gia Pratama), Salshabilla Adriani (Elsa), Cut Meyriska (Fira). dr. Gia Pratama tercatat sebagai penulis novel dan berperan sebagai ojol dalam film."
    },
    {
      no: 4,
      source: "Linktree Resmi dr. Gia Pratama",
      title: "dr. Gia Pratama Official — TikTok, Instagram, X",
      link: "https://linktr.ee/drgiapratama",
      type: "Profil Resmi Tokoh",
      note: "Akun dibuat Januari 2025. Bio: 'Pengabdi Kemanusiaan. Penulis Cerita. Garda Detak.' Tautan ke semua platform resmi."
    },
    {
      no: 5,
      source: "VOI.id — Voice of Indonesia",
      title: "Dengue Fever Knows No Season — Kutipan edukasi dr. Gia Pratama Putra",
      link: "https://voi.id/en/info-sehat/592800",
      type: "Media Berita Online",
      note: "September 2026. Dr. Gia dikutip sebagai dokter dan content creator yang memberikan edukasi tentang demam berdarah kepada publik."
    },
    {
      no: 6,
      source: "Infludata.com",
      title: "Top 20 Jakarta Instagram Influencers, September 2026 — Profil @giapratamamd",
      link: "https://infludata.com/rankings/top-20-influencer-indonesia-jakarta-instagram",
      type: "Data Analitik Media Sosial",
      note: "September 2026. Bio: 'Pengabdi Kemanusiaan. Penulis cerita. Pujangga dalam jiwa.' Masuk kategori Top Influencer Jakarta."
    },
    {
      no: 7,
      source: "Jurnal Humaniora Sastra dan Bahasa (UNS)",
      title: "Analysis of Euphemisms and Dysphemisms in Podcast 'Pertemuan Bersejarah dr. Tirta dan dr. Gia'",
      link: "https://jurnal.uns.ac.id/hsb/article/download/118415/55336",
      type: "Jurnal Akademik",
      note: "Menganalisis gaya komunikasi dr. Gia Pratama dalam podcast bersama dr. Tirta. Konfirmasi bahwa kehadiran publiknya menjadi subjek kajian akademik."
    }
  ],

  // ─────────────────────────────────────────────────────────────
  // SECTION 11: AUTHOR / TENTANG PENULIS TUGAS
  // ─────────────────────────────────────────────────────────────
  author: {
    badge: "09 / PROFIL PENULIS TUGAS",
    title: "Tentang Penulis Tugas",
    rubricPoints: [
      { label: "Judul menarik dan singkat", weight: "15%", status: "✓ Terpenuhi" },
      { label: "Perjalanan Hidup (minimal 4 paragraf)", weight: "35%", status: "✓ 5 Babak + narasi panjang" },
      { label: "Pelajaran yang diperoleh (minimal 2 paragraf)", weight: "30%", status: "✓ 4 Paragraf Narasi" },
      { label: "Kesimpulan (minimal 1 paragraf)", weight: "20%", status: "✓ 2 Paragraf" }
    ]
  }
};
