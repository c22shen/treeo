'use strict';

angular
    .module('app', ['ui.router', 'ui.bootstrap', 'ngSanitize'])

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

.controller('ProgressDemoCtrl', function ($scope) {
  $scope.max = 10;

  $scope.random = function() {
    var value = Math.floor((Math.random() * 100) + 1);
    var type;

    if (value < 25) {
      type = 'success';
    } else if (value < 50) {
      type = 'info';
    } else if (value < 75) {
      type = 'warning';
    } else {
      type = 'danger';
    }

    $scope.showWarning = (type === 'danger' || type === 'warning');

    $scope.dynamic = 2;
    $scope.type = type;
  };
  $scope.random();

  $scope.randomStacked = function() {
    $scope.stacked = [];
    var types = ['success', 'info', 'warning', 'danger'];

    for (var i = 0, n = Math.floor((Math.random() * 4) + 1); i < n; i++) {
        var index = Math.floor((Math.random() * 4));
        $scope.stacked.push({
          value: Math.floor((Math.random() * 30) + 1),
          type: types[index]
        });
    }
  };
  $scope.randomStacked();
})


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
    }
    return {
        restrict: 'AE', //describes how we can assign an element to our directive in this case like <div master></div
        link: link // the function to link to our element
    };
}).controller('AccordionDemoCtrl', function($scope) {
    $scope.oneAtATime = true;

    $scope.scratchLessons = [{
        title: 'Lesson1',
        content: 'Scratch Lesson1 content',
        openModal: 'open1'
    }, {
        title: 'Lesson2',
        content: 'Scratch Lesson2 content',
        openModal: 'open2'
    }, {
        title: 'Lesson3',
        content: 'Scratch Lesson3 content',
        openModal: 'open3'
    }, {
        title: 'Lesson4',
        content: 'Scratch Lesson4 content',
        openModal: 'open4'
    }, {
        title: 'Lesson5',
        content: 'Scratch Lesson5 content',
        openModal: 'open5'
    }, {
        title: 'Lesson6',
        content: 'Scratch Lesson6 content',
        openModal: 'open6'
    }];

    $scope.items = ['Item 1', 'Item 2', 'Item 3'];

    $scope.addItem = function() {
        var newItemNo = $scope.items.length + 1;
        $scope.items.push('Item ' + newItemNo);
    };

    $scope.status = {
        isFirstOpen: true,
        isFirstDisabled: false
    };
});