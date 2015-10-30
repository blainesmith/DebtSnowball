angular.module('App').controller('globalBarCtrl', [
    '$rootScope', '$scope', '$modal', '$log', '$route', 'shared',
    function ($rootScope, $scope, $modal, $log, $route, shared) {
        $scope.model = {
            notificationCount: 0
        };
    }]);