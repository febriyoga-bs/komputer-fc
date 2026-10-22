import React from "react";
import { useMemo, useState } from "react";
import { Search, Shirt } from "lucide-react";
import { players, positions } from "../data/club";
import { FilterTabs, SectionHeading } from "./ui";

export default function Squad() {
  const [position, setPosition] = useState("Semua");
  const [search, setSearch] = useState("");
  const visible = useMemo(
    () =>
      players.filter(
        (player) =>
          (position === "Semua" || player.position === position) &&
          player.name.toLowerCase().includes(search.trim().toLowerCase()),
      ),
    [position, search],
  );
  return (
    <section id="squad" className="section squad-section">
      <SectionHeading
        number="03"
        eyebrow="ORANG-ORANG DI BALIK LAMBANG"
        title={
          <>
            Beda generasi.
            <br />
            Satu identitas.
          </>
        }
      >
        <div className="section-description">
          <p>
            Skuad Listrik Cup 2026.
            <br />
            Dari JTK ’02 sampai JTK ’25.
          </p>
          <span className="coach-label">
            HEAD COACH <strong>Darmawan Fatriananda</strong>
          </span>
        </div>
      </SectionHeading>
      <div className="squad-toolbar">
        <FilterTabs
          items={positions}
          value={position}
          onChange={setPosition}
          label="Filter posisi pemain"
        />
        <label className="search-input">
          <Search size={16} />
          <input
            aria-label="Cari nama pemain"
            placeholder="Cari pemain…"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </label>
      </div>
      <p className="squad-count" role="status">
        {visible.length} PEMAIN <span> / MUSIM 2026</span>
      </p>
      <div className="players-grid">
        {visible.map((player) => (
          <article className="player-card" key={player.id}>
            <div className="player-art" aria-hidden="true">
              <span className="generation-watermark">{player.generation}</span>
              <Shirt />
              <span className="shirt-monogram">KFC.</span>
              <span className="player-generation">
                JTK ’{player.generation}
              </span>
            </div>
            <div className="player-info">
              <span>{player.position}</span>
              <h3>{player.name}</h3>
            </div>
          </article>
        ))}
      </div>
      {visible.length === 0 && (
        <div className="empty-state">
          <Search />
          <h3>Pemain belum ditemukan.</h3>
          <p>Coba nama lain atau pilih semua posisi.</p>
          <button
            className="button dark"
            onClick={() => {
              setSearch("");
              setPosition("Semua");
            }}
          >
            RESET FILTER
          </button>
        </div>
      )}
      <p className="source-note">
        Nama ditranskripsi dari daftar skuad pada screenshot Instagram; ejaan
        perlu dikonfirmasi klub. Ilustrasi jersey bukan foto pemain.
      </p>
    </section>
  );
}
