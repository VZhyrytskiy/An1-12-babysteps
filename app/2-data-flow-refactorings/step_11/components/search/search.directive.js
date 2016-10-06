(function() {
	'use strict';

	angular
		.module("components")
		.directive("search", search);

	function search() {
		return {
			scope: {},
			controller: "SearchCtrl",
			controllerAs: "ctrl",
			bindToController: {
			  searchTerm: "="
			},
			templateUrl: "components/search/search.html"
		};
	}

})();