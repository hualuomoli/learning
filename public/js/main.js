// config requirejs

require.config({
    paths: {
        'angular': ['../../bower_components/angular/angular'],
        'angular-ui-router': ['../../bower_components/angular-ui-router/release/angular-ui-router'],
        'domeReady': ['../../bower_components/requirejs-domready/domReady']
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-ui-router': {
            deps: ['angular']
        }
    },
    deps: [
        // call angular bootstrap
        './ng-bootstrap'
    ]
});
