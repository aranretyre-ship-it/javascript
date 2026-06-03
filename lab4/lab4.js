// Класс Book представляет книгу с заголовком, годом публикации, ценой и автором
class Book {
    constructor(title, author, pubYear, price) {
        this.title = title;   // Используем сеттер для валидации
        this.author = author; // Добавлено новое свойство author
        this._pubYear = pubYear; // Защищённое свойство
        this.price = price;    // Используем сеттер для валидации
    }

    // Геттер для получения заголовка книги
    get title() {
        return this._title;
    }

    // Сеттер для установки заголовка книги
    set title(value) {
        if (value === "") {
            throw new Error("Заголовок не может быть пустым");
        }
        this._title = value;
    }

    // Геттер для получения автора книги
    get author() {
        return this._author;
    }

    // Сеттер для установки автора книги
    set author(value) {
        if (value === "") {
            throw new Error("Автор не может быть пустым");
        }
        this._author = value;
    }

    // Защищённый геттер для получения года публикации книги
    get pubYear() {
        return this._pubYear;
    }

    // Сеттер для установки года публикации книги
    set pubYear(value) {
        if (value <= 0) {
            throw new Error("Год публикации должен быть положительным числом");
        }
        this._pubYear = value;
    }

    // Приватный геттер для получения цены книги
    get price() {
        return this._price;
    }

    // Сеттер для установки цены книги
    set price(value) {
        if (value <= 0) {
            throw new Error("Цена должна быть положительным числом");
        }
        this._price = value;
    }

    // Метод для вывода заголовка, автора и цены книги в консоль
    show() {
        console.log(`this.title({this.title} (this.title({this.author}): $${this.price}`);
    }

    // Статический метод для сравнения книг по году публикации
    static compare(a, b) {
        return a.pubYear - b.pubYear;
    }
}

// Создание экземпляров класса Book
const book1 = new Book("1984", "George Orwell", 1949, 15);
const book2 = new Book("Brave New World", "Aldous Huxley", 1932, 12);
const book3 = new Book("Fahrenheit 451", "Ray Bradbury", 1953, 18);

// Вызов метода show для каждого экземпляра
book1.show();
book2.show();
book3.show();

// Создание массива книг и сортировка
const books = [book1, book2, book3];

// Сортируем массив книг по году публикации
books.sort(Book.compare);

// Вывод отсортированных книг
console.log("\nОтсортированные книги по году публикации:");
books.forEach(book => book.show());

// Функция для проверки, пуст ли объект, включая неперечисляемые свойства
function isEmpty(obj) {
    return Object.getOwnPropertyNames(obj).length === 0 && Object.getOwnPropertySymbols(obj).length === 0;
}

// Проверка функции isEmpty
console.log(isEmpty({})); // true
console.log(isEmpty({ [Symbol()]: true })); // true
console.log(isEmpty(Object.defineProperty({}, 'name', { value: 'John' }))); // false

// Объект с методами для работы с классами
let obj = {
    className: 'open menu',
    // Метод для добавления класса, если его еще нет
    addClass(cls) {
        if (!this.className.split(' ').includes(cls)) {
            this.className += ' ' + cls;
            this.className = this.className.trim();
        }
        return this;
    },
    // Метод для удаления класса, если он существует
    removeClass(cls) {
        let classes = this.className.split(' ');
        let index = classes.indexOf(cls);
        if (index !== -1) {
            classes.splice(index, 1);
            this.className = classes.join(' ');
        }
        return this;
    }
};

// Пример использования методов добавления и удаления классов
obj.addClass('new-class').removeClass('menu');
console.log(`Текущие классы: "${obj.className}"`); // 'open new-class'

// Преобразование объекта в JSON
let jsonObj = JSON.stringify(obj, null, 2);
console.log("Объект в формате JSON:");
console.log(jsonObj);

// Декодирование JSON обратно в объект
let obj2 = JSON.parse(jsonObj);

// Проверка равенства объектов
console.log("Объекты равны? ", JSON.stringify(obj) === JSON.stringify(obj2)); // true

// Функция для получения количества секунд с начала текущего дня
function getSecondsToday() {
    let now = new Date();
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    let diff = now - today; // Разница между текущей датой и началом дня
    return Math.floor(diff / 1000); // Возвращаем разницу в секундах
}

// Функция для форматирования даты в строку формата "дд.мм.гг"
function formatDate(date) {
    let day = String(date.getDate()).padStart(2, '0');
    let month = String(date.getMonth() + 1).padStart(2, '0');
    let year = String(date.getFullYear()).slice(-2);
    return `day.{day}.day.{month}.${year}`;
}

// Примеры использования
console.log("Количество секунд с начала текущего дня: ", getSecondsToday());

let now = new Date();
console.log("Текущая дата в формате 'дд.мм.гг': ", formatDate(now));

