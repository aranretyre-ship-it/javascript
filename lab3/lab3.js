/**
 * Лабораторная работа №3: Строки, массивы и модули
 * Файл: lab3.js (ES-модуль)
 */

// Для задания 6 импортируем функцию fib из предыдущей лабораторной (файл lab2.js должен быть модулем)
import { fib } from './lab2.js';

/**
 * 1. Возвращает дробную часть числа num.
 * @param {number} num - Исходное число.
 * @returns {number} Дробная часть числа.
 */
export function getDecimal(num) {
    const str = String(num);
    const dotIndex = str.indexOf('.');
    if (dotIndex === -1) return 0;
    return Number('0' + str.slice(dotIndex));
}

/**
 * 2. Выполняет нормализацию URL, добавляя https:// в начало.
 * @param {string} url - Исходный адрес сайта.
 * @returns {string} Нормализованный URL.
 */
export function normalizeUrl(url) {
    if (url.startsWith('https://')) {
        return url;
    }
    if (url.startsWith('http://')) {
        return 'https://' + url.slice(7);
    }
    return 'https://' + url;
}

/**
 * 3. Проверяет строку на наличие спам-слов (viagra, xxx), нечувствительна к регистру.
 * @param {string} str - Строка для проверки.
 * @returns {boolean} True, если обнаружен спам, иначе false.
 */
export function checkSpam(str) {
    const lowerStr = str.toLowerCase();
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

/**
 * Вспомогательная функция для задания 4 и 5.
 * Возводит первую букву строки в верхний регистр.
 * @param {string} str - Исходная строка.
 * @returns {string} Строка с заглавной первой буквой.
 */
export function ucFirst(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
}

/**
 * 4. Усекает строку до maxlength, заменяя конец на троеточие "…".
 * @param {string} str - Исходная строка.
 * @param {number} maxlength - Максимальная длина.
 * @returns {string} Результат усечения.
 */
export function truncate(str, maxlength) {
    if (str.length <= maxlength) return str;
    return str.slice(0, maxlength - 1) + '…';
}

/**
 * 5. Преобразует строки вида 'var-test-text' в 'varTestText'.
 * @param {string} str - Строка с дефисами.
 * @returns {string} Строка в формате camelCase.
 */
export function camelize(str) {
    return str
        .split('-')
        .map((word, index) => index === 0 ? word : ucFirst(word))
        .join('');
}

/**
 * 6. Возвращает массив, заполненный числами Фибоначчи до n-го (не включая его).
 * @param {number} n - Количество чисел Фибоначчи.
 * @returns {bigint[]} Массив чисел Фибоначчи в BigInt.
 */
export function fibs(n) {
    const result = [];
    for (let i = 0; i < n; i++) {
        result.push(fib(i)); // Использует импортированную функцию из lab2.js
    }
    return result;
}

/**
 * 7. Сортирует копию массива чисел по убыванию. Исходный массив не меняется.
 * @param {number[]} arr - Неупорядоченный массив чисел.
 * @returns {number[]} Новый отсортированный массив.
 */
export function arrReverseSorted(arr) {
    return [...arr].sort((a, b) => b - a);
}

/**
 * 8. Возвращает массив уникальных значений, используя Set.
 * @param {Array} arr - Исходный массив с дубликатами.
 * @returns {Array} Массив уникальных элементов.
 */
export function unique(arr) {
    return Array.from(new Set(arr));
}
