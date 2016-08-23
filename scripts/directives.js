
/**
* directives Module
*
* 管理所有的指令
*/
angular.module('directives', [])

.directive('loading', function () {
	return {
		restrict: 'EAC',
		template: '<img src="" alt="" />',
		replace: true
	}
});