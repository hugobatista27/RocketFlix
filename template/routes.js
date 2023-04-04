import {movieURL} from './urlGenerator.js'
import {insertMovie } from './functionsFront.js'

export async function getByRamdonId() {
    try {
      const response = await fetch(movieURL());
      if (response.status === 200) {
        const info = await response.json();
        console.log(info); // remover depoois
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
      await getByRamdonId()
}}

export async function getReleasesMovies() {
  const urlReleases = `https://api.themoviedb.org/3/movie/popular?api_key=21e489bf2f7569681cf7d02def9b1eb5&language=pt-BR&page=${Math.floor(Math.random() * 15)}`

  try {
    const response = await fetch(urlReleases);
    if (response.status === 200) {
      const info = await response.json();
      const movie = info.results[Math.floor(Math.random() * 20)]
      if (movie.overview == '') {
        console.log(movie);
        throw new Error('Filme sem descrição')
      } else {
        insertMovie(movie);
      }
    } else {
      throw new Error("HTTP error, status = " + response.status);
    }
  } catch (error) {
    await new Promise(resolve => setTimeout(resolve, 10));
    await getReleasesMovies()
  }
}

export async function getTopRating() {
  const urlTopRatings = `https://api.themoviedb.org/3/movie/top_rated?api_key=21e489bf2f7569681cf7d02def9b1eb5&language=pt-Br&page=${Math.floor(Math.random() * 5)}`

  try {
    const response = await fetch(urlTopRatings);
    if(response.status === 200) {
      const info = await response.json();
      console.log(info);
      const movie = info.results[Math.floor(Math.random() * 20)]
      if (movie.overview == '') {
        throw new Error('Filme sem descrição')
      } else {
        insertMovie(movie)
      }
    } else {
      throw new Error("HTTP error, status = " + response.status);
    }

  } catch (error) {
    await new Promise(resolve => setTimeout(resolve, 10));
    await getTopRating()
  }

}