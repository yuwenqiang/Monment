
// 入口文件
var App = angular.module('App', ['ngRoute', 'controllers', 'directives', 'services']);

// 配置路由
App.config(['$routeProvider', function($routeProvider) {
	// 今日一刻
	$routeProvider.when('/', {
		templateUrl: 'views/today.html',
		controller: 'TodayController'
	})
	// 往期内容
	.when('/older', {
		templateUrl: 'views/older.html',
		controller: 'OlderController'
	})
	// 热门作者
	.when('/author', {
		templateUrl: 'views/author.html',
		controller: 'AuthorController'
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

App.run(['$rootScope', function ($rootScope, collapse) {

	$rootScope.loaded = false;

	$rootScope.collapsed = false;

	$rootScope.toggle = function () {
		$rootScope.collapsed = !$rootScope.collapsed;

		var navs = document.querySelectorAll('.navs dd');

		if($rootScope.collapsed) {

			for(var i=0; i<navs.length; i++) {
				navs[i].style.transitionDelay = '0.2s';
				navs[i].style.transform = 'translate(0)';
				navs[i].style.transitionDuration = (i + 1) * 0.15 + 's';
			}

		} else {
			
			for(var i=navs.length - 1; i>=0; i--) {
				navs[i].style.transitionDelay = '';
				navs[i].style.transform = 'translate(-100%)';
				navs[i].style.transitionDuration = (navs.length - i + 1) * 0.05 + 's';
			}
		}
	}
}]);
