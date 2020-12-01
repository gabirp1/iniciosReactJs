const personas = [
    { nombre: 'Paquita', edad: 29, ciudad: 'Vilaseca' },
    { nombre: 'Paco', edad: 36, ciudad: 'Reus' }
]


const sumar = (e) => {
    personas[0].edad++;
    
    const template = <p id="edad">{personas[0].edad}</p>
    const appEdad = document.querySelector('#edad')
    ReactDOM.render(template, appEdad)

    console.log(personas[0].edad)
}

const restar = (e) => {
    personas[0].edad--;

    const template = <p id="edad">{personas[0].edad}</p>
    const appEdad = document.querySelector('#edad')
    ReactDOM.render(template, appEdad)

    console.log(personas[0].edad)
}

const reset = (e) => {
    personas[0].edad = 29;

    const template = <p id="edad">{personas[0].edad}</p>
    const appEdad = document.querySelector('#edad')
    ReactDOM.render(template, appEdad)

    console.log(personas[0].edad)
}


const template = <div>
        <p id="nombre">{personas[0].nombre}</p>
        <p id="edad">{personas[0].edad}</p>
        <p id="ciudad">{personas[0].ciudad}</p>
        <p><button onClick={sumar}>+1</button><button onClick={restar}>-1</button><button onClick={reset}>reset</button></p>
    </div>


const appRoot = document.getElementById('appRoot')

ReactDOM.render(template, appRoot)





