class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="container-fluid">
      <a class="navbar-brand fw-bold" href="#">
        <!-- <img src="../public/icons/icon-114x114.png" alt="Bootstrap" width="30" height="24"> -->
        PHOTOGRAPICK
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto me-3 mb-2 mb-lg-0 gap-3">
          <li class="nav-item">
            <a class="nav-link fw-medium active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link fw-medium" href="#/fotografer">Fotografer</a>
          </li>
          <li class="nav-item">
            <a class="nav-link fw-medium" href="#/kategori">Kategori</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link fw-medium dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Lainnya
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item fw-medium" href="#/layanan">Layanan</a></li>
              <li><a class="dropdown-item fw-medium" href="#/challenge">Challenge</a></li>
              <li><a class="dropdown-item fw-medium" href="#/event">Event</a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item fw-medium" href="#/reward">Reward</a></li>
            </ul>
          </li>
        </ul>
        <div class="d-flex gap-1" role="search">
          <a class="btn btn-primary flex-fill" href="http://">Login</a>
          <a class="btn btn-outline-primary flex-fill" href="http://">Register</a>
          <!-- <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button> -->
        </div>
      </div>
    </div>
    `;
    this.classList.add('navbar', 'sticky-top', 'navbar-expand-lg', 'bg-body-tertiary', 'py-3', 'px-2', 'd-block');
  }
}

customElements.define('app-bar', AppBar);
