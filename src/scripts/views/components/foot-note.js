class FootNote extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <ul>
        <li>
            <a href="https://restaurant-api.dicoding.dev/" target="_blank">Help</a>
        </li>
        <li>
            <p tabindex="0">All data obtained from
                <a href="https://restaurant-api.dicoding.dev/" target="_blank" rel="noreferrer">
                Dicoding Restaurant Api 
                </a>
            </p>
        </li>
    </ul>
    `;
  }
}

customElements.define('foot-note', FootNote);
