class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <header class="header">
            <div class="app-bar">
            <h1 class="app-title">
                Restou
            </h1>
            <a href="#content" tabindex="1" class="skip-link">To exlpore restaurant</a>
            <nav id="drawer" class="nav">
                <ul class="nav-list">
                <li class="nav-item"><a href="/" tabindex="3">Home</a></li>
                <li class="nav-item"><a href="#/favorite" tabindex="4">Favorite</a></li>
                <li class="nav-item"><a href="https://github.com/Yopoio" tabindex="5">About Us</a></li>
                </ul>
            </nav>
            </div>
            <button id="menu" class="header-menu" tabindex="2">☰</button>
        </header>
      `;
  }
}

customElements.define('app-bar', AppBar);
