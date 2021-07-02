
const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

console.log(numberOfFilms);


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

};

const countFilms = 2;

for (let i = 1; i <= countFilms; i++) {
    const lastFilm = prompt('Один из последних просмотренных фильмов?', '');
    const rating = prompt('На сколько оцените его?', '');

    if (lastFilm == null || rating == null || lastFilm == '' ||  rating == '' || lastFilm.length > 10 || rating.length > 10) {
        alert('Error');
        i--;    
    } else {
        personalMovieDB.movies[lastFilm] = rating;
    }
}


console.log(personalMovieDB);


