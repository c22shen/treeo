'use strict';

angular
	.module('app', ['ui.router', 'ui.bootstrap'])
	.controller('ButtonsCtrl', function ($scope) {
  $scope.singleModel = 1;

  $scope.radioModel = 'Middle';

  $scope.checkModel = {
    left: false,
    middle: true,
    right: false
  };
}).directive('master',function () { //declaration
  	function link(scope, element, attrs) { //scope we are in, element we are bound to, attrs of that element
  	  scope.$watch(function(){ //watch any changes to our element
  	    scope.style = { //scope variable style, shared with our controller
  		    height:element[0].offsetHeight+'px', //set the height in style to our elements height
  		    // width:element[0].offsetWidth+'px' //same with width
  		  };
  	  });
  	}
	  return {
	  	restrict: 'AE', //describes how we can assign an element to our directive in this case like <div master></div
	  	link: link // the function to link to our element
	  };
});
	