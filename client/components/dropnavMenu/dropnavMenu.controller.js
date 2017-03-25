'use strict';

angular.module('yeashopApp')
	.controller('DropdownmenuCtrl', function ($scope, Catalog, $location, $log) {
		$scope.catalog = Catalog.query();

		/*$scope.isActive = function(route) {
		return $location.path().indexOf(route) > -1; //?-1
		};*/
		
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