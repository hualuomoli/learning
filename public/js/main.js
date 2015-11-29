// config requirejs

require.config({
    paths: {
        'angular': ['../../bower_components/angular/angular'],
        'angular-route': ['../../bower_components/angular-route/angular-route'],
        'domeReady': ['../../bower_components/requirejs-domready/domReady']
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-route': {
            deps: ['angular']
        }
    },
    deps: [
        // call angular bootstrap
        './ng-bootstrap'
    ]
});
