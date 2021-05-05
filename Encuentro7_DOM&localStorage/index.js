window.onload = () => {
  // Capturar elemento
  let parrafo1 = document.getElementById('parrafo1')
  console.log(parrafo1)


// Cambiar estilos
// lowerCase p
// parrafo1.style.textTransform = 'lowerCase'
// parrafo1.style.border = '1px solid red'


// Capturar todos los p (getElementsByTagName('p')), cambiar color con for
// console.log(document.getElementsByTagName('p'))
// let parrafosByTag = document.getElementsByTagName('p')
// for (let i = 0; i < parrafosByTag.length; i++) {
//   parrafosByTag[i].style.color = 'green'
// }


// Capturar los elementos que tengan una clase en especifico getElementsByClassName('nombreClase')
console.log(document.getElementsByClassName('fontSize'))
let parrafoByClass = document.getElementsByClassName('fontSize')
for (let i = 0; i < parrafoByClass.length; i++) {
  parrafoByClass[i].classList.add('designText')
  // parrafoByClass[i].className = 'designText'
}


// Atributos de un elemento ex img
let img = document.getElementById('img')
img.src = 'https://dummyimage.com/200x120/5a5ada/aaa'
console.log(img.alt)


// className y classList del mismo elemento
// console.log(document.getElementsByClassName('fontSize'))
// parrafo1.classList.add('designText')


// Eliminar clase con classList
parrafo1.classList.remove('designText')


// Element.value, cambiar value
let input = document.getElementById('input')
console.log(input.value)


// innerHtml vs outerHtml
let span = document.getElementById('span')
// span.innerHTML = '<li class="itemLista">Argentina</li>'

span.outerHTML = '<strong>Argentina</strong>'


// setAttribute('src', 'url')  https://dummyimage.com/200x120/5a5ada/aaa
img.setAttribute('src', 'https://dummyimage.com/200x120/5a5ada/aaa')


// create element, append child
let lista = document.getElementById('lista')
let text = prompt('Ingrese un texto')
let newItem = document.createElement('li')
// newItem.innerHTML = '<a href="www.google.com">Dirigirse a Google</a>'
newItem.innerHTML = `<span>${text}</span>`
lista.appendChild(newItem)


// LocalStorage
console.log(localStorage.getItem('jhkdsjcdkl'))
localStorage.setItem('nombre', 'Daniel')

}