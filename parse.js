var fetch = require('node-fetch');
var writeFile = require('write');
const fs = require('fs');



fetch('https://www.binance.com/exchange/public/product')
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        for (i=0; i<myJson['data'].length; i++) {
            var name = myJson['data'][i]['symbol'];
            var tradedMoney = myJson['data'][i]['tradedMoney'];


            fs.appendFile('foo.txt', '\n' + name + " " + tradedMoney, (err) => {
                if(err) throw err;
        })}
    });