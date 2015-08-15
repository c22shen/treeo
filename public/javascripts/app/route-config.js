'use strict';

angular
    .module('app')
    .config(config);

function config($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/login");

    $stateProvider
        .state("login", {
            url: "/login",
            templateUrl: "/javascripts/app/tpl/login.html",
            controller: function($scope, $cookies, $state) {
                var loginStatus = $cookies.get('login');
                if (loginStatus) {
                    $state.go('home');
                }
            }
        })

    .state('home', {
            url: "/home",
            templateUrl: "/javascripts/app/home.html",
            controller: function($scope, $cookies, $state) {
                var loginStatus = $cookies.get('login');
                if (!loginStatus) {
                    $state.go('login');
                }
            }
        })
        .state('lessons', {
            url: "/lessons/:class",
            templateUrl: "/javascripts/app/lessons.html",
            controller: "dataController"
        })
        .state('lesson', {
            url: "/lessons/:class/lesson/:lesson/step/:step",
            templateUrl: "/javascripts/app/lessons/lessonPlatform.html",
            controller: "LessonController"
        });
}