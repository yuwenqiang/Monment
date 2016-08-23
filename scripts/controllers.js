
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
	// 显示加载图标
	$rootScope.loaded = false;

	// Ajax请求数据
	$http({
		method: 'get',
		url: './api/stream.php'
	})
	.success(function (data) {
		// 添加数据
		$scope.data = data.result;

		// 隐藏图标
		$rootScope.loaded = true;
	})
	.error(function () {

	});

}])

// 往期内容
.controller('OlderController', ['$rootScope', '$scope', '$http', function($rootScope, $scope, $http) {
	// 开启加载图标
	$rootScope.loaded = false;
	$rootScope.title = '往期内容';

	$scope.day = -1;

	// 数据以天计
	$scope.items = [];

	// Ajax请求数据
	$http({
		method: 'get',
		url: './api/stream.php',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		params: {
			day: $scope.day
		}
	})
	.success(function (data) {
		
		$scope.items.push(data.result);

		$rootScope.loaded = true;
	})
	.error(function () {

	});
}])