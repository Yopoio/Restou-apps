class RestoList extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section id="content" class="content">
    <div class="explore">
      <h1 class="explore-label" id="explore">Explore Restaurant</h1>
      <div class="posts">
      </div>
    </div>
  </section>
      `;
  }
}

customElements.define('resto-list', RestoList);
