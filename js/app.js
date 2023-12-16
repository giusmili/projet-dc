import { Movie } from "./data.js"
document.addEventListener("DOMContentLoaded", (e) => {
            console.log(e.target)
            /* movie */
            const films = new Movie("terminator","1984","1h40")
            const printout = films.getMovie()
            console.log(printout)
            console.table(films)
})