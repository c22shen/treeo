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
			})
			.state('lessons', {
			     url: "/lessons/:class",
			     templateUrl: "/javascripts/app/lessons.html",
			     controller: "dataController"
			})
			.state('lesson', {
			     url: "/lesson/:lesson?step",
			     templateUrl: "/javascripts/app/lessons/lessonPlatform.html",
			     controller: "LessonController"			
			});
	}