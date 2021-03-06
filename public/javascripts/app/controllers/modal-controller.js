angular
    .module('app')
    .controller('ModalController', ['$scope', '$modal', '$sce', '$rootScope', '$stateParams', function($scope, $modal, $sce, $rootScope, $stateParams) {
        'use strict';

        $scope.open = function(size) {

            var modalInstance = $modal.open({
                animation: true,
                templateUrl: '/javascripts/app/tpl/modalContent.html',
                controller: 'ModalInstanceCtrl',
                size: size,
                resolve: {
                    items: function() {
                        // return $scope.items;
                    }
                }
            });

            modalInstance.result.then(function() {}, function() {});
        };

    }]);