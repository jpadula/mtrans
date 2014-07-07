'use strict';
var translate = require('../controllers/translate');

// The Package is past automatically as first parameter
module.exports = function(Translate, app, auth, database) {

    app.post('/translate',translate.render);
    

};
