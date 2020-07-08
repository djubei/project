'use strict';


let numberOfFilms;

function start() {
	numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', ``);

	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', ``);
	}
}
start();


const a = prompt(`Один из последних просмотренных фильмов?`, `?`),
	b = +prompt(`На сколько оцените его?`, `?`);






const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false

};

function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
		const a = prompt(`Один из последних просмотренных фильмов?`, `?`),
			b = +prompt(`На сколько оцените его?`, `?`);

		if (a != null && b != null && a != '' && b != '' && a.length < 50) {
			personalMovieDB.movies[a] = b;
			console.log('done');
		} else {
			console.log(`error`);
		}
	}
}

rememberMyFilms();


function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
		console.log('Просмотренно довольно мало фильмов');
	} else if (personalMovieDB >= 10 && personalMovieDB < 30) {
		console.log('Вы классический зритель');
	} else if (personalMovieDB >= 30) {
		console.log('Вы киноман');
	} else {
		console.log('Произошла ошибка');
	}
}

detectPersonalLevel();



function showMyDB() {
	if (personalMovieDB.privat == false) {
		console.log(personalMovieDB);
	}
}
showMyDB();

function showMyDB(hidden) {
	if (!hidden) {
		console.log(personalMovieDB);
	}
}
showMyDB(personalMovieDB.privat);

function writeUrGenres() {
	for (let i = 1; i <= 3; i++) {
		let z = +prompt(`Ваш любимый жанр?`);
		personalMovieDB.genres[i - 1] = z;
	}
}

writeUrGenres();
console.log(personalMovieDB);