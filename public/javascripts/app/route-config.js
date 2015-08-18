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
            controller: function($scope, $cookies, $state, $http) {
                var loginStatus = $cookies.get('login');
                if (loginStatus) {
                    $state.go('home');
                }
                $scope.login = function() {
                    var expireDate = new Date().addHours(1);

                    $http.post('/users/get', {
                        email: $scope.email,
                        password: $scope.password
                    }).
                    then(function(res) {
                        console.log("res");
                        console.log(res);

                        console.log("post successful");
                        $cookies.put('login', true, {
                            expires: expireDate
                        });
                        $state.go('home');


                    }, function(res) {
                        console.log("post failure");
                    })
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