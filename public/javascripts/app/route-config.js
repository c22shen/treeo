'use strict';

angular
	.module('app')
	.config(config);

	function config($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise("/state1");

		$stateProvider
			.state('state1', {
				url: "/state1",
				templateUrl: "/javascripts/app/lessons/lessons.html"
			});
	}