
// 入口文件
var App = angular.module('App', ['ngRoute']);

// 配置路由
App.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'views/today.html',
	}).when('/list', {
		templateUrl: 'views/list.html'
	}).when('/author', {
		templateUrl: 'views/author.html'
	}).when('/category', {
		templateUrl: 'views/category.html'
	}).when('/center', {
		templateUrl: 'views/center.html'
	}).when('/favourite', {
		templateUrl: 'views/favourite.html'
	}).when('/older', {
		templateUrl: 'views/older.html'
	}).when('/settings', {
		templateUrl: 'views/settings.html'
	});
}]);

App.controller('NavsCtroller', function ($scope) {

	$scope.navs = [
		{url: '#/', text: '今日一刻', icon: 'icon-home'},
		{url: '#/older', text: '往期内容', icon: 'icon-file-empty'},
		{url: '#/author', text: '热门作者', icon: 'icon-pencil'},
		{url: '#/category', text: '栏目浏览', icon: 'icon-menu'},
		{url: '#/favourite', text: '我的喜欢', icon: 'icon-heart'},
		{url: '#/settings', text: '设置', icon: 'icon-cog'},
	];
});