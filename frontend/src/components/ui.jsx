import React from "react";
import { ArrowUpRight, Shield, X } from "lucide-react";
import { useEffect, useRef } from "react";

export function ClubMark({ small = false }) {
  return (
    <span
      className={`club-mark ${small ? "small" : ""}`}
      aria-label="Komputer FC"
    >
      <Shield aria-hidden="true" />
      <span>
        K<span>FC</span>
      </span>
      <i>EST. 2021</i>
    </span>
  );
}

export function SectionHeading({
  number,
  eyebrow,
  title,
  children,
  light = false,
}) {
  return (
    <div className={`section-heading ${light ? "light" : ""}`}>
      <div>
        <p className="eyebrow">
          <span>{number}</span> {eyebrow}
        </p>
        <h2>{title}</h2>
      </div>
      {children}
    </div>
  );
}

export function ExternalLink({ children, href, className = "", ...props }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      {...props}
    >
      {children}
      <ArrowUpRight size={17} aria-hidden="true" />
    </a>
  );
}

export function FilterTabs({ items, value, onChange, label }) {
  return (
    <div className="filter-tabs" role="group" aria-label={label}>
      {items.map((item) => (
        <button
          type="button"
          key={item}
          aria-pressed={value === item}
          className={value === item ? "active" : ""}
          onClick={() => onChange(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export function StoryDialog({ story, onClose }) {
  const dialog = useRef(null);
  useEffect(() => {
    if (!story) return;
    const previouslyFocused = document.activeElement;
    dialog.current.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, [story]);
  if (!story) return null;
  return (
    <dialog
      ref={dialog}
      className="story-dialog"
      aria-labelledby="story-title"
      onCancel={onClose}
      onClick={(event) => {
        if (event.target === dialog.current) onClose();
      }}
    >
      <button
        autoFocus
        className="dialog-close icon-button"
        onClick={onClose}
        aria-label="Tutup cerita"
      >
        <X />
      </button>
      <p className="eyebrow">JURNAL KLUB / {story.category}</p>
      <h2 id="story-title">{story.title}</h2>
      {story.body.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </dialog>
  );
}
