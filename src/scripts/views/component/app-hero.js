class AppHero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="hero">
        <div class="hero-inner">
          <h1 class="hero-title">Temukan cita rasa masakan diseluruh penjuru negeri</h1>
          <p class="hero-tagline">Menghadirkan seluruh lokasi dan detail restaurant dari segala penjuru negeri khusus bagi
            anda food lovers</p>
        </div>
      </div>
    `;
  }
}

customElements.define('app-hero', AppHero);
