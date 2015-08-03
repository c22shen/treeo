angular
    .module('app')
    .controller('dataController', ['$scope', '$rootScope', '$stateParams', function($scope, $rootScope, $stateParams) {
        'use strict';
        // console.log($stateParams);
        $rootScope.classChosen = $stateParams.class;
         // console.log($stateParams);
         // $rootScope.stepChosen = $stateParams.step;
        // $rootScope.henry = "Above Average";
        $rootScope.classesContent = {
            "classesOffered": {
                "scratch1": [{
                    "lessonTitle": "Space Blaster Lesson",
                    "lessonSteps": [{
                        "title": " Space Blaster",
                        "type": "image",
                        "instruction": "Hi everyone!<br><br>Today we will be making a shooter game.<br>Our spacecraft will shoot down and avoid incoming enemies. If the spaceship gets hit too many times, we loose the game!<br><br> We will start by building the basic game. When we are done, you will have a chance to add other features to it!<br><br>Click next to get started.",
                        "location": "https://s3-us-west-2.amazonaws.com/treeo/scratch/level_1/lesson_5/5-5-4.gif"
                    }, {
                        "title": "Space ship",
                        "type": "image",
                        "instruction": "We will start by making the script for our spaceship!<br><br>Firstly, our spaceship will just have to move around.<br><br>This time, we will do it using the help of a function.<br><br>Click next to get started!",
                        "location": "https://s3-us-west-2.amazonaws.com/treeo/scratch/level_1/lesson_5/5-2-20.gif"
                    }]
                }]
            }
        }
        $rootScope.currentClassContent = $rootScope.classesContent.classesOffered[$rootScope.classChosen];
        // $rootScope.currentLessonStep = (!!$rootScope.currentLessonContent)? $rootScope.lessonContent.lessonsOffered[$rootScope.lessonChosen][$rootScope.stepChosen] : null;

    }]);