<?php

	// PHP代理

	$config = array(
		'alt' => 'json',
		'apikey' => '0bcf52793711959c236df76ba534c0d4',
		'app_version' => '1.7.4',
		'douban_udid' => 'd623045db9fcb0d5243174c1bf1a675f887047c0',
		'format' => 'full',
		'udid' => '9a34d8b038ff38971050199b0c5ee9c60c6d1ca3',
		'version' => 6
	);

	// 今日一刻
	$url = 'https://moment.douban.com/api/stream/date/2016-08-22?alt=json&apikey=0bcf52793711959c236df76ba534c0d4&app_version=1.7.4&douban_udid=d623045db9fcb0d5243174c1bf1a675f887047c0&format=full&udid=9a34d8b038ff38971050199b0c5ee9c60c6d1ca3&version=6';

	// 往期内容
	// $url = 'https://moment.douban.com/api/stream/date/2016-08-20?alt=json&apikey=0bcf52793711959c236df76ba534c0d4&app_version=1.7.4&douban_udid=d623045db9fcb0d5243174c1bf1a675f887047c0&format=full&udid=9a34d8b038ff38971050199b0c5ee9c60c6d1ca3&version=6';

	// 查看内容
	// $url = 'https://moment.douban.com/api/post/142318?alt=json&apikey=0bcf52793711959c236df76ba534c0d4&app_version=1.7.4&douban_udid=d623045db9fcb0d5243174c1bf1a675f887047c0&format=normal&udid=9a34d8b038ff38971050199b0c5ee9c60c6d1ca3&version=6';

	// 热门作者(推荐)
	// $url = 'https://moment.douban.com/api/auth_authors/rec?alt=json&apikey=0bcf52793711959c236df76ba534c0d4&app_version=1.7.4&count=20&douban_udid=d623045db9fcb0d5243174c1bf1a675f887047c0&start=0&udid=9a34d8b038ff38971050199b0c5ee9c60c6d1ca3&version=6';

	// 热门作者(全部)
	// $url = 'https://moment.douban.com/api/auth_authors/all?alt=json&apikey=0bcf52793711959c236df76ba534c0d4&app_version=1.7.4&count=20&douban_udid=d623045db9fcb0d5243174c1bf1a675f887047c0&start=0&udid=9a34d8b038ff38971050199b0c5ee9c60c6d1ca3&version=6';

	// 热门作者(加载更多)
	// $url = 'https://moment.douban.com/api/auth_authors/all?alt=json&apikey=0bcf52793711959c236df76ba534c0d4&app_version=1.7.4&count=20&douban_udid=d623045db9fcb0d5243174c1bf1a675f887047c0&start=20&udid=9a34d8b038ff38971050199b0c5ee9c60c6d1ca3&version=6';

	// 查看作者
	// $url = 'https://moment.douban.com/api/author/2297669/posts?alt=json&apikey=0bcf52793711959c236df76ba534c0d4&app_version=1.7.4&douban_udid=d623045db9fcb0d5243174c1bf1a675f887047c0&format=full&udid=9a34d8b038ff38971050199b0c5ee9c60c6d1ca3&version=6';

	// 当前作者更多文章
	// $url = 'https://moment.douban.com/api/author/2297669/posts?alt=json&apikey=0bcf52793711959c236df76ba534c0d4&app_version=1.7.4&douban_udid=d623045db9fcb0d5243174c1bf1a675f887047c0&format=full&max_id=108329&udid=9a34d8b038ff38971050199b0c5ee9c60c6d1ca3&version=6';

	// 栏目浏览
	// $url = 'https://moment.douban.com/api/columns?alt=json&apikey=0bcf52793711959c236df76ba534c0d4&app_version=1.7.4&douban_udid=d623045db9fcb0d5243174c1bf1a675f887047c0&udid=9a34d8b038ff38971050199b0c5ee9c60c6d1ca3&version=6';

	// 当前栏目
	// $url = 'https://moment.douban.com/api/column/48/posts?alt=json&apikey=0bcf52793711959c236df76ba534c0d4&app_version=1.7.4&douban_udid=d623045db9fcb0d5243174c1bf1a675f887047c0&udid=9a34d8b038ff38971050199b0c5ee9c60c6d1ca3&version=6';

	// max_id 上一次最后一条

	// https://moment.douban.com/api/column/48/posts?alt=json&apikey=0bcf52793711959c236df76ba534c0d4&app_version=1.7.4&douban_udid=d623045db9fcb0d5243174c1bf1a675f887047c0&max_id=144114&udid=9a34d8b038ff38971050199b0c5ee9c60c6d1ca3&version=6

	// https://moment.douban.com/api/column/48/posts?alt=json&apikey=0bcf52793711959c236df76ba534c0d4&app_version=1.7.4&douban_udid=d623045db9fcb0d5243174c1bf1a675f887047c0&max_id=144308&udid=9a34d8b038ff38971050199b0c5ee9c60c6d1ca3&version=6

	// https://moment.douban.com/api/column/48/posts?alt=json&apikey=0bcf52793711959c236df76ba534c0d4&app_version=1.7.4&douban_udid=d623045db9fcb0d5243174c1bf1a675f887047c0&max_id=143763&udid=9a34d8b038ff38971050199b0c5ee9c60c6d1ca3&version=6

	// https://moment.douban.com/api/column/48/posts?alt=json&apikey=0bcf52793711959c236df76ba534c0d4&app_version=1.7.4&douban_udid=d623045db9fcb0d5243174c1bf1a675f887047c0&max_id=142961&udid=9a34d8b038ff38971050199b0c5ee9c60c6d1ca3&version=6

	// https://moment.douban.com/api/column/48/posts?alt=json&apikey=0bcf52793711959c236df76ba534c0d4&app_version=1.7.4&douban_udid=d623045db9fcb0d5243174c1bf1a675f887047c0&max_id=142703&udid=9a34d8b038ff38971050199b0c5ee9c60c6d1ca3&version=6

	$result = file_get_contents($url);


	echo $result;



?>