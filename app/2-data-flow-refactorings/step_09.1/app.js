(function() {
	"use strict";

	angular.module("app", ["components"]);

	angular.element(document).ready(() => {
		angular.bootstrap(document, ["app"]);
	});

})();