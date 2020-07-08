'use strict';


const a = prompt(`Один из последних просмотренных фильмов?`, `?`),
	b = +prompt(`На сколько оцените его?`, `?`);

const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	start: function () {
		personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', ``);
		while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) { //* insnan is not a number (если не является числом)
			personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', ``);
		}
	},
	rememberMyFilms: function () {
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
	},
	detectPersonalLevel: function () {
		if (personalMovieDB.count < 10) {
			console.log('Просмотренно довольно мало фильмов');
		} else if (personalMovieDB >= 10 && personalMovieDB < 30) {
			console.log('Вы классический зритель');
		} else if (personalMovieDB >= 30) {
			console.log('Вы киноман');
		} else {
			console.log('Произошла ошибка');
		}
	},
	showMyDB: function (hidden) { //todo аргумент hidden после задания нужной ф-ии при вызове ф-ии  подставляем нужное нам значение
		if (!hidden) { //* типо !не personalMovieDB.privat  , для проверки мы в массиве меняли значение на true чтобы менялось на false
			console.log(personalMovieDB);
		}
	},
	toggleVisibleMyDB: function () {
		if (personalMovieDB.privat) {
			privat = !privat
		} else {
			privat = !privat
		}
	},

	writeUrGenres: function () {
		for (let i = 1; i <= 3; i++) { //todo используем "i=1 а не i=0" для того что бы в вопросе для пользователя отсчет шел с единицы а при присвоении массива уже вычитаем [i-1]
			personalMovieDB.genres[i - 1] = +prompt(`Ваш любимый жанр под номером ${i}?`); //* перенесли сразу "prompt в массив без присвоения переменной"
		} //* зрак $ помогает для быстрой конкотенации
	}
};