(function(){
'use-strict';

angular.module('myFirstApp',[])

.controller('myFirstController',function($scope){
    $scope.name="kimaya";
    $scope.totalValue=0;

    $scope.displayNum=function(){
        var totalNumValue=0;
        for(var i=0;i<$scope.name.length();i++){
            totalNumValue+=$scope.name.charCodeAt(i);
        }
        $scope.totalValue=totalNumValue;
    }
});
})();