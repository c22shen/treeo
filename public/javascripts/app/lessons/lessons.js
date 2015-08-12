angular
    .module('app')
    .controller('LessonController', ['$scope', '$rootScope', '$stateParams', function($scope, $rootScope, $stateParams) {
        'use strict';
        // var lessonType = "scratch";
        // var lessonNumber = 1;
        $rootScope.stepIndexChosen = $stateParams.step;
        $rootScope.lessonIndexChosen = $stateParams.lesson;
        $rootScope.currentLessonStep = (!!$rootScope.currentClassContent)? $rootScope.currentClassContent[parseInt($rootScope.lessonIndexChosen)].lessonSteps[parseInt($rootScope.stepIndexChosen)] : null;
        $rootScope.progressLessonStep  = parseInt($rootScope.stepIndexChosen)+1;
        $rootScope.progressLessonStepTotal  = (!!$rootScope.currentClassContent) ? $rootScope.currentClassContent[parseInt($rootScope.lessonIndexChosen)].lessonSteps.length : 0;
        $rootScope.progressBarValue = $rootScope.progressLessonStep/$rootScope.progressLessonStepTotal*100.0; 
    }])