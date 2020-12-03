'use strict';

var personas = [{ nombre: 'Paquita', edad: 29, ciudad: 'Vilaseca' }, { nombre: 'Paco', edad: 36, ciudad: 'Reus' }];

var sumar = function sumar(e) {
    personas[0].edad++;

    var template = React.createElement(
        'p',
        { id: 'edad' },
        personas[0].edad
    );
    var appEdad = document.querySelector('#edad');
    ReactDOM.render(template, appEdad);

    console.log(personas[0].edad);
};

var restar = function restar(e) {
    personas[0].edad--;

    var template = React.createElement(
        'p',
        { id: 'edad' },
        personas[0].edad
    );
    var appEdad = document.querySelector('#edad');
    ReactDOM.render(template, appEdad);

    console.log(personas[0].edad);
};

var reset = function reset(e) {
    personas[0].edad = 29;

    var template = React.createElement(
        'p',
        { id: 'edad' },
        personas[0].edad
    );
    var appEdad = document.querySelector('#edad');
    ReactDOM.render(template, appEdad);

    console.log(personas[0].edad);
};
var writeLocation = function writeLocation(city) {
    if (city) {
        return React.createElement(
            'p',
            { id: 'ciudad' },
            personas[0].ciudad
        );
    }
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'p',
        { id: 'nombre' },
        personas[0].nombre
    ),
    React.createElement(
        'p',
        { id: 'edad' },
        personas[0].edad
    ),
    React.createElement(
        'p',
        { id: 'ciudad' },
        personas[0].ciudad
    ),
    writeLocation(personas.city),
    React.createElement(
        'p',
        null,
        React.createElement(
            'button',
            { onClick: sumar },
            '+1'
        ),
        React.createElement(
            'button',
            { onClick: restar },
            '-1'
        ),
        React.createElement(
            'button',
            { onClick: reset },
            'reset'
        )
    )
);

var appRoot = document.getElementById('appRoot');

ReactDOM.render(template, appRoot);
