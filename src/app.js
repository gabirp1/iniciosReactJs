/* const url = `https://restcountries.eu/rest/v2/all`



const getCountry = async (countryCode) => {
    const result = await axios.get(url)
    const countries = result.data
    const country = countries.find((country)=>{
        return country.alpha2Code.toLowerCase() === countryCode.toLowerCase()
    })
    console.log(country.name);
    render (country.name)
    return country
    
}

const country = getCountry('ES') */


const getCountryByIp = async () => {
    const result1 = await axios.get('https://ipinfo.io/json?token=83974b22092886')

    const countryCode = result1.data.country
    console.log('ipinfo.io nos da este resultado', result1.data.country);
    ///podemos consultar todos los paises a restcountry
    const result2 = await axios.get('https://restcountries.eu/rest/v2/all')
    const countries = result2.data
    console.log('restcountry nos da este resultado:', countries[240].alpha2Code);
    const country = countries.find((country) => {
        return country.alpha2Code === countryCode
    })
    render(country.name)
}
getCountryByIp()


const appRoot = document.getElementById('appRoot')


const render = (country) => {
    const template = (
        <div>
            <h1>Este es el pais: {country} </h1>
        </div>

    )
    ReactDOM.render(template, appRoot)
}

