// test controller
define(['../common/controllers'], function(controller) {
    controller.controller('testCtrl', ['$scope', function($scope) {
        $scope.panels = ['Angular', 'RequireJS']
    }]);
});
