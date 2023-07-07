// import UrlParser from '../../../routes/url-parser'
// import TheMovieDbSource from '../../../data/themoviedb-source'
// import { createMovieDetailTemplate } from '../../templates/template-creator'
// import LikeButtonPresenter from '../../../utils/like-button-presenter'
// import FavoriteMovieIdb from '../../../data/favorite-movie-idb'

const PhotographerDetail = {
  async render() {
    return `
      <div id="movie" class="movie"></div>
      <h2>Photographer detail</h2>
    `;
  },

  async afterRender() {
    // const url = UrlParser.parseActiveUrlWithoutCombiner()
    // const movie = await TheMovieDbSource.detailMovie(url.id)
    // const movieContainer = document.querySelector('#movie')
    // movieContainer.innerHTML = createMovieDetailTemplate(movie)
  },
};

export default PhotographerDetail;
