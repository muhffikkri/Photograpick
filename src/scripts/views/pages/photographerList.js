import {createCardItemTemplate, createCarouselTemplate} from '../templates/template-creator';

const PhotographerList = {
  async render() {
    return `
      <div class="container">
        <h1 class="mb-3">Fotografer</h1>

        <div class="content-section carousel-ignitor">
          <div class="header-wrapper d-flex justify-content-between fs-4 fw-medium">
            <p>Scenery</p>
            <p><a href="#/kategori/:id" class="link-body-emphasis link-underline-opacity-0">Lihat Semua
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor"
                  class="bi bi-arrow-up-right-square" viewBox="0 0 16 16">
                  <path fill-rule="evenodd"
                    d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z" />
                </svg>
              </a></p>
          </div>

          <div id="section-1" class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3"></div>
        </div>

        <div id="myCarousel" class="carousel slide my-5" data-bs-ride="carousel" data-bs-theme="light">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true"
              aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
                <rect width="100%" height="100%" fill="var(--bs-secondary-color)" /></svg>
              <div class="container">
                <div class="carousel-caption text-start">
                  <h1>Example headline.</h1>
                  <p class="opacity-75">Some representative placeholder content for the first slide of the carousel.</p>
                  <p><a class="btn btn-lg btn-primary" href="#">Sign up today</a></p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
                <rect width="100%" height="100%" fill="var(--bs-secondary-color)" /></svg>
              <div class="container">
                <div class="carousel-caption">
                  <h1>Another example headline.</h1>
                  <p>Some representative placeholder content for the second slide of the carousel.</p>
                  <p><a class="btn btn-lg btn-primary" href="#">Learn more</a></p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
                <rect width="100%" height="100%" fill="var(--bs-secondary-color)" /></svg>
              <div class="container">
                <div class="carousel-caption text-end">
                  <h1>One more for good measure.</h1>
                  <p>Some representative placeholder content for the third slide of this carousel.</p>
                  <p><a class="btn btn-lg btn-primary" href="#">Browse gallery</a></p>
                </div>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

        <div class="content-section">
          <div class="header-wrapper d-flex justify-content-between fs-4 fw-medium">
            <p>Tim</p>
            <p><a href="#/kategori/:id" class="link-body-emphasis link-underline-opacity-0">Lihat Semua
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor"
                  class="bi bi-arrow-up-right-square" viewBox="0 0 16 16">
                  <path fill-rule="evenodd"
                    d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z" />
                </svg>
              </a></p>
          </div>
          <div id="section-2" class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3"></div>
        </div>

        <div class="content-section my-5">
          <div class="header-wrapper d-flex justify-content-between fs-4 fw-medium">
            <p>Fotografer Terpopuler</p>
            <p><a href="#/kategori/:id" class="link-body-emphasis link-underline-opacity-0">Lihat Semua
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor"
                  class="bi bi-arrow-up-right-square" viewBox="0 0 16 16">
                  <path fill-rule="evenodd"
                    d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z" />
                </svg>
              </a></p>
          </div>

          <div id="myCarousel" class="carousel slide" data-bs-ride="carousel" data-bs-theme="light">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true"
                aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
                  <rect width="100%" height="100%" fill="var(--bs-secondary-color)" /></svg>
                <div class="container">
                  <div class="carousel-caption text-start">
                    <h1>Example headline.</h1>
                    <p class="opacity-75">Some representative placeholder content for the first slide of the carousel.</p>
                    <p><a class="btn btn-lg btn-primary" href="#">Sign up today</a></p>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
                  <rect width="100%" height="100%" fill="var(--bs-secondary-color)" /></svg>
                <div class="container">
                  <div class="carousel-caption">
                    <h1>Another example headline.</h1>
                    <p>Some representative placeholder content for the second slide of the carousel.</p>
                    <p><a class="btn btn-lg btn-primary" href="#">Learn more</a></p>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
                  <rect width="100%" height="100%" fill="var(--bs-secondary-color)" /></svg>
                <div class="container">
                  <div class="carousel-caption text-end">
                    <h1>One more for good measure.</h1>
                    <p>Some representative placeholder content for the third slide of this carousel.</p>
                    <p><a class="btn btn-lg btn-primary" href="#">Browse gallery</a></p>
                  </div>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    `;
  },

  async afterRender() {
    const mainContainer = document.querySelector('#mainContent');
    const section1Container = document.querySelector('#section-1');
    const section2Container = document.querySelector('#section-2');

    const carousel = document.createElement('div');
    carousel.setAttribute('id', 'myCarousel');
    carousel.setAttribute('data-bs-ride', 'carousel');
    carousel.setAttribute('data-bs-theme', 'light');
    carousel.classList.add('carousel', 'slide', 'mb-5');
    carousel.innerHTML = createCarouselTemplate;

    mainContainer.insertBefore(carousel, mainContainer.children[0]);

    for (let i = 0; i < 9; i++) {
      section1Container.innerHTML += createCardItemTemplate;
    }

    for (let i = 0; i < 3; i++) {
      section2Container.innerHTML += createCardItemTemplate;
    }
  },
};

export default PhotographerList;
