// app
define([
    // plugins
    'angular',
    'angular-route',

    // common
    'common/controllers',

    // business
    'demo/main',
    'test/main'
], function(angular) {
    return angular.module('app', [
        // controller service directiv filter
        'app.controllers',

        // route
        'ngRoute'
    ]);
});
