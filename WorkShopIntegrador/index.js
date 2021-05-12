window.onload = function () {
  let dataBase = [
    {
      description: 'Reloj de muñeca para hombres'
    },
    {
      description: 'Juguete de super heroe para niñas'
    },
    {
      description: 'Video juego de aventura para consola PS4'
    },
    {
      description: 'Camara fotográfica profesional'
    },
    {
      description: 'Libro recetas de cocina'
    },
    {
      description: 'Televisor Samsung 55 pulgadas'
    },
    {
      description: 'Ropa interior dama'
    }
  ]
  let btnAddCar = []
  let counterCar = document.getElementById('counterCar')
  let counter = 0
  let articlesInCar = []
  counterCar.innerHTML = localStorage.getItem('counter') ? localStorage.getItem('counter') : counter

  renderArticles()

  function renderArticles () {
    let containerArticlesList = document.getElementById('containerArticlesList')
    for (let i = 0; i < dataBase.length; i++) {
      let newItem = document.createElement('li')
      newItem.classList.add('containerArticles__list--li')
      newItem.innerHTML = `<span class="image">IMG</span><span class="description"><strong>Description</strong>${dataBase[i].description}</span><span class="btnAddCar" id="btnAddCar${i}">Add to car</span>`
      containerArticlesList.appendChild(newItem)

      btnAddCar[i] = document.getElementById(`btnAddCar${i}`)
      btnAddCar[i].addEventListener('click', (e) => {
        addToCar(e, i)
      })
    }
  }

  function addToCar (e, i) {
    alert(`Ud ha agregado al carrito el articulo: ${dataBase[i].description}`)
    counter ++
    counterCar.innerHTML = counter
    localStorage.setItem('counter', counter)
    articlesInCar.push({description: dataBase[i].description})
    localStorage.setItem('articles', JSON.stringify(articlesInCar))
  }

  counterCar.addEventListener('click', () => {
    if (counter) {
      window.location.href = "http://127.0.0.1:5500/EstructuraDWFS/WorkShopIntegrador/buy.html"
    } else {
      alert('No hay productos agregados al carrito')
    }
  })
}