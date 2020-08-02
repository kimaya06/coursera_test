(function () {
    "use strict";
    
    angular.module('common')
    .service('InfoService', InfoService);
    
    
    function InfoService() {
      var service = this;
      var userinfo ={ };  
      
      service.saveinfo = function (user) {
        userinfo=user;
        }

        service.getinfo = function () {
            return userinfo;
            }
          
      }

    })();
    