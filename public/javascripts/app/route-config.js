'use strict';

angular
	.module('app')
	.config(config);

	function config($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise("/home");

		$stateProvider
			.state('home', {
				url: "/home",
				templateUrl: "/javascripts/app/home.html"
			});
	}