// objeto literal

const dog = {
  //key: value
  raza: 'quiltro',
  peso; 15,
  nombre: 'Suave lomito',
  color: 'negro'
}


// objeto constructor

class Person  {     // -> La primera letra es mayúscula, así el programa reconoce que es un objeto constructor.
  constructor (name, lastName) {
    this.name = name;
    this.lastName = lastName;
  }
  greeting() {
    console.log(`Hola a todas! mi nombre es ${this.name} ${this.lastName}`);
  }
}

let miranda = new Person('Miranda', 'Naranjo')   // Crear una instancia a partir del objeto constructor anterior
miranda.greeting()   // --> ejecuta método
miranda.age = 28 // --> agrega propiedad

// hasOwnProperty

miranda.hasOwnProperty('age');
miranda.__proto__.hasOwnProperty('greeting');

let fabian = new Person ('Fabián', 'Bravo');

// Comprobar si comparten el mismo padre con miranda.
miranda.__proto__ === fabian.__proto__   // --> devuelve true

fabian.greeting()

// Agregar método
fabian.__proto__.goodbye = function() {  
  return 'Chao pescao'
}

fabian.goodbye()

