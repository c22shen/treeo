angular
    .module('app')
    .controller('LessonController', ['$scope', '$rootScope', '$state', '$cookies', '$stateParams', function($scope, $rootScope, $state, $cookies, $stateParams) {
        'use strict';

        // var loginStatus = $cookies.get('login');
        // console.log(loginStatus);

        // if (!loginStatus) {
        //     $state.go('login');
        // }
        $rootScope.classChosen = $stateParams.class;
        $rootScope.stepIndexChosen = $stateParams.step;
        $rootScope.lessonIndexChosen = $stateParams.lesson;
    }])