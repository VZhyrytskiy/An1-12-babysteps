(function() {
	'use strict';

	angular
		.module("components")
		.directive("navigation", navigation);

	function navigation() {
		return {
			scope: {},
			controller: "NavigationCtrl",
			controllerAs: "ctrl",
			templateUrl: "components/navigation/navigation.html"
		};
	}

})();