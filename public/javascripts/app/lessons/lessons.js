angular
    .module('app')
    .controller('LessonController', ['$scope', '$rootScope', '$stateParams', function($scope, $rootScope, $stateParams) {
        'use strict';
        // var lessonType = "scratch";
        // var lessonNumber = 1;
        $rootScope.stepIndexChosen = $stateParams.step;
        $rootScope.lessonIndexChosen = $stateParams.lesson;
        console.log( $rootScope.currentClassContent);
       $rootScope.currentLessonStep = (!!$rootScope.currentClassContent)? $rootScope.currentClassContent[parseInt($rootScope.lessonIndexChosen)].lessonSteps[parseInt($rootScope.stepIndexChosen)] : null;
    }])