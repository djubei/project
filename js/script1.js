'use strict';

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

(num == 50) ? console.log(`.!.`): console.log(`&====>`); //* тернарный оператор ,цикл(в его работе испоьзуется 3 аргумента)


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

let numb = 50;

for (let i = 1; i < 8; i++) {
	console.log(numb);
	numb++;
}

while (numb <= 55) {
	console.log(numb);
	numb++;
}