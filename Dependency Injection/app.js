(function(){
    'use-strict';
    
    angular.module('DIApp',[])
    
    .controller('DIController',['$scope','$filter','smartFilter', DIController])
    .filter('smart',smartFilter)
    .filter('truth',TruthFilter);
    
    // DIController.$injector=['$scope','$filter','smartFilter'];
    
    function DIController($scope,$filter,smartFilter)
    {
        $scope.name="kim";
        
        var output = $filter('lowercase');
        $scope.lowered = output("GIVE ME COOKIES NOW!");

        $scope.lowered = $filter('lowercase')("GIVE ME COOKIES NOW!");

        $scope.SayMessage=function(){
            return ("kim is idiot");
        };

        $scope.SayFilteredMessage=function(){
            var msg="kim is idiot";
            return msg;
        };

        $scope.upper=function()
        {
            var upcase=$filter('uppercase');
            $scope.name=upcase($scope.name);
        };
    }   
    function smartFilter()
    {
        return function(input){
            input=input||"";
            input=input.replace("idiot","lovely");
            return input;
        };
    }

    function TruthFilter()
    {
        return function(input,target,replace){
            input=input||"";
            input=input.replace(target,replace);
            return input;
        }
    }
})();
//!function(){angular.module("DIApp",[]).controller("DIController",["$scope","$filter",function(n,e){n.name="kim",n.upper=function(){var o=e("uppercase");n.name=o(n.name)}}])}();