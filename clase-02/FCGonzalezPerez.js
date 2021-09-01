function Usuario(name, surname, books, pets) {
    this.name = name;
    this.surname = surname;
    this.books = books;
    this.pets = pets;

    this.getFullName = () => { console.log(`${this.name} ${this.surname}`) };

    this.addMascota = (namePet) => this.pets.push(namePet);

    this.getMascotas = () => this.pets.length

    this.addBook = (book,autor)=>this.books.push({libro:book,autor})
        
    this.getBooks = () => this.books.map(e => e.libro)

    this.getAllBooks = () => this.books

}

let u = new Usuario("Ramiro", "Gonzalez", [{ libro: "libro 1", autor: "autor1" }, { libro: "libro 2", autor: "autor2" }], ["mascota 1", "mascota 2"])
u.getFullName()
u.addMascota("mascota 3");
console.log(u.getMascotas());
u.addBook("libro 3","autor 3");
console.log(u.getBooks())
console.log(u.getAllBooks())