import { getReleasesMovies, getByRamdonId, getTopRating } from './routes.js'

const optionsFilter = document.querySelectorAll('input[name="filter"]')

export function filter() {
    optionsFilter.forEach(button => {
        /* button.style.display = 'none' */
        if (button.checked) {
            document.querySelector(`label[for="${button.id}"]`).classList.toggle('checked')
        }
        button.addEventListener('click', () => {
            if (button.checked) {
                //console.log(button);
                Array.from(document.querySelectorAll(`label`)).forEach(element => {
                    if (element.classList == "checked") {
                        element.classList.toggle('checked')
                    }
                })
                document.querySelector(`label[for="${button.id}"]`).classList.toggle('checked')
            }
        })
        return button
    })
}

function verifyFilter() {
    let selectedFilter = null;
    optionsFilter.forEach(filter => {
        if (filter.checked) {
            selectedFilter = filter.id;
        }
    });
    return selectedFilter || "none";
}

export function selectMoviesType() {
    const filterType = verifyFilter()
    switch (filterType) {
        case 'all':
            getByRamdonId()
            break
        case 'releases':
            getReleasesMovies()
            break
        case 'topRating':
            getTopRating()
            break
        default:
            return verifyFilter()
    }
}