export const servicesCtaCSS = `
  section { background: var(--cream); padding: 3rem 2rem 5rem; }
  .card { max-width: 1200px; margin: 0 auto; background: var(--yellow); padding: 3.5rem; display: flex; align-items: center; justify-content: space-between; gap: 2rem; flex-wrap: wrap; }
  h2 { font-family: var(--font-display); font-weight: 900; font-size: clamp(1.8rem, 3.5vw, 2.8rem); text-transform: uppercase; line-height: 1.05; color: var(--purple-dark); }
  .desc { font-size: .95rem; color: rgba(36,16,58,.7); margin-top: .5rem; max-width: 38ch; }
  .actions { display: flex; gap: 1rem; flex-wrap: wrap; }
  .btn-map, .btn-emerg { display: flex; align-items: center; gap: .5rem; font-family: var(--font-display); font-weight: 800; font-size: .8rem; letter-spacing: .1em; text-transform: uppercase; padding: .9rem 1.5rem; cursor: pointer; transition: all .2s; border: 2px solid var(--purple-dark); }
  .btn-map { background: var(--purple-dark); color: #fff; }
  .btn-map:hover { background: var(--purple-light); border-color: var(--purple-light); }
  .btn-emerg { background: transparent; color: var(--purple-dark); }
  .btn-emerg:hover { background: var(--purple-dark); color: #fff; }
`;
