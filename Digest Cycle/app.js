(function(){
'use-strict';

angular.module('DCApp',[])

.controller('DCController',function($scope,$timeout){
    $scope.onceCounter=0;
    $scope.counter=0;

    $scope.countOnce=function(){
        $scope.onceCounter=1;
    }
    
    // $scope.upCounter=function(){
    //     setTimeout(function(){
    //         $scope.$apply(function(){
    //             $scope.counter++;
    //         })
    //     },2000)
    // }
    
    $scope.upCounter=function(){
        $timeout(function(){
                $scope.counter++;
            },2000)
    }

    // $scope.upCounter=function(){
    //     setTimeout(function(){
    //         $scope.counter++;
    //         $scope.$digest;
    //     },2000)
    // }
});
})();