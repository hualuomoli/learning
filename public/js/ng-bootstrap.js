// angular bootstrap start
define([
    'require',
    'angular',

    // app
    'app',
    // route
    'ui.routers'
], function(require, ng) {
    'use strict';

    require(['domeReady!'], function(document) {
        ng.bootstrap(document, ['app']);
    });

});
