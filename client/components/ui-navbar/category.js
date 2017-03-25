'use strict';

angular.module('yeashopApp')
.config(function ($stateProvider, $urlRouterProvider) {

        // Now set up the states
        $stateProvider
         .state('metal-gear', {
        	url: "/products/oprema/catalog",
        	templateUrl: "metal-gear.html"
        })
        .state('metal-gear2', {
        	url: "/metal-gear2",
        	templateUrl: "metal-gear2.html"
        })
        .state('metal-gear-solid', {
        	url: "/metal-gear-solid",
        	templateUrl: "metal-gear-solid.html"
        });
      });