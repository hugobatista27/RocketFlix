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