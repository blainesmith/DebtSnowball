angular.module('App').controller('appCtrl', ['$scope', function ($scope) {
    var vm = this;

    vm.model = {};

    vm.fields = [
    {
        "type": "input",
        "key": "creditor",
        "templateOptions": {
            "type": "text",
            "label": "Creditor"
        }
    },
    {
        "type": "input",
        "key": "balanceOwed",
        "templateOptions": {
            "type": "text",
            "label": "Balance Owed ($)"
        }
    },
    {
        "type": "input",
        "key": "interestRate",
        "templateOptions": {
            "type": "text",
            "label": "Interest Rate (%)"
        }
    },
    {
        "type": "input",
        "key": "paymentAmount",
        "templateOptions": {
            "type": "text",
            "label": "Payment Amount ($)"
        }
    },
    {
        "type": "input",
        "key": "interestCost",
        "templateOptions": {
            "type": "text",
            "label": "Interest Cost"
        }
    },
    {
        "type": "input",
        "key": "paymentsLeft",
        "templateOptions": {
            "type": "text",
            "label": "Payments Left"
        }
    }
    ]


    
}]);