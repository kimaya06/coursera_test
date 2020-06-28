(function(){
'use-strict';

angular.module('CheckLunchApp',[])

.controller('CheckLunchController',function($scope){

    $scope.CheckIfTooMuch = function(){
        var items = $scope.items;
        var array=items.split(',');
        var filteredArray=array.filter(function(value){
            return value != ""
        })
        var count=filteredArray.length;
        $scope.result=filteredArray;
        if(count <= 3)
            $scope.result="Enjoy!";
        else    
            $scope.result="Too Much Lunch!";
    }
});
})();