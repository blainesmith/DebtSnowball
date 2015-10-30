// <summary>
// TODO: You MUST change the value of appSessionKey to the new application name
// </summary>
angular.module('App').factory('dcSessionKey', [function () {

    //var sessionKey = 'TODO';
    var sessionKey = 'apSessionKey';

    return {
        Get: function () {
            if (sessionKey === 'TODO') {
                alert('The SessionKey Service has not been updated with a valid session key for this application');
                return undefined;
            } else {
                return sessionKey;
            }
        }
    };
}]);