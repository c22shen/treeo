'use strict';

angular
    .module('app')
    .config(config);

function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");
    $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: "/javascripts/app/home.html",
            controller: function($rootScope) {
                $rootScope.questionsCorrect = 0;
                $rootScope.questionsTotal = 0;
                $rootScope.maxStepIndex = 0;
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
