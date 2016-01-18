'use strict';

/**
 * @ngdoc overview
 * @name poc2App
 * @description
 * # poc2App
 *
 * Main module of the application.
 */
angular
    .module('poc2App', ['ui.router', 'ngResource'])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $stateProvider

        // route for the home page
            .state('app', {
            url: '/',
            views: {
                'header': {
                    templateUrl: 'views/header.html',
                },
                'content': {
                    templateUrl: 'views/main.html',
                    controller: 'OutageController'
                },
                'footer': {
                    templateUrl: 'views/footer.html',
                }
            }

        })

        // route for the aboutus page
        .state('app.aboutus', {
            url: 'aboutus',
            views: {
                'content@': {
                    templateUrl: 'views/aboutus.html',
                    controller: 'AboutController'
                }
            }
        })

        // route for the contactus page
        .state('app.contactus', {
            url: 'contactus',
            views: {
                'content@': {
                    templateUrl: 'views/contactus.html',
                    controller: 'ContactController'
                }
            }
        });


        $urlRouterProvider.otherwise('/');
    }]);
