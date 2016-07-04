'use strict';

angular.module('starter', ['ionic', 'starter.controllers', 'starter.config', 'starter.routes'])

.run(function( $rootScope, $ionicPlatform, $ionicLoading) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

    /**
     * Config para los loadings
     */
    $rootScope.$on('loading:show', function() {
      $ionicLoading.show({
        noBackdrop: true,
        template: '<ion-spinner></ion-spinner> <br> Cargando...'
      });
    });

    $rootScope.$on('loading:hide', function() {
      $ionicLoading.hide();
    });
  });
});
