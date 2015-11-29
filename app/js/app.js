// app
define([
    // plugins
    'angular',
    'angular-ui-router',

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
        'ui.router'
    ]);
});
