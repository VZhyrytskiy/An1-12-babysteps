(function() {
	'use strict';

	angular
		.module("components")
		.directive("app", app);

	function app() {
		return {
			scope: {},
			controller: "SomeMainCtrl",
			controllerAs: "ctrl",
			templateUrl: "components/app/app.html"
		};
	}

})();