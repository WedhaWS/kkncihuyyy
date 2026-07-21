/* ============================================================
   BANK DATA 40 KASUS (20 SESI x 2 SOAL) - ELEMEN & KEGIATAN SD
   ============================================================ */
const CASES = [
  // ------------------- SESI 1 -------------------
  {
    tag: "SESI 1 - KASUS 1",
    title: "🧺 Mencuci Baju Sekolah",
    mission: "Robot mau mencuci seragam sekolah, tapi instruksinya terbalik. Bantu urutkan ya!",
    startIcon: "🤖", goalIcon: "🧺",
    steps: [
      { id:"c1s1", emoji:"🧦", txt:"Pisahkan baju putih & berwarna", note:"Baju harus dipisah dulu agar warna tidak luntur ke seragam putih." },
      { id:"c1s2", emoji:"🌀", txt:"Masukkan baju ke mesin cuci", note:"Masukkan baju yang sudah dipisah ke dalam tabung." },
      { id:"c1s3", emoji:"🧴", txt:"Tambahkan deterjen secukupnya", note:"Deterjen dimasukkan sebelum mesin mulai mencuci." },
      { id:"c1s4", emoji:"⏱️", txt:"Nyalakan mesin & tunggu selesai", note:"Mesin dinyalakan setelah baju dan deterjen siap." },
      { id:"c1s5", emoji:"☀️", txt:"Jemur baju hingga kering", note:"Baju dijemur di bawah matahari setelah selesai dicuci." }
    ],
    bugSwaps: [[2,4]]
  },
  {
    tag: "SESI 1 - KASUS 2",
    title: "🪥 Menggosok Gigi Sebelum Tidur",
    mission: "Robot ingin membersihkan gigi, tapi ada langkah yang salah tempat!",
    startIcon: "🤖", goalIcon: "😁",
    steps: [
      { id:"c2s1", emoji:"🪥", txt:"Ambil sikat gigi", note:"Ambil sikat gigi terlebih dahulu dari wadahnya." },
      { id:"c2s2", emoji:"💧", txt:"Basahi sikat dengan air", note:"Basahi sikat agar lebih lembut sebelum diberi pasta gigi." },
      { id:"c2s3", emoji:"🧴", txt:"Oleskan pasta gigi", note:"Oleskan pasta gigi secukupnya di atas sikat." },
      { id:"c2s4", emoji:"⏲️", txt:"Sikat gigi secara merata", note:"Sikat gigi melingkar selama minimal 2 menit." },
      { id:"c2s5", emoji:"🚰", txt:"Kumur dengan air bersih", note:"Kumur untuk membersihkan sisa pasta gigi di mulut." }
    ],
    bugSwaps: [[1,3]]
  },

  // ------------------- SESI 2 -------------------
  {
    tag: "SESI 2 - KASUS 3",
    title: "🍫 Membuat Susu Cokelat Hangat",
    mission: "Robot kebingungan saat membuat minuman hangat sebelum berangkat sekolah.",
    startIcon: "🤖", goalIcon: "🥤",
    steps: [
      { id:"c3s1", emoji:"🥛", txt:"Siapkan gelas bersih", note:"Selalu mulai dengan menyiapkan gelas yang bersih." },
      { id:"c3s2", emoji:"🍫", txt:"Tuang bubuk cokelat ke gelas", note:"Bubuk dimasukkan saat gelas masih kosong." },
      { id:"c3s3", emoji:"♨️", txt:"Tuang air hangat pelan-pelan", note:"Air hangat dituang agar bubuk bisa larut." },
      { id:"c3s4", emoji:"🥄", txt:"Aduk hingga larut", note:"Aduk menggunakan sendok hingga tercampur rata." }
    ],
    bugSwaps: [[1,3]]
  },
  {
    tag: "SESI 2 - KASUS 4",
    title: "🍳 Memasak Telur Ceplok SARAPAN",
    mission: "Dapur berantakan karena instruksi masak robot terbalik!",
    startIcon: "🤖", goalIcon: "🍳",
    steps: [
      { id:"c4s1", emoji:"🔥", txt:"Nyalakan kompor & panaskan wajan", note:"Wajan dan minyak harus dipanaskan terlebih dahulu." },
      { id:"c4s2", emoji:"🥚", txt:"Pecahkan telur di atas wajan", note:"Pecahkan telur dengan hati-hati ke wajan yang sudah panas." },
      { id:"c4s3", emoji:"🧂", txt:"Taburkan sedikit garam", note:"Beri garam saat telur sedang dimasak." },
      { id:"c4s4", emoji:"🍽️", txt:"Angkat & sajikan di piring", note:"Sajikan telur yang matang ke piring sajian." }
    ],
    bugSwaps: [[0,2]]
  },

  // ------------------- SESI 3 -------------------
  {
    tag: "SESI 3 - KASUS 5",
    title: "🎒 Menyiapkan Tas Sekolah",
    mission: "Robot lupa urutan menyiapkan buku sesuai jadwal pelajaran besok.",
    startIcon: "🤖", goalIcon: "🎒",
    steps: [
      { id:"c5s1", emoji:"📅", txt:"Lihat jadwal pelajaran", note:"Jadwal dibaca dulu untuk tahu buku apa yang harus dibawa." },
      { id:"c5s2", emoji:"📚", txt:"Ambil buku dari rak", note:"Pilih buku yang sesuai dengan jadwal besok." },
      { id:"c5s3", emoji:"✏️", txt:"Masukkan tempat pensil & buku", note:"Masukkan semua perlengkapan ke dalam tas." },
      { id:"c5s4", emoji:"🤐", txt:"Tutup ritsleting tas", note:"Tutup tas agar barang tidak berceceran." }
    ],
    bugSwaps: [[0,2]]
  },
  {
    tag: "SESI 3 - KASUS 6",
    title: "👞 Memakai Sepatu Sekolah",
    mission: "Langkah memakai sepatu robot terbalik! Yuk bantu betulkan.",
    startIcon: "🤖", goalIcon: "👞",
    steps: [
      { id:"c6s1", emoji:"🧦", txt:"Pakai kaus kaki di kedua kaki", note:"Kaus kaki harus dipakai terlebih dahulu." },
      { id:"c6s2", emoji:"👟", txt:"Masukkan kaki ke dalam sepatu", note:"Kaki berkaus kaki dimasukkan ke dalam sepatu." },
      { id:"c6s3", emoji:"🎀", txt:"Ikat tali sepatu dengan kuat", note:"Tali sepatu diikat setelah kaki masuk sempurna." }
    ],
    bugSwaps: [[0,2]]
  },

  // ------------------- SESI 4 -------------------
  {
    tag: "SESI 4 - KASUS 7",
    title: "🚿 Mandi Pagi Segar",
    mission: "Robot mau mandi pagi tapi urutan kerjanya membingungkan.",
    startIcon: "🤖", goalIcon: "🧼",
    steps: [
      { id:"c7s1", emoji:"💦", txt:"Basahi seluruh tubuh", note:"Tubuh dibasahi air dulu sebelum diberi sabun." },
      { id:"c7s2", emoji:"🧼", txt:"Gosokkan sabun mandi", note:"Sabun digosokkan ke seluruh tubuh hingga berbusa." },
      { id:"c7s3", emoji:"🚿", txt:"Bilas busa dengan air bersih", note:"Bilas tubuh hingga tidak ada lagi sisa sabun." },
      { id:"c7s4", emoji:"🥢", txt:"Keringkan badan dengan handuk", note:"Keringkan badan pakai handuk setelah bilas." }
    ],
    bugSwaps: [[1,3]]
  },
  {
    tag: "SESI 4 - KASUS 8",
    title: "🍌 Membuat Pisang Goreng",
    mission: "Sore-sore mau bikin camilan, tapi resep robot bug!",
    startIcon: "🤖", goalIcon: "🍌",
    steps: [
      { id:"c8s1", emoji:"🍌", txt:"Kupas kulit pisang", note:"Kulit pisang dikupas bersih terlebih dahulu." },
      { id:"c8s2", emoji:"🥣", txt:"Celupkan pisang ke adonan tepung", note:"Pisang dilapisi adonan tepung basah." },
      { id:"c8s3", emoji:"🍳", txt:"Goreng dalam minyak panas", note:"Masukan pisang bertepung ke wajan." },
      { id:"c8s4", emoji:"✨", txt:"Tiriskan & sajikan", note:"Tiriskan minyak sebelum pisang dimakan." }
    ],
    bugSwaps: [[0,2]]
  },

  // ------------------- SESI 5 -------------------
  {
    tag: "SESI 5 - KASUS 9",
    title: "📖 Membaca Buku di Perpustakaan",
    mission: "Robot mau pinjam buku, tapi tata tertibnya berantakan.",
    startIcon: "🤖", goalIcon: "📚",
    steps: [
      { id:"c9s1", emoji:"🔍", txt:"Cari buku di rak", note:"Cari judul buku yang ingin dibaca." },
      { id:"c9s2", emoji:"🪑", txt:"Duduk & baca dengan tenang", note:"Baca buku tanpa membuat kegaduhan." },
      { id:"c9s3", emoji:"🔖", txt:"Kembalikan buku ke rak semula", note:"Letakkan kembali buku di tempat asal setelah selesai." }
    ],
    bugSwaps: [[0,2]]
  },
  {
    tag: "SESI 5 - KASUS 10",
    title: "🌱 Menanam Biji Bunga",
    mission: "Robot mau berkebun di halaman sekolah, yuk bantu urutkan!",
    startIcon: "🤖", goalIcon: "🌻",
    steps: [
      { id:"c10s1", emoji:"🪴", txt:"Isi pot dengan tanah", note:"Siapkan media tanam berupa tanah di pot." },
      { id:"c10s2", emoji:"🌱", txt:"Tanam biji di dalam tanah", note:"Masukkan biji tanaman sedikit ke dalam tanah." },
      { id:"c10s3", emoji:"💧", txt:"Siram dengan air secukupnya", note:"Siram air agar biji mendapatkan kelembapan." },
      { id:"c10s4", emoji:"☀️", txt:"Taruh pot di tempat terang", note:"Tanaman butuh sinar matahari untuk tumbuh." }
    ],
    bugSwaps: [[1,2]]
  },

  // ------------------- SESI 6 -------------------
  {
    tag: "SESI 6 - KASUS 11",
    title: "🚴 Naik Sepeda ke Sekolah",
    mission: "Keamanan berkendara robot terganggu karena langkahnya salah.",
    startIcon: "🤖", goalIcon: "🚴",
    steps: [
      { id:"c11s1", emoji:"🪖", txt:"Pasang helm keselamatan", note:"Pasang helm dulu sebelum mulai mengayuh." },
      { id:"c11s2", emoji:"🚲", txt:"Duduk di atas sadel sepeda", note:"Posisikan badan dengan seimbang di atas sepeda." },
      { id:"c11s3", emoji:"🦶", txt:"Kayuh pedal sepeda pelan-pelan", note:"Mulai mengayuh pedal ke depan." },
      { id:"c11s4", emoji:"🛑", txt:"Tarik rem untuk berhenti", note:"Tarik rem saat sampai di tujuan." }
    ],
    bugSwaps: [[0,2]]
  },
  {
    tag: "SESI 6 - KASUS 12",
    title: "🎨 Mewarnai Gambar",
    mission: "Robot mau ikut lomba menggambar di kelas.",
    startIcon: "🤖", goalIcon: "🖼️",
    steps: [
      { id:"c12s1", emoji:"✏️", txt:"Buat sketsa dengan pensil", note:"Gambar garis luar sketsa terlebih dahulu." },
      { id:"c12s2", emoji:"🖍️", txt:"Warnai bagian dalam gambar", note:"Gunakan pensil warna/krayon untuk mewarnai." },
      { id:"c12s3", emoji:"🧹", txt:"Bersihkan sisa remahan krayon", note:"Rapikan meja jika sudah selesai mewarnai." }
    ],
    bugSwaps: [[0,1]]
  },

  // ------------------- SESI 7 -------------------
  {
    tag: "SESI 7 - KASUS 13",
    title: "🤝 Berpamitan pada Orang Tua",
    mission: "Sopan santun berpamitan berangkat sekolah robot terbalik.",
    startIcon: "🤖", goalIcon: "🏫",
    steps: [
      { id:"c13s1", emoji:"🎒", txt:"Gendong tas yang sudah rapi", note:"Siapkan diri dulu dengan tas di punggung." },
      { id:"c13s2", emoji:"🙏", txt:"Cium tangan ayah & ibu", note:"Bersalaman dan cium tangan sebagai tanda hormat." },
      { id:"c13s3", emoji:"🗣️", txt:"Ucapkan salam 'Selamat Pagi'", note:"Ucapkan salam dengan ramah." },
      { id:"c13s4", emoji:"🚶", txt:"Melangkah keluar rumah", note:"Berjalan menuju sekolah." }
    ],
    bugSwaps: [[1,3]]
  },
  {
    tag: "SESI 7 - KASUS 14",
    title: "🍞 Membuat Roti Bakar Cokelat",
    mission: "Langkah membuat roti bakar robot salah urutan!",
    startIcon: "🤖", goalIcon: "🍞",
    steps: [
      { id:"c14s1", emoji:"🍞", txt:"Oleskan mentega pada roti", note:"Mentega dioleskan sebelum roti dipanggang." },
      { id:"c14s2", emoji:"🍫", txt:"Taburi meces cokelat", note:"Meces ditabur di atas mentega agar menempel." },
      { id:"c14s3", emoji:"♨️", txt:"Panggang di atas pemanggang", note:"Panggang roti sampai berwarna kecokelatan." },
      { id:"c14s4", emoji:"🍽️", txt:"Potong jadi dua & sajikan", note:"Roti dipotong setelah selesai dipanggang." }
    ],
    bugSwaps: [[1,2]]
  },

  // ------------------- SESI 8 -------------------
  {
    tag: "SESI 8 - KASUS 15",
    title: "🧹 Menyapu Kamar Tidur",
    mission: "Robot mau membersihkan kamar, bantu benahi urutannya.",
    startIcon: "🤖", goalIcon: "✨",
    steps: [
      { id:"c15s1", emoji:"🧹", txt:"Ambil sapu dan pengki", note:"Siapkan alat kebersihan terlebih dahulu." },
      { id:"c15s2", emoji:"💨", txt:"Sapu debu dari sudut ke tengah", note:"Kumpulkan sampah di satu titik." },
      { id:"c15s3", emoji:"🗑️", txt:"Masukkan sampah ke pengki", note:"Serok kotoran yang sudah terkumpul." },
      { id:"c15s4", emoji:"🚮", txt:"Buang sampah ke tong sampah", note:"Kosongkan pengki ke tempat sampah." }
    ],
    bugSwaps: [[1,3]]
  },
  {
    tag: "SESI 8 - KASUS 16",
    title: "📦 Merapikan Mainan",
    mission: "Setelah bermain, robot bingung cara membereskan mainan.",
    startIcon: "🤖", goalIcon: "🧸",
    steps: [
      { id:"c16s1", emoji:"🧸", txt:"Kumpulkan mainan yang berserakan", note:"Cari dan kumpulkan semua mainan di lantai." },
      { id:"c16s2", emoji:"📦", txt:"Masukkan ke dalam kotak mainan", note:"Masukkan mainan dengan rapi." },
      { id:"c16s3", emoji:"🔒", txt:"Tutup kotak & simpan di rak", note:"Tutup kotak agar tidak berdebu." }
    ],
    bugSwaps: [[0,1]]
  },

  // ------------------- SESI 9 -------------------
  {
    tag: "SESI 9 - KASUS 17",
    title: "🥤 Membuat Es Teh Manis",
    mission: "Minuman es teh robot rasanya aneh karena urutannya salah!",
    startIcon: "🤖", goalIcon: "🍹",
    steps: [
      { id:"c17s1", emoji:"☕", txt:"Seduh kantong teh dengan air panas", note:"Teh diseduh dulu agar warnanya keluar." },
      { id:"c17s2", emoji:"🍬", txt:"Masukkan gula & aduk rata", note:"Gula dilarutkan saat air masih panas." },
      { id:"c17s3", emoji:"🧊", txt:"Tambahkan es batu", note:"Es batu dimasukkan paling akhir agar dingin." }
    ],
    bugSwaps: [[1,2]]
  },
  {
    tag: "SESI 9 - KASUS 18",
    title: "🧼 Mencuci Tangan Pakai Sabun",
    mission: "Robot ingin tangan bebas kuman sebelum makan siang.",
    startIcon: "🤖", goalIcon: "👏",
    steps: [
      { id:"c18s1", emoji:"💧", txt:"Basahi tangan dengan air mengalir", note:"Tangan dibasahi air dulu." },
      { id:"c18s2", emoji:"🧼", txt:"Tuang sabun & gosok 20 detik", note:"Gosok sabun ke sela-sela jari." },
      { id:"c18s3", emoji:"🚰", txt:"Bilas busa hingga bersih", note:"Bilas dengan air mengalir sampai licin hilang." },
      { id:"c18s4", emoji:"🧻", txt:"Keringkan dengan lap bersih", note:"Keringkan tangan yang basah." }
    ],
    bugSwaps: [[0,2]]
  },

  // ------------------- SESI 10 -------------------
  {
    tag: "SESI 10 - KASUS 19",
    title: "📝 Mengerjakan Pekerjaan Rumah (PR)",
    mission: "Robot mau dapat nilai 100, tapi cara belajar salah!",
    startIcon: "🤖", goalIcon: "💯",
    steps: [
      { id:"c19s1", emoji:"📖", txt:"Buka buku PR & baca soal", note:"Pahami soal yang diberikan guru." },
      { id:"c19s2", emoji:"✏️", txt:"Tulis jawaban di buku tulis", note:"Kerjakan dengan teliti menggunakan pensil/pulpen." },
      { id:"c19s3", emoji:"🔍", txt:"Periksa kembali jawaban", note:"Cek ulang apakah ada jawaban yang keliru." },
      { id:"c19s4", emoji:"📁", txt:"Masukkan kembali buku ke tas", note:"Simpan buku agar tidak ketinggalan besok." }
    ],
    bugSwaps: [[1,3]]
  },
  {
    tag: "SESI 10 - KASUS 20",
    title: "🩺 Mengobati Luka Lecet",
    mission: "Robot jatuh saat olahraga, bantu obati lukanya!",
    startIcon: "🤖", goalIcon: "🩹",
    steps: [
      { id:"c20s1", emoji:"💧", txt:"Bersihkan luka dengan air bersih", note:"Cuci kotoran yang menempel pada luka." },
      { id:"c20s2", emoji:"🧴", txt:"Oleskan obat merah / antiseptik", note:"Beri obat agar tidak terinfeksi kuman." },
      { id:"c20s3", emoji:"🩹", txt:"Tutup luka dengan plester", note:"Tutup luka agar terlindung dari debu." }
    ],
    bugSwaps: [[0,2]]
  },

  // ------------------- SESI 11 -------------------
  {
    tag: "SESI 11 - KASUS 21",
    title: "🛒 Berbelanja di Kantin Sekolah",
    mission: "Robot mau beli jajanan sehat saat jam istirahat.",
    startIcon: "🤖", goalIcon: "🥪",
    steps: [
      { id:"c21s1", emoji:"🚶", txt:"Antre dengan tertib", note:"Berdiri rapi di jalur antrean kantin." },
      { id:"c21s2", emoji:"🥪", txt:"Pilih makanan yang diinginkan", note:"Pilih makanan sehat penambah energi." },
      { id:"c21s3", emoji:"💵", txt:"Bayar uang pas ke penjual", note:"Serahkan uang pembayaran." },
      { id:"c21s4", emoji:"🪙", txt:"Terima kembalian jika ada", note:"Ambil uang kembalian sebelum meninggalkan kantin." }
    ],
    bugSwaps: [[1,2]]
  },
  {
    tag: "SESI 11 - KASUS 22",
    title: "✂️ Membuat Kerajinan Origami",
    mission: "Robot ingin membuat burung kertas origami di kelas Seni.",
    startIcon: "🤖", goalIcon: "🕊️",
    steps: [
      { id:"c22s1", emoji:"📄", txt:"Siapkan kertas lipat warna-warni", note:"Pilih warna kertas favoritmu." },
      { id:"c22s2", emoji:"📐", txt:"Lipat kertas membentuk segitiga", note:"Buat lipatan dasar sesuai petunjuk." },
      { id:"c22s3", emoji:"✋", txt:"Tekan lipatan hingga rapi", note:"Rapikan sudut-sudut lipatan agar bagus." }
    ],
    bugSwaps: [[0,1]]
  },

  // ------------------- SESI 12 -------------------
  {
    tag: "SESI 12 - KASUS 23",
    title: "🏐 Bermain Bola Kasti",
    mission: "Robot kebingungan aturan main kasti di lapangan.",
    startIcon: "🤖", goalIcon: "⚾",
    steps: [
      { id:"c23s1", emoji:"🎯", txt:"Fokus melihat arah datangnya bola", note:"Perhatikan lemparan bola pemukul lawan." },
      { id:"c23s2", emoji:"🏏", txt:"Pukul bola dengan tongkat", note:"Ayunkan tongkat pemukul tepat sasaran." },
      { id:"c23s3", emoji:"🏃", txt:"Lari cepat ke tiang hinggap", note:"Segera berlari menuju tiang aman." }
    ],
    bugSwaps: [[1,2]]
  },
  {
    tag: "SESI 12 - KASUS 24",
    title: "🍏 Mencuci Bua-Buahan",
    mission: "Sebelum dimakan, buah harus dicuci bersih dulu!",
    startIcon: "🤖", goalIcon: "🍎",
    steps: [
      { id:"c24s1", emoji:"🍎", txt:"Ambil buah apel dari keranjang", note:"Pilih buah segar yang ingin dimakan." },
      { id:"c24s2", emoji:"🚰", txt:"Cuci di bawah air mengalir", note:"Gosok kulit buah perlahan agar kuman hilang." },
      { id:"c24s3", emoji:"🔪", txt:"Potong buah jadi beberapa bagian", note:"Minta bantuan orang dewasa untuk memotong." },
      { id:"c24s4", emoji:"😋", txt:"Makan buah segar", note:"Nikmati buah yang sudah bersih dan dipotong." }
    ],
    bugSwaps: [[1,3]]
  },

  // ------------------- SESI 13 -------------------
  {
    tag: "SESI 13 - KASUS 25",
    title: "👕 Melipat Baju Sendiri",
    mission: "Bantu robot belajar mandiri melipat baju yang sudah kering.",
    startIcon: "🤖", goalIcon: "👔",
    steps: [
      { id:"c25s1", emoji:"👕", txt:"Bentangkan baju di atas meja", note:"Ratakan baju agar tidak kusut." },
      { id:"c25s2", emoji:"👈", txt:"Lipat lengan kiri & kanan ke dalam", note:"Lipat bagian lengan secara seimbang." },
      { id:"c25s3", emoji:"👇", txt:"Lipat bagian bawah baju ke atas", note:"Lipat dua bagian badan baju." },
      { id:"c25s4", emoji:"🗄️", txt:"Simpan rapi di lemari", note:"Taruh baju lipat ke dalam lemari." }
    ],
    bugSwaps: [[0,2]]
  },
  {
    tag: "SESI 13 - KASUS 26",
    title: "🧯 Simulasi Bencana Gempa SD",
    mission: "Robot latihan tanggap darurat saat terjadi gempa bumi.",
    startIcon: "🤖", goalIcon: "🚨",
    steps: [
      { id:"c26s1", emoji:"🙈", txt:"Lindungi kepala & bersembunyi di bawah meja", note:"Cari perlindungan pertama dari reruntuhan." },
      { id:"c26s2", emoji:"🤫", txt:"Tetap tenang & tunggu getaran berhenti", note:"Jangan panik atau berlarian." },
      { id:"c26s3", emoji:"🏃", txt:"Jalan cepat keluar menuju lapangan terbuka", note:"Evakuasi diri menuju area aman." }
    ],
    bugSwaps: [[0,2]]
  },

  // ------------------- SESI 14 -------------------
  {
    tag: "SESI 14 - KASUS 27",
    title: "🛏️ Merapikan Tempat Tidur",
    mission: "Bangun tidur kuterus... membantu robot merapikan kasur!",
    startIcon: "🤖", goalIcon: "🛏️",
    steps: [
      { id:"c27s1", emoji:"🥱", txt:"Bangun & tarik selimut", note:"Rapikan posisi tidur segera setelah bangun." },
      { id:"c27s2", emoji:"📐", txt:"Kibaskan & ratakan sprei kasur", note:"Pastikan sprei kencang dan rapi." },
      { id:"c27s3", emoji:"🛋️", txt:"Lipat selimut dengan rapi", note:"Lipat selimut membentuk persegi." },
      { id:"c27s4", emoji:"🧸", txt:"Tata bantal & guling di bagian atas", note:"Posisikan bantal di kepala kasur." }
    ],
    bugSwaps: [[1,3]]
  },
  {
    tag: "SESI 14 - KASUS 28",
    title: "🍋 Membuat Es Lemonade",
    mission: "Robot ingin membuat minuman segar pemuas dahaga.",
    startIcon: "🤖", goalIcon: "🍋",
    steps: [
      { id:"c28s1", emoji:"🔪", txt:"Peras sari buah lemon ke gelas", note:"Peras air lemon segar." },
      { id:"c28s2", emoji:"💧", txt:"Tambahkan air matang & gula", note:"Campur air untuk mengurangi rasa sangat asam." },
      { id:"c28s3", emoji:"🥄", txt:"Aduk sampai gula larut", note:"Aduk hingga rasa manis asam menyatu." },
      { id:"c28s4", emoji:"🧊", txt:"Beri pecahan es batu", note:"Tambahkan es batu agar makin segar." }
    ],
    bugSwaps: [[0,2]]
  },

  // ------------------- SESI 15 -------------------
  {
    tag: "SESI 15 - KASUS 29",
    title: "🚶 Menyeberang Jalan Raya",
    mission: "Keselamatan jalan raya! Robot mau menyeberang di Zebra Cross.",
    startIcon: "🤖", goalIcon: "🚸",
    steps: [
      { id:"c29s1", emoji:"🛑", txt:"Berdiri di pinggir Zebra Cross", note:"Jangan berdiri terlalu dekat dengan jalur kendaraan." },
      { id:"c29s2", emoji:"👀", txt:"Tengok kanan, kiri, lalu kanan lagi", note:"Pastikan tidak ada kendaraan melaju cepat." },
      { id:"c29s3", emoji:"🙋", txt:"Angkat tangan tinggi-tinggi", note:"Beri tanda pada pengemudi bahwa kamu mau lewat." },
      { id:"c29s4", emoji:"🚶", txt:"Jalan kaki menyeberang dengan tenang", note:"Jalan tegas, jangan berlari atau bermain ponsel." }
    ],
    bugSwaps: [[1,3]]
  },
  {
    tag: "SESI 15 - KASUS 30",
    title: "🐠 Memberi Makan Ikan Hias",
    mission: "Robot memelihara ikan mas di akuarium kelas.",
    startIcon: "🤖", goalIcon: "🐠",
    steps: [
      { id:"c30s1", emoji:"🫙", txt:"Ambil botol pelet makanan ikan", note:"Siapkan wadah pakan ikan." },
      { id:"c30s2", emoji:"🤏", txt:"Ambil sedikit pelet dengan jari", note:"Jangan beri makan terlalu banyak." },
      { id:"c30s3", emoji:"💦", txt:"Tabur pelet ke permukaan air akuarium", note:"Taburkan merata di atas air." }
    ],
    bugSwaps: [[0,1]]
  },

  // ------------------- SESI 16 -------------------
  {
    tag: "SESI 16 - KASUS 31",
    title: "🚌 Naik Bus Sekolah",
    mission: "Urutan naik angkutan umum sekolah agar selamat.",
    startIcon: "🤖", goalIcon: "🚌",
    steps: [
      { id:"c31s1", emoji:"🚏", txt:"Tunggu bus di halte", note:"Menunggu hanya di area halte resmi." },
      { id:"c31s2", emoji:"🚶", txt:"Naik bus satu per satu", note:"Naik dengan tertib tanpa saling dorong." },
      { id:"c31s3", emoji:"🪑", txt:"Duduk manis di kursi penumpang", note:"Jangan berdiri saat bus berjalan." }
    ],
    bugSwaps: [[0,2]]
  },
  {
    tag: "SESI 16 - KASUS 32",
    title: "🧼 Mencuci Piring Setelah Makan",
    mission: "Bantu ibu di dapur, robot belajar cuci piring bekas makan.",
    startIcon: "🤖", goalIcon: "🍽️",
    steps: [
      { id:"c32s1", emoji:"🗑️", txt:"Buang sisa makanan ke tempat sampah", note:"Bersihkan piring dari sisa lauk." },
      { id:"c32s2", emoji:"🧽", txt:"Gosok piring dengan sabun cuci", note:"Gunakan spons berbusa sabun." },
      { id:"c32s3", emoji:"💧", txt:"Bilas dengan air mengalir sampai licin hilang", note:"Bilas hingga tidak ada sisa sabun." },
      { id:"c32s4", emoji:"🍽️", txt:"Tiriskan piring di rak", note:"Biarkan piring mengering di rak piring." }
    ],
    bugSwaps: [[1,2]]
  },

  // ------------------- SESI 17 -------------------
  {
    tag: "SESI 17 - KASUS 33",
    title: "🌽 Membakar Jagung Manis",
    mission: "Kegiatan berkemah Pramuka SD, robot bakar jagung!",
    startIcon: "🤖", goalIcon: "🌽",
    steps: [
      { id:"c33s1", emoji:"🌽", txt:"Kupas kulit & bersihkan rambut jagung", note:"Kupas kulit hingga bersih." },
      { id:"c33s2", emoji:"🧈", txt:"Oleskan margarin / bumbu manis", note:"Bumbui jagung secara merata." },
      { id:"c33s3", emoji:"🔥", txt:"Bakar di atas arang sambil diputar", note:"Putar jagung agar matang merata." },
      { id:"c33s4", emoji:"😋", txt:"Nikmati jagung bakar hangat", note:"Makan jagung yang sudah matang." }
    ],
    bugSwaps: [[1,2]]
  },
  {
    tag: "SESI 17 - KASUS 34",
    title: "📱 Menghidupkan Komputer Laboratorium",
    mission: "Pelajaran TIK, robot mau latihan mengetik.",
    startIcon: "🤖", goalIcon: "💻",
    steps: [
      { id:"c34s1", emoji:"🔌", txt:"Pastikan kabel terhubung ke stopkontak", note:"Cek aliran listrik komputer." },
      { id:"c34s2", emoji:"🔘", txt:"Tekan tombol Power pada CPU", note:"Nyalakan mesin utama komputer." },
      { id:"c34s3", emoji:"🖥️", txt:"Tekan tombol Power Monitor", note:"Nyalakan layar tampilan." },
      { id:"c34s4", emoji:"⏳", txt:"Tunggu sistem masuk ke Desktop", note:"Tunggu proses booting selesai." }
    ],
    bugSwaps: [[1,3]]
  },

  // ------------------- SESI 18 -------------------
  {
    tag: "SESI 18 - KASUS 35",
    title: "🎈 Memompa Balon Ulang Tahun",
    mission: "Robot menyiapkan dekorasi pesta ulang tahun teman.",
    startIcon: "🤖", goalIcon: "🎈",
    steps: [
      { id:"c35s1", emoji:"🎈", txt:"Pasang ujung balon ke mulut pompa", note:"Rapatkan Ujung balon di alat pompa." },
      { id:"c35s2", emoji:"💨", txt:"Tarik-dorong tuas pompa berulang kali", note:"Isi udara ke dalam balon." },
      { id:"c35s3", emoji:"🪢", txt:"Ikat simpul leher balon", note:"Ikat leher balon agar udara tidak keluar." }
    ],
    bugSwaps: [[0,1]]
  },
  {
    tag: "SESI 18 - KASUS 36",
    title: "🗑️ Memilah Sampah Organik & Anorganik",
    mission: "Robot belajar menjaga kebersihan lingkungan sekolah.",
    startIcon: "🤖", goalIcon: "♻️",
    steps: [
      { id:"c36s1", emoji:"👀", txt:"Amati jenis sampah yang dipegang", note:"Cek apakah sampah plastik atau daun." },
      { id:"c36s2", emoji:"🟢", txt:"Buang sisa makanan ke Tong Hijau (Organik)", note:"Masukan sampah alami ke wadah organik." },
      { id:"c36s3", emoji:"🟡", txt:"Buang botol plastik ke Tong Kuning (Anorganik)", note:"Sampah daur ulang ke tempatnya." }
    ],
    bugSwaps: [[1,2]]
  },

  // ------------------- SESI 19 -------------------
  {
    tag: "SESI 19 - KASUS 37",
    title: "🍜 Menyeduh Mi Instant",
    mission: "Sore hari hujan, robot mau menyeduh mi instan.",
    startIcon: "🤖", goalIcon: "🍜",
    steps: [
      { id:"c37s1", emoji:"♨️", txt:"Rebus air dalam panci hingga mendidih", note:"Panaskan air terlebih dahulu." },
      { id:"c37s2", emoji:"🍜", txt:"Masukkan mi ke air mendidih", note:"Rebus mi selama 3 menit." },
      { id:"c37s3", emoji:"🧂", txt:"Tuang bumbu mi ke dalam mangkuk", note:"Siapkan bumbu saat mi direbus." },
      { id:"c37s4", emoji:"🥢", txt:"Tiriskan mi & aduk bersama bumbu", note:"Campur mi matang dengan bumbu." }
    ],
    bugSwaps: [[1,2]]
  },
  {
    tag: "SESI 19 - KASUS 38",
    title: "🚩 Upacara Bendera Hari Senin",
    mission: "Petugas upacara robot harus disiplin mengikuti tata tertib.",
    startIcon: "🤖", goalIcon: "🇮🇩",
    steps: [
      { id:"c38s1", emoji:"🧍", txt:"Baris rapi di lapangan upacara", note:"Berdiri tegak di barisan barisan kelas." },
      { id:"c38s2", emoji:"🫡", txt:"Hormat saat Bendera Merah Putih dikibarkan", note:"Beri penghormatan terbaik." },
      { id:"c38s3", emoji:"🗣️", txt:"Mengucapkan Teks Pancasila bersama", note:"Ikuti pembacaan Teks Pancasila." },
      { id:"c38s4", emoji:"🎶", txt:"Menyanyikan lagu Indonesia Raya", note:"Menyanyi dengan khidmat." }
    ],
    bugSwaps: [[0,2]]
  },

  // ------------------- SESI 20 -------------------
  {
    tag: "SESI 20 - KASUS 39",
    title: "🌙 Persiapan Tidur Malam",
    mission: "Setelah seharian beraktivitas, saatnya robot beristirahat.",
    startIcon: "🤖", goalIcon: "😴",
    steps: [
      { id:"c39s1", emoji:"🪥", txt:"Gosok gigi & cuci kaki", note:"Bersihkan diri sebelum naik ke tempat tidur." },
      { id:"c39s2", emoji:"👕", txt:"Ganti baju dengan pakaian tidur", note:"Gunakan pakaian yang nyaman." },
      { id:"c39s3", emoji:"💡", txt:"Matikan lampu kamar", note:"Matikan lampu agar tidur lebih nyenyak." },
      { id:"c39s4", emoji:"🤲", txt:"Berdoa sebelum tidur", note:"Berdoa menurut agama dan kepercayaan." }
    ],
    bugSwaps: [[2,3]]
  },
  {
    tag: "SESI 20 - KASUS 40",
    title: "🏆 Penutupan Turnamen Detektif Kode",
    mission: "Kasus Terakhir! Robot merayakan kemenangan bersama seluruh tim!",
    startIcon: "🤖", goalIcon: "🥇",
    steps: [
      { id:"c40s1", emoji:"📊", txt:"Hitung total skor seluruh kelompok", note:"Juri menghitung nilai akhir dari sesi 1-20." },
      { id:"c40s2", emoji:"📣", txt:"Pengumuman Juara Turnamen", note:"Fasilitator membacakan pemenang." },
      { id:"c40s3", emoji:"🏆", txt:"Penyerahan piala & hadiah", note:"Pemberian apresiasi atas kerja keras tim." },
      { id:"c40s4", emoji:"📸", txt:"Foto bersama seluruh peserta KKN", note:"Abadikan momen kenangan bersama." }
    ],
    bugSwaps: [[0,1]]
  }
];