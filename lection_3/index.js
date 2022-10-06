// Модуль 2. Занятие 3. Массивы
//
//
//
//

// Example 0
// Видалити дубльовані елементи в масиві
// const names = ["Oleh", "Volodymyr", "Svitlana", "Oleh", "Svitlana", "Ivan"];

// const res = ["Oleh"];

// for (let i = 0; i < names.length; i += 1) {
// 	if (res.includes(names[i])) continue;

// 	res.push(names[i]);
// }

// console.log(res);

// let i = 2;

// const age = 18 + ++i + 10;

// console.log(age);
// console.log(i);

// =>
// Example 1 - Базовые операции с массивом
// Создайте массив genres с элементами «Jazz» и «Blues».
// Добавьте «Рок-н-ролл» в конец.
// Выведите в консоль первый элемент массива.
// Выведите в консоль последний элемент массива.
// Код должен работать для массива произвольной длины.
// Удалите первый элемент и выведите его в консоль.
// Вставьте «Country» и «Reggae» в начало массива.
// const genres = ["Jazz", "Blues"];

// genres.push("Rock & Roll");

// console.log(genres[0]);

// console.log(genres[genres.length - 1]);

// console.log(genres.shift());

// console.log(genres);

// =>
// Example 2 - Массивы и строки
// Напиши скрипт для вычисления площади прямоугольника(S = a * b) со сторонами,
// значения которых хранятся в переменной values в виде строки.
// Значения гарантированно разделены пробелом.

// const values = "8 11";
// const valuesArray = values.split(" ");
// console.log(Number(valuesArray[0]) * Number(valuesArray[1]));

// =>
// Example 3 - Перебор массива
// Напиши скрипт для перебора массива fruits циклом for.
// Для каждого элемента массива выведи в консоль строку в формате:
// "номер_элемента: значение_элемента".
// Нумерация элементов должна начинаться с 1.

// const fruits = ["🍎", "🍇", "🍑", "🍌", "🍋"];

// for (let i = 0; i < fruits.length; i += 1) {
// 	console.log(`${i + 1}: ${fruits[i]}`);
// }

// =>
// Example 4 - Массивы и циклы
// Напиши скрипт который выводит в консоль имя и телефонный номер пользователя.
// В переменных names и phones хранятся строки имен и телефонных номеров,
// разделенные запятыми. Порядковый номер имен и телефонов в строках
// указывают на соответствие. Количество имен и телефонов гарантированно одинаковое.

// const names = "Jacob,William,Solomon,Artemis";
// const phones = "38089001234567,38089001112233,380890055566377,380890055566300";

// const parcedNames = names.split(",");
// const parcedPhones = phones.split(",");

// for (let i = 0; i < parcedNames.length; i += 1) {
// 	console.log(`${parcedNames[i]}'s number is ${parcedPhones[i]}`);
// }

// =>
// Example 5 - Массивы и строки
// Напиши скрипт который выводит в консоль все
// слова строки кроме первого и последнего.
// Результирующая строка не должна начинаться или
// заканчиваться пробельным символом.
// Скрипт должен работать для любой строки.

// const string = "     Welcome to the Heelo world future   ";

// const words = string.trim().split(" "); // ["Welcome", "to" ...., "future"]

// words.shift();
// words.pop();

// for (const word of words) {
// 	console.log(word);
// }

// =>
// Example 6 - Массивы и строки
// Напиши скрипт который «разворачивает» строку
// (обратный порядок букв) и выводит ее в консоль.

// const string = "Welcome to the future"; // ["W", "e", "l"...., "e"]

// const reversedString = string.split("").reverse().join("");

// console.log(reversedString);

// =>
// Example 7 - Сортировка массива с циклом
// Напиши скрипт сортировки массива строк
// в алфавитном порядке по первой букве элемента.

// const langs = [1, 1, 2, 5, 4, 1, 3, 4, 5, 5, 12];

// let count = 0;

// for (let loop = 0; loop < langs.length - 2; loop += 1) {
// 	let arrayWasChanged = false;
// 	// console.log("LOOP:", loop);
// 	for (let i = 1; i < langs.length - loop; i += 1) {
// 		// console.log("i:", i);
// 		const firstValue = langs[i - 1];
// 		const secondValue = langs[i];

// 		if (firstValue > secondValue) {
// 			arrayWasChanged = true;
// 			langs[i - 1] = secondValue;
// 			langs[i] = firstValue;
// 		}
// 		count += 1;
// 	}

// 	if (!arrayWasChanged) break;
// }

// =>
// Example 8 - Поиск элемента
// Напиши скрипт поиска самого маленького числа в массиве.
// Код должен работать для любого массива чисел.
// Используй цикл для решения задачи.

// const numbers = [2, 17, 94, 1, 23, 1000, 37, -4, 4];
// let min = numbers[0];

// 1. Desizion 1
// console.log(Math.min(...numbers));

// 1. Desizion 2
// for (const number of numbers) {
// 	if (number < min) {
// 		min = number;
// 	}
// }

// console.log(min); // 1

