class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="app-bar__menu">
            <button id="hamburgerButton" aria-label="hamburger button">☰</button>
        </div>
        <div class="app-bar__brand">
            <a href="#">Greeco</a> 
        </div>
        <nav id="navigationDrawer" class="app-bar__navigation">
            <ul>
                <li><a href="#/list-restaurant">Home</a></li>
                <li><a href="#/like">Favorite</a></li>
                <li><a href="https://github.com/Nexvaulus" target="_blank" rel="noopener">About Us</a></li>
            </ul>
        </nav>
    `;
  }
}

customElements.define('app-bar', AppBar);
