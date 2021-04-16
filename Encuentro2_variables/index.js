//TIPOS DE VARIABLES 




//TIPOS DE VALORES


// var
// var name = 'Daniel';
// console.log(name)
// var name = 'Marisol'
// console.log(name)
// console.log(name)
// console.log(name)
// console.log(name)
// console.log(name)

//let
let apellido = 'Duque';
console.log(apellido)
console.log(apellido)
console.log(apellido)

// let profesion = 'Informático'
// console.log(profesion)
// if (true) { //SCOPE O CONTEXTO
//   let profesion = 'Ingeniero'
//   console.log(profesion)
// }
// console.log(profesion)

//const
const edad = 29;
// edad = 30; NO LE PUEDO CAMBIAR EL VALOR

//typeof
let animal = "perro"
let edadAnimal = '3'
let adoptado = true
console.log(typeof(animal), typeof(edadAnimal), typeof(adoptado))


//parseint
edadAnimal = parseInt(edadAnimal)
console.log(edadAnimal + edadAnimal)
console.log(typeof(edadAnimal)) 



//upperCase - lowerCase
let pais = 'Colombia'
console.log(pais)
pais = pais.toUpperCase()
console.log(pais)
console.log(pais.toLowerCase())


//prompt
// let nombre2 = prompt('Ingrese un nombre')
// let apellido2 = prompt('Ingrese el apellido')
// // alert(nombre2 + ' ' + apellido2)
// alert(`${nombre2} ${apellido2}`)


//aritmetic operators (+, - , * , /)
console.log(4 + 4)
console.log(4 - 4)
console.log(20 * 20)
console.log(4 / 4)


//Comparison operators (==, ===, !==, !=, >, <, <=, >=)
console.log(4 > 2)
console.log(4 < 2)
console.log(4 >= 2)
console.log(4 <= 2)
console.log(3 == 3)
console.log(3 === 3)
console.log('3' == 3) //SOLO COMPARA CONTENIDO
console.log('3' === 3) // CONTENIDO COMO TIPO DE DATO
console.log(3 != 2)
console.log(3 !== 2)
console.log(3 !== 3)
console.log(3 != '2')


//Logic operators (&&, ||, !)
console.log(4 > 2 && 2 > 4)
console.log(4 > 2 || 2 > 4)
console.log(!(4 > 2))


//if
if (4 > 2) {
  console.log('4 es mayor a 2')
} else {
  console.log('4 no mayor a 2')
}

//good practices when create variables

//lowerCamelCase
// let nombrePresidenteColombia

//Snake case
//let nombre_presidente_colombia

//CamelCase
//let NombrePresidenteColombia

let num1 = parseInt(prompt('Ingrese número'))
// num1 = parseInt(num1)
let num2 = parseInt(prompt('Ingrese número'))
console.log(typeof(num1), typeof(num2))
alert(num1 + num2)

