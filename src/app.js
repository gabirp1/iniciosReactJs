const url = `https://restcountries.eu/rest/v2/all`


const getCountry = async (countryCode) => {
    const result = await axios.get(url)
    const countries = result.data
    const country = countries.find((country)=>{
        return country.alpha2Code.toLowerCase() === countryCode.toLowerCase()
    })
    console.log(country.name);
    render ('Spain')
    return country
    
}

const country = getCountry('ES')



const appRoot = document.getElementById('appRoot')


const render = (name)=>{
    const template = (
        <div>
        <h1>Este es el pais: {name} </h1>
           </div>
    )
    ReactDOM.render(template, appRoot)
    }

