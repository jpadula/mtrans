'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Translate = new Module('translate');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Translate.register(function(app, auth, database) {

    //We enable routing. By default the Package Object is passed to the routes
    Translate.routes(app, auth, database);

    //We are adding a link to the main menu for all authenticated users
    Translate.menus.add({
        title: 'translate example page',
        link: 'translate example page',
        roles: ['authenticated'],
        menu: 'main'
    });

    /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Translate.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Translate.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Translate.settings(function(err, settings) {
        //you now have the settings object
    });
    */

    return Translate;
});
