export const statsCSS = `
  section { background: var(--cream); padding: 5rem 2rem; }
  .grid { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 2fr 1fr; gap: 1.5rem; }
  .card { padding: 3rem; position: relative; overflow: hidden; }
  .card.dark { background: #FAF8F2; color: var(--text-dark); }
  .card.yellow { background: var(--yellow); color: var(--purple-dark); }
  .label { font-family: var(--font-display); font-weight: 700; font-size: .7rem; letter-spacing: .18em; text-transform: uppercase; opacity: .65; margin-bottom: 1.2rem; }
  .num { font-family: 'Inter', sans-serif; font-weight: 900; font-size: 128px; line-height: .9; letter-spacing: 0px; }
  .card.yellow .num { font-size: 60px; line-height: 60px; }
  .desc { font-family: 'Inter', sans-serif; font-weight: 400; font-size: 24px; line-height: 32px; letter-spacing: 0px; margin-top: 1rem; max-width: 36ch; }
  .card.yellow .desc { font-size: 20px; line-height: 28px; }
  .footer { margin-top: 2.5rem; padding-top: 1rem; border-top: 1px solid rgba(28,27,27,.12); display: flex; justify-content: space-between; align-items: center; }
  .yellow .footer { border-color: rgba(0,0,0,.15); }
  .meta { font-size: .65rem; letter-spacing: .1em; text-transform: uppercase; opacity: .6; font-family: var(--font-display); }
  .share { font-family: var(--font-display); font-weight: 700; font-size: .7rem; letter-spacing: .12em; text-transform: uppercase; background: none; border: none; color: var(--purple-dark); display: flex; align-items: center; gap: .4rem; cursor: pointer; }
  .share img { width: 14px; height: 14px; display: block; filter: brightness(0); }
  .yellow .share { color: var(--purple-dark); }
  .yellow .share img { filter: none; }
  @media (max-width: 760px) { .grid { grid-template-columns: 1fr; } }
`;
