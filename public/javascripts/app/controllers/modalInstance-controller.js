angular
    .module('app')
    .controller('ModalInstanceCtrl', function($scope, $modalInstance, items) {
        $scope.ok = function() {
            $modalInstance.close();
        };

        $scope.cancel = function() {
            $modalInstance.dismiss('cancel');
        };
    });
