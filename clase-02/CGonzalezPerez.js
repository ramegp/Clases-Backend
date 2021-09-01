class Usuario {
    constructor(name, surname, books, pets) {
        this.name = name,
        this.surname = surname,
        this.books = books,
        this.pets = pets
    }
    #privada = 10;

    getPrivate = () => this.#privada

    getFullName = () => `${this.name} ${this.surname}`

    addMascota = (namePet) => this.pets.push(namePet)

    getMascotas = () => this.pets.length

    addBook = (book, autor) => this.books.push({ libro: book, autor })

    getBooks = () => this.books.map(e => e.libro)

    getAllBooks = () => this.books
}

let p = new Usuario("ramiro", "gonzalez", [{ libro: "100años", autor: 'gabriel' }, { libro: 'sarasa', autor: 'rengo' }], ['luke', 'padme'])
console.log(p.getFullName())
p.addMascota('ciro');
p.addBook("probando", "julia")
p.addBook("liga de la justicia", "julia")
console.log(p.getMascotas())
console.log(p.getBooks())
console.log(p.getAllBooks())
