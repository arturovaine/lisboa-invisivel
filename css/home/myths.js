export const mythsCSS = `
  section { background: var(--purple-dark); padding: 6rem 2rem; }
  .inner { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }
  .myth { background: var(--cream); color: var(--text-dark); padding: 2.5rem; }
  .badge { display: inline-block; background: var(--yellow); color: var(--purple-dark); font-family: var(--font-display); font-weight: 900; font-size: .85rem; letter-spacing: .12em; text-transform: uppercase; padding: .35rem .9rem; margin-bottom: 1.5rem; }
  .lbl { font-family: var(--font-display); font-weight: 700; font-size: .65rem; letter-spacing: .18em; text-transform: uppercase; color: rgba(28,27,27,.45); margin-bottom: .5rem; }
  .mt { font-family: var(--font-display); font-weight: 700; font-size: 1.35rem; line-height: 1.4; color: var(--text-dark); margin-bottom: 1.5rem; padding-bottom: 1.5rem; border-bottom: 1px solid rgba(28,27,27,.12); }
  .fl { text-align: right; }
  .ft { font-size: .95rem; line-height: 1.65; color: rgba(28,27,27,.7); margin-bottom: .5rem; }
  .fn { font-family: var(--font-display); font-weight: 900; font-size: 3rem; color: var(--yellow); text-align: right; }
  .right h2 { font-family: var(--font-display); font-weight: 900; font-size: clamp(2.5rem, 4vw, 3.5rem); text-transform: uppercase; color: #fff; line-height: 1.0; margin-bottom: 1rem; }
  .right p { color: rgba(255,255,255,.6); font-size: 1rem; line-height: 1.65; margin-bottom: 2rem; }
  .acc { display: flex; flex-direction: column; }
  .item { border-top: 1px solid rgba(255,255,255,.12); cursor: pointer; }
  .item:last-child { border-bottom: 1px solid rgba(255,255,255,.12); }
  .h { display: flex; justify-content: space-between; align-items: center; padding: 1.1rem 0; font-family: var(--font-display); font-weight: 700; font-size: .85rem; letter-spacing: .1em; text-transform: uppercase; color: #fff; }
  .ic { color: var(--yellow); font-size: 1.1rem; transition: transform .25s; }
  .item.open .ic { transform: rotate(90deg); }
  .b { max-height: 0; overflow: hidden; transition: max-height .35s, padding .35s; color: rgba(255,255,255,.6); font-size: .9rem; line-height: 1.65; }
  .item.open .b { max-height: 260px; padding-bottom: 1rem; }
  @media (max-width: 860px) { .inner { grid-template-columns: 1fr; } }
`;
