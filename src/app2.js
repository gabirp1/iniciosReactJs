const city = 'Reus'
const key = '98296c25307036fe8fe33775019062dd'
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric&lang=es`

const getWeather = async ()=> {
    const result = await axios.get(url)
    console.log('result:', result.data.weather[0].description)
    console.log(result.data.main);
    render (result.data.main.temp, result.data.main.humidity, result.data.main.pressure, result.data.weather[0].description )
}

getWeather()

const appRoot = document.getElementById('appRoot')

const render = (temperatura, humedad, presion, descripcion)=>{
const template = (
    <div>
    <h1>Tiempo en {city}: </h1>
    <p>En pocas palabras: {descripcion}</p>
    <p>Temperatura: {temperatura}</p>
    <p>Humedad: {humedad}</p>
    <p>Presion: {presion}</p>
    </div>
)
ReactDOM.render(template, appRoot)}