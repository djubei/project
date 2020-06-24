let number = 5; //*просто переменная

const leftBorderWidth = 1; //*постояннач переменная



number = 10; //*изменение переменной
console.log(number);



const obj = { //*изменение переменной в константе
	a: 50
};

obj.a = 11; //* ПРимер ---изменения переменной в константе
console.log(obj.a);



console.log(name); //*Пример переменной var  console log undedined ,переменная не объявлена но уже существует
var name = 'Ivan';



{
	let result = 50; //*не может вывести в консоль
}
console.log(result);



'use strict'; //*деректива обозначающая что мы работаем в современном режиме (прописывается в начале документа или функции)
a = 15; //*неправильная старая запись ( как и var) при использовании стрик становится ошибкой
console.log(a);


let nNumber = 4.6;
console.log(nNumber / 0); //*деление на 0 равно бесконечности Infinity
console.log(-nNumber / 0); //*деление на 0 равно минус бесконечности Infinity
console.log('string' * 9); //*NaN not a number не число


const persone = `Alex`; //*какие кавычки не имеет значения главное одинаковые (новые кавычки консоль)
const person = `5`; //*тоже строка
const bool = true; //*булевое значение да
const boole = false; //*булевое значение нет

console.log(something); //*в консоли разраба будет ошибка означающая значение Null
let some;
console.log(some); //*выведет значение undefined


const object = { //*объект(object) - свойства(name,age,isMarried)-значение свойства (`Makar`, 24, false) действия
	name: `Makar`,
	age: 24,
	isMarried: false
};

console.log(object.name); //*выводив в консоль выьранное св-во обЪекта
console.log(object[`age`]); //*тоже самое только квадратные скобки


let arr = [`plume.png`, 'xz', 6, {},
	[]
]; //*массив может содержать также другие массивы и объекты
console.log(arr[1]); //*вызываем элемент массива 0-9-и до бесконечности

// alert(`хер`);//*просто алерт
const result1 = confirm(`are u here?`); //*вызывает окно с подтверждением , результат выводится в переменную result1
console.log(result1); //*результат true или false

const answer = prompt(`Есть ли вам 18?`, `дефолтный ответ`); //*вызывает окно в которое нужно ввести ответ "ТИП ДАННЫХ СТРОКА"
console.log(answer); //*ответ уходит в консоль,при нажатии "отмена" результат будет `Null` а при подтверждении будет инфа из строки
console.log(typeof (answer)); //* typeof показывает принадлежности инфы ( строка, число , бул и тд)
//! ВСЯ ИНФА ОТ ПОЛЬЗОВАТЕЛЯ  В ВИДЕТИП ДАННЫХ СТРОКА

const answer1 = +prompt(`Есть ли вам 18?`, `дефолтный ответ`); //*ЕСЛИ ПРЕРЕД ОПЕРАТОРОМ ПОСТАВИТЬ "+" ТО ТИП ДАННЫХ МЕНЯЕТСЯ НА ИНТЕДЖЕР , если записано число а не буквы

console.log(answer + 5); //* будет склейка
console.log(answer1 + 5); //* будет число

const answers = []; //*Переменная - массив 
answers[0] = prompt('Whats ur name', ''); //*Запрос с сайта заностится в массив под нумерацией
answers[1] = prompt('Whats ur surnmae', '');
answers[2] = prompt('How old are u', '');
document.write(answers); //*Данная команда выводит на сайт инфу , тестовая команда
console.log(typeof (answers)); //* тип данных object
console.log(typeof (null)); //* выведет object но это ошибка

const category = 'toys'; //*склейка - данных - конкотенация два способа
console.log(`https://someurl.com/${category}/5`); //*первый способа со знаком доллар $ возможен при использовании консольных кавычек
console.log(`https://someurl.com` + category + `/` + `4`); //* второй с помощью плюса +

const user = `ivan`;
alert(`ПРивет, ${user}`);

console.log(`arr` + `-object`); //*сложение двух строк
console.log(4 + `5`); //* сложение строки и числа конкотенация
console.log(4 + +`5`); //*за счет "+"(унарный плюс) перед строкой она становится int если это для нее возможно

let incr = 10, //* можно назначать переменные через запятую в конце должна быть точка с запятой
	decr = 10;

incr++; //* инкримент увеличивает значение на еденицу ,две формы записи (постфикстаная- в начале возвращает старое значение)
++incr; //* (префиксная сразу изменяет значение)
decr--; //* декримент уменьшает значение на еденицу ,две формы записи(постфиксная)
--decr; //* (префиксная)
console.log(incr);
console.log(decr);
console.log(incr++);
console.log(decr++);

console.log(5 % 2); //* остаточное деление
console.log(2 * 4 == `8`); //* оператор "равно"
console.log(2 * 4 === `8`); //* строгое "равенство" сравнивает не только значение но и тип данных



const isChecked = true,
	isClose = true;
console.log(isChecked && isClose); //* означает "and"
console.log(isChecked || isClose); //* означает "or"



//!первая дз

'use strict';


const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', `?`);




const a = prompt(`Один из последних просмотренных фильмов?`, `?`),
	b = +prompt(`На сколько оцените его?`, `?`),
	c = prompt(`Один из последних просмотренных фильмов?`, `?`),
	d = +prompt(`На сколько оцените его?`, `?`);






const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false

};
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;


//*!  цыклы

console.log(personalMovieDB);

if (4 == 9) { //* цикл
	console.log(`ok!`);
} else {
	console.log(`.!.`);
}

const num = 50;

if (num < 49) {
	console.log(`( * )`);
} else if (num > 100) {
	console.log(`&====>`);
} else {
	console.log(`&====>( * )`);
}

(num == 50) ? console.log(`.!.`): console.log(`&====>`); //* тернарный оператор ,цикл

switch (num) { //* тоже конструкция цицлы
	case 49: //*case строгое сравнение - равно ли 49(выполняется ли условие) аналог "if"
		console.log(`wrong`);
		break;
	case 100:
		console.log(`too much`);
		break;
	case 50:
		console.log(`well done`);
		break;
	default: //* аналог "else"
		console.log(`default`);
		break;
}

//*! циклы

let numb = 50;

while (numb < 55) {
	console.log(numb);
	numb++;
}

do { //* тот же цикл только с пост условием
	console.log(numb);
	numb++;
}
while (numb < 55);


for (let i = 1; i < 8; i++) {
	console.log(numb);
	numb++;
}

for (let i = 1; i < 8; i++) { //* создаем "if break "чтобы цикл не был бесконечным

	if (i === 6) {
		break;
	}
	console.log(i);
}



for (let i = 1; i < 8; i++) { //* создаем "if break "чтобы цикл пропускал тот шаг который находится в условии if допусти четные числа и тд

	if (i === 6) {
		continue;
	}
	console.log(i);
}
























































1