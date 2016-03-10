/**
 * Created by Karol on 10.03.2016.
 */
'use strict';

angular.module('myApp.News', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/News', {
            templateUrl: 'News/News.html',
            controller: 'NewsCtrl'
        });
    }])

    .controller('NewsCtrl', [function() {

    }]);