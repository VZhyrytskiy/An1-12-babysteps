(function() {
	'use strict';

	angular
		.module("components")
		.directive("navigation", navigation);

	function navigation() {
		return {
			scope: true,
			controller: "NavigationCtrl",
			controllerAs: "navCtrl"
		};
	}

})();