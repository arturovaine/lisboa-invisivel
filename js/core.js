/* ══════════════════════════════════════════════════════════════════
   LISBOA INVISÍVEL · core
   - IMG registry (single source for asset paths)
   - baseStyles (design tokens + resets)
   - LiSection (Open/Closed base class for page sections)
   Load this FIRST on every page.
   ══════════════════════════════════════════════════════════════════ */

export const IMG = {
  heroStreet:       './img/hero-street.jpg',
  antonio:          './img/antonio-portrait.jpg',
  tentFlag:         './img/tent-flag.jpg',
  manSteps:         './img/man-steps.jpg',
  chaoLutas:        './img/protest-chao-lutas.jpg',
  homelessFactory:  './img/protest-homeless-factory.jpg',
  protestPolice:    './img/protest-police.jpg',
  volunteersA:      './img/volunteers-menstrual.jpg',
  volunteersB:      './img/volunteers-meeting.jpg',
  volunteersC:      './img/volunteers-saude.jpg',
  vizinhanca:       './img/vizinhanca-banner.jpg',
  donations:        './img/donations-box.jpg',
  mattress:         './img/mattress-street.jpg',
  ricardo:          './img/ricardo-portrait.jpg',
  ines:             './img/ines-portrait.jpg',
  praca:            './img/praca-comercio.jpg',
  pets:             './img/pets-street.jpg',
};

export const LOGO_SVG = `<img src="./assets/logo.svg" alt="Lisboa Invisível" width="120" height="42" style="display:block;filter:brightness(0) invert(1)" />`;

export const baseStyles = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  :host {
    --purple-dark:      #24103A;
    --purple-mid:       #25113B;
    --purple-light:     #2B1A58;
    --yellow:           #F4C542;
    --yellow-dark:      #D9A922;
    --yellow-highlight: rgba(244, 197, 66, .3);
    --cream:            #FAF8F2;
    --cream-dark:       #F6F3F2;
    --card-bg:          #F6F3F2;
    --bg-white:         #fff;
    --bg-dark:          #000;
    --bg-silver:        #E5E2E1;
    --bg-card-alt:      #FCF8F8;
    --bg-subtle:        #EBE7E7;
    --text-dark:        #1C1B1B;
    --text-dark-75:     rgba(28, 27, 27, .75);
    --text-dark-65:     rgba(28, 27, 27, .65);
    --text-mid:         #4A454D;
    --text-light:       #FAF8F2;
    --text-muted:       #6B5F82;
    --label-category:   #765B00;
    --section-divider:  #25113B;
    --font-display:     'Epilogue', sans-serif;
    --font-ui:          'Space Grotesk', sans-serif;
    --font-body:        'Manrope', sans-serif;
    display: block;
  }
  .container { max-width: 1200px; margin: 0 auto; padding: 0 2rem; }
  a { text-decoration: none; color: inherit; cursor: pointer; }
  button { cursor: pointer; font-family: var(--font-body); }
  .bracket-card { position: relative; }
  .bracket-card::before,
  .bracket-card::after {
    content: '';
    position: absolute;
    width: 24px;
    height: 24px;
  }
  .bracket-card::before {
    top: 0; left: 0;
    border-top: 3px solid var(--yellow);
    border-left: 3px solid var(--yellow);
  }
  .bracket-card::after {
    bottom: 0; right: 0;
    border-bottom: 3px solid var(--yellow);
    border-right: 3px solid var(--yellow);
  }
`;

/* LiSection — subclasses override styles() + render() (+ optional afterRender) */
export class LiSection extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });
    const sheet = new CSSStyleSheet();
    sheet.replaceSync(baseStyles + this.styles());
    shadow.adoptedStyleSheets = [sheet];
    shadow.innerHTML = this.render();
    this.afterRender && this.afterRender(shadow);
  }
  styles() { return ''; }
  render() { return ''; }
}

window.LI = { IMG, LOGO_SVG, baseStyles, LiSection };
