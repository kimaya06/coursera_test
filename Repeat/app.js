(function(){
'use-strict';

angular.module('myFirstApp',[])

.controller('myFirstController',function($scope){
    $scope.shoppinglist=["milk","donut","chocolate","vanilla"]  
    $scope.list=[
        {
            Name:"Milk",
            Quantity:"2"
        },
        {
            Name:"Donut",
            Quantity:"3"
        },
        {
            Name:"Cookie",
            Quantity:"5"
        },
    ]
    $scope.AddtoList=function(){
        var newItem={
            Name:$scope.newItemName,
            Quantity:$scope.newItemQuantity
        };
        $scope.list.push(newItem);
    }
});
})();