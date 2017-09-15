var app = angular.module("AngularJs-Http",[]);

app.controller("Controller", function ($scope, $http){

    var url = "https://jsonplaceholder.typicode.com/albums";

    $http.get(url).then(function successCallBack(response) {

        $scope.users = response.data;

    }, function errorCallBack(response) {
        alert("Request not provided ...")
    });

    $scope.SearchId = function () {
        $scope.IdResult = $scope.users.filter(function (item) {
            return item.id == $scope.Id;
        });

        $scope.Id = "";

        if (!$scope.IdResult.length) {
            alert("Id number was not found.");
        }
    }
});