export const joinCtaCSS = `
  section { background: #000; color: #fff; padding: 5rem 2rem; }
  .inner { max-width: 1200px; margin: 0 auto; }
  h2 { font-family: var(--font-display); font-weight: 900; font-size: clamp(2rem, 4vw, 3rem); text-transform: uppercase; line-height: 1.05; margin-bottom: 2rem; }
  .btns { display: flex; gap: 1rem; flex-wrap: wrap; }
  button { font-family: var(--font-display); font-weight: 700; font-size: .85rem; letter-spacing: .1em; text-transform: uppercase; padding: 1rem 1.8rem; cursor: pointer; transition: all .2s; background: transparent; }
  .btn-yellow { border: 2px solid var(--yellow); color: var(--yellow); }
  .btn-yellow:hover { background: var(--yellow); color: #000; }
  .btn-white { border: 2px solid #fff; color: #fff; }
  .btn-white:hover { background: #fff; color: #000; }
`;
