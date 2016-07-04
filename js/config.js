'use strict';

angular.module('starter.config', [])

.config(['$ionicConfigProvider', '$httpProvider',
    function($ionicConfigProvider, $httpProvider) {
        $ionicConfigProvider.backButton.text('');

        /**
         * Interceptamos los pedidos http para mostrar los spinners.
         */
        $httpProvider.interceptors.push(function($rootScope) {
            return {
                request: function(config) {
                    $rootScope.$broadcast('loading:show');
                    return config;
                },
                requestError: function(rejection) {
                    $rootScope.$broadcast('loading:hide');
                    return rejection;
                },
                response: function(response) {
                    $rootScope.$broadcast('loading:hide');
                    return response;
                },
                responseError: function(rejection) {
                    $rootScope.$broadcast('loading:hide');
                    return rejection;
                }

            };
        });
    }
]);
