import { API_KEY, BASE_URL, IMG_URL, language } from './api.js'

function movieURL() {
  return `${BASE_URL}${IdMovie()}?${API_KEY}&${language}`
} 


const buttonRandomMovie = document.getElementById('randomMovie')
buttonRandomMovie.addEventListener('click', () => { testando() })



function IdMovie() {
  const id = Math.floor(Math.random() * 900) + 100;
  return id
}


async function testando() {
  try {
    const response = await fetch(movieURL());
    if (response.status === 200) {
      const info = await response.json();
      console.log(info);
      if (info.overview == '' || info.vote_average < 7 || info.popularity < 15.000) {
        throw new Error("Filme pouco conhecido");
      } else {
        insertMovie(info)
      }
    } else {
      throw new Error("HTTP error, status = " + response.status);
    }
  } catch (error) {
    // espera alguns segundos antes de tentar novamente
    await new Promise(resolve => setTimeout(resolve, 10));
    // executa a função novamente
    await testando();
  }
}


function insertMovie(obj) {
  const infoMovie = document.getElementById('infoMovie')
  infoMovie.style.display = 'flex'

  const imgArea = document.getElementById('imgArea')
  const movieName = document.getElementById('movieName')
  const descriptionArea = document.getElementById('descriptionArea')
  const movieNota = document.getElementById('nota')

  imgArea.innerHTML = `<img src="https://image.tmdb.org/t/p/w500/${obj.poster_path}" alt="Imagem do Filme">`
  movieName.innerHTML = `<h2>${obj.original_title}</h2><div id="nota" class="flex a-center j-center">
  <p>${parseFloat(obj.vote_average.toFixed(1))}</p>
</div>`
  descriptionArea.innerHTML = `<p>${obj.overview}</p>`
}