const Challenge = {
    async render() {
        return `
      <div class="content">
        <h2 class="content__heading">Challenge in Cinema</h2>
        <div id="movies" class="movies">
        </div>
      </div>
    `
    },

    async afterRender() {
        const movies = await TheMovieDbSource.ChallengeMovies()
        const moviesContainer = document.querySelector('#movies')
        movies.forEach((movie) => {
            moviesContainer.innerHTML += createMovieItemTemplate(movie)
        })
    },
}

export default Challenge
