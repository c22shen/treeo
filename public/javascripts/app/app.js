'use strict';

angular
    .module('app', ['ui.router', 'ui.bootstrap', 'ngSanitize', 'ngCookies'])

// .directive("mySrc", function($rootScope) {
//     return {
//         link: function(scope, element, attrs) {
//             var img, loadImage;
//             img = null;

//             loadImage = function() {

//                 // element[0].src = "pathToSpinner";
//                 $rootScope.isLoadingImg = false;

//                 img = new Image();
//                 img.src = attrs.mySrc;

//                 img.onload = function() {
//                     element[0].src = attrs.mySrc;
//                     $rootScope.isLoadingImg = false;
//                 };
//             };

//             scope.$watch((function() {
//                 return attrs.mySrc;
//             }), function(newVal, oldVal) {
//                 if (oldVal !== newVal) {
//                     loadImage();
//                 }
//             });
//         }
//     };
// })


.controller('ButtonsCtrl', function($scope) {
    $scope.singleModel = 1;

    $scope.radioModel = 'Middle';

    $scope.checkModel = {
        left: false,
        middle: true,
        right: false
    };
}).directive('master', function() { //declaration
    function link(scope, element, attrs) { //scope we are in, element we are bound to, attrs of that element
        scope.$watch(function() { //watch any changes to our element
            scope.style = { //scope variable style, shared with our controller
                height: element[0].offsetHeight + 'px', //set the height in style to our elements height
                // width:element[0].offsetWidth+'px' //same with width
            };
        });

        // scope.$watch('stepIndexChosen', function(stepIndexChosen){
        //     console.log("CHANGED");
        //      // $rootScope.stepIndexChosen = parseInt($rootScope.stepIndexChosen) + 1;
        //     scope.currentLessonStep = (!!scope.currentClassContent) ? scope.currentClassContent[parseInt(scope.lessonIndexChosen)].lessonSteps[parseInt(scope.stepIndexChosen)] : null;
        //     scope.progressLessonStep = parseInt(scope.stepIndexChosen)+1;
        //     scope.progressLessonStepTotal = (!!scope.currentClassContent) ? scope.currentClassContent[parseInt(scope.lessonIndexChosen)].lessonSteps.length : 0;
        //     scope.progressBarValue = scope.progressLessonStep / scope.progressLessonStepTotal*100.0;
        // })
    }
    return {
        restrict: 'AE', //describes how we can assign an element to our directive in this case like <div master></div
        link: link // the function to link to our element
    };
});
// .controller('AccordionDemoCtrl', function($scope) {
//     $scope.oneAtATime = true;

//     $scope.scratchLessons = [{
//         title: 'Lesson1',
//         content: 'Scratch Lesson1 content',
//         openModal: 'open1'
//     }, {
//         title: 'Lesson2',
//         content: 'Scratch Lesson2 content',
//         openModal: 'open2'
//     }, {
//         title: 'Lesson3',
//         content: 'Scratch Lesson3 content',
//         openModal: 'open3'
//     }, {
//         title: 'Lesson4',
//         content: 'Scratch Lesson4 content',
//         openModal: 'open4'
//     }, {
//         title: 'Lesson5',
//         content: 'Scratch Lesson5 content',
//         openModal: 'open5'
//     }, {
//         title: 'Lesson6',
//         content: 'Scratch Lesson6 content',
//         openModal: 'open6'
//     }];

//     $scope.items = ['Item 1', 'Item 2', 'Item 3'];

//     $scope.addItem = function() {
//         var newItemNo = $scope.items.length + 1;
//         $scope.items.push('Item ' + newItemNo);
//     };

//     $scope.status = {
//         isFirstOpen: true,
//         isFirstDisabled: false
//     };
// });