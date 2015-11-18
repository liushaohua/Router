define(function(require) {
	var routerConfig = [];

	var Router = {
		registerRouter: function(json) {
			if (json.path && json.type) {
				routerConfig.push(json);
			}
		},

		start: function(hash) {
			if (Router.checkHash(window.location.hash)) {
				Router.enter(window.location.hash);
			} else {
				window.location.hash = hash;
				Router.enter(hash);
			}

			window.onhashchange = function() {
				Router.enter(window.location.hash);	
			}
		},

		enter: function(hash) {

			for (var i = 0; i<routerConfig.length; i++) {
				var path = '#'+routerConfig[i].path;
				if (hash == path) {
					var oMain = document.getElementById('main');
					require([routerConfig[i].type], function(index) {
						index.beforeRender();
						oMain.innerHTML = index.template;
						index.initBehavior();
					});
				}
			}
			
		},
		checkHash: function(hash) {
			for (var i = 0; i<routerConfig.length; i++) {
				var path = '#'+routerConfig[i].path;
				if (hash == path) {
					return true;
				}
			}
			return false;
		}
	};

	return Router;
});