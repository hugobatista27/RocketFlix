import {getByRamdonId} from './routes.js'

const buttonRandomMovie = document.getElementById('randomMovie')
buttonRandomMovie.addEventListener('click', () => { getByRamdonId() })

/* async function testando() {
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
} */