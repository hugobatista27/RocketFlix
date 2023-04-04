export function insertMovie(obj) {
    const infoMovie = document.getElementById('infoMovie')
    infoMovie.style.display = 'flex'

    const imgArea = document.getElementById('imgArea')
    const movieName = document.getElementById('movieName')
    const descriptionArea = document.getElementById('descriptionArea')

    imgArea.innerHTML = `<img src="https://image.tmdb.org/t/p/w500/${obj.poster_path}" alt="Imagem do Filme">`
    
    movieName.innerHTML = 
        `<h2>${obj.original_title}</h2>
        <div id="nota" class="flex a-center j-center">
            <p>${parseFloat(obj.vote_average.toFixed(1))}</p>
        </div>`

    descriptionArea.innerHTML = `<p>${obj.overview}</p>`
}

