(function() {
	'use strict';

	angular
		.module("components")
		.directive("summary", summary);

	function summary() {
		return {
			scope: true,
			controller: "SummaryCtrl",
			controllerAs: "ctrl",
			bindToController: {
				visible: "=",
				language: "="
			},
			templateUrl: "components/summary/summary.html"
		};
	}

})();