'use strict';

angular.module('myApp.MyAccount', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/MyAccount', {
            templateUrl: 'MyAccount/MyAccount.html',
            controller: 'MyAccountCtrl'
        });
    }])

    .controller('MyAccountCtrl', [function() {

    }]);/**
 * Created by Karol on 09.03.2016.
 */
