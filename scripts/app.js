
// 入口文件
var App = angular.module('App', ['ngRoute', 'controllers', 'directives']);

// 配置路由
App.config(['$routeProvider', function($routeProvider) {
	// 今日一刻
	$routeProvider.when('/', {
		templateUrl: 'views/today.html',
		controller: 'TodayController'
	})
	// 往期内容
	.when('/older', {
		templateUrl: 'views/older.html'
	})
	// 热门作者
	.when('/author', {
		templateUrl: 'views/author.html'
	})
	// 个人中心（作者）
	.when('/center', {
		templateUrl: 'views/center.html'
	})
	// 栏目浏览
	.when('/category', {
		templateUrl: 'views/category.html'
	})
	// 栏目列表
	.when('/list', {
		templateUrl: 'views/list.html'
	})
	// 我的喜欢
	.when('/favourite', {
		templateUrl: 'views/favourite.html'
	})
	// 设置
	.when('/settings', {
		templateUrl: 'views/settings.html'
	});

}]);

App.run(['$rootScope', function ($rootScope) {
	$rootScope.loaded = false;
	$rootScope.title = '今日一刻';
}]);
