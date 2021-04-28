// Obejtos JSON Java Script Object Notation
let nombre = 'Daniel'
let apellido = 'Duque'
let edad = 29

let arrayInfo = ['Daniel', 'Duque', 29]

let objetoInfo = {
  nombre: 'Daniel',
  apellido: 'Duque',
  edad: 29
}

console.log(objetoInfo.edad)


// Array de objetos

let DWFS73 = [
  {
    nombre: 'Daniel',
    apellido: 'Duque',
    edad: 29
  },
  {
    nombre: 'Sandra',
    apellido: 'Perez',
    edad: 23
  }
]

// console.log(DWFS73[1].apellido, DWFS73[1].nombre, DWFS73[0].apellido)
let newIten = {
  nombre: 'Nelson',
  apellido: 'Tobon',
  edad: 23
}

DWFS73.push(newIten)

// for (let i = 0; i < DWFS73.length; i++) {
//   console.log(DWFS73[i].nombre)
//   console.log(DWFS73[i].apellido)
//   console.log(DWFS73[i].edad)
// }


// Definición de una clase (class nombreClase {})
// class persona {}


// Crear propiedades en la clase
// class persona {
//   nombre = 'Daniel'
//   apellido = 'Duque'
// }

// let infoDaniel = new persona
// console.log(infoDaniel.nombre)

// Crear métodos en la clase (Palabra reservada this)
// class persona {
//   nombre = 'Daniel'
//   apellido = 'Duque'
//   fullName = function () {
//     return nombre + ' ' + apellido
//   }
// }
// let infoDaniel = new persona
// let infoGuille = new persona
// console.log(infoDaniel, infoGuille)


// Constructor (constructor (params) { this.nombrePropiedad = param })
// class Persona {
//   constructor (nombre, apellido) {
//     this.nombre = nombre
//     this.apellido = apellido
//   }
//   fullName = function () {
//     return this.nombre + ' ' + this.apellido
//   }
// }

// let infoDaniel = new Persona('Daniel', 'Duque')
// let infoGuille = new Persona('Guille', 'Lerda')
// let infoMarjorie = new Persona('Marjorie', 'Ramos')
// console.log(infoDaniel.fullName())
// console.log(infoGuille.fullName())
// console.log(infoMarjorie.fullName())


// Getters & Setters (get nombrePropiedad () { return this._nombrePropiedad })
// (set nombrePropiedad (param) { this._nombrePropiedad = param })

// class Persona {
  
//   set nombre (nombre) {
//     this._nombre = nombre
//   }

//   get nombre () {
//     return this._nombre
//   }

//   set apellido (apellido) {
//     this._apellido = apellido
//   }

//   get apellido () {
//     return this._apellido
//   }

//   fullName = function () {
//     return this.nombre + ' ' + this.apellido
//   }
// }

// let infoDaniel = new Persona
// infoDaniel.nombre = 'Daniel'
// infoDaniel.apellido = 'Duque'

// let infoGuille = new Persona
// infoGuille.nombre = 'Guille'
// infoGuille.apellido = 'Lerda'
// console.log(infoGuille.fullName(), infoDaniel.fullName())

// EJERCICIO

// class Persona {
  
//   set nombre (nombre) {
//     this._nombre = nombre
//   }

//   get nombre () {
//     return this._nombre
//   }

//   set apellido (apellido) {
//     this._apellido = apellido
//   }

//   get apellido () {
//     return this._apellido
//   }

//   set edad (edad) {
//     this._edad = edad
//   }

//   get edad () {
//     return this._edad
//   }
  

//   fullName = function () {
//     return this.nombre + ' ' + this.apellido
//   }

//   es_mayor = function () {
//     if (this.edad > 18) {
//       return true
//     } else {
//       return false
//     }
//   }
// }

// let infoMaria = new Persona
// infoMaria.nombre = 'Maria'
// infoMaria.apellido = 'Galindo'
// infoMaria.edad = 18
// console.log(infoMaria.fullName())
// console.log(infoMaria.nombre + ' es mayor de 18?: ' + infoMaria.es_mayor())

// let infoJacome = new Persona
// infoJacome.nombre = 'Daniel'
// infoJacome.apellido = 'Jacome'
// infoJacome.edad = 1
// console.log(infoJacome.fullName())
// console.log(infoJacome.nombre + ' es mayor de 18?: ' + infoJacome.es_mayor())

// EJERCICIO PERROS

class Mascotas {
  set genero (genero) {
    this._genero = genero
  }

  get genero () {
    return this._genero
  }

  set raza (raza) {
    this._raza = raza
  }

  get raza () {
    return this._raza
  }

  set enAdopcion (enAdopcion) {
    this._enAdopcion = enAdopcion
  }

  get enAdopcion () {
    return this._enAdopcion
  }

  set procesoAdopcion (procesoAdopcion) {
    this._procesoAdopcion = procesoAdopcion
  }

  get procesoAdopcion () {
    return this._procesoAdopcion
  }

  set adoptado (adoptado) {
    this._adoptado = adoptado
  }

  get adoptado () {
    return this._adoptado
  }

  modificarEstadoAdopcion = function (estado) {
    this.enAdopcion = estado
  }

  informarEstadoAdopcion = function () {
    return 'El estado de adopción de su mascota es: ' + this.enAdopcion
  }
}

let perroDaniel = new Mascotas
perroDaniel.raza = 'Samoyedo'
perroDaniel.genero = 'Macho',
perroDaniel.enAdopcion = false
perroDaniel.procesoAdopcion = false
perroDaniel.adoptado = false

perroDaniel.modificarEstadoAdopcion(true)

console.log(perroDaniel.informarEstadoAdopcion())