
// 定义一个模块管理所有的控制器
angular.module('controllers', [])
.controller('TodayController', ['$scope', '$http', function($scope, $http){
	$http({
		method: 'get',
		url: './proxy.php',
	})
	.success(function (data) {
		$scope.data = data;
	})
	.error(function () {

	});
}])