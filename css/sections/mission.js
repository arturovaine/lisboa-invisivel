export const missionCSS = `
  section { background: var(--cream-dark); padding: 6rem 2rem; }
  .inner { max-width: 1200px; margin: 0 auto; }
  h2 { font-family: var(--font-display); font-weight: 900; font-size: clamp(2.2rem, 5vw, 4rem); line-height: 1.05; text-transform: uppercase; color: var(--text-dark); max-width: 22ch; margin-bottom: 4rem; }
  .pillars { display: grid; grid-template-columns: repeat(3,1fr); border-top: 2px solid rgba(28,27,27,.15); }
  .pillar { padding: 2.5rem 2rem 2.5rem 0; border-right: 1px solid rgba(28,27,27,.1); }
  .pillar:last-child { border-right: none; padding-right: 0; }
  .pillar:not(:first-child) { padding-left: 2rem; }
  .num { font-family: var(--font-display); font-weight: 900; font-size: 2.5rem; color: var(--yellow); line-height: 1; margin-bottom: .8rem; }
  .t { font-family: var(--font-display); font-weight: 800; font-size: 1.1rem; letter-spacing: .08em; text-transform: uppercase; color: var(--text-dark); margin-bottom: .8rem; }
  .d { font-size: .95rem; line-height: 1.65; color: rgba(28,27,27,.65); }
  @media (max-width: 760px) { .pillars { grid-template-columns: 1fr; } .pillar { border-right: none; border-bottom: 1px solid rgba(28,27,27,.1); padding: 1.5rem 0 !important; } }
`;
