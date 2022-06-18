export class CardComponent extends HTMLElement {
  constructor() {
    super();
    // allow access to the shadow root via JS with mode 'open'
    const shadowRoot = this.attachShadow({ mode: 'open' });
    const template = document.createElement('template');
    template.innerHTML = `
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
