'use strict';
angular.module('yeashopApp')
	
.controller('NavigationController', function ($scope) {
	$scope.proizvodi = [{
    name: "proizvodi",
    link: "#",
    subtree: [{
      name: "Metal Gear",
      link: "#",
      subtree: [{
        name: "Metal Gear",
        link: "metal-gear"
      }, {
        name: "Metal Gear 2: Solid Snake",
        link: "metal-gear2"
      }, {
        name: "Metal Gear Solid: The Twin Snakes",
        link: "metal-gear-solid"
      }]
    }]
  }];
});