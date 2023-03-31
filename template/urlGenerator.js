import { API_KEY, BASE_URL, IMG_URL, language } from './api.js'

export function IdMovie() {
    const id = Math.floor(Math.random() * 900) + 100;
    return id
}

export function movieURL() {
    return `${BASE_URL}${IdMovie()}?${API_KEY}&${language}`
} 
