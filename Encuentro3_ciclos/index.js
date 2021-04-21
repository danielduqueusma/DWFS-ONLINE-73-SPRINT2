// ESTRUCTURAS SWITCH
// let fruta = prompt("Ingrese una fruta")
// switch (fruta) {
//   case 'Pera':
//     console.log('Pera')
//     break
//   case 'Manzana':
//     console.log('Manzana')
//     break
//   case 'Naranja':
//     console.log('Naranja')
//     break
//   default:
//     console.log('Cualquier otra fruta')
// }

// if (fruta === 'Pera') {
//   console.log('Pera')
// } else if (fruta === 'Manzana') {
//   console.log('Manzana')
// } else if (fruta === 'Naranja') {
//   console.log('Naranja')
// } else {
//   console.log('Cualquier otra fruta')
// }


// CICLOS
// while
let i = 1
while (i <= 10) {
  // console.log(i)
  // i = i + 1
  // i++
  i += 1
}
//LOOP

// do while
let z = 1
do {
  console.log(z)
  z++
} while (z <= 10)

// for
for (let j = 1; j <= 10; j++) {
  // console.log(j)
}
//forEach
//forin
//map


// FUNCIONES
// Sin parametros
// function numeros () {
//  console.log('Esta es una función de números')
// }
// numeros()
// numeros()
// numeros()
// numeros()
// numeros()

// Con parametros
// function nombres (nombre, apellido) {
//   console.log(nombre + ' ' + apellido)
// }
// nombres('Daniel', 'Duque')
// nombres('Daniel', 'Jacome')
// nombres('Daniel', 'Mac')
// nombres('Sandra', 'Perez')
// nombres('Guille')
// nombres('María')

// Con retorno
// function animales () {
//   let animal = 'Perro'
//   return animal
//   // return 4 > 2
// }
// let animal = animales() 
// console.log(animal)

// Crea un ciclo del tipo do … while
// Solicita al visitante un usuario y contraseña.
// Crea una función para validar que los datos ingresados son correctos.
// Si son correctos corta la ejecución del ciclo
// Si son incorrectos vuelve a solicitar al visitante usuario y contraseña

let usuarioServidor = 'Nelson'
let contraseñaServidor = '1234'
let usuarioPrompt = ''
let contraseñaPrompt

do {
  usuarioPrompt = prompt('Ingrese su usuario')
  contraseñaPrompt = prompt('Ingrese su contraseña')
} while(validacion(usuarioPrompt, contraseñaPrompt) === false)

function validacion (userPrompt, passPrompt) {
  if (userPrompt === usuarioServidor && passPrompt === contraseñaServidor) {
    alert('Login exitoso')
    return true
  } else {
    alert('Login fallido, vuelva a intentarlo')
    return false
  }
}