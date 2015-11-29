// demo controller
define(['../common/controllers'], function(controller) {
    controller.controller('demoCtrl', ['$scope', function($scope) {
        $scope.text = 'Welcome Angular, RequireJS!';
    }]);
});
