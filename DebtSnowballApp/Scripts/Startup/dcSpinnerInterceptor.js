angular.module('dcSpinnerInterceptor', [])
    .config(['$httpProvider', function($httpProvider) {
        $httpProvider.interceptors.push('dcSpinner');
    }])
    .factory('dcSpinner', ['$q', '$rootScope', '$timeout', function($q, $rootScope, $timeout) {
        $rootScope.busy = false;
        var pendingRequests = 0;

        function setBusy() {
            $timeout(function() {
                var pending = pendingRequests !== 0;
                if ($rootScope.busy !== pending) {
                    $rootScope.busy = pending;
                    $rootScope.$apply();
                }
            });
        }

        return {
            'request': function(config) {
                pendingRequests++;
                setBusy();
                return config || $q.when(config);
            },

            'requestError': function(rejection) {
                pendingRequests--;
                setBusy();
                return $q.reject(rejection);
            },

            'response': function(response) {
                pendingRequests--;
                setBusy();
                return response || $q.when(response);
            },

            'responseError': function(rejection) {
                pendingRequests--;
                setBusy();
                return $q.reject(rejection);
            }
        };
    }]);