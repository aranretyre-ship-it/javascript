class Book {
    #price;

    constructor(title, pubYear, price) {
        this.title = title;
        this.pubYear = pubYear;
        this.price = price;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        if (typeof value !== 'string' || value.trim().length === 0) {
            throw new Error("Название не может быть пустой строкой.");
        }
        this._title = value;
    }

    get pubYear() {
        return this._pubYear;
    }

    set pubYear(value) {
        if (typeof value !== 'number' || value <= 0) {
            throw new Error("Год издания должен быть положительным числом.");
        }
        this._pubYear = value;
    }

    get price() {
        return this.#price;
    }

    set price(value) {
        if (typeof value !== 'number' || value <= 0) {
            throw new Error("Цена должна быть положительным числом.");
        }
        this.#price = value;
    }
    show() {
        console.log(`${this.title}: ${this.price}`);
    }

    static compare(bookA, bookB) {
        return bookA.pubYear - bookB.pubYear;
    }
}

function isEmpty(obj) {
    return Reflect.ownKeys(obj).length === 0;
}

let obj = {
    className: 'open menu',

    addClass(cls) {
        const classes = new Set(this.className.split(' ').filter(c => c));
        classes.add(cls);
        this.className = [...classes].join(' ');
        return this;
    },

    removeClass(cls) {
        const classes = new Set(this.className.split(' ').filter(c => c));
        classes.delete(cls);
        this.className = [...classes].join(' ');
        return this;
    }
};

const userProfile = {
    id: 101,
    name: "Евгений",
    isAdmin: true,
    permissions: {
        read: true,
        write: false
    },
    courses: ["JavaScript", "HTML", "CSS"]
};

const jsonString = JSON.stringify(userProfile, null, 2);
console.log(jsonString);
const obj2 = JSON.parse(jsonString);

// Функция для получения количества секунд с начала текущего дня
function getSecondsToday() {
    let now = new Date();
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    let diff = now - today;
    return Math.floor(diff / 1000);
}

// Функция для форматирования даты в строку формата "дд.мм.гг"
function formatDate(date) {
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear().toString().substr(-2);
    return `${day < 10 ? '0' + day : day}.${month < 10 ? '0' + month : month}.${year}`;
}
