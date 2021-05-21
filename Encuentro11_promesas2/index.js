window.onload = () => {

  //Funciones fecth https://jsonplaceholder.typicode.com/users, https://jsonplaceholder.typicode.com/comments

  // function getUsers () {
  //   fetch('https://jsonplaceholder.typicode.com/users').then(
  //     (response) => response.json()
  //   ).then(
  //     (response) => console.log(response)
  //   )
  // }

  // function getComments () {
  //   fetch('https://jsonplaceholder.typicode.com/comments').then(
  //     (response) => response.json()
  //   ).then(
  //     (response) => console.log(response)
  //   )
  // }

  // getUsers()
  // getComments()

  //Promesas anidadas

  function getUsers () {
    return new Promise((resolve, reject) => {
      fetch('https://jsonplaceholder.typicode.com/users').then(
        (response) => response.json()
      ).then(
        (response) => {
            resolve(response)
        }
      )
    }).catch(error => reject(error))
  }

  function getComments () {
    return new Promise((resolve, reject) => {
      fetch('https://jsonplaceholder.typicode.com/comments').then(
        (response) => response.json()
      ).then(
        (response) => resolve(response)
      )
    }).catch(error => reject(error))
  }

  // getUsers().then(
  //   (response) => getComments()
  // ).then(
  //   (response) => console.log(response)
  // ).catch(error => console.error(error))

  //PROMISE.ALL

  Promise.all([getUsers(), getComments()]).then(
    (response) => console.log(response)
  )

  //PROMISE.RACE
  Promise.race([getUsers(), getComments()]).then(
    (response) => console.log(response)
  )

  //POKEMON -- 
  let list = document.getElementById('list')
  let input = document.getElementById('input')
  let newItem

  input.addEventListener('keypress', (e) => {
    if (e.charCode === 13) {
      for (let i = 1; i <= parseInt(input.value); i++) {
        getPokemon(i).then(
          (response) => {
            newItem = document.createElement('li')
            newItem.classList.add('list')
            newItem.innerHTML = `<img src=${response.sprites.front_default} /><span>${response.name}</span>`
            list.appendChild(newItem)
          }
        )
      }
    }
  })

  function getPokemon (pokemonId) {
    return new Promise((resolve, reject) => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`).then(
        (response) => response.json()
      ).then(
        (response) => resolve(response)
      )
    })
  }

  let num = Math.floor(Math.random() * 100)
  console.log(num)
}