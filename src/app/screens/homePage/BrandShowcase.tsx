import React from "react";
import { Container } from "@mui/material";

const BURGUNDY = "#7A1717";
const BURGUNDY_DARK = "#5A0F0F";
const CREAM = "#F3E7D5";
const GOLD = "#E4C894";

/** 8-petal rosette, shared by several mockups */
function Rosette(props: { r: number; fill: string; hole?: string }) {
  const { r, fill, hole } = props;
  const k = r / 44;
  const petal = `M0 ${-44 * k} C ${11 * k} ${-35 * k} ${11 * k} ${-19 * k} 0 ${-11 * k} C ${-11 * k} ${-19 * k} ${-11 * k} ${-35 * k} 0 ${-44 * k} Z`;
  return (
    <g fill={fill}>
      {Array.from({ length: 8 }).map((_, i) => (
        <path key={i} d={petal} transform={`rotate(${i * 45})`} />
      ))}
      {hole ? <circle r={8 * k} fill={hole} /> : null}
      <circle r={3.5 * k} />
    </g>
  );
}

function UniformMockup() {
  return (
    <svg viewBox="0 0 300 380" role="img" aria-label="Burak waiter uniform">
      <defs>
        <radialGradient id="unBg" cx="50%" cy="35%" r="75%">
          <stop offset="0%" stopColor="#3A0E0E" />
          <stop offset="100%" stopColor="#140404" />
        </radialGradient>
        <linearGradient id="unFabric" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8A2020" />
          <stop offset="55%" stopColor="#6E1616" />
          <stop offset="100%" stopColor="#4E0D0D" />
        </linearGradient>
      </defs>
      <rect width="300" height="380" fill="url(#unBg)" />
      <circle cx="248" cy="52" r="18" fill="#F0B35A" opacity="0.18" />
      <circle cx="60" cy="40" r="10" fill="#F0B35A" opacity="0.12" />
      <path
        d="M92 78 L40 112 L16 196 L62 210 L76 162 L76 380 L224 380 L224 162 L238 210 L284 196 L260 112 L208 78 Z"
        fill="url(#unFabric)"
      />
      <g stroke="rgba(0,0,0,0.28)" strokeWidth="1.4" fill="none">
        <path d="M76 162 L92 112" />
        <path d="M224 162 L208 112" />
        <path d="M62 210 L76 162" />
        <path d="M238 210 L224 162" />
      </g>
      <rect x="143" y="92" width="14" height="288" fill="rgba(0,0,0,0.14)" />
      <path d="M150 92 L150 380" stroke="rgba(255,220,180,0.10)" strokeWidth="1" />
      <path d="M110 64 Q150 76 190 64 L194 86 Q150 100 106 86 Z" fill="#5E1111" />
      <path d="M106 86 Q150 100 194 86" stroke="rgba(0,0,0,0.35)" strokeWidth="1.2" fill="none" />
      <g textAnchor="middle" fill={GOLD}>
        <text x="196" y="150" fontFamily="Federo, serif" fontSize="19" letterSpacing="3">
          BURAK
        </text>
        <path d="M178 158 L214 158" stroke={GOLD} strokeWidth="0.8" />
      </g>
      <ellipse cx="150" cy="372" rx="150" ry="18" fill="rgba(0,0,0,0.35)" />
    </svg>
  );
}

function PlateMockup() {
  return (
    <svg viewBox="0 0 300 380" role="img" aria-label="Burak plate">
      <defs>
        <filter id="plShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="10" stdDeviation="10" floodColor="#3A0A0A" floodOpacity="0.28" />
        </filter>
      </defs>
      <rect width="300" height="380" fill="#EADCC6" />
      <g transform="translate(150 190)">
        <circle r="132" fill="#F8F1E6" filter="url(#plShadow)" />
        <circle r="126" fill="none" stroke={BURGUNDY} strokeWidth="2" />
        {Array.from({ length: 12 }).map((_, i) => (
          <g key={i} transform={`rotate(${i * 30}) translate(0 -104)`}>
            <Rosette r={17} fill={BURGUNDY} hole="#F8F1E6" />
          </g>
        ))}
        {Array.from({ length: 12 }).map((_, i) => (
          <circle key={i} r="3" fill={BURGUNDY} transform={`rotate(${i * 30 + 15}) translate(0 -104)`} />
        ))}
        <circle r="82" fill="#FBF6EE" stroke={BURGUNDY} strokeWidth="2" />
        <circle r="76" fill="none" stroke={BURGUNDY} strokeWidth="0.8" opacity="0.6" />
        <g textAnchor="middle" fill={BURGUNDY}>
          <text y="-14" fontFamily="Parisienne, cursive" fontSize="30">
            Xush
          </text>
          <text y="20" fontFamily="Parisienne, cursive" fontSize="30">
            Kelibsiz
          </text>
          <text y="50" fontFamily="Federo, serif" fontSize="10" letterSpacing="4">
            BURAK
          </text>
        </g>
      </g>
    </svg>
  );
}

