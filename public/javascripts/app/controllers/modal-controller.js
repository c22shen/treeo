angular
    .module('app')
    .controller('ModalController', ['$scope', '$modal', '$sce', '$rootScope', '$stateParams', function($scope, $modal, $sce, $rootScope, $stateParams) {
        'use strict';

        $scope.openLesson = function(size) {
            var modalInstance = $modal.open({
                animation: true,
                templateUrl: '/javascripts/app/tpl/lessonsList.html',
                controller: 'ModalInstanceCtrl',
                size: 'md',
                resolve: {
                    items: function() {
                    }
                }
            });
            modalInstance.result.then(function() {}, function() {});
        };

    }]);