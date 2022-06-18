export class CardComponent extends HTMLElement {
  constructor() {
    super();
    // allow access to the shadow root via JS with mode 'open'
    const shadowRoot = this.attachShadow({ mode: 'open' });
    const template = document.createElement('template');
    template.innerHTML = `
      <style>
        :host {
          display: block;
          background: var(--color-white);
          border-radius: var(--radius-md);
          box-shadow: var(--shadow);
          overflow: hidden;
          max-width: 320px;
        }

        ::slotted(*) {
          padding-left: var(--padding-lg);
          padding-right: var(--padding-lg);
        }

        ::slotted(a:link), ::slotted(a:visited) {
          display: block;
        }

        ::slotted(:last-child) {
          padding-bottom: var(--margin-lg);
        }

        ::slotted(img) {
          width: 100%;
          padding-left: 0px;
          padding-right: 0px;
        }
      </style>
      <header>
        <slot name="header"></slot>
      </header>
      <section>
        <slot name="content"></slot>
      </section>
      <footer>
        <slot name="footer"></slot>
      </footer>
    `;
    shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

// define the name of the custom tag for the component
// use prefix in- because it relates to the In app
customElements.define('in-card', CardComponent);
