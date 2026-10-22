import React from "react";
import { useState } from "react";
import {
  ArrowUpRight,
  ArrowDown,
  ArrowUp,
  Trophy,
  Instagram,
  CircleDot,
  Heart,
  Users,
} from "lucide-react";
import Header from "./components/Header";
import MatchCenter from "./components/MatchCenter";
import Squad from "./components/Squad";
import {
  ClubMark,
  ExternalLink,
  SectionHeading,
  StoryDialog,
} from "./components/ui";
import { instagram, navigation, partners, stories } from "./data/club";

function Hero() {
  return (
    <>
      <section id="home" className="hero">
        <div className="hero-grid" />
        <div className="hero-art" aria-hidden="true">
          <div className="pitch">
            <span className="pitch-circle" />
            <span className="penalty-area" />
            <span className="center-line" />
          </div>
          <span className="giant-type">KFC</span>
          <div className="hero-emblem">
            <ClubMark />
            <span>BANDUNG · INDONESIA</span>
          </div>
          <div className="art-coordinate">
            6°52′16.4″S
            <br />
            107°34′24.9″E
          </div>
        </div>
        <div className="hero-content">
          <p className="eyebrow">
            <span className="status-dot" /> EST. 2021 · JTK POLBAN · BANDUNG
          </p>
          <h1>
            BUKAN
            <br />
            SEKADAR
            <br />
            <span>SEPAK BOLA.</span>
          </h1>
          <p className="hero-lead">
            Satu lapangan, banyak cerita.
            <br />
            Rumah untuk persaudaraan lintas generasi.
          </p>
          <div className="hero-actions">
            <a href="#about" className="button lime">
              KENALI KELUARGA KAMI <ArrowUpRight size={18} />
            </a>
            <a href="#matches" className="hero-link">
              HASIL PERTANDINGAN <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
        <div className="hero-bottom">
          <span>PASSION ON THE PITCH. FAMILY BEYOND IT.</span>
          <a href="#about" aria-label="Gulir ke tentang klub">
            <ArrowDown size={18} />
          </a>
          <span>01 — KOMPUTER FOOTBALL CLUB</span>
        </div>
        <div className="champion-stamp">
          <Trophy />
          <span>
            LISTRIK CUP <b>CHAMPIONS</b>
            <small>2 0 2 6</small>
          </span>
        </div>
      </section>
      <div className="ticker" aria-label="Nilai komunitas">
        {[
          "FOOTBALL",
          "BROTHERHOOD",
          "KOMPUTER FC",
          "JTK POLBAN",
          "BANDUNG",
        ].map((text) => (
          <span key={text}>
            {text}
            <span aria-hidden="true">✳</span>
          </span>
        ))}
      </div>
    </>
  );
}

function About() {
  return (
    <section id="about" className="section about-section">
      <SectionHeading
        number="01"
        eyebrow="INI RUMAH KITA"
        title={
          <>
            Dari kampus.
            <br />
            Untuk <em>keluarga.</em>
          </>
        }
      />
      <div className="about-copy">
        <p className="body-large">
          Kami percaya, sepak bola selalu punya cara untuk mempertemukan kita.
        </p>
        <p>
          Komputer FC adalah komunitas sepak bola alumni dan mahasiswa Jurusan
          Teknik Komputer dan Informatika, Politeknik Negeri Bandung. Di sini,
          perbedaan angkatan melebur dalam satu warna, satu semangat, dan satu
          kebanggaan.
        </p>
        <p>
          Bukan hanya tentang 90 menit di lapangan. Ini tentang menjaga
          silaturahmi, tumbuh bersama, dan pulang dengan cerita baru.
        </p>
        <ExternalLink href={instagram} className="text-link">
          SAPA KAMI DI INSTAGRAM
        </ExternalLink>
        <div className="values">
          <span>
            <CircleDot />
            Main sepenuh hati.
          </span>
          <span>
            <Users />
            Tumbuh bersama.
          </span>
          <span>
            <Heart />
            Jaga persaudaraan.
          </span>
        </div>
      </div>
    </section>
  );
}

function Honours() {
  return (
    <section id="honours" className="honours-section">
      <div className="honours-art" aria-hidden="true">
        <span className="honours-year">2026</span>
        <Trophy />
        <span className="laurel">✦ &nbsp; KOMPUTER FC &nbsp; ✦</span>
      </div>
      <div className="honours-copy">
        <p className="eyebrow">SEBUAH MOMEN. SELAMANYA MILIK KITA.</p>
        <h2>
          WE ARE
          <br />
          <em>CHAMPIONS.</em>
        </h2>
        <div className="tournament-label">
          <span /> LISTRIK CUP 2026
        </div>
        <p>
          Untuk setiap tekel, setiap sorakan, dan setiap doa.
          <br />
          Gelar ini milik seluruh keluarga Komputer FC.
        </p>
        <div className="honours-score">
          <span>
            FINAL
            <br />
            <strong>KOMPUTER FC vs CVL SOCCER</strong>
          </span>
          <b>
            0–0 <small>PEN 5–4</small>
          </b>
        </div>
        <a href="#matches" className="text-link">
          LIHAT PERJALANAN KAMI <ArrowUpRight size={17} />
        </a>
      </div>
    </section>
  );
}

