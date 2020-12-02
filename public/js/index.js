'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

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

var getCountryByIp = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var result1, countryCode, result2, countries, country;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return axios.get('https://ipinfo.io/json?token=83974b22092886');

                    case 2:
                        result1 = _context.sent;
                        countryCode = result1.data.country;

                        console.log('ipinfo.io nos da este resultado', result1.data.country);
                        ///podemos consultar todos los paises a restcountry
                        _context.next = 7;
                        return axios.get('https://restcountries.eu/rest/v2/all');

                    case 7:
                        result2 = _context.sent;
                        countries = result2.data;

                        console.log('restcountry nos da este resultado:', countries[240].alpha2Code);
                        country = countries.find(function (country) {
                            return country.alpha2Code === countryCode;
                        });

                        render(country.name);

                    case 12:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function getCountryByIp() {
        return _ref.apply(this, arguments);
    };
}();
getCountryByIp();

var appRoot = document.getElementById('appRoot');

var render = function render(country) {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Este es el pais: ',
            country,
            ' '
        )
    );
    ReactDOM.render(template, appRoot);
};
