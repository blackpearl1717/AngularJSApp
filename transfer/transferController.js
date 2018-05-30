var app = angular.module('myApp');
app.controller('TransferController',
            function($scope, $http){
          $http.get('data/accounts.json').success(function(data){

            $scope.fromnames = data;
            $scope.tonames = data;
        });
  $scope.onTransfer = function () {
                $scope.Message = "Amount Transferred SuccessFully."
            }

    $scope.onCancel = function () {
                $scope.selectedFromName = "";
                $scope.selectedToName = "";
                $scope.amount = "";
                $scope.remark="";
                $scope.myVar="";
                $scope.Message = "Transaction Cancelled."
                    }

});
