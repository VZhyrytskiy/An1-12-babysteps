(function() {
	'use strict';

	angular.module("app")
		.controller("Main", Main);

	function Main() {
		let $ctrl = this;

		$ctrl.taskHeader = "Some task header";
	}

})();