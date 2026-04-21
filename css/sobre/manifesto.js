export const manifestoCSS = `
  section { background: var(--cream); padding: 6rem 2rem; }
  .inner { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 2fr 1fr; gap: 4rem; align-items: start; }
  h2 { font-family: var(--font-display); font-weight: 900; font-size: clamp(2rem, 4vw, 3.2rem); text-transform: uppercase; line-height: 1.05; color: var(--text-dark); margin-bottom: 2rem; max-width: 20ch; }
  h2 em { font-style: normal; background: var(--yellow); padding: 0 .15em; }
  p { font-size: 1rem; line-height: 1.75; color: rgba(28,27,27,.75); margin-bottom: 1rem; max-width: 60ch; }
  .card { background: #000; color: #fff; padding: 2.5rem; position: relative; overflow: visible; }
  .card .eye-badge { position: absolute; top: -1.1rem; right: -1.1rem; width: 52px; height: 52px; background: var(--yellow); display: flex; align-items: center; justify-content: center; }
  .card .eye-badge img { width: 26px; height: 26px; display: block; }
  .card h3 { font-family: var(--font-display); font-weight: 800; font-size: 1rem; letter-spacing: .12em; text-transform: uppercase; color: var(--yellow); margin-bottom: 1rem; }
  .card ul { list-style: none; display: flex; flex-direction: column; gap: .6rem; font-size: .9rem; line-height: 1.5; color: rgba(255,255,255,.85); }
  .card li::before { content: '→'; color: var(--yellow); margin-right: .6rem; }
  @media (max-width: 860px) { .inner { grid-template-columns: 1fr; } }
`;
