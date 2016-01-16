'use strict';

/**
 * @ngdoc function
 * @name poc2App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the poc2App
 */
angular.module('poc2App', ['uiGmapgoogle-maps'])

.controller('IndexController', function ($scope, uiGmapGoogleMapApi) {

    $scope.map = {
        center: {
            latitude: 45,
            longitude: -73
        },
        zoom: 8
    };
    $scope.options = {
        scrollwheel: false
    };

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    // uiGmapGoogleMapApi is a promise.
    // The "then" callback function provides the google.maps object.
    uiGmapGoogleMapApi.then(function (maps) {
        $scope.map = maps;
    });

});
