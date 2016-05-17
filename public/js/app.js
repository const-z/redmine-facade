var app = angular.module("TaskSchedullerApp", ["appModule", "ngRoute"]);

app.factory("appService", function($http) {
    var obj = {};

    return obj;
});

app.config(function($routeProvider, $locationProvider, $provide, $httpProvider) {

});

app.run(function($rootScope, $location, $window, $route, $filter) {

});