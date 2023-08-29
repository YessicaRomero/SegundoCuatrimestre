var Book = /** @class */ (function () {
    function Book(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
        this.estado = true;
    }
    Book.prototype.cambiarEstado = function () {
        this.estado = !this.estado;
    };
    Book.prototype.estadoLibro = function () {
        if (this.estado === true) {
            console.log("el libro esta disponible");
        }
        else {
            console.log("el libro no esta disponible");
        }
    };
    return Book;
}());
var Book1 = new Book("hadas", "rolon");
console.log(Book1);
Book1.estadoLibro();
console.log(Book1);
Book1.cambiarEstado();
Book1.estadoLibro();
console.log(Book1);
