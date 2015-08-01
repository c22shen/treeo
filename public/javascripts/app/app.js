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
});
	