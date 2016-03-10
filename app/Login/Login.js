'use strict';

angular.module('myApp.Login', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/Login', {
            templateUrl: 'Login/Login.html',
            controller: 'LoginCtrl'
        });
    }])

    .controller('LoginCtrl', [function() {

    }]);/**
 * Created by Karol on 09.03.2016.
 */
