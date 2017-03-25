'use strict';

angular.module('yeashopApp')
  .controller('NavbarCtrl', function ($scope, Auth, $rootScope, $state, $window, $timeout) {
    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.search = function () {
      $rootScope.$broadcast('search:term', $scope.searchTerm);
    };

    $scope.redirect = function () {
      $state.go('products');
      // timeout makes sure that it is invoked after any other event has been triggered.
      $timeout(function () {
        // focus on search box
        var searchBox = $window.document.getElementById('searchBox');
        if(searchBox){ searchBox.focus(); }
      });
    };
  });
