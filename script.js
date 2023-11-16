const url = 'https://geocoding-api.open-meteo.com/v1/search?name=Ghent'

async function getData() {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
}

getData()