/* ══════════════════════════════════════════════════════════════════
   LISBOA INVISÍVEL · core
   - IMG registry (single source for asset paths)
   - baseStyles (design tokens + resets)
   - LiSection (Open/Closed base class for page sections)
   Load this FIRST on every page.
   ══════════════════════════════════════════════════════════════════ */

const IMG = {
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
  praca:            './img/praca-comercio.jpg',
  pets:             './img/pets-street.jpg',
};

const LOGO_SVG = `<img src="./assets/logo.svg" alt="Lisboa Invisível" width="89" height="32" style="display:block;filter:brightness(0) invert(1)" />`;

const baseStyles = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  :host {
    --purple-dark:  #160C30;
    --purple-mid:   #1E1240;
    --purple-light: #2B1A58;
    --yellow:       #E8B843;
    --yellow-dark:  #C99A2E;
    --cream:        #F4EFE6;
    --cream-dark:   #EAE3D6;
    --text-dark:    #1A1030;
    --text-light:   #F4EFE6;
    --text-muted:   #6B5F82;
    --font-display: 'Inter', sans-serif;
    --font-body:    'Inter', sans-serif;
    display: block;
  }
  .container { max-width: 1200px; margin: 0 auto; padding: 0 2rem; }
  a { text-decoration: none; color: inherit; cursor: pointer; }
  button { cursor: pointer; font-family: var(--font-body); }
`;

/* LiSection — subclasses override styles() + render() (+ optional afterRender) */
class LiSection extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `<style>${baseStyles}${this.styles()}</style>${this.render()}`;
    this.afterRender && this.afterRender(shadow);
  }
  styles() { return ''; }
  render() { return ''; }
}

window.LI = { IMG, LOGO_SVG, baseStyles, LiSection };
