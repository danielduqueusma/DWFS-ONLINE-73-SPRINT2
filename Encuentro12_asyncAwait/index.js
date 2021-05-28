// OPEN MOVIE API 7fb789f2 - http://www.omdbapi.com/
// WEATHER API 1c67ae33adc312d33476ae4d68a09beb -https://openweathermap.org/

window.onload = () => {
  //Async await
  async function getAlbums () {
    let response = await fetch('http://www.omdbapi.com/?t=lord+of+the+rings&apikey=7fb789f2')
    response = await response.json()
    console.log(response);
  }

  getAlbums()

  let country = document.getElementById('infoCountry')

  async function getInfoCountry () {
    let country = 'Polonia'
    let apiKey = '1c67ae33adc312d33476ae4d68a09beb'
    let baseUrl = 'https://api.openweathermap.org/data/2.5/weather'
    let response = await fetch(`${baseUrl}?q=${country}&appid=${apiKey}`)
    response = await response.json()
    return response
  }

  getInfoCountry().then(
    (response) => renderView(response)
  )

  function renderView (infoCountry) {
    country.innerHTML = `<h1>${infoCountry.name}</h1><h2>Lon: ${infoCountry.coord.lon}, Lat: ${infoCountry.coord.lat} </h2><h3>${infoCountry.id}</h3>`
  }

  // search with weather api, show 3 elements h1, h2, h3
}