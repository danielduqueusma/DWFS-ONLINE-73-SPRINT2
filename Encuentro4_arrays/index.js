// SCOPE
let test = 'prueba'

// if (true) {
//   // let test = 4
//   console.log(test)
// }
// console.log(test)


// ARRAYS
// number, strings, bool, mix
let animales = ['Dragon', 'Perro', 'Gato', 'Vaca', 'Delfin', 'Caballo', 'Pulga']
let edades = [29, 34, 80, 79]
let bool = [false, true, false, true]
let mix = ['Daniel', 29, false]
// console.log(animales.length)
// console.log(mix[2])


// Recorrer un array (forma tradicional y funciones)
// for (let i = 0; i < animales.length; i++) {
//   console.log(animales[i])
// }

// for (let i = 0; i < edades.length; i++) {
//   console.log(edades[i])
// }

// for (let i = 0; i < mix.length; i++) {
//   console.log(mix[i])
// }

function mostrarElementosArray (array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i])
  }
}

// mostrarElementosArray(animales)
// mostrarElementosArray(edades)
// mostrarElementosArray(mix)



// MÉTODOS PARA LOS ARRAYS
//PUSH PARA AGREGAR AL FINAL
animales.push('Dragon')
// mostrarElementosArray(animales)


// UNSHIFT PARA AGREGAR AL PRINCIPIO
animales.unshift('Mariposa')
// mostrarElementosArray(animales)

// INDEXOF PARA BUSCAR UN ELEMENTO EN EL ARRAY
// console.log(animales.indexOf('DRAGON'))


// POP PARA ELIMINAR EL ULTIMO ELEMENTO EN EL ARRAY
animales.pop()
// mostrarElementosArray(animales)


// SHIFT PARA ELIMINAR EL PRIMER ELEMENTO EN EL ARRAY
animales.shift()
// mostrarElementosArray(animales)


// SORT PARA ORDENAR EL ARRAY
// console.log(animales.sort())


// SPLICE PARA ELIMINAR O AGREGAR UN ELEMENTO EN EL ARRAY
// console.log(animales)
//ELIMINAR
// animales.splice(2, 1)
// animales.splice(2)
// animales.splice(2, 2)
// animales.splice(0, 1)
// animales.splice(animales.length - 1, 1)
// animales.splice(animales.indexOf('Delfin'), 1)

//AGREGAR
// animales.splice(0, 1, 'Dinosaurio')
// animales.splice(0, 0, 'Dinosaurio', 'Pony')
animales.splice(0, 2, 'Dinosaurio', 'Pony')
console.log(animales)
// mostrarElementosArray(animales)

// JOIN
let nuevoArray = animales.join('--')
console.log(nuevoArray)

// SPLIT
console.log(nuevoArray.split('--'))

// Genera un array con al menos 10 datos de diferentes tipos.
// Tu script debe dar los siguientes outputs:

// La suma de todos los valores numéricos
// Un nuevo array con todos los datos no numéricos

let mixed = ['Colombia', 30, 56, '90', false, true, true, 1024, false, 'Medellín']
let sumaAcumulador = 0
let noNumericos = []
console.log(mixed)

for (let i = 0; i < mixed.length; i++) {
  if (typeof(mixed[i]) === 'number') {
    sumaAcumulador = sumaAcumulador + mixed[i]
  } else {
    noNumericos.push(mixed[i])
  }
}

console.log('La suma de los números es ' + sumaAcumulador)
mostrarElementosArray(noNumericos)
