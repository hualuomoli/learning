// ui.router
define(['./app'], function(app) {
    app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

        // For any unmatched url, redirect to /demo
        $urlRouterProvider.otherwise("/demo");

        // Now set up the states
        $stateProvider
            .state('demo', {
                url: "/demo",
                templateUrl: "app/partials/demo.html",
                controller: 'demoCtrl'
            })
            .state('test', {
                url: "/test",
                templateUrl: "app/partials/test.html",
                controller: 'testCtrl'
            });

    }]);
});
