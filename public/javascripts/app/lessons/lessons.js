angular
    .module('app')
    .controller('LessonController', ['$scope', '$rootScope', '$state', '$cookies', '$stateParams', function($scope, $rootScope, $state, $cookies, $stateParams) {
        'use strict';
        $rootScope.classChosen = $stateParams.class;
        $rootScope.stepIndexChosen = $stateParams.step;
        $rootScope.lessonIndexChosen = $stateParams.lesson;
    }])
