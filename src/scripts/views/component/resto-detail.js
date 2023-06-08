class RestoDetail extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section id="content" class="content">
    <div class="explore">
      <h1 class="explore-label" id="explore">Detail Restaurant</h1>
      <div id="resto-detail" class="detail">
      </div>
    </div>
  </section>
      `;
  }
}

customElements.define('resto-detail', RestoDetail);
