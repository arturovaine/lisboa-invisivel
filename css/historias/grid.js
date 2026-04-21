export const storiesGridCSS = `
  section { background: var(--cream); padding: 4rem 2rem; }
  .grid { max-width: 1216px; margin: 0 auto; display: grid; grid-template-columns: repeat(3, 1fr); column-gap: 48px; row-gap: 48px; }

  .card-small { display: flex; flex-direction: column; gap: 16px; background: transparent; }
  .card-small .photo-wrap { position: relative; display: block; }
  .card-small .photo-wrap::before, .card-small .photo-wrap::after { content: ''; position: absolute; width: 24px; height: 24px; z-index: 1; }
  .card-small .photo-wrap::before { top: 0; left: 0; border-top: 3px solid var(--yellow); border-left: 3px solid var(--yellow); }
  .card-small .photo-wrap::after { bottom: 0; right: 0; border-bottom: 3px solid var(--yellow); border-right: 3px solid var(--yellow); }
  .card-small .photo { display: block; width: 100%; aspect-ratio: 4 / 5; object-fit: cover; background: #ddd; }
  .card-small .cat { align-self: flex-start; font-family: var(--font-ui); font-weight: 700; font-size: 12px; line-height: 16px; letter-spacing: .08em; text-transform: uppercase; color: var(--label-category); border: 1px solid var(--label-category); padding: 4px 8px; background: transparent; }
  .card-small .info-row { display: flex; justify-content: space-between; align-items: baseline; padding-top: 8px; }
  .card-small h3 { font-family: var(--font-display); font-weight: 800; font-size: 36px; line-height: 40px; color: var(--text-dark); }
  .card-small .loc { font-family: var(--font-ui); font-weight: 400; font-size: 12px; line-height: 16px; color: var(--text-mid); }
  .card-small .desc { font-family: var(--font-body); font-weight: 400; font-size: 16px; line-height: 1.625; color: var(--text-mid); padding-bottom: 8px; }
  .card-small .cta { font-family: var(--font-ui); font-weight: 700; font-size: 14px; line-height: 20px; letter-spacing: .04em; text-transform: uppercase; color: var(--text-dark); border-bottom: 2px solid var(--yellow); padding-bottom: 2px; align-self: flex-start; }

  .card-feature { grid-column: 2 / span 2; grid-row: 1; display: grid; grid-template-columns: 1fr 1fr; gap: 32px; background: var(--card-bg); padding: 32px; }
  .card-feature .photo-wrap { position: relative; display: block; }
  .card-feature .photo-wrap::before, .card-feature .photo-wrap::after { content: ''; position: absolute; width: 24px; height: 24px; z-index: 1; }
  .card-feature .photo-wrap::before { top: 0; left: 0; border-top: 3px solid var(--yellow); border-left: 3px solid var(--yellow); }
  .card-feature .photo-wrap::after { bottom: 0; right: 0; border-bottom: 3px solid var(--yellow); border-right: 3px solid var(--yellow); }
  .card-feature .photo { display: block; width: 100%; height: 100%; min-height: 400px; object-fit: cover; }
  .card-feature .content { display: flex; flex-direction: column; gap: 16px; }
  .card-feature .cat { align-self: flex-start; font-family: var(--font-ui); font-weight: 700; font-size: 12px; line-height: 16px; letter-spacing: .08em; text-transform: uppercase; color: var(--label-category); border: 1px solid var(--label-category); padding: 4px 8px; }
  .card-feature .info-row { display: flex; justify-content: space-between; align-items: baseline; padding-top: 8px; padding-bottom: 24px; }
  .card-feature h3 { font-family: var(--font-display); font-weight: 800; font-size: 48px; line-height: 52px; color: var(--text-dark); }
  .card-feature .loc { font-family: var(--font-ui); font-weight: 400; font-size: 12px; line-height: 16px; color: var(--text-mid); }
  .card-feature .desc { font-family: var(--font-body); font-weight: 400; font-size: 18px; line-height: 1.65; color: var(--text-mid); flex: 1; }
  .card-feature .cta { font-family: var(--font-ui); font-weight: 700; font-size: 14px; line-height: 20px; letter-spacing: .04em; text-transform: uppercase; color: var(--text-dark); border-bottom: 2px solid var(--yellow); padding-bottom: 2px; align-self: flex-start; }

  .card-structural { grid-column: 1 / span 3; grid-row: 3; background: var(--purple-dark); color: var(--text-light); padding: 2.5rem 3rem; min-height: 216px; display: grid; grid-template-columns: auto 1fr; align-items: center; gap: 2.5rem; }
  .card-structural .body { display: flex; flex-direction: column; gap: .6rem; }
  .card-structural .stat-col { display: flex; flex-direction: column; gap: .5rem; width: 225px; border-left: 4px solid var(--yellow); padding-left: 1.5rem; }
  .card-structural .n { font-family: var(--font-display); font-weight: 900; font-size: 48px; line-height: 48px; letter-spacing: 0; color: var(--yellow); }
  .card-structural .stat-sub { font-family: var(--font-ui); font-weight: 400; font-size: 12px; line-height: 16px; letter-spacing: -0.6px; text-transform: uppercase; color: rgba(250,248,242,.55); }
  .card-structural .t { font-family: var(--font-display); font-weight: 700; font-size: 24px; line-height: 32px; letter-spacing: 0; margin-bottom: .6rem; }
  .card-structural .d { font-family: var(--font-body); font-weight: 400; font-size: 16px; line-height: 24px; letter-spacing: 0; color: rgba(250,248,242,.75); max-width: 58ch; }
  .card-structural .link { font-family: var(--font-ui); font-weight: 700; font-size: 12px; line-height: 16px; letter-spacing: 0; text-transform: uppercase; color: var(--yellow); white-space: nowrap; }

  .card-small.p1 { grid-column: 1; grid-row: 1; }
  .card-small.p3 { grid-column: 1; grid-row: 2; }
  .card-small.p5 { grid-column: 2; grid-row: 2; }
  .card-small.p6 { grid-column: 3; grid-row: 2; }

  @media (max-width: 960px) {
    .grid { grid-template-columns: 1fr; }
    .card-feature, .card-structural, .card-small.p1, .card-small.p3, .card-small.p5, .card-small.p6 { grid-column: 1; grid-row: auto; }
    .card-feature { grid-template-columns: 1fr; }
    .card-structural { grid-template-columns: 1fr; text-align: left; }
  }
`;
