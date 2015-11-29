// app route
define(['./app'], function(app) {
    'use strict';
    return app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/demo', {
            templateUrl: 'partials/demo.html',
            controller: 'demoCtrl'
        });

        $routeProvider.when('/test', {
            templateUrl: 'partials/test.html',
            controller: 'testCtrl'
        });

        $routeProvider.otherwise({
            redirectTo: '/demo'
        });
    }]);
});
