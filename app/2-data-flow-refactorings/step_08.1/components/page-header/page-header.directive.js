(function() {
	'use strict';

	angular
		.module("components")
		.directive("pageHeader", pageHeader);

	function pageHeader() {
		return {
			scope: true,
			controller: "HeaderCtrl",
			controllerAs: "ctrl",
			templateUrl: "components/page-header/page-header.html"
		};
	}

})();