// ui.router
define(['./app'], function(app) {
    app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

        // For any unmatched url, redirect to /demo
        $urlRouterProvider.otherwise("/demo");

        // Now set up the states
        $stateProvider
            .state('demo', {
                url: "/demo",
                templateUrl: "public/partials/demo.html",
                controller: 'demoCtrl'
            })
            .state('test', {
                url: "/test",
                templateUrl: "public/partials/test.html",
                controller: 'testCtrl'
            });

    }]);
});
