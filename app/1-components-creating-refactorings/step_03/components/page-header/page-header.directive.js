(function() {
	'use strict';

	angular
		.module("components")
		.directive("pageHeader", pageHeader);

	function pageHeader() {
		return {
			scope: true,
			templateUrl: "components/page-header/page-header.html"
		};
	}

})();