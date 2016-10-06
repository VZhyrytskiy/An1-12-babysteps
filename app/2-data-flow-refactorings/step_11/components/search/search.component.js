(function() {
	'use strict';

	angular
		.module("components")
		.component("search", {
			controller: "Search",
			bindings: {
			  searchTerm: "="
			},
			templateUrl: "components/search/search.html"
		});

})();