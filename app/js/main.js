// angular
var app = angular.module('app', []);

app.controller('mainCtrl', function($scope, Auth) {
    $scope.isAuth = Auth.isLogined;
    $scope.login = function() {
        Auth.login('admin', 'admin123');
    }
    $scope.logout = Auth.logout;
});

// service
app.service('Auth', function() {
    var logined = false;
    var user = {};
    return {
        login: function(username, password) {
            if (username === 'admin' && password === 'admin123') {
                logined = true;
                user.username = username;
            }
        },
        logout: function() {
            user = {};
            logined = false;
        },
        isLogined: function() {
            return logined;
        }
    }
});

// use 
app.controller('useCtrl', ['$scope', 'poo', 'foo', 'soo', 'voo', 'coo', function($scope, poo, foo, soo, voo, coo) {

    // provider
    console.log('================  provider  ====================');
    $scope.poo = poo;
    console.log($scope.poo.url); // private attribute
    console.log($scope.poo.variavle); // public attribute
    console.log($scope.poo.getUrl()); // method

    console.log('================  factory  ====================');
    $scope.foo = foo;
    console.log($scope.foo.user);
    console.log($scope.foo.variavle);
    console.log($scope.foo.getUser().username);

    console.log('================  service  ====================');
    $scope.soo = soo;
    console.log($scope.soo.thisIsPrivate);
    console.log($scope.soo.variavle);
    console.log($scope.soo.getPrivate());

    console.log('================  value  ====================');
    $scope.voo = voo;
    console.log($scope.voo);

    console.log('================  constant  ====================');
    $scope.coo = coo;
    console.log($scope.coo);

}]);

// update
app.controller('updateCtrl', ['$scope', 'poo', 'foo', 'soo', 'voo', 'coo', function($scope, poo, foo, soo, voo, coo) {
    $scope.update = function() {
        poo.variavle = 'update provider variavle value';
        coo.address = 'qingdao';
        voo.manager = 'tester';
    };
}]);



// provider
app.provider('poo', function() {

    // private
    var url = '';

    return {

        setUrl: function(newUrl) {
            url = newUrl;
        },
        $get: function() {
            function getUrl() {
                return url;
            }

            return {
                // public
                variavle: "this is provider public",
                getUrl: getUrl
            };
        }
    };
});



// factory
app.factory('foo', function() {
    // private
    var user = {
        username: 'admin'
    };


    var getUser = function() {
        return user;
    }

    return {
        variavle: 'this is factory public',
        getUser: getUser
    }

});


// service
app.service('soo', function() {
    var thisIsPrivate = 'angular';
    this.variavle = 'This is service public';
    this.getPrivate = function() {
        return thisIsPrivate;
    };
});

// value
app.value('voo', {
    manager: 'hualuomoli'
});

// constant
app.constant('coo', {
    address: 'china',
    url: 'http://github.com/hualuomoli/learning'
});

// config provider use constant
app.config(function(pooProvider, coo) {
    console.log('================  config  ====================');
    console.log('set constant url');
    console.log(coo.url);
    pooProvider.setUrl(coo.url);
});

// decorator
app.config(function($provide) {
    $provide.decorator('soo', function($delegate) {
        $delegate.greet = function() {
            return 'I am a new function of service';
        };
        $delegate.test = function() {
            // deal private attribute
            this.thisIsPrivate = 'testme';
            return this.thisIsPrivate;
        }
        return $delegate;
    });
});
