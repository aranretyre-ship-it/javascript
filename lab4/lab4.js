class Book {
    #price;
    #pubYear;
    #_title;

    constructor(title, pubYear, price) {
        this.title = title;
        this.pubYear = pubYear;
        this.price = price;
    }

    get title() {
        return this.#_title;
    }

    set title(value) {
        if (value == null || typeof value !== 'string' || value.trim().length === 0) {
            throw new Error("Название не может быть пустой строкой.");
        }
        this.#_title = value;
    }

    get pubYear() {
        return this.#pubYear;
    }

    set pubYear(value) {
        if (value == null || typeof value !== 'number' || value <= 0) {
            throw new Error("Год издания должен быть положительным числом.");
        }
        this.#pubYear = value;
    }

    get price() {
        return this.#price;
    }

    set price(value) {
        if (value == null || typeof value !== 'number' || value <= 0) {
            throw new Error("Цена должна быть положительным числом.");
        }
        this.#price = value;
    }

    show() {
        console.log(`this.title:{this.title}:this.title:{this.price}`);
    }

    static compare(bookA, bookB) {
        if (!(bookA instanceof Book) || !(bookB instanceof Book)) {
            throw new Error("Аргументы должны быть экземплярами Book.");
        }
        return bookA.pubYear - bookB.pubYear;
    }
}
