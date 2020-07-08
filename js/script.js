let number = 5; //*просто переменная

const leftBorderWidth = 1; //*постояннач переменная



number = 10; //*изменение переменной
console.log(number);



const obj = { //*изменение переменной в константе
	a: 50 //* переменная созднанная внутри блока ( блок-"{}") существует только внутри блока
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


const persone = `Alex`; //*какие кавычки не имеет значения главное одинаковые (новые кавычки консоль)- бектики
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

console.log(object.name); //*выводив в консоль выбранное св-во обЪекта
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


//*! циклы практика

'use strict';


const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', `?`);




const a = prompt(`Один из последних просмотренных фильмов?`, `?`),
	b = +prompt(`На сколько оцените его?`, `?`);






const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false

};



for (let i = 0; i < 2; i++) {
	const a = prompt(`Один из последних просмотренных фильмов?`, `?`),
		b = +prompt(`На сколько оцените его?`, `?`);

	if (a != null && b != null && a != '' && b != '' && a.length < 50) {
		personalMovieDB.movies[a] = b;
		console.log('done');
	}
}

if (personalMovieDB.count < 10) {
	console.log('Просмотренно довольно мало фильмов');
} else if (personalMovieDB >= 10 && personalMovieDB < 30) {
	console.log('Вы классический зритель');
} else if (personalMovieDB >= 30) {
	console.log('Вы киноман');
} else {
	console.log('Произошла ошибка');
}



//*! Функции Function

function showFirstMassege() { //*todo фунции обыно называют глаголом(ПОКАЗАТЬ-show-существительное), если у функции инет имени она считается одноразовой
	console.log(`hello world`); //*todo после написания функции нужно обязательно ее вызвать инанче она не будет работать
}
showFirstMassege();


function showFirstMassege(text) {
	console.log(text);
}
showFirstMassege('Hello wotld');


function showFirstMassege(text, adad, dasd, asdasd) { //* text это аргумент и их может быть несколько
	console.log(text);
}
showFirstMassege('Hello wotld');


function showFirstMassege(text) {
	console.log(text);
	let numr = 20; //* переменная внутри заданная внутри функции остается внутри функции
}
showFirstMassege('Hello wotld');
console.log(numr); //* нельзя достать из ф-ии переменную назначенную фнутри ф-ии


let numbb = 20;

function showFirstMassege(text) { //* функция может изменять переменную , если в функции нет переменной она ищет ее выше пока не найдет
	console.log(text);
	numbb = 10; //* перезапись глобальной переменной

}
showFirstMassege('Hello wotld');
console.log(numbb); //* будет равен "10" а не 20



let numbb = 20; //* глобальная переменная

function showFirstMassege(text) {
	console.log(text);
	let numbb = 10; //* локальная переменная
	console.log(numbb); //* выведет 10

}
showFirstMassege('Hello wotld');
console.log(numbb); //* выведет 20



function calc(a, b) {
	return (a + b); //! return возвращает функцию наружу () либо это конец ф-ии
	console.log('sdasd'); //* unreacheble или недостижимый после конца ф-ии мы уже не можем ничего сделать
}
console.log(calc(3, 6)); //* 9
console.log(calc(7, 6)); //* 13
console.log(calc(8, 2)); //*10



function ret() {
	let num = 50;


	// //* тут може выполнять какие то оперпции с переменной "num" а потом мы ее выводим наружу


	return (num);
}

let anotherNum = ret(); //* название функции , пихать внутрь название переменной не обязательно
console.log(anotherNum); //* здесь будет результат операций внутри функции ret() в данном случа 50

//! когда объявляешь функцию чере FUNCTION она существует еще до ее объявления как VAR
//! типо мы можем вызвать ф-ию еще до объявления

console.log(calc(3, 6)); //* 9
console.log(calc(7, 6)); //* 13
console.log(calc(8, 2)); //*10
function calc(a, b) { //todo function declaration
	return (a + b);

}


