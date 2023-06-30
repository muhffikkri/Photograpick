const UpcomingEvent = {
    async render() {
        return `
      <div id="movie" class="movie"></div>
    `
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner()
        const movie = await TheMovieDbSource.detailMovie(url.id)
        const movieContainer = document.querySelector('#movie')
        movieContainer.innerHTML = createMovieDetailTemplate(movie)
    },
}

export default UpcomingEvent
