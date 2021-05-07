window.onload = () => {
  let cuadrado = document.getElementById('cuadrado')
  
  // //click, onclick
  // // 1 Forma addEventListener('click', () =>
  // cuadrado.addEventListener('click', (e) => {
  //   cuadrado.classList.toggle('gray')
  //   console.log(e)
  // })

  // // Forma 2 onclick = () =>
  // cuadrado.onclick = () => {
  //   cuadrado.classList.toggle('gray')
  // }

  // //Forma 3 addEventListener('click', fnName)
  // cuadrado.addEventListener('click', cambiarColor)

  // function cambiarColor (event) {
  //   cuadrado.classList.toggle('gray')
  //   console.log(event)
  // }

  // //------------------------------------------------

  // //dobleClick, ondbClick
  let cuadradoDbClick = document.getElementById('cuadradoDbClick')
  cuadradoDbClick.addEventListener('dblclick',  () => {
    cuadradoDbClick.classList.toggle('pink')
  })

  // //------------------------------------------------
  // //KeyPress
  let inputTecla = document.getElementById('inputTecla')
  inputTecla.addEventListener('keypress', (e) => {
    if (e.keyCode === 13) {
      cuadrado.classList.toggle('gray')
    }
  })


  // //------------------------------------------------
  // //Mouse over
  let cuadradoOver = document.getElementById('cuadradoOver')
  cuadradoOver.addEventListener('mouseover', () => {
    cuadradoOver.classList.add('blue')
    cuadradoOver.classList.remove('yellow')
  })
  
  //  //------------------------------------------------
  // //Mouse out

  cuadradoOver.addEventListener('mouseout', () => {
    cuadradoOver.classList.remove('blue')
    cuadradoOver.classList.add('yellow')
  })
  

  // //--------------------------------------------
  // //Stop Propagation (cuadradoGrande, cuadradoMediano, cuadradoPequeño)
  let cuadradoGrande = document.getElementById('cuadradoGrande')
  cuadradoGrande.addEventListener('click', () => {
    alert('Cuadrado grande')
  })

  let cuadradoMediano = document.getElementById('cuadradoMediano')
  cuadradoMediano.addEventListener('click', (e) => {
    e.stopPropagation()
    alert('Cuadrado mediano')
  })
  
  let cuadradoPequeño = document.getElementById('cuadradoPequeño')
  cuadradoPequeño.addEventListener('click', (e) => {
    e.stopPropagation()
    alert('Cuadrado pequeño')
  })

  // //-------------------------------------------
  // Remove event listener
  // cuadrado.addEventListener('click', cambiarColor)

  function cambiarColor () {
    cuadrado.classList.toggle('yellow')
    cuadrado.classList.toggle('border')
    // cuadrado.removeEventListener('click', cambiarColor)
  }

  cuadrado.addEventListener('click', () => {
    cambiarColor()
  })

  //-----------------------------------------------------------

  /*
  Crea un input de texto con un botón al lado.
  Al presionar el botón o un enter escribe el contenido del 
  input en un <li>
  Añade un nuevo <li> con cada enter del usuario.*/

  let inputAgregar = document.getElementById('inputAgregar')
  let btnAgregar = document.getElementById('btnAgregar')
  let lista = document.getElementById('lista')
  let newItem

  inputAgregar.addEventListener('keypress', (e) => {
    if (e.keyCode === 13 && inputAgregar.value !== '') {
      renderView()
    }
  })

  btnAgregar.addEventListener('click', () => {
    renderView()
  })

  function renderView () {
    newItem = document.createElement('li')
    newItem.innerHTML = inputAgregar.value
    lista.appendChild(newItem)
    inputAgregar.value = ''
  }

}