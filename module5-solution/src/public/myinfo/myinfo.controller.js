(function () {
    "use strict";
    
    angular.module('common')
    .controller('MyinfoController', MyinfoController);
    MyinfoController.$inject=['user','MenuService','$http']
    function MyinfoController(user,MenuService,$http) {
      var info=this;
      if(user!==null){
        info.firstname=user.firstname;
        info.lastname=user.lastname;
        info.email=user.email;
        info.phone=user.phone;
        info.menuno=user.menuno;
      }
        $http.get('https://davids-restaurant.herokuapp.com/menu_items.json?category=' + user.menuno).then(function (response) {
            info.items=response.data;
          });
    }
    })();
    