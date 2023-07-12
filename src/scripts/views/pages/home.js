const Home = {
  async render() {
    return `
        <div class="p-5 mb-4 bg-body-tertiary rounded-3 d-flex align-items-end" style="min-height: 30rem;">
          <div class="container-fluid py-5">
            <h1 class="display-5 fw-bold">Pick your own photographer</h1>
            <p class="col-md-8 fs-4">Find the best photographer to capture your special memories</p>
            <div class="row gap-3" style="max-width: 425px;">
              <a href="#feature" class="btn btn-outline-primary btn-lg col-sm" type="button">Get Started</a>
              <a href="#/fotografer" class="btn btn-outline-primary btn-lg col-sm" type="button">Explore
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                  class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                  <path
                    d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div class="container" id="feature">

          <div class="row justify-content-evenly text-center bg-body-secondary p-5">
            <div class="col-lg-4">
              <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg"
                role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false">
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="var(--bs-secondary-color)" />
              </svg>
              <h2 class="fw-normal">Experience Seamless Memories</h2>
              <p>Rent professional photographers online and capture moments that last a lifetime</p>
              <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
            </div>
            <div class="col-lg-4">
              <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg"
                role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false">
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="var(--bs-secondary-color)" />
              </svg>
              <h2 class="fw-normal">Immerse Yourself in Artistic Excellence</h2>
              <p>Discover inspiring portfolios of our exceptional photographers and elevate your visual storytelling
              </p>
              <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
            </div>
          </div>

          <hr class="feature-divider">

          <div class="row feature flex-wrap-reverse ">
            <div class="col-md-7 mt-3">
              <h2 class="feature-heading fw-normal lh-1">Find your favorite and <span class="text-body-secondary">qualified
                  photographers</span></h2>
              <p class="lead">Discover the finest photographers at photograpick</p>
              <p><a class="btn btn-primary" href="#/fotografer">Explore &raquo;</a></p>
            </div>
            <div class="col-md-5">
              <svg class="bd-placeholder-img bd-placeholder-img-lg feature-image img-fluid mx-auto" width="500" height="500"
                xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500"
                preserveAspectRatio="xMidYMid slice" focusable="false">
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="var(--bs-secondary-bg)" /><text x="50%" y="50%"
                  fill="var(--bs-secondary-color)" dy=".3em">500x500</text>
              </svg>
            </div>
          </div>

          <hr class="feature-divider">

          <div class="row feature flex-wrap-reverse bg-body-tertiary py-5 px-3">
            <div class="col-md-7 mt-3">
              <h2 class="feature-heading fw-normal lh-1 mt-0">Bergabung dengan jaringan fotografer</h2>
              <p class="lead mb-2">Anda juga bisa mengikuti kegiatan dan layanan kami yang lain</p>
              <div class="col mb-3 d-flex gap-2" style="max-width: 350px;">
                <a class="btn btn-primary flex-grow-1" href="#/layanan">Layanan</a>
                <a class="btn btn-primary flex-grow-1" href="#/event">Event</a>
                <a class="btn btn-primary flex-grow-1" href="#/reward">Reward</a>
              </div>

              <h2 class="feature-heading fw-normal lh-1 mt-0">Photograpick <span class="text-body-secondary">challenge</span>
              </h2>
              <p class="lead mb-2">Discover the finest photographers at photograpick</p>
              <p><a class="btn btn-outline-primary" href="#/challenge">Explore now &raquo;</a></p>
            </div>
            <div class="col-md-5">
              <svg class="bd-placeholder-img bd-placeholder-img-lg feature-image img-fluid mx-auto" width="500" height="500"
                xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500"
                preserveAspectRatio="xMidYMid slice" focusable="false">
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="var(--bs-secondary-bg)" /><text x="50%" y="50%"
                  fill="var(--bs-secondary-color)" dy=".3em">500x500</text>
              </svg>
            </div>
          </div>
        </div>
    `;
  },

  async afterRender() {
    // const movies = await TheMovieDbSource.HomeMovies()
    // const moviesContainer = document.querySelector('#movies')
    // movies.forEach((movie) => {
    //     moviesContainer.innerHTML += createMovieItemTemplate(movie)
    // })
  },
};

export default Home;