//todo funtcion exprassion
//! ЕЕ МОЖНО ВЫЗВАТЬ ТОЛЬКО ПОСЛЕ ОБЪЯВЛЕНИЯ "она типо переменная"
const figg = function () {
	console.log('hello world');
};
figg(); //* вызов функции

//! Стрелочная ф-ия (сокращенная запись)

const calcl = (a, b) => a + b; //* если ф-ия умщается в одну строку то можно записать так

const calcl = (a, b) => { //* если не умещается в одну строчку то исп "return"
	console.log('asdsad');
	return a + b;
};


//! Методы и св-ва строк и чисел


const str = `test`;
const arrr = [1, 2, 3];
console.log(str.length); //* length - это св-во пишется через точку без круглых скобок
console.log(arrr.length);


console.log(str.toUpperCase()); //* не созраняет изменения а просто выполняет действия если потом вызвать переменную она будет прежней
console.log(str); //* останется прежней

const fruit = `some fruit`;
console.log(fruit.indexOf(`fruit`)); //*показывает индекс (первой буквы)
console.log(fruit.indexOf(`q`)); //* показывает индекс либо налчие значения в переменной "поиск подстроки"


const logg = `hello world`;
console.log(logg.slice(6, 11)); //* "SLICE" срезает с 6 по 11 символ не включительно
console.log(logg.slice(6)); //* срезает с 6 символа и до конца
console.log(logg.slice(-1));

console.log(logg.substring(6, 11)); //* "SUBSTING" тоже самое что и слайс но не поддерживает отсчет от отричательного индекса

console.log(logg.substr(6, 11)); //* "SUBSTR" первое значение (6)обозначает начало ,второе (11) сколько символов берем

const rem = 12.4;
console.log(Math.round(rem)); //* округление к ближайшему значению

const rek = '12.15px';
console.log(parseInt(rek)); //*преобразует в целое число

console.log(parseFloat(rek)); //* преобращует в дробное число



//! ПРИМЕР РАБОТЫ С ФУНКЦИЕЙ FUNCTION()


'use strict';


let numberOfFilms;