function CoastersMockup() {
  return (
    <svg viewBox="0 0 300 380" role="img" aria-label="Burak coasters">
      <defs>
        <filter id="coShadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#2A0606" floodOpacity="0.35" />
        </filter>
      </defs>
      <rect width="300" height="380" fill="#E3D3BC" />
      <g transform="translate(196 262)" filter="url(#coShadow)">
        <circle r="84" fill={CREAM} />
        <circle r="78" fill="none" stroke={BURGUNDY} strokeWidth="3" />
        <Rosette r={58} fill={BURGUNDY} hole={CREAM} />
        {Array.from({ length: 8 }).map((_, i) => (
          <circle key={i} r="4" fill={BURGUNDY} transform={`rotate(${i * 45 + 22.5}) translate(0 -66)`} />
        ))}
      </g>
      <g transform="translate(112 132)" filter="url(#coShadow)">
        <circle r="86" fill={BURGUNDY} />
        <circle r="78" fill="none" stroke="#8E2626" strokeWidth="2" />
        <circle r="72" fill="none" stroke="#4E0C0C" strokeWidth="1" />
        <g textAnchor="middle" fontFamily="Federo, serif" fontSize="30" letterSpacing="4">
          <text y="11" fill="#4A0B0B">
            BURAK
          </text>
          <text y="9" fill="#A83838">
            BURAK
          </text>
        </g>
        <path d="M-34 26 L34 26" stroke="#A83838" strokeWidth="1" />
      </g>
    </svg>
  );
}

function MenuMockup() {
  return (
    <svg viewBox="0 0 300 380" role="img" aria-label="Burak menu">
      <defs>
        <pattern id="mnTile" width="44" height="44" patternUnits="userSpaceOnUse">
          <rect width="44" height="44" fill={BURGUNDY_DARK} />
          <g transform="translate(22 22)">
            <Rosette r={15} fill="#6B1515" hole={BURGUNDY_DARK} />
          </g>
          <circle cx="0" cy="0" r="5" fill="#6B1515" />
          <circle cx="44" cy="0" r="5" fill="#6B1515" />
          <circle cx="0" cy="44" r="5" fill="#6B1515" />
          <circle cx="44" cy="44" r="5" fill="#6B1515" />
        </pattern>
        <filter id="mnShadow" x="-30%" y="-10%" width="160%" height="120%">
          <feDropShadow dx="0" dy="14" stdDeviation="12" floodColor="#000" floodOpacity="0.45" />
        </filter>
        <linearGradient id="mnBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F4EEE6" />
          <stop offset="100%" stopColor="#D9CFC3" />
        </linearGradient>
      </defs>
      <rect width="300" height="380" fill="url(#mnBg)" />
      <rect x="86" y="26" width="128" height="328" rx="2" fill="url(#mnTile)" filter="url(#mnShadow)" />
      <rect x="94" y="34" width="112" height="312" fill="none" stroke={GOLD} strokeWidth="0.8" opacity="0.55" />
      <rect x="112" y="150" width="76" height="70" fill={BURGUNDY_DARK} />
      <g textAnchor="middle" fill={GOLD}>
        <text x="150" y="184" fontFamily="Federo, serif" fontSize="20" letterSpacing="3">
          BURAK
        </text>
        <text x="150" y="204" fontFamily="Jost, sans-serif" fontSize="7" letterSpacing="5">
          MENU
        </text>
      </g>
    </svg>
  );
}

const items = [
  {
    key: "uniform",
    title: "Uniform",
    text: "Burgundy linen with a gold embroidered wordmark.",
    art: <UniformMockup />,
  },
  {
    key: "plate",
    title: "Tableware",
    text: "Hand-painted rosettes with a warm welcome.",
    art: <PlateMockup />,
  },
  {
    key: "coasters",
    title: "Coasters",
    text: "Embossed wordmark beside a cream tile rosette.",
    art: <CoastersMockup />,
  },
  {
    key: "menu",
    title: "Menu",
    text: "Tonal tile pattern with a foil-stamped plaque.",
    art: <MenuMockup />,
  },
];

export default function BrandShowcase() {
  return (
    <section className="brand-showcase">
      <Container>
        <div className="brand-showcase__head">
          <span className="brand-eyebrow">The House of Burak</span>
          <h2 className="brand-title">Dressed in burgundy &amp; cream</h2>
          <p className="brand-lead">
            Every detail carries our name — from the hosts&apos; uniforms to the
            plates, coasters and menus on your table.
          </p>
        </div>
        <div className="brand-showcase__grid">
          {items.map((item) => (
            <figure key={item.key} className="brand-card">
              <div className="brand-card__art">{item.art}</div>
              <figcaption>
                <span className="brand-card__title">{item.title}</span>
                <span className="brand-card__text">{item.text}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
