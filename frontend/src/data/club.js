export const instagram = "https://www.instagram.com/komputerfc/";
export const navigation = [
  ["about", "Tentang"],
  ["matches", "Pertandingan"],
  ["squad", "Skuad"],
  ["stories", "Cerita"],
  ["partners", "Partner"],
];

// Transcribed from the club's supplied Instagram screenshot. Match dates are
// intentionally omitted: the screenshot does not show confirmed dates.
export const matches = [
  {
    id: "final",
    round: "Final",
    opponent: "CVL Soccer",
    initials: "CVL",
    home: 0,
    away: 0,
    penalties: "5–4",
    result: "win",
    color: "#bbdc30",
  },
  {
    id: "match-5",
    round: "Match 05",
    opponent: "PSAAK",
    initials: "PSA",
    home: 2,
    away: 0,
    result: "win",
    color: "#f4cd5b",
  },
  {
    id: "match-4",
    round: "Match 04",
    opponent: "Machrie FC",
    initials: "MFC",
    home: 0,
    away: 0,
    result: "draw",
    color: "#b6cfeb",
  },
  {
    id: "match-3",
    round: "Match 03",
    opponent: "Rage Football",
    initials: "RFG",
    home: 1,
    away: 0,
    result: "win",
    color: "#80d1ea",
  },
  {
    id: "match-2",
    round: "Match 02",
    opponent: "ASEP Football",
    initials: "ASP",
    home: 1,
    away: 0,
    result: "win",
    color: "#b4a2f2",
  },
  {
    id: "match-1",
    round: "Match 01",
    opponent: "CVL Soccer",
    initials: "CVL",
    home: 1,
    away: 1,
    result: "draw",
    color: "#bbdc30",
  },
];

export const players = [
  ["Fachrie Rizqon Muzakky", "Goalkeeper", "23"],
  ["Rafy Ahmad Mustawan", "Goalkeeper", "25"],
  ["Billy Muhammad Iqbal", "Defender", "02"],
  ["Febriyoga Bagus Satria", "Defender", "18"],
  ["Abdul Rangga Nopa Hiruz Putra", "Defender", "20"],
  ["Reka Briyan Cahya Heriyana", "Defender", "21"],
  ["Adrian Pratama Sasmita", "Defender", "23"],
  ["Varhan Abidrama Syihuma", "Defender", "24"],
  ["Muhammad Brata Hadinata", "Defender", "24"],
  ["Badru Mirojudin", "Midfielder", "03"],
  ["Chairunno Aditio Hegiansimuno", "Midfielder", "13"],
  ["Moch. Naufal Dwisatya", "Midfielder", "19"],
  ["Ikbal Alghifary", "Midfielder", "20"],
  ["Muhammad Wildan Gumilang", "Midfielder", "21"],
  ["Micky Ridho Pratama", "Midfielder", "24"],
  ["Ikhwan Syahid Azizy", "Midfielder", "25"],
  ["Bimo Surya Anggara", "Midfielder", "25"],
  ["Muhammad Ramdani", "Forward", "11"],
  ["M. Fachren Rochim", "Forward", "12"],
  ["Yusuf", "Forward", "22"],
  ["Muhammad Hanif", "Forward", "22"],
  ["Ersha Hasby Satria", "Forward", "24"],
  ["Fianora Putera Mardani", "Forward", "24"],
  ["Adam Ahmed Hajudi", "Forward", "25"],
].map(([name, position, generation], index) => ({
  id: index + 1,
  name,
  position,
  generation,
}));

export const positions = [
  "Semua",
  "Goalkeeper",
  "Defender",
  "Midfielder",
  "Forward",
];
export const stories = [
  {
    id: "champions",
    category: "Pencapaian",
    title: "Satu keluarga. Satu perjuangan. Satu gelar.",
    excerpt:
      "Komputer FC menjadi juara Listrik Cup 2026 setelah menuntaskan final lewat adu penalti.",
    image: "champions",
    body: [
      "Listrik Cup 2026 menjadi bagian istimewa dari perjalanan Komputer FC. Di final melawan CVL Soccer, pertandingan berakhir 0–0 dan dilanjutkan dengan adu penalti.",
      "Komputer FC menuntaskan adu penalti dengan skor 5–4. Sebuah gelar yang dirayakan bersama: pemain, pelatih, alumni, dan seluruh keluarga Komputer FC.",
      "Dari pertandingan pertama hingga peluit terakhir, terima kasih untuk setiap dukungan. Perjalanan ini milik kita bersama.",
    ],
  },
  {
    id: "generations",
    category: "Komunitas",
    title: "Beda angkatan, tetap satu lapangan.",
    excerpt:
      "Dari JTK ’02 hingga ’25. Sepak bola menjadi titik temu yang menyatukan kita.",
    image: "community",
    body: [
      "Di Komputer FC, pertemuan lintas angkatan berlanjut di lapangan. Skuad Listrik Cup 2026 mempertemukan alumni dan mahasiswa JTK dari berbagai generasi.",
      "Kami datang dengan cerita yang berbeda, tetapi berbagi kecintaan yang sama pada sepak bola. Latihan dan pertandingan menjadi kesempatan untuk saling mengenal serta menjaga silaturahmi.",
      "Ingin ikut menjadi bagian dari perjalanan ini? Sapa kami melalui Instagram @komputerfc untuk mengetahui kegiatan komunitas berikutnya.",
    ],
  },
  {
    id: "partners",
    category: "Klub",
    title: "Bersama mereka yang percaya pada kita.",
    excerpt:
      "Menyambut KAK, Diotomasi.ai, dan MR Massage dalam perjalanan musim 2026.",
    image: "partners",
    body: [
      "Perjalanan musim 2026 mendapat dukungan dari para partner Komputer FC. Terima kasih kepada KAK dan Diotomasi.ai sebagai Gold Sponsor, serta MR Massage sebagai Silver Sponsor.",
      "Dukungan ini menjadi bagian dari semangat komunitas untuk terus bertumbuh, berkompetisi, dan menciptakan momen bersama.",
      "Untuk kolaborasi dan dukungan komunitas, hubungi Komputer FC melalui akun Instagram resmi kami.",
    ],
  },
];
export const partners = [
  { name: "KAK", tier: "Gold Partner", className: "kak", label: "KAK" },
  {
    name: "Diotomasi.ai",
    tier: "Gold Partner",
    className: "diotomasi",
    label: "Diotomasi.ai",
  },
  {
    name: "MR Massage",
    tier: "Silver Partner",
    className: "massage",
    label: "MR MASSAGE",
  },
];
