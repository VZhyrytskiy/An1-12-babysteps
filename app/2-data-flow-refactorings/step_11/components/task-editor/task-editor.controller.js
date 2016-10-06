(function() {
	'use strict';

	angular
		.module("components")
		.controller("TaskEditor", TaskEditor);

	function TaskEditor() {
		let $ctrl = this;

		$ctrl.save = save;
		$ctrl.task = angular.copy($ctrl.inputTask);

		function save() {
			$ctrl.onSave({newTask: $ctrl.task, oldTask: $ctrl.inputTask});
		}
	}

})();