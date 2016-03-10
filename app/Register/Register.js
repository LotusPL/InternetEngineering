'use strict';

angular.module('myApp.Register', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/Register', {
            templateUrl: 'Register/Register.html',
            controller: 'RegisterCtrl'
        });
    }])

    .controller('RegisterCtrl', [function() {

    }]);/**
 * Created by Karol on 10.03.2016.
 */
