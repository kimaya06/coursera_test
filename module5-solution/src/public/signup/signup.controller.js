(function () {
    "use strict";
    
    angular.module('common')
    .controller('SignupController', SignupController);
    
    SignupController.$inject=['InfoService']

    function SignupController(InfoService) {
      var reg=this;
      reg.submit=function(){
        reg.completed = true;
        var user={
          firstname:reg.user.firstname,
          lastname:reg.user.lastname,
          email:reg.user.email,
          phone:reg.user.phone,
          menuno:reg.user.menuno
        }
        InfoService.saveinfo(user);
      };
    }    
    })();
    