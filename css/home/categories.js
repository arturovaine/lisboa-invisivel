export const categoriesCSS = `
  section { background: var(--cream); padding: 5rem 2rem; }
  .inner { max-width: 1200px; margin: 0 auto; }
  h2 { font-family: var(--font-display); font-weight: 900; font-size: clamp(1.5rem, 3vw, 2.2rem); text-transform: uppercase; letter-spacing: .05em; color: var(--text-dark); margin-bottom: 2rem; }
  .grid { display: grid; grid-template-columns: repeat(4,1fr); border: 1px solid rgba(28,27,27,.12); }
  .cat { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: .7rem; padding: 2rem 1rem; border-right: 1px solid rgba(28,27,27,.12); border-bottom: 1px solid rgba(28,27,27,.12); cursor: pointer; transition: background .2s; background: var(--cream-dark); }
  .cat:hover { background: rgba(244,197,66,.12); }
  .cat.active { background: var(--yellow); }
  .cat.dark { background: var(--purple-dark); }
  .cat:nth-child(4n) { border-right: none; }
  .cat:nth-last-child(-n+4) { border-bottom: none; }
  .ic { width: 24px; height: 24px; opacity: .65; display: block; }
  .cat.active .ic { opacity: 1; }
  .cat.dark .ic { opacity: 1; }
  .l { font-family: var(--font-display); font-weight: 700; font-size: .75rem; letter-spacing: .1em; text-transform: uppercase; color: var(--text-dark); text-align: center; }
  .cat.dark .l { color: var(--yellow); }
  @media (max-width: 760px) { .grid { grid-template-columns: repeat(2,1fr); } .cat { border-right: 1px solid rgba(28,27,27,.12) !important; } .cat:nth-child(2n) { border-right: none !important; } }
`;
