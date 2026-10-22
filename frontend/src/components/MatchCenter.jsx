import React from "react";
import { useState } from "react";
import { Trophy, ArrowUpRight } from "lucide-react";
import { matches, instagram } from "../data/club";
import { ClubMark, ExternalLink, FilterTabs, SectionHeading } from "./ui";

function MatchCard({ match }) {
  return (
    <article
      className={`match-card ${match.id === "final" ? "final-match" : ""}`}
    >
      <div className="match-meta">
        <span>
          {match.id === "final" && <Trophy size={12} />} {match.round}
        </span>
        <span>FULL TIME</span>
      </div>
      <div className="match-teams">
        <div className="team">
          <ClubMark small />
          <strong>Komputer FC</strong>
        </div>
        <div className="match-score">
          <b>
            {match.home}
            <span>:</span>
            {match.away}
          </b>
          <small>
            {match.penalties ? `PEN ${match.penalties}` : "LISTRIK CUP 2026"}
          </small>
        </div>
        <div className="team">
          <span
            className="opponent-mark"
            style={{ "--team-color": match.color }}
          >
            {match.initials}
          </span>
          <strong>{match.opponent}</strong>
        </div>
      </div>
      <div className="match-footer">
        <span className={`result-pill ${match.result}`}>
          {match.result === "win" ? "MENANG" : "SERI"}
        </span>
        <span>
          {match.id === "final"
            ? "CHAMPIONS OF LISTRIK CUP"
            : "LISTRIK CUP 2026"}
        </span>
      </div>
    </article>
  );
}

export default function MatchCenter() {
  const [filter, setFilter] = useState("Semua");
  const visible = matches.filter(
    (match) =>
      filter === "Semua" ||
      (filter === "Menang" ? match.result === "win" : match.result === "draw"),
  );
  return (
    <section id="matches" className="section matches-section">
      <SectionHeading
        number="02"
        eyebrow="DARI LAPANGAN"
        title={
          <>
            Setiap laga,
            <br />
            satu cerita.
          </>
        }
      >
        <div className="section-description">
          <p>
            Kerja keras di lapangan.
            <br />
            Kebanggaan untuk seluruh keluarga.
          </p>
          <ExternalLink href={instagram} className="text-link">
            IKUTI MATCHDAY
          </ExternalLink>
        </div>
      </SectionHeading>
      <div className="match-toolbar">
        <FilterTabs
          items={["Semua", "Menang", "Seri"]}
          value={filter}
          onChange={setFilter}
          label="Filter hasil pertandingan"
        />
        <span>
          <span className="status-dot" /> LISTRIK CUP 2026
        </span>
      </div>
      <div className="match-grid" aria-live="polite">
        {visible.map((match) => (
          <MatchCard key={match.id} match={match} />
        ))}
      </div>
      <p className="source-note">
        Hasil berdasarkan arsip Instagram @komputerfc. Skor final 0–0; Komputer
        FC menang adu penalti 5–4.
      </p>
    </section>
  );
}
