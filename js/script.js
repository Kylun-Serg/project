'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

console.log(numberOfFilms);


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

};

if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
    console.log('Вы киноман');
} else {
    console.log('Ошибка!');
}

const countFilms = 2;

// for (let i = 1; i <= countFilms; i++) {
//     const lastFilm = prompt('Один из последних просмотренных фильмов?', '');
//     const rating = prompt('На сколько оцените его?', '');

//     if (lastFilm == null || rating == null || lastFilm == '' ||  rating == '' || lastFilm.length > 10 || rating.length > 10) {
//         alert('Error');
//         i--;    
//     } else {
//         personalMovieDB.movies[lastFilm] = rating;
//     }
// }

// let count = 1;

// while (count <= countFilms) {
//     const lastFilm = prompt('Один из последних просмотренных фильмов?', '');
//     const rating = prompt('На сколько оцените его?', '');

//     if (lastFilm == null || rating == null || lastFilm == '' ||  rating == '' || lastFilm.length > 10 || rating.length > 10) {
//         alert('Error');
//         count--;    
//     } else {
//         personalMovieDB.movies[lastFilm] = rating;
//     }
//     count++;
// }

// let count = 1;

// do {
//     const lastFilm = prompt('Один из последних просмотренных фильмов?', '');
//     const rating = prompt('На сколько оцените его?', '');

//     if (lastFilm == null || rating == null || lastFilm == '' ||  rating == '' || lastFilm.length > 10 || rating.length > 10) {
//         alert('Error');
//         count--;    
//     } else {
//         personalMovieDB.movies[lastFilm] = rating;
//     }
//     count++;

// } while (count <= countFilms);


console.log(personalMovieDB);


