define(function(require) {

    var router = require('router');

	router.registerRouter({
		path: '/home/',
		type: 'home/index'
	});

	router.registerRouter({
		path: '/tool/',
		type: 'tool/index'
	});

    router.registerRouter({
        path: '/info/',
        type: 'info/index'
    });
	router.start('/home/');
});
