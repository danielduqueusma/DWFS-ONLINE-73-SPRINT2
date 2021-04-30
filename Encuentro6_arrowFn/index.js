// // window.onload = function () {
// //   //HOISTING

// //   console.log(name)
// //   var name = 'Daniel'
// //   // if (true) {
// //   //   console.log(name)
// //   //   let name = 'Daniel'
// //   // }
// // }
// // console.log(nombre)
// // let nombre = 'DDU'
// // console.log('kdmldmlñ,ñf,d')


// // saludar()
// // function saludar () {
// //   console.log('HOLA')
// // }

// // function test () {
// //   //....
// // }
// // if (true) {
  
// // } else {

// // }
// // for (let i = 0; i < array.length; i++) {
// //   const element = array[i];
  
// // }

// // let name = 'Daniel'


// // FORMAS DE ESCRIBIR FUNCIONES
// // FUNCION TRADICIONAL
// let name = 'Daniel'
// function nombre (nombre) {
//   return nombre
// }
// console.log(nombre(name))


// // FUNCION ASIGNADA A VARIABLE
// function apellido () {
//   return 'Duque'
// }
// let lastName = apellido()
// console.log(lastName)


// // ARROW FUNCTION let n = (param) => {} ECMAS6
// let age = 29

// let edad = (age) => {
//   console.log(age)
// } 
// edad(age)

// //INTERPOLACION DE VARIABLES
// let pais = 'Colombia'
// let ciudad = 'Medellín'

// console.log('Su lugar de residencia es: ' + ciudad + ' ' + pais)
// console.log(`Su lugar de residencia es: ${ciudad} ${pais}`)


// // SCOPE (GLOBAL Y LOCAL)
// // let global = 'Soy un scope global'
// // console.log(global)
// // if (true) {
// //   let local = 'Soy un scope local'
// //   console.log(local)
// //   console.log(global)
// // }
// // console.log(local)


// // EXCEPCIONES CON TRY CATCH: try { condición que no cumple throw new Error('mensaje') }catch
// let num = 31
// let num2 = 41
// try {
//   if (num !== 30) {
//     // alert(`El número ${num} recibido no coincide con lo esperado`)
//     throw new Error(`El número ${num} recibido no coincide con lo esperado`)
//   } else
//   if (num2 !== 40) {
//     // alert(`El número ${num2} recibido no coincide con lo esperado`)
//     throw new Error(`El número ${num2} recibido no coincide con lo esperado`)
//   }
// } catch (error) {
//   alert(error)
// }


// // CHALLENGE DE LA BITÁCORA
// let numeros = [3, 8, 90, 78, 67]
// let promedio = (numeros) => {
//   let acumulador = 0
//   for (let i = 0; i < numeros.length; i++) {
//     acumulador = acumulador + numeros[i]
//   }
//   return acumulador / numeros.length
// }

// // let resultado = promedio(numeros)
// console.log(`El promedio es: ${promedio(numeros)}`)


/* 
Solicitar al visitante que ingrese su nombre de usuario.

Almacenar el nombre de usuario ingresado en una función.

Escenario 1: El nombre no está en la lista.
Darle la bienvenida al nuevo usuario

Escenario 2: El nombre de usuario existe.
Dar un aviso al usuario que el nombre de usuario se encuentra en uso

Utilizar una función con try / catch para realizar la validación.

*/

let empleados = ['Guille', 'Mar', 'Sandra', 'Gus', 'Agustín']

function validarUsuario (arrayEmpleados) {
  let nombreUsuario = prompt('Ingrese un nombre')

  try {
    if (!nombreUsuario) {
      throw new Error('Debe ingresar un nombre de usuario')
    }
    for (let i = 0; i < arrayEmpleados.length; i++) {
      if (nombreUsuario === arrayEmpleados[i]) {
        throw new Error('El nombre de usuario ya existe')
      }
    }
    alert('Bienvenido ' + nombreUsuario)

  } catch (error) {
    alert(error)
  }
}

validarUsuario(empleados)
