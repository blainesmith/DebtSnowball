angular.module('App').factory('dcApplication',
['$rootScope', '$document', 'webAccess', 'dcCookie', 'dcSessionKey',
function ($rootScope, $document, webAccess, dcCookie, dcSessionKey) {
    return {
        ready: function (callback) {
            $document.ready(function () {
                if (dcCookie.get(dcSessionKey.Get()) !== null) { // We don't want to run this if we haven't loaded the session key yet.
                    callback();
                } else {
                    webAccess.SignIn();
                }
            });
            $rootScope.$on('SignedIn', function () {
                callback();
            });
        }
    };
}]);