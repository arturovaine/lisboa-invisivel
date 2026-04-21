export const storiesFilterCSS = `
  section { background: var(--cream); padding: 0 2rem; }
  .bar { max-width: 1216px; margin: 0 auto; background: var(--section-divider); padding: 2rem; display: flex; justify-content: space-between; align-items: center; gap: 1rem; flex-wrap: wrap; }
  .tags { display: flex; gap: .5rem; flex-wrap: wrap; }
  .tag { font-family: var(--font-ui); font-weight: 700; font-size: 12px; line-height: 16px; text-align: center; text-transform: uppercase; padding: 9px 16px; background: transparent; color: var(--text-light); border: none; cursor: pointer; transition: background .15s, color .15s; }
  .tag:hover { background: rgba(244,197,66,.15); }
  .tag.active { background: var(--yellow); color: var(--purple-dark); }
  .count { font-family: var(--font-ui); font-size: 12px; letter-spacing: .12em; text-transform: uppercase; color: rgba(250,248,242,.55); }
`;
