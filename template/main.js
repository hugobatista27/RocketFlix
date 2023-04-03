import {getByRamdonId} from './routes.js'
import { filter } from './filters.js'

const buttonfindMovie = document.getElementById('findMovie')
buttonfindMovie.addEventListener('click', () => { getByRamdonId() })




const movieOptions = document.getElementById('movieOptions')
const filterOptions = document.getElementById('popUpFilterMovies')

movieOptions.addEventListener('click', () => changeDisplay(filterOptions))

const closePopuUp = document.getElementById('closePopUp')
closePopuUp.addEventListener('click', () => changeDisplay(filterOptions))

function changeDisplay (obj) {
    obj.classList.toggle('d-none')
}

filter()