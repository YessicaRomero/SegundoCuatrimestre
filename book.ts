class Book{
  private  titulo:string;
   private autor:string;
   protected estado:boolean;

   public constructor(titulo:string,autor:string){
        this.titulo = titulo;
        this.autor = autor;
        this.estado = true;
        
    }
    public cambiarEstado(){
        this.estado = !this.estado;
    }
    public estadoLibro(){
        if(this.estado === true){
      console.log("el libro esta disponible");
    }else {
        console.log("el libro no esta disponible");
    }
        
    
}
}
let Book1 = new Book("hadas", "rolon");
console.log(Book1);

Book1.estadoLibro();

console.log(Book1)
Book1.cambiarEstado()
Book1.estadoLibro();
console.log(Book1)
