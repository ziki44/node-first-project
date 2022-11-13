const fs = require('fs');
const fsp = fs.promises;

// Zadania do wykonania

// 1. Stworz funkcje, ktora odczyta wszystkie dostepne filmy w pliku movies.json

// 2. Stworz funkcje, ktora znajdzie z movies.json film o polu imdbID rowny tt2306299

// 3. Stworz funkcje, ktora znajdzie w movies.json wszystkie filmy wyprodukowane po roku 2000

// 4. Stworz funkcje, ktora znajdzie element o polu imdbID tt2707408 i zmieni jego rating na 8.0 a nastepnie zapisze do pliku

// 5. Stworz funkcje, ktora doda do tablicy movies, nowy film

//6. Stwórz funkcję, która usunie element z tablicy o polu imdbID równe tt3748528 a następnie zapisze plik

//1. ZROBIONE

// const readFilms = () => {
//     return fsp.readFile('./movies.json', 'UTF8')
// }

// readFilms()
// .then(data => {
//     const parsedMovies = JSON.parse(data);
//     parsedMovies.movies.map(item => console.log(item.Title))
// })

//2. ZROBIONE

// const readFilms = () => {
//     return fsp.readFile('./movies.json', 'UTF8')
// }

// readFilms()
// .then((data) => {
//     const parsedMovies = JSON.parse(data);
//     const filteredMovies = parsedMovies.movies.filter((movie) => movie.imdbID === "tt2306299")
//     return filteredMovies
// })
// .then((data) => console.log(data))

//3. ZROBIONE

// const readFilms = () => {
//     return fsp.readFile('./movies.json', 'UTF8')
// }

// readFilms()
// .then((data) => {
//     const parsedMovies = JSON.parse(data);
//     const filteredMovies = parsedMovies.movies.filter((movie) => movie.Year > 2000)
//     return filteredMovies
// })
// .then((data) => console.log(data))

//4. ZROBIONE

// const readFilms = () => {
//     return fsp.readFile('./movies.json', 'UTF8')
// }

// readFilms()
// .then((data) => {
//     const parsedMovies = JSON.parse(data);
//     const movieIndex = parsedMovies.movies.findIndex((movie) => movie.imdbID === "tt2707408")
//     console.log(movieIndex);
//     parsedMovies.movies[movieIndex].imdbRating = "8.0"
//     const jsonMovies = JSON.stringify(parsedMovies)
//     fsp.writeFile('./movies.json', jsonMovies)
// })

//5. ZROBIONE

// const readFilms = () => {
//     return fsp.readFile('./movies.json', 'UTF8')
// }

// readFilms()
// .then(data => {
//     const newMovie =  {
//         "ComingSoon": true,
//         "Title": "TEST",
//         "Year": "2022",
//         "Rated": "N/A",
//         "Released": "13 Nov 2022",
//         "Runtime": "N/A",
//         "Genre": "Action",
//         "Director": "Test",
//         "Writer": "Test",
//         "Actors": "Test",
//         "Plot": "Test",
//         "Language": "Test",
//         "Country": "POLAND",
//         "Awards": "N/A",
//         "Poster": "http://ia.media-imdb.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_SX300.jpg",
//         "Metascore": "N/A",
//         "imdbRating": "N/A",
//         "imdbVotes": "N/A",
//         "imdbID": "tt121183755555555",
//         "Type": "movie",
//         "Response": "True",
//         "Images": [
//           "https://images-na.ssl-images-amazon.com/images/M/MV5BMjM3ODc1ODI5Ml5BMl5BanBnXkFtZTgwODMzMDY3OTE@._V1_.jpg",
//           "https://images-na.ssl-images-amazon.com/images/M/MV5BMTgxNTAyNTU0NV5BMl5BanBnXkFtZTgwNzMzMDY3OTE@._V1_.jpg",
//           "https://images-na.ssl-images-amazon.com/images/M/MV5BMjE5NDc5NzUwNV5BMl5BanBnXkFtZTgwMDM3MDM2NzE@._V1_.jpg"
//         ]
//       }
//     const parsedMovies = JSON.parse(data);
//     parsedMovies.movies.push(newMovie);
//     const jsonMovies = JSON.stringify(parsedMovies)
//     fsp.writeFile('./movies.json', jsonMovies)
// })

//6. ZROBIONE

const readFilms = () => {
    return fsp.readFile('./movies.json', 'UTF8')
}

readFilms()
.then(data => {
    const parsedMovies = JSON.parse(data);
    const movieIndex = parsedMovies.movies.findIndex((movie) => movie.imdbID === "tt3748528")
    parsedMovies.movies.splice(movieIndex, 1);
    // console.log(movieIndex);
    const jsonMovies = JSON.stringify(parsedMovies)
    fsp.writeFile('./movies.json', jsonMovies)
})