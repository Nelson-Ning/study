<?php

	$link=@mysqli_connect('localhost','root','') or die('数据库连接失败');
	//(2)选择数据库
	@mysqli_select_db($link,'homepage') or die('数据库选择失败');
	//(3)设置传输编码
	mysqli_set_charset($link,'UTF8');
?>
