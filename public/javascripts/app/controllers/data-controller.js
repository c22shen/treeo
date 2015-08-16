angular
    .module('app')
    .controller('dataController', ['$scope', '$state', '$cookies', '$sce', '$rootScope', '$stateParams', function($scope, $state, $cookies, $sce, $rootScope, $stateParams) {
        'use strict';
        var loginStatus = $cookies.get('login');
        if (!loginStatus) {
            $state.go('login');
        }

        $rootScope.stepIndexChosen = $stateParams.step;
        $rootScope.lessonIndexChosen = $stateParams.lesson;
        // $rootScope.lessonIndexChosen = $stateParams.lesson; 


        $rootScope.classChosen = $stateParams.class;

        $scope.$watch('classChosen', function(classChosen) {
            $rootScope.currentClassContent = $rootScope.classesContent.classesOffered[$rootScope.classChosen];
        })


        $scope.$watch('stepIndexChosen', function(stepIndexChosen) {
            console.log("CHANGED stepIndexChosen");
            if ($rootScope.lessonIndexChosen && $rootScope.stepIndexChosen) {
                $rootScope.currentLessonStep = (!!$rootScope.currentClassContent) ? $rootScope.currentClassContent[parseInt($rootScope.lessonIndexChosen)].lessonSteps[parseInt($rootScope.stepIndexChosen)] : null;
                // $rootScope.stepIndexChosen = parseInt($rootScope.stepIndexChosen) + 1;

                $rootScope.progressLessonStep = parseInt($rootScope.stepIndexChosen) + 1;
                $rootScope.progressLessonStepTotal = (!!$rootScope.currentClassContent) ? $rootScope.currentClassContent[parseInt($rootScope.lessonIndexChosen)].lessonSteps.length : 0;
                $rootScope.progressBarValue = $rootScope.progressLessonStep / $rootScope.progressLessonStepTotal * 100.0;
            }
        })


        $scope.$watch('lessonIndexChosen', function(stepIndexChosen) {
            console.log("CHANGED lessonIndexChosen");
            if ($rootScope.lessonIndexChosen && $rootScope.stepIndexChosen) {
                $rootScope.currentLessonStep = (!!$rootScope.currentClassContent) ? $rootScope.currentClassContent[parseInt($rootScope.lessonIndexChosen)].lessonSteps[parseInt($rootScope.stepIndexChosen)] : null;
                $rootScope.progressLessonStep = parseInt($rootScope.stepIndexChosen) + 1;
                $rootScope.progressLessonStepTotal = (!!$rootScope.currentClassContent) ? $rootScope.currentClassContent[parseInt($rootScope.lessonIndexChosen)].lessonSteps.length : 0;
                $rootScope.progressBarValue = $rootScope.progressLessonStep / $rootScope.progressLessonStepTotal * 100.0;

            }
            // $rootScope.stepIndexChosen = parseInt($rootScope.stepIndexChosen) + 1;
            // $rootScope.currentLessonStep = (!!$rootScope.currentClassContent) ? $rootScope.currentClassContent[parseInt($rootScope.lessonIndexChosen)].lessonSteps[parseInt($rootScope.stepIndexChosen)] : null;
        })

        $rootScope.progressLessonStep = parseInt($rootScope.stepIndexChosen);
        $rootScope.progressLessonStepTotal = (!!$rootScope.currentClassContent) ? $rootScope.currentClassContent[parseInt($rootScope.lessonIndexChosen)].lessonSteps.length : 0;

        // console.log($stateParams);
        // $rootScope.classChosen = $stateParams.class;
        // console.log($stateParams);
        // $rootScope.stepChosen = $stateParams.step;
        // $rootScope.henry = "Above Average";
        $rootScope.trustSrc = function(src) {
            return $sce.trustAsResourceUrl(src);
        }

        Date.prototype.addHours = function(h) {
            this.setHours(this.getHours() + h);
            return this;
        }


        $rootScope.login = function() {
            var expireDate = new Date().addHours(1);
            $cookies.put('login', true, {
                expires: expireDate
            });
            $state.go('home');
        }

        $rootScope.nextPage = function() {
            $rootScope.stepIndexChosen = parseInt($rootScope.stepIndexChosen) + 1;
            // $rootScope.currentLessonStep = (!!$rootScope.currentClassContent) ? $rootScope.currentClassContent[parseInt($rootScope.lessonIndexChosen)].lessonSteps[parseInt($rootScope.stepIndexChosen)] : null;
            // $rootScope.progressLessonStep = parseInt($rootScope.stepIndexChosen) + 1;
            // $rootScope.progressLessonStepTotal = (!!$rootScope.currentClassContent) ? $rootScope.currentClassContent[parseInt($rootScope.lessonIndexChosen)].lessonSteps.length : 0;
            // $rootScope.progressBarValue = $rootScope.progressLessonStep / $rootScope.progressLessonStepTotal * 100.0;

        }

        $rootScope.previousPage = function() {
            $rootScope.stepIndexChosen = parseInt($rootScope.stepIndexChosen) - 1;
            // $rootScope.currentLessonStep = (!!$rootScope.currentClassContent) ? $rootScope.currentClassContent[parseInt($rootScope.lessonIndexChosen)].lessonSteps[parseInt($rootScope.stepIndexChosen)] : null;
            // $rootScope.progressLessonStep = parseInt($rootScope.stepIndexChosen) + 1;
            // $rootScope.progressLessonStepTotal = (!!$rootScope.currentClassContent) ? $rootScope.currentClassContent[parseInt($rootScope.lessonIndexChosen)].lessonSteps.length : 0;
            // $rootScope.progressBarValue = $rootScope.progressLessonStep / $rootScope.progressLessonStepTotal * 100.0;

        }

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
                        }, {
                            "title": "Stacking blocks together",
                            "type": "video",
                            "instruction": "To make a script, you will have to stack blocks together! Let's make the cat travel backward after moving forward.<br><br>Steps:<br>1. In the control palette, drag out wait block and snap it to the move block<br>2. Add in another move block<br>3. Change the value of the move block to -50 to move the sprite backwards<br><br>Great! You just made a script by putting blocks together!<br>Question: Why do we need the wait block in between?",
                            "location": "https://s3-us-west-2.amazonaws.com/treeo/scratch1/lesson1/1_8.mp4"
                        }, {
                            "title": "Repeats makes our lives easier",
                            "type": "youtube",
                            "location": "http://www.youtube.com/embed/HtWPm1fH49Q?rel=0&autoplay=1"
                        }, {
                            "title": "Lesson 5-1-9: Loops",
                            "type": "code",
                            "instruction": "Now we will dive into something more interesting. Loops!<br><br>1.Copy the code on your left to your Arduino editor<br> 2. Upload to arduino<br> 3.your serial port monitor. What do you see?<br><br>For loops is a way to count. The loop on the left repeats the code inside 5 times. Everytime it repeats, the value i increases by 1(defined by the i++).<br><br>It will keep looping as long as the value of i is less than 5 (i<5).",
                            "location": "https://s3-us-west-2.amazonaws.com/treeo/Arduino/Lesson_5/5_1_9.c"
                        }]
                    }, {
                        "lessonTitle": "test lesson 2",
                        "lessonSteps": [{
                            "title": " step 1 ",
                            "type": "image",
                            "instruction": "step 1 instruction",
                            "location": "http://placehold.it/350x150"
                        }, {
                            "title": " step 2 ",
                            "type": "image",
                            "instruction": "step 2 instruction",
                            "location": "http://placehold.it/350x150"
                        }, {
                            "title": " step 3 ",
                            "type": "image",
                            "instruction": "step 3 instruction",
                            "location": "http://placehold.it/350x150"
                        }]
                    }]
                }
            }
            // $rootScope.currentClassContent = $rootScope.classesContent.classesOffered[$rootScope.classChosen];
    }]);