// Класс Book представляет книгу с заголовком, годом публикации, ценой и автором
class Book {
    // Объявляем приватное поле price через #
    #price;

    constructor(title, author, pubYear, price) {
        this.title = title;     // Вызывает сеттер title
        this.author = author;   // Вызывает сеттер author
        this.pubYear = pubYear; // Вызывает сеттер pubYear (для валидации)
        this.price = price;     // Вызывает сеттер price (для валидации)
    }

    // Геттер и сеттер для title
    get title() {
        return this._title;
    }
    set title(value) {
        if (value === "") {
            throw new Error("Заголовок не может быть пустым");
        }
        this._title = value;
    }

    // Геттер и сеттер для author
    get author() {
        return this._author;
    }
    set author(value) {
        if (value === "") {
            throw new Error("Автор не может быть пустым");
        }
        this._author = value;
    }

    // Защищённый геттер и сеттер для pubYear (используем конвенцию с _)
    get pubYear() {
        return this._pubYear;
    }
    set pubYear(value) {
        if (value <= 0) {
            throw new Error("Год публикации должен быть положительным числом");
        }
        this._pubYear = value;
    }

    // Приватный геттер и сеттер для price (работают с приватным полем #price)
    get price() {
        return this.#price;
    }
    set price(value) {
        if (value <= 0) {
            throw new Error("Цена должна быть положительным числом");
        }
        this.#price = value;
    }

    // Метод для вывода заголовка и цены книги в консоль
    show() {
        console.log(`${this.title} (${this.author}): $${this.price}`);
    }

    // Статический метод для сравнения книг по году публикации
    static compare(a, b) {
        return a.pubYear - b.pubYear;
    }
}

// === Проверка Задания 1 и 2 ===
const book1 = new Book("1984", "George Orwell", 1949, 15);
const book2 = new Book("Brave New World", "Aldous Huxley", 1932, 12);
const book3 = new Book("Fahrenheit 451", "Ray Bradbury", 1953, 18);

book1.show();

// Пробуем изменить значения свойств (проверка инкапсуляции)
try {
    book1.price = -10; // Вызовет ошибку валидации
} catch (e) {
    console.log("Ловушка сеттера price:", e.message);
}

// === Проверка Задания 3 (Сортировка) ===
const books = [book1, book2, book3];
books.sort(Book.compare);

console.log("\nОтсортированные книги по году публикации:");
books.forEach(book => book.show());

// === Проверка Задания 4 (isEmpty) ===
function isEmpty(obj) {
    // Если общая сумма свойств и символов равна 0 -> объект пуст
    return Object.getOwnPropertyNames(obj).length === 0 && Object.getOwnPropertySymbols(obj).length === 0;
}

console.log("\nПроверка isEmpty:");
console.log(isEmpty({})); // true
console.log(isEmpty({ [Symbol()]: true })); // false (теперь работает верно!)
console.log(isEmpty(Object.defineProperty({}, 'name', { value: 'John' }))); // false

// === Проверка Задания 5 (Работа с классами строк) ===
let obj = {
    className: 'open menu',
    addClass(cls) {
        let classes = this.className ? this.className.split(' ') : [];
        if (!classes.includes(cls)) {
            classes.push(cls);
            this.className = classes.join(' ').trim();
        }
        return this;
    },
    removeClass(cls) {
        let classes = this.className ? this.className.split(' ') : [];
        let index = classes.indexOf(cls);
        if (index !== -1) {
            classes.splice(index, 1);
            this.className = classes.join(' ').trim();
        }
        return this;
    }
};

console.log("\nРабота с className:");
obj.addClass('new-class').removeClass('menu');
console.log(`Текущие классы: "${obj.className}"`); // 'open new-class'

// === Проверка Задания 6 (JSON) ===
let jsonObj = JSON.stringify(obj, null, 2);
console.log("\nОбъект в формате JSON:");
console.log(jsonObj);

let obj2 = JSON.parse(jsonObj);
console.log("Объекты равны? ", JSON.stringify(obj) === JSON.stringify(obj2)); // true

// === Проверка Задания 7 (Секунды) ===
function getSecondsToday() {
    let now = new Date();
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    return Math.floor((now - today) / 1000);
}
console.log("\nСекунд с начала дня: ", getSecondsToday());

// === Проверка Задания 8 (Формат даты) ===
function formatDate(date) {
    let day = String(date.getDate()).padStart(2, '0');
    let month = String(date.getMonth() + 1).padStart(2, '0');
    let year = String(date.getFullYear()).slice(-2);
    return `${day}.${month}.${year}`;
}
console.log("Текущая дата (дд.мм.гг): ", formatDate(new Date()));
