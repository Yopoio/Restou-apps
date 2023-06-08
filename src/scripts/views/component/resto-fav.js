class RestoFav extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <section id="content" class="content">
      <div class="explore">
        <h1 class="explore-label" id="explore">Favorite Restaurant</h1>
        <h2 id="not-found" class="restaurant-item__not__found"></h2>
        <div id="posts" class="posts">
        </div>
      </div>
    </section>
        `;
  }
}

customElements.define('resto-fav', RestoFav);
