class AppFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <p>Copyright © 2023 - Restou by Andira Yovi Setiawan</p>
      `;
  }
}

customElements.define('app-footer', AppFooter);
