angular
    .module('app')
    .directive('imageonload', function() {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                element.bind('load', function() {
                    //call the function that was passed
                    alert('image is loaded');
                    scope.$apply(attrs.imageonload);
                });
            }
        };
    })