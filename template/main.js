import {getByRamdonId} from './routes.js'
import { filter, selectMoviesType } from './filters.js'

const buttonfindMovie = document.getElementById('findMovie')
buttonfindMovie.addEventListener('click', () => { 
    selectMoviesType();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

})




const movieOptions = document.getElementById('movieOptions')
const filterOptions = document.getElementById('popUpFilterMovies')

movieOptions.addEventListener('click', () => {
    changeDisplay(filterOptions)
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
})

const closePopuUp = document.getElementById('closePopUp')
closePopuUp.addEventListener('click', () => changeDisplay(filterOptions))

function changeDisplay (obj) {
    obj.classList.toggle('d-none')
}

filter()