const CategoryPhotographerDetail = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">CategoryPhotographerDetail in Cinema</h2>
      </div>
    `;
  },

  async afterRender() {
    // const movies = await TheMovieDbSource.CategoryPhotographersMovies()
    // const moviesContainer = document.querySelector('#movies')
    // movies.forEach((movie) => {
    //     moviesContainer.innerHTML += createMovieItemTemplate(movie)
    // })
  },
};

export default CategoryPhotographerDetail;
