define(function(require) {
	
	var home = {};

    home.template = require('text!./index.html');

    home.beforeRender = function() {
		//在页面渲染之前执行，获取数据

		console.log('beforeRender');
	}

    home.initBehavior = function() {
		//在页面渲染之后执行，对页面进行操作
		console.log('initBehavior');
	}

	return home;
});