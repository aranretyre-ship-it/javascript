/**
 * Лабораторная работа №2: Функции
 * Файл: lab2.js
 */

/**
 * 1. Возводит число x в целую степень n.
 * @param {number} x - Основание степени.
 * @param {number} n - Показатель степени (целое число).
 * @returns {number} Результат возведения в степень.
 */
function pow(x, n) {
    return x ** n;
}

/**
 * 2. Вычисляет сумму чисел от 1 до n включительно.
 * @type {Function}
 * @param {number} n - Натуральное число.
 * @returns {number} Сумма чисел.
 */
const sumTo = new Function('n', `
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
`);

/**
 * 3. Проверяет, является ли год високосным.
 * @param {number} year - Год для проверки.
 * @returns {boolean} True, если год високосный, иначе false.
 */
function isLeapYear(year) {
    return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
}

/**
 * 4. Вычисляет факториал числа n рекурсивно.
 * @param {number} n - Число для расчета факториала.
 * @returns {bigint} Факториал числа в формате BigInt.
 */
function factorial(n) {
    const bigN = BigInt(n);
    if (bigN === 0n || bigN === 1n) {
        return 1n;
    }
    return bigN * factorial(n - 1);
}

/**
 * 5. Находит n-е число Фибоначчи (быстрое нахождение).
 * @param {number} n - Порядковый номер числа Фибоначчи.
 * @returns {bigint} n-е число Фибоначчи в формате BigInt.
 */
function fib(n) {
    if (n === 0) return 0n;
    if (n === 1) return 1n;
    
    let a = 0n;
    let b = 1n;
    
    for (let i = 2; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    
    return b;
}

/**
 * 6. Принимает число x и возвращает функцию сравнения с ним.
 * @param {number} x - Целочисленное значение для сравнения.
 * @returns {Function} Анонимная функция, принимающая y.
 */
function compare(x) {
    return function(y) {
        if (y > x) return true;
        if (y < x) return false;
        return null;
    };
}

/**
 * 7. Возвращает сумму всех своих аргументов.
 * @param {...number} args - Произвольное количество чисел.
 * @returns {number} Сумма всех аргументов.
 */
function sum(...args) {
    return args.reduce((acc, current) => acc + current, 0);
}

/**
 * 8. Добавляет в объект символьное свойство blackSpot из глобального реестра.
 * @param {Object} obj - Исходный объект.
 * @returns {Object} Объект с добавленным свойством.
 */
function addBlackSpot(obj) {
    const symbol = Symbol.for("blackSpot");
    obj[symbol] = true;
    return obj;
}
