'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var url = 'https://restcountries.eu/rest/v2/all';

var getCountry = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(countryCode) {
        var result, countries, country;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return axios.get(url);

                    case 2:
                        result = _context.sent;
                        countries = result.data;
                        country = countries.find(function (country) {
                            return country.alpha2Code.toLowerCase() === countryCode.toLowerCase();
                        });

                        console.log(country.name);
                        render('Spain');
                        return _context.abrupt('return', country);

                    case 8:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function getCountry(_x) {
        return _ref.apply(this, arguments);
    };
}();

var country = getCountry('ES');

var appRoot = document.getElementById('appRoot');

var render = function render(name) {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Este es el pais: ',
            name,
            ' '
        )
    );
    ReactDOM.render(template, appRoot);
};
