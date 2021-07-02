
const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

console.log(numberOfFilms);


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

};

const lastFilm = prompt('Один из последних просмотренных фильмов?', '');
const rating = prompt('На сколько оцените его?', '');
const lastFilm1 = prompt('Один из последних просмотренных фильмов?', '');
const rating1 = prompt('На сколько оцените его?', '');

personalMovieDB.movies.lastFilm = rating;
personalMovieDB.movies[lastFilm1] = rating1;



const mov = {
    [lastFilm]: rating,
};

console.log(personalMovieDB);
console.log(mov);