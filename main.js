
class Libro {
  constructor(titulo, autor) {
    this.titulo = titulo;
    this.autor = autor;
  }
  mesage(){
    return `${this.titulo}, de ${this.autor}`
  }
  mostrarDatosEnConsola() {
    console.log(this.mesage());
    
  }  mostrarDatosEnAlert() {
    alert(this.mesage());
    
  }
  getTitulo(){
    return this.titulo
  }
  mostrarDatos(action){
    action ==="alert"?alert(this.mesage()) : console.log(this.mesage());
  }
}


const unLibro = new Libro("Ángeles y Demonios", "Dan Brown");
console.log(unLibro);
unLibro.mostrarDatosEnConsola();
unLibro.mostrarDatosEnAlert();
let nuevolibro = new Libro('Fuego y Sangre', 'George R. R. Martin');
let tituloDelNuevoLibro = nuevolibro.getTitulo();
alert(tituloDelNuevoLibro);
nuevolibro.mostrarDatos("alert")
nuevolibro.mostrarDatos("console")
nuevolibro.mostrarDatos()
