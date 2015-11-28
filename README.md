# 介绍

学习使用wiredep与bower结合，自动为html页面增加css和js文件的依赖

## 如何使用

下载项目到本地，使用命令行进入项目目录，执行 `npm install & bower install` 安装依赖包<br>
在命令行窗口执行 `gulp bower` 或者 `gulp` 为html文件添加css和介绍依赖，比较views目录和app/views目录下的文件

```
处理前 views
```

```
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Title Page</title>

		<!-- bower:css -->
		<!-- endbower -->

	</head>
	<body>
		<h1 class="text-center">This is Index html</h1>

		<!-- bower:js -->
		<!-- endbower -->

	</body>
</html>
```

```
处理后 app/views
```

```
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Title Page</title>

		<!-- bower:css -->
		<link rel="stylesheet" href="../bower_components/bootstrap/dist/css/bootstrap.css" />
		<!-- endbower -->

	</head>
	<body>
		<h1 class="text-center">This is Index html</h1>

		<!-- bower:js -->
		<script src="../bower_components/jquery/dist/jquery.js"></script>
		<script src="../bower_components/angular/angular.js"></script>
		<script src="../bower_components/bootstrap/dist/js/bootstrap.js"></script>
		<!-- endbower -->

	</body>
</html>
```


## 问题

CSS文件没有引用，如Bootstrap<br>
需要增加 `overrides` 配置，指定Bootstrap的js和css文件路径，可参考gullpfile.js

```
wiredep({
	// override
	"overrides": {
		// bootstrap
		"bootstrap": {
			"main": [
				"dist/css/bootstrap.css",
				"dist/js/bootstrap.js"
			]
		}
	}
})
```



