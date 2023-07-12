// import CONFIG from '../../globals/config';
/**
 * cardItemTemplate ✅
 * photographerDetailTemplate
 * challengeDetailTemplate(incoming)
 * eventDetailTemplate(incoming)
 * rewardDetailTemplate(incoming)
 * carouselTemplate
 */

const createCarouselTemplate =
  `
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
    `;


const createCardItemTemplate = `
    <div class="col">
        <div class="card shadow-sm">
        <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg"
            role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef"
            dy=".3em">Thumbnail</text>
        </svg>
        <div class="card-body">
            <p class="card-title fw-medium">Nama Fotografer</p>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional
            content. This content is a little bit longer.</p>
            <div class="d-flex justify-content-between align-items-center gap-3">
            <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary" disabled>Rating 0/0</button>
                <a href="#/fotografer/:id" type="button" class="btn btn-sm btn-outline-primary">View</a>
            </div>
            <small class="text-body-secondary">Kategori 1, Kategori 2</small>
            </div>
        </div>
        </div>
    </div>
    `;

const createCardItemEventTemplate = `
    <div class="col">
        <div class="card shadow-sm">
        <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg"
            role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef"
            dy=".3em">Thumbnail</text>
        </svg>
        <div class="card-body">
            <p class="card-title fw-medium">Nama Fotografer</p>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional
            content. This content is a little bit longer.</p>
            <div class="d-flex justify-content-between align-items-center gap-3">
            <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary" disabled>Rating 0/0</button>
                <a href="#/fotografer/:id" type="button" class="btn btn-sm btn-outline-primary">View</a>
            </div>
            <small class="text-body-secondary">Kategori 1, Kategori 2</small>
            </div>
        </div>
        </div>
    </div>
`;

export {
  createCarouselTemplate,
  createCardItemTemplate,
  createCardItemEventTemplate,
};
