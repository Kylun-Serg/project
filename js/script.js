'use strict';

let numberOfFilms;
const countFilms = 2;

function start () {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

console.log(numberOfFilms);


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

};

// function detectPepsonalLevel() {
//     if (personalMovieDB.count < 10) {
//         console.log('Просмотрено довольно мало фильмов');
//     } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
//         console.log('Вы классический зритель');
//     } else if (personalMovieDB.count > 30) {
//         console.log('Вы киноман');
//     } else {
//         console.log('Ошибка!');
//     }
// }

// detectPepsonalLevel();


// function rememberMyFilms() {
//     for (let i = 1; i <= countFilms; i++) {
//         const lastFilm = prompt('Один из последних просмотренных фильмов?', '');
//         const rating = prompt('На сколько оцените его?', '');
    
//         if (lastFilm == null || rating == null || lastFilm == '' ||  rating == '' || lastFilm.length > 10 || rating.length > 10) {
//             alert('Error');
//             i--;    
//         } else {
//             personalMovieDB.movies[lastFilm] = rating;
//         }
//     }
// }

// rememberMyFilms();

function showMyDB (hidden) {
   if (!hidden) {
       console.dir(personalMovieDB);
   }
 }

 showMyDB(personalMovieDB.privat);

 function WriteYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const ganre = prompt(`Ваш любимый жан под номером ${i}`, 'Боевик');
        personalMovieDB.genres[i - 1] = ganre;
    }
 }

 WriteYourGenres();








