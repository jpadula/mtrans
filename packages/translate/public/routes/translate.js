'use strict';

angular.module('mean.translate').config(['$stateProvider',
    function($stateProvider) {
        $stateProvider.state('translate example page', {
            url: '/translate/example',
            templateUrl: 'translate/views/index.html'
        }).state('translate page', {
            url: '/translate',
            templateUrl: 'translate/views/index.html'
        }).state('home', {
            url: '/',
            templateUrl: 'translate/views/index.html'
        });
    }
]);