function Journal({ onRead }) {
  return (
    <section id="stories" className="section journal-section">
      <SectionHeading
        number="04"
        eyebrow="CATATAN DARI PINGGIR LAPANGAN"
        title={
          <>
            Cerita yang
            <br />
            kita bawa pulang.
          </>
        }
      >
        <ExternalLink href={instagram} className="text-link">
          SEMUA MOMEN DI INSTAGRAM
        </ExternalLink>
      </SectionHeading>
      <div className="story-grid">
        {stories.map((story, index) => (
          <article className="story-card" key={story.id}>
            <button
              className={`story-visual ${story.image}`}
              onClick={() => onRead(story)}
              aria-label={`Baca ${story.title}`}
            >
              <span className="visual-grid" />
              {index === 0 ? (
                <>
                  <Trophy />
                  <strong>
                    CHAMPIONS<span>LISTRIK CUP 2026</span>
                  </strong>
                </>
              ) : index === 1 ? (
                <>
                  <Users />
                  <strong>
                    ONE CLUB.
                    <br />
                    MANY GENERATIONS.
                  </strong>
                </>
              ) : (
                <>
                  <Heart />
                  <strong>
                    STRONGER
                    <br />
                    TOGETHER.
                  </strong>
                </>
              )}
              <span className="visual-index">0{index + 1} / KFC JOURNAL</span>
            </button>
            <div className="story-meta">
              <span>{story.category}</span>
              <span>2026</span>
            </div>
            <h3>
              <button onClick={() => onRead(story)}>{story.title}</button>
            </h3>
            <p>{story.excerpt}</p>
            <button className="text-link" onClick={() => onRead(story)}>
              BACA CERITA <ArrowUpRight size={16} />
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

function Partners() {
  return (
    <section id="partners" className="section partners-section">
      <div className="partners-intro">
        <p className="eyebrow">05 / MEREKA YANG BERJALAN BERSAMA</p>
        <h2>
          Dukungan berarti.
          <br />
          Perjalanan berlanjut.
        </h2>
        <p>
          Terima kasih kepada partner musim 2026 yang ikut
          <br className="desktop-break" /> menghidupkan semangat komunitas ini.
        </p>
      </div>
      <div className="partner-grid">
        {partners.map((partner) => (
          <div className="partner" key={partner.name}>
            <span>{partner.tier}</span>
            <strong className={partner.className}>
              {partner.className === "diotomasi" && (
                <span className="partner-symbol" aria-hidden="true">
                  ◆
                </span>
              )}
              {partner.label}
            </strong>
            <small>SEASON 2026</small>
          </div>
        ))}
      </div>
      <p className="partner-note">
        Nama partner berdasarkan pengumuman sponsor klub. Tampilan teks
        digunakan sampai logo resmi tersedia.
      </p>
    </section>
  );
}

function Join() {
  return (
    <section className="join-section">
      <div>
        <p className="eyebrow">SELALU ADA TEMPAT UNTUKMU.</p>
        <h2>
          Jersey boleh beda.
          <br />
          <span>Keluarga tetap sama.</span>
        </h2>
        <p>
          Ingin ikut main, berbagi cerita, atau berkolaborasi?
          <br />
          Mulai dengan satu sapaan.
        </p>
      </div>
      <ExternalLink href={instagram} className="join-button">
        <Instagram />
        <span>
          YUK, KENALAN.<small>@komputerfc</small>
        </span>
      </ExternalLink>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <a href="#home" className="footer-brand">
          KOMPUTER<span>FC.</span>
        </a>
        <p>
          FOOTBALL IS OUR GAME.
          <br />
          BROTHERHOOD IS OUR CULTURE.
        </p>
        <a href="#home" className="back-top" aria-label="Kembali ke atas">
          <ArrowUp />
        </a>
      </div>
      <div className="footer-links">
        <span>
          BANDUNG, INDONESIA
          <br />
          <small>JTK · POLITEKNIK NEGERI BANDUNG</small>
        </span>
        <nav aria-label="Navigasi footer">
          {navigation.map(([id, label]) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </nav>
      </div>
      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} Komputer FC. Made of brotherhood.
        </span>
        <ExternalLink href={instagram}>INSTAGRAM</ExternalLink>
        <span>EST. 2021 — ALWAYS A FAMILY.</span>
      </div>
    </footer>
  );
}

export default function App() {
  const [activeStory, setActiveStory] = useState(null);
  return (
    <>
      <a className="skip-link" href="#content">
        Lewati navigasi
      </a>
      <Header />
      <main id="content">
        <Hero />
        <About />
        <Honours />
        <MatchCenter />
        <Squad />
        <Journal onRead={setActiveStory} />
        <Partners />
        <Join />
      </main>
      <Footer />
      <StoryDialog story={activeStory} onClose={() => setActiveStory(null)} />
    </>
  );
}
