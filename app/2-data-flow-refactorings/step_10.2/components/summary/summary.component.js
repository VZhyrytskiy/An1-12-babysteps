(function() {
	'use strict';

	angular
		.module("components")
		.component("summary", {
			controller: "Summary",
			bindings: {
				visible: "=",
				language: "=",
				onCalc: "&"
			},
			templateUrl: "components/summary/summary.html"
		});

})();