function start() {
	numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', ``);

	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) { //* insnan is not a number (если не является числом)
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

function showMyDB(hidden) { //todo аргумент hidden после задания нужной ф-ии при вызове ф-ии  подставляем нужное нам значение
	if (!hidden) { //* типо !не personalMovieDB.privat  , для проверки мы в массиве меняли значение на true чтобы менялось на false
		console.log(personalMovieDB);
	}
}
showMyDB(personalMovieDB.privat);

function writeUrGenres() {
	for (let i = 1; i <= 3; i++) {
		let z = +prompt(`Ваш любимый жанр?`);
		personalMovieDB.genres[i - 1] = z; //* если начинать с индекса"1" то первое место в массиве будет "empty"
	}
}

function writeUrGenres() {
	for (let i = 1; i <= 3; i++) { //todo используем "i=1 а не i=0" для того что бы в вопросе для пользователя отсчет шел с единицы а при присвоении массива уже вычитаем [i-1]
		personalMovieDB.genres[i - 1] = +prompt(`Ваш любимый жанр под номером ${i}?`); //* перенесли сразу "prompt в массив без присвоения переменной"
	} //* зрак $ помогает для быстрой конкотенации
}

writeUrGenres();

console.log(personalMovieDB);



//! CALL BACk ФУНКЦИИ

function first() {
	setTimeout(function () { //* задает задержку выполнения функции
		console.log(1);
	}, 500);
}

function second() {
	console.log(2);
}
first();
second();


function learnJS(lang, callback) { //* задаем два аргументаа последовательно
	console.log(`Я учу:${lang}`);
	callback();
}

learnJS(`JavaSkript`, function () { //* вызов ф-ии , подставляем аргументы
	console.log(`Я прошел этот урок`);
});


function learnJS(lang, callback) {
	setTimeout(function () {
		console.log(`Я учу:${lang}`);
	}, 500);

	callback();
}

learnJS(`JavaSkript`, function () {
	console.log(`Я прошел этот урок`);
});

function learnJS(lang, callback) {
	setTimeout(function () {
		console.log(`Я учу:${lang}`);
	}, 500);

	callback();
}

function done() {
	console.log(`Я прошел этот урок`);


}

learnJS(`JavaSkript`, done); //* функция "DONE" без "()" потому что мы ее не вызываем а передаем


//! ОБЪЕКТЫ. ДЕСТРУКТУРИЗАЦИЯ ОБЪЕКТОВ

const obj = new Object(); //* способ создания объекта

const options = {
	name: `test`, //* "name"- ключ (свойство) а значеие "test"
	width: 1024,
	height: 1024,
	colors: { //* объект внутри объекта(вложенность)
		border: `black`,
		bg: `red`
	},
	makeTest: function () {
		console.log(`Test`);
	}
};
console.log(options.colors.bg);
console.log(options.colors[`border`]);

delete options.name; //* удаление объекта
console.log(options);

let counter = 0; //* как узнать кол-во объектов

for (let key in options) { //* функция перебора объектов
	if (typeof (options[key] === 'object')) {
		for (let i in options[key]) {
			console.log(`Свойство ${i} имеет значение ${options[key][i]}`); //* двойной перебор с помощью повторяющихся []
			counter++;
		}
	} else {
		console.log(`Свойство ${key} имеет значение ${options[key]}`);
		counter++;
	}
}

console.log(Object.keys(options));
console.log(Object.keys(options.colors));
console.log(Object.keys(options).length); //* количество элементов в данном массиве

const options = {
	name: `test`, //* "name"- ключ (свойство) а значеие "test"
	width: 1024,
	height: 1024,
	colors: { //* объект внутри объекта(вложенность)
		border: `black`,
		bg: `red`
	},
	makeTest: function () {
		console.log(`Test`); //* создание собственного метода
	}
};

options.makeTest(); //* Так можно запустить метод , если используем "()" значит это идет в работу


//todo ДЕСТРУКТУРИЗАЦИЯ ОБЪЕКТА ТОЕСТЬ РАЗДЕЛЕНИЕ НА БОЛЕЕ МЕЛКИЕ ЭЛЕМЕНТЫ

const options = {
	name: `test`, //* "name"- ключ (свойство) а значеие "test"
	width: 1024,
	height: 1024,
	colors: { //* объект внутри объекта(вложенность)
		border: `black`,
		bg: `red`
	},
	makeTest: function () {
		console.log(`Test`);
	}
};

const {
	border,
	bg
} = options.colors;

console.log(border);


//! МАССИВЫ И ПСЕВДО МАССИВЫ

const arr = [0, 1, 2, 3, 4, 5, 6];

console.log(arr.length); //* выведет кол-во элемов массива = так что будет индекс + "1"

console.log(arr.pop()); //* метод "POP()" удаляет последний элемент массива

console.log(arr);

console.log(arr.push('salupa')); //* метод "PUSH()" добавляет элемент в конец массива , но при этом в консоле вылезет "7"
console.log(arr[6]); //* а тут уже будет "salupa" "6" индекс элемента

for (let i = 0; i < arr.length; i++) { //* перебирает все элементы массива "i" -порядковый номер элемента массива от "0"до arr.lenght
	console.log(arr[i]); //* массив + индекс
}

for (let value of arr) { //* специальный метод для перебора массива, такойже как и предыдущий
	console.log(value);
}


const arr = [0, 1, 2, 3, 4, 5, 6];
arr[99] = 0; //* свойство lenght выводит последний индекс массива + 1 
console.log(arr.length); //* выведет что в массиве 100 элементов 92 из которых пустые в промежутке от 7 до 100,потому что элементы встанут не попорядку и это нарушит логику
console.log(arr);

arr.forEach(function () { //* "foreach" проходится по каждому элему массива и применяет к нему функцию
	//*(точно такойже метод перебора как фор оф или фор ин или цикл для перебора только с гибкой настройкой)-является колбек ф-ией
});



arr.forEach(function (item, i, arr) { //* может содержать в себе 3 аргумента в данном случае item - перебираймый элемент,i-номер элемента по порядку с нуля,arr-сам массив
	console.log(`${i}: ${item} внутри массива ${arr}`); //* колбек функция служит для строгого выполнения порядка в функции в начале фор ич а потом ф-ия(колбеки)
}); //* данный метод используют  практически всегда

for (let value of arr) { //* данный метод используют толко тогда когда надо использовать "break" or "continue"
	console.log(value);
}

arr.forEach(); //* метод простого перебора

arr.map();
arr.filter();
arr.every(); //*это методы трасформации(модификации элемов)
arr.some();
arr.reduce();

//todo Метод split(),sort(),join() разделяет страку и преобразовывает в массив, при условии что строка разделена знаками препинания или пробелами и тд
const str = prompt('', '');
const products = str(split(', ')); //* в скобках указываем через какой разделитель бутут товары в строке
products.sort(); //*Превращает все в строку и сортерует по алфавиту если это буквы а если цифры то сравнивает по символьно и сортирует по этому принцыпу а не по возрастанию или убыванию и также преобразует в строку
console.log(products.join(',')); //* Объединяет эллементы массива в строчку, нужно также выбрать знак которым мы хотим их разделить

const arr = [1, 5, 7, 3, 23, 7]; //* метод srot() внутри себя использует алгоритм быстрой сортировки
arr.sort(compareNum); //* мы передаем ф-ию без()
function compareNum(a, b) { //* после задания данной ф-ии теперь массив сортируется в порядке возрастания
	return (a - b);
}

//* когда мы будем работать с элемами на странице мы будем получать псевдо массивы
//* псевдо массив это объект структура которого совпадает со структурой массива, они будут выглядеть как массивы но у них не будет МЕТОДОВ
//* это просто структура которая хранит данные по порядку

//! Передача по ссылке или по значению Spread оператор es6-9


let a = 5,
	b = a;
b = b + a;
b = b + 5;
console.log(b);
console.log(a);


const obj = {
	a: 5,
	b: 1
};

const copy = obj; //* ссылка на уже существующий объект

copy.a = 10; //* модифицируя копию мы модифицируем изначальный объект так как мы работаем со ссылкой а не с объектом 
console.log(copy);
console.log(obj);

//todo создание копии объекта

function copy(mainObj) { //* функция копирования
	let objCopy = {};
	let key;
	for (key in mainObj) { //*key проходится по mainObj
		objCopy[key] = mainObj[key]; //* присваиваем значение mainObj[key] to objCopy[key] каждое значение передаем в каждое значение
	}
	return objCopy; //* выводим ф-ию наружу
}

const numbers = {
	a: 2,
	b: 5,
	c: {
		x: 7,
		y: 4
	}
};
const newNumbers = copy(numbers); //* клонирование(ЭТО ПОВЕРХНОСТНАЯ КОПИЯ)
newNumbers.a = 10; //* поменяется
newNumbers.c.x = 10 //* не поменяется (потому что Key не проходил по этому объекту)
console.log(numbers);
console.log(newNumbers);
//* ЕСТЬ ЕЩЕ ГЛУБОКИЕ КОПИИ но пока изучаем поверхностные

//todo Второй способ поверхностного копирования 

const add = {
	d: 17,
	e: 20
};
console.log(Object.assign(numbers, add)); //* с помощью данного метода мы объединяем два объекта (первым стоит тот к которому, вторым который)
//*/выделить надо будет весь код при использовании
//* Эта копия не зависит от своих родителей не считая вложенности объекта "с"

const clone = Object.assign({}, add) //* объединяем объект с путспым не существующим тем самым получаем поверхностную копию
clone.d = 20
console.log(add);
console.log(clone);

//todo Создание копии массива

const oldArray = [a, b, c];
newArray = oldArray; //* положится просто ссылка на массив
newArray = oldArray.slice(); //* создание копии + можно указать от какого и до какого индекса при необходимости

newArray[1] = 'f';
console.log(newArray);
console.log(oldArray);

//todo копирование через оператор разворота spread()- он разворачивает структуру(как конфету)и превращает в набор какихто данных

const video = ['youtube', 'vimeo', 'rutube'],
	blog = ['wordpress', 'livejournal', 'blogger'],
	internet = [...video, ...blog, 'vk', 'facebook']; //* '...massive' троеточие позволяет нам вытащить значение массива
console.log(internet);

function log(a, b, c) {
	console.log(a);
	console.log(b);
	console.log(c);
}

const num = [2, 5, 7];
log(...num);

//* spread

const array = [a, b];
const arraay = [...array]; //* создание копии через разложение, мы создаем массив ( ставя скобки[] )и в нем раскладываем старый массив

const q = {
	one: 1,
	two: 2
};
const z = {
	...q
}; //* создаем объект ставя скобки "{}" и в нем "..." расскладываем старый объект 

//! Основы ООП ,прототипно-ориентированное наследование

let str = "some";
let strObj = new String(str); //* любую строку или что либо другое при субъективном использовании обработке с помощью методов js субъект становится типом данных объект а после изменения возвращается к заданному ему типу
console.log(typeof (str)); //* тип строка
console.log(typeof (strObj)); //* тип объект(строка стала объектом)

console.dir(1, 2, 3);

const soldier = { //* представим что у нас есть армия состоящая из солдат(по умолчанию)в свою очередь они делятся на какие то под классы - пулеметчик минер огнеметчик - а солдат это базовые статы
	health: 400,
	armor: 100,
	sayHello: function () {
		console.log('Hello');
	}
};
const jhon = { //* джон дрищ это его специфика , но он может быть модифицирован(прототипирован) в солдата
	health: 100
}

jhon.__proto__ = soldier; //* устаревшая запись может встречаться так что мы должны ее знать но использовать не стоит"мы установили прототипом джона -солдата"

console.log(jhon);
console.log(jhon.armor); //* джон получает сотку брони, некоторые массивы могут брать св-ва из своего прототипа т.е. объекта

//* так мы можем создаваьб лбъекты у которых есть базовые данные типо модального окна ( с ширинов высотой и тд)

jhon.sayHello(); //* джону присвоился прототип 

//todo современная запись прототипирования

Object.setPrototypeOf(jhon, soldier); //* мы присваиваем прототип джнону (1ая запись кому присваиваем, 2ая что присваиваем)

const soldier = {
	health: 400,
	armor: 100,
	sayHello: function () {
		console.log('Hello');
	}
};

const jhon = Object.create(soldier); //* мы создаем объект джно который будет прототипго наследоваться от солдата(soldier прототип)
console.log(jhon.sayHello); //* таким образом джон может получать шаблонные плюшки
console.log(jhon.armor);


//! Практика делаем методы

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
			personalMovieDB.privat = false; //*privat = !privat
		} else {
			personalMovieDB.privat = true; //*privat = !privat
		}
	},

	writeUrGenres: function () {
		for (let i = 1; i <= 3; i++) { //todo используем "i=1 а не i=0" для того что бы в вопросе для пользователя отсчет шел с единицы а при присвоении массива уже вычитаем [i-1]
			let genre = prompt(`Ваш любимый жанр под номером ${i}?`); //* зрак $ помогает для быстрой конкотенации //* перенесли сразу "prompt в массив без присвоения переменной"

			if (genre == null || genre === '') {
				console.log('Вы ввели не корректные данные или не ввели вообще');
				i--;
			} else {
				personalMovieDB.genres[i - 1] = genre;
			}
		}
		personalMovieDB.genres.forEach((item, i) => {
			console.log(`Любимый жанр ${i+1} -это ${item}`);
		});
	}
};

//todo Альтернативная версия write ur genres

writeUrGenres: function () {
	for (let i = 1; i <= 3; i++) {
		let genres = prompt(`ВВедите ваши любимые жанры через запятую`).toLowerCase;

		if (genres == null || genres === '') {
			console.log('Вы ввели не корректные данные или не ввели вообще');
			i--;
		} else {
			personalMovieDB.genres = genres.split(', ');
			personalMovieDB.genres = genres.sort();
		}
	}
	personalMovieDB.genres.forEach((item, i) => {
		console.log(`Любимый жанр ${i+1} -это ${item}`);
	})
};












































1