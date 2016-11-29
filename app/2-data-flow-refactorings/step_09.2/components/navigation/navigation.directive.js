(function() {
	'use strict';

	angular
		.module("components")
		.directive("navigation", navigation);

	function navigation() {
		return {
			scope: {},
			controller: "Navigation",
			controllerAs: "$navCtrl",
			transclude: true,
			templateUrl: "components/navigation/navigation.html"
		};
	}

})();