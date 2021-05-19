window.onload = () => {
  //Creación de promesas

  // CON FUNCIONES

  function promesa1 () {
    return new Promise((resolve, reject) => {
      if (true) {
        setTimeout(() => {
          resolve('Promesa exitosa desde la función')
        }, 5000);
      }
    })
  }

  promesa1().then(
    (response) => {
      console.log(response)
    }
  )


  // CON VARIABLES
  let promesa2 = new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve('Promesa exitosa desde la variable')
      }, 10000);
    }
  })

  promesa2.then(
    (response) => {
      console.log(response);
    }
  )

  //ejemplo de promesa resuelta
  function promesa3 () {
    return new Promise((resolve, reject) => {
      if (true) {
        setTimeout(() => {
          resolve('Promesa exitosa')
        }, 2000);
      }
    })
  }

  promesa3().then(
    (response) => {
      console.log(response)
    }
  )


  //ejemplo de promesa rechazada

  function promesa4 () {
    return new Promise((resolve, reject) => {
      if (false) {
        setTimeout(() => {
          resolve('Promesa exitosa desde la función')
        }, 5000);
      } else {
        reject('Promesas rechazada')
      }
    })
  }

  // promesa4().then(
  //   (response) => {
  //     console.log(response)
  //   }
  // ).catch(
  //   (error) => {
  //     console.error(error)
  //   }
  // )

  //CAPTURAR ERROR SIN CATCH
  promesa4().then(
    (response) => {
      console.log(response)
    },
    (error) => {
      console.error(error)
    }
  )


  //ejemplo de promesa pendiente que termina resolviéndose

  function promesa5 () {
    return new Promise((resolve, reject) => {
      console.log('Promesa pendiente...')
      if (false) {
        setTimeout(() => {
          resolve('Promesa exitosa desde la función con estado pendiente')
        }, 5000);
      } else {
        setTimeout(() => {
          reject('Promesas rechazada con estado pendiente')
        }, 3000);
      }
    })
  }

  promesa5().then(
    (response) => {
      console.log(response)
    }
  ).catch((error) => console.error(error))


  // Fetch con promesa (jsonPlace)

  let posts = document.getElementById('posts')
  let acum = 1
  posts.addEventListener('click', () => {
    obtenerDatos()
  })

  function obtenerDatos () {
    fetch(`https://jsonplaceholder.typicode.com/posts/${acum}`).then(
      (response) => {
        acum ++
        console.log(response)
        return response.json()
      }
    ).then(
      (response) => {
        console.log(response)
        pintarInfo(response)
      }
    )
  }

  function pintarInfo (info) {
    let lista = document.getElementById('lista')
    let nuevoItem

    nuevoItem = document.createElement('li')
    nuevoItem.innerHTML = `<span>${info.title}</span>`
    lista.appendChild(nuevoItem)

    // for (let i = 0; i < info.length; i++) {
    //   nuevoItem = document.createElement('li')
    //   nuevoItem.innerHTML = `<span>${info[i].title}</span>`
    //   lista.appendChild(nuevoItem)
    // }
  }

  //OPERADOR TERNARIO

  let num = 1
  // if (num > 5) {
  //   prueba = 'Mayor a 5'
  // } else {
  //   prueba = 'Menor a 5'
  // }
  let prueba = num > 5 ? 'Mayor a 5' : 'Menor a 5'
  // let prueba = num === 1 ? 'Num 1' : num === 2 ? 'Num 2' : 'Mayor a 2'
  console.log(prueba)
}