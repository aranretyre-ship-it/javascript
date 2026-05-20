'use strict';

/**
 * Возвращает x, возведённое в n-ную степень.
 *
 * @param {number} x Возводимое в степень число.
 * @param {number} n Степень, должна быть натуральным числом.
 * @return {number} x, возведённое в n-ную степень.
 */
function pow(x, n) {
  if (n === 0) return 1;
  if (n < 0) return 1 / pow(x, -n);
  return x * pow(x, n - 1);
}
/**
* Возвращает сумму чисел от 1 до n,
* используя арифметическую прогрессию
*
* @param {number} n число, по которое ищется сумма
* @return {number} сумма чисел от 1 до n
*/
const sumToNewFunc = new Function('n', `
  if (typeof n !== 'number' || n <= 0) {
    return 0;
  }
  return (n * (n + 1)) / 2;
`);

console.log(sumToNewFunc(100));

/**
 * Проверяет год на високосность
 *
 * @param {number} year год, который нужно проверить, натуральное число
 * @return {boolean} true, если год високосный, иначе - false.
 */
function isLeapYear(year) {
  return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
}

/**
* Возвращает факториал числа n.
*
* @param {number} n число, для которого находится факториал
* @return {number} факториал числа n!
*/
function factorial(n) {
  if (n === 0)
    return 1n;
  return BigInt(n) * factorial(n - 1);
}
/**
 * Возвращает n-ое число Фибоначчи.
 *
 * @param {number} n номер искомого числа Фибоначчи
 * @return {BigInt} n-oe число Фибоначчи
 */
function fib(n) {
  let a = 0n;
  let b = 1n;
  for (let i = 0; i < n; i++) {
    let temp = b;
    b = a + b;
    a = temp;
  }
  return a;
}

console.log(fib(0));   
console.log(fib(100)); 

/**
 *  * Возвращает результат сравнения целых чисел y и x.
 * 
 * @param {number} x первый аргумент
 * @param {number} y второй аргумент
 * @return {Function} true, если y больше x;
 * false, если y меньше x;
 * null, если значения равны.
 */
function compare(x) {
  return function (y) {
    return y > x ? true : y < x ? false : null;
  };
}

/**
 * Возвращает сумму всех аргументов.
 *
 * @param {...number} args - Аргументы для суммирования.
 * @return {number} - Сумма всех аргументов.
 */
function sum(...args) {
  return args.reduce((acc, curr) => acc + curr, 0);
}

/**
 * Добавляет свойство с символом 'blackSpot' к объекту.
 *
 * @param {Object} obj Объект, к которому будет добавлено свойство.
 * @return {Object} Объект с добавленным свойством 'blackSpot'.
 */
function addBlackSpot(obj) {
  obj[Symbol.for('blackSpot')] = true;
  return obj;
}

let myObject = {};
addBlackSpot(myObject);
console.log(myObject[Symbol.for('blackSpot')]);
