
/**
* controllers Module
*
* 管理所有的控制器
*/
angular.module('controllers', [])

// 导航
.controller('NavsController', ['$scope', function ($scope) {
	// 构造数据
	$scope.navs = [
		{url: '#/', text: '今日一刻', icon: 'icon-home'},
		{url: '#/older', text: '往期内容', icon: 'icon-file-empty'},
		{url: '#/author', text: '热门作者', icon: 'icon-pencil'},
		{url: '#/category', text: '栏目浏览', icon: 'icon-menu'},
		{url: '#/favourite', text: '我的喜欢', icon: 'icon-heart'},
		{url: '#/settings', text: '设置', icon: 'icon-cog'}
	];
}])

// 今日一刻
.controller('TodayController', ['$rootScope', '$scope', '$http', function($rootScope, $scope, $http) {
	// Ajax请求数据
	$http({
		method: 'get',
		url: './proxy.php',
	})
	.success(function (data) {
		$scope.data = data;

		$rootScope.loaded = true;
	})
	.error(function () {

	});
}])