window.onload = function () {
  let articlesInCar = []
  let name = document.getElementById('name')
  let lastName = document.getElementById('lastName')
  let tel = document.getElementById('tel')
  let numberCreditCard = document.getElementById('numberCreditCard')
  let codeCreditCard = document.getElementById('codeCreditCard')
  let containerArticlesToBuy = document.getElementById('containerArticlesToBuy')
  let btnBuy = document.getElementById('btnBuy')

  renderArticlesToBuy()

  function renderArticlesToBuy () {
    articlesInCar = JSON.parse(localStorage.getItem("articles")) ? JSON.parse(localStorage.getItem("articles")) : []
    for (let i = 0; i < articlesInCar.length; i++) {
      let newItem = document.createElement('li')
      newItem.innerHTML = `<span class="containerArticlesToBuy__list--item">${articlesInCar[i].description}</span>`
      containerArticlesToBuy.appendChild(newItem)
    }
  }

  btnBuy.addEventListener('click', () => {
    !name.value ? name.classList.add('error') : name.classList.remove('error')
    !lastName.value ? lastName.classList.add('error') : lastName.classList.remove('error')
    !numberCreditCard.value ? numberCreditCard.classList.add('error') : numberCreditCard.classList.remove('error')
    !codeCreditCard.value ? codeCreditCard.classList.add('error') : codeCreditCard.classList.remove('error')
    if (!name.value || !lastName.value || !numberCreditCard.value || !codeCreditCard.value) {
      alert('Debe completar todos los campos obligatorios')
    } else {
      alert('Felicidades por su compra')
      localStorage.clear();
      window.location.href = 'http://127.0.0.1:5500/EstructuraDWFS/WorkShopIntegrador/'
    }
  })
}