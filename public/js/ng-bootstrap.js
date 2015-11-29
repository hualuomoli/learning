// angular bootstrap start
define([
    'require',
    'angular',

    // app
    'app',
    // route
    'routes'
], function(require, ng) {
    'use strict';

    require(['domeReady!'], function(document) {
        ng.bootstrap(document, ['app']);
    });

});
