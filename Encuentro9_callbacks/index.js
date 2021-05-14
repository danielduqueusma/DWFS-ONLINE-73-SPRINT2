window.onload = function () {
  // function mostrarNombre () {
  //   console.log('Hola Daniel')
  // }

  // function mostrarNombre (nombre) {
  //   console.log(`Hola ${nombre}`)
  // }

  // CALLBACKS SIN PARAMETROS
  // function mostrarNombre () {
  //   console.log(`Hola Daniel`)
  // }

  // function mostrarApellido () {
  //   console.log(`Hola Duque`)
  // }

  // function mostrar (callback) {
  //   // console.log(callback)
  //   callback()
  // }
  // mostrar(mostrarNombre)
  // mostrar(mostrarApellido)

  // CALLBACKS CON PARAMETROS
  // function mostrarNombre (nombre) {
  //   console.log(`Hola ${nombre}`)
  // }

  // function mostrarApellido (apellido) {
  //   console.log(`Hola ${apellido}`)
  // }

  // function mostrar (info, callback) {
  //   // console.log(callback)
  //   callback(info)
  // }

  // mostrar('Daniel', mostrarNombre)
  // mostrar('Duque', mostrarApellido)

  // CALLBACK INLINE (CON ARROW FN)

  // function mostrar (info, callback) {
  //   // console.log(callback)
  //   callback(info)
  // }

  // mostrar('Daniel', (texto) => {
  //   console.log(`Hola ${texto}`)
  // })

  // mostrar('Duque', (texto) => {
  //   console.log(`Hola ${texto}`)
  // })

  // EJERCICIO DE SUMAR 2 N MEDIANTE UN CALLBACK
  let n1 = parseInt(prompt('Ingrese un número'))
  let n2 = parseInt(prompt('Ingrese un número'))

  // function suma (num1, num2) {
  //   console.log(`El resultado de ${num1} y ${num2} es ${num1 + num2} `)
  // }

  function mostrarResulado (num1, num2, callback) {
    callback(num1 + num2)
  }

  // mostrarResulado(n1, n2, suma)
  // mostrarResulado(n1, n2, resta)
  // mostrarResulado(n1, n2, mult)
  // mostrarResulado(n1, n2, div)

  mostrarResulado(n1, n2, (resultado) => {
    console.log(`El resultado ${resultado} `)
  })

}