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
    .module('poc2App', ['ui.router', 'ngResource', 'uiGmapgoogle-maps'])
    .config(['uiGmapgoogle-maps', 'uiGmapGoogleMapApiProvider', '$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider, uiGmapGoogleMapApiProvider) {
        //        $routeProvider
        //            .when('/', {
        //                templateUrl: 'views/main.html',
        //                controller: 'MainCtrl',
        //                controllerAs: 'main'
        //            })
        //            .when('/about', {
        //                templateUrl: 'views/about.html',
        //                controller: 'AboutCtrl',
        //                controllerAs: 'about'
        //            })
        //            .otherwise({
        //                redirectTo: '/'
        //            });

        uiGmapGoogleMapApiProvider.configure({
            //    key: 'your api key',
            v: '3.20', //defaults to latest 3.X anyhow
            libraries: 'weather,geometry,visualization'
        });

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
                        controller: 'IndexController',
                        controllerAs: 'main'
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
                        templateUrl: 'views/about.html',
                        controller: 'AboutController',
                        controllerAs: 'about'
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
            })

        // route for the dishdetail page
        .state('app.outagedetails', {
            url: 'outage/:id',
            views: {
                'content@': {
                    templateUrl: 'views/outagedetail.html',
                    controller: 'OutageDetailController'
                }
            }
        });

        $urlRouterProvider.otherwise('/');
    }]);
