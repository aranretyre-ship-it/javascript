/* Класс Book описывает сущность книги с валидацией данных */
class Book {
    // Приватное поле для хранения цены, доступное только внутри этого класса
    #price;

    // Конструктор инициализирует объект при создании через new Book(...)
    constructor(title, pubYear, price) {
        this.title = title;   // Вызывает сеттер title
        this.pubYear = pubYear; // Вызывает сеттер pubYear
        this.price = price;     // Вызывает сеттер price
    }

    // Геттер для получения названия книги
    get title() {
        return this._title; // Возвращает значение из защищенного свойства _title
    }

    // Сеттер для проверки и записи названия книги
    set title(value) {
        // Проверка: имя должно быть строкой и не быть пустым
        if (typeof value !== 'string' || value.trim().length === 0) {
            throw new Error("Название не может быть пустой строкой.");
        }
        this._title = value; // Запись проверенного значения
    }

    // Геттер для получения года издания
    get pubYear() {
        return this._pubYear;
    }

    // Сеттер для проверки и записи года издания
    set pubYear(value) {
        // Проверка: год должен быть числом больше нуля
        if (typeof value !== 'number' || value <= 0) {
            throw new Error("Год издания должен быть положительным числом.");
        }
        this._pubYear = value;
    }

    // Геттер для получения приватного свойства цены
    get price() {
        return this.#price;
    }

    // Сеттер для проверки и записи приватного свойства цены
    set price(value) {
        // Проверка: цена должна быть числом больше нуля
        if (typeof value !== 'number' || value <= 0) {
            throw new Error("Цена должна быть положительным числом.");
        }
        this.#price = value;
    }

    // Метод выводит в консоль название книги и её цену
    show() {
        console.log(`${this.title}: ${this.price}`);
    }

    // Статический метод для сравнения двух книг по году издания (для сортировки)
    static compare(bookA, bookB) {
        return bookA.pubYear - bookB.pubYear;
    }
}

// Функция проверяет, пустой ли объект (нет ли у него своих свойств)
function isEmpty(obj) {
    // Reflect.ownKeys возвращает все свойства объекта, включая символы
    return Reflect.ownKeys(obj).length === 0;
}

// Объект-меню с методами для удобного управления CSS-классами в строке
let obj = {
    className: 'open menu', // Исходная строка с классами

    // Метод добавляет новый класс, если его еще нет
    addClass(cls) {
        // Разбиваем строку в массив, фильтруем пустые элементы и убираем дубликаты через Set
        const classes = new Set(this.className.split(' ').filter(c => c));
        classes.add(cls); // Добавляем новый класс
        this.className = [...classes].join(' '); // Собираем обратно в строку через пробел
        return this; // Возвращаем сам объект для цепочки вызовов (chaining)
    },

    // Метод удаляет указанный класс
    removeClass(cls) {
        // Разбиваем строку в массив, фильтруем и создаем Set
        const classes = new Set(this.className.split(' ').filter(c => c));
        classes.delete(cls); // Удаляем класс из коллекции
        this.className = [...classes].join(' '); // Собираем обратно в строку
        return this; // Возвращаем сам объект
    }
};

// Простой объект с профилем пользователя для демонстрации работы с JSON
const userProfile = {
    id: 101,
    name: "Игорь",
    isAdmin: true,
    permissions: {
        read: true,
        write: false
    },
    courses: ["JavaScript", "HTML", "CSS"]
};

// Превращаем объект userProfile в строку формата JSON с отступами в 2 пробела
const jsonString = JSON.stringify(userProfile, null, 2);
console.log(jsonString); // Выводим JSON-строку в консоль

// Парсим (превращаем) JSON-строку обратно в новый независимый JS-объект
const obj2 = JSON.parse(jsonString);

// Функция для получения количества секунд, прошедших с начала текущего дня
function getSecondsToday() {
    let now = new Date(); // Текущие дата и время
    // Создаем объект даты на сегодня, но сбрасываем время на 00:00:00
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    let diff = now - today; // Разница в миллисекундах
    return Math.floor(diff / 1000); // Переводим миллисекунды в целые секунды
}

// Функция для форматирования объекта даты в привычную строку "дд.мм.гг"
function formatDate(date) {
    let day = date.getDate(); // Получаем день месяца (1-31)
    let month = date.getMonth() + 1; // Получаем месяц (0-11, поэтому прибавляем 1)
    let year = date.getFullYear().toString().substr(-2); // Берем только 2 последние цифры года
    
    // Собираем строку, добавляя ведущие нули для дней и месяцев меньше 10
    return `${day < 10 ? '0' + day : day}.${month < 10 ? '0' + month : month}.${year}`;
}
