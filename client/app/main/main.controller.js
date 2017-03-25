'use strict';

angular.module('yeashopApp')
  .controller('MainCtrl', function($scope, $http, socket, Product) {
    document.body.style.background = 'bg1';
    $scope.products = Product.query();
  })

  .controller('CarouselDemoCtrl', function ($scope) {
  $scope.myInterval = 3000;
  $scope.noWrapSlides = false;
  $scope.active = 0;
  $scope.slides = [
    {
      image: "/assets/images/carousel/web1.jpg"
    },
    {
      image: "/assets/images/carousel/web2.png"
    },
    {
      image: "/assets/images/carousel/web3.jpg"
    }
  ];
 })
  .controller('DropdownCtrl', function ($scope, $log) {
  

  $scope.status = {
    isopen: false
  };

  $scope.toggled = function(open) {
    $log.log('Dropdown is now: ', open);
  };

  $scope.toggleDropdown = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.status.isopen = !$scope.status.isopen;
  };

  $scope.appendToEl = angular.element(document.querySelector('#dropdown-long-content'));
});
