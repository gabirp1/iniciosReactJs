'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/* const personas = [
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
 */

var city = 'Reus';
var key = '98296c25307036fe8fe33775019062dd';
var url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + key;

var getWeather = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return axios.get(url);

                    case 2:
                        result = _context.sent;

                        console.log('result:', result.data.weather[0].description);
                        console.log(result.data.main);
                        render(result.data.main.temp, result.data.main.humidity, result.data.main.pressure, result.data.weather[0].description);

                    case 6:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function getWeather() {
        return _ref.apply(this, arguments);
    };
}();

getWeather();

var appRoot = document.getElementById('appRoot');

var render = function render(temperatura, humedad, presion, descripcion) {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Tiempo en ',
            city,
            ': '
        ),
        React.createElement(
            'p',
            null,
            'En pocas palabras: ',
            descripcion
        ),
        React.createElement(
            'p',
            null,
            'Temperatura: ',
            temperatura
        ),
        React.createElement(
            'p',
            null,
            'Humedad: ',
            humedad
        ),
        React.createElement(
            'p',
            null,
            'Presion: ',
            presion
        )
    );
    ReactDOM.render(template, appRoot);
};
