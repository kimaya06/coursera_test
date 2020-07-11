(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com/menu_items.json")
.directive('shoppingList', ShoppingListDirective);


NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var menu = this;
  
  menu.searchForTerm=function(searchTerm){
    if(searchTerm=="")
    {
      menu.foundItems=[];
      return;
    }  
    var promise = MenuSearchService.getMatchedMenuItems();

    promise.then(function (response) {
      menu.foundItems=[];

      for(var i=0;i<response.data.menu_items.length;i++){
        if(response.data.menu_items[i].description.includes(searchTerm))
        {
          menu.foundItems.push(response.data.menu_items[i]);
        }
      }
    })
    .catch(function (error) {
      console.log("Something went terribly wrong.");
    });
  };

  menu.removeItem=function(itemIndex){
    menu.foundItems.splice(itemIndex,1);
  }
}


MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function () {
    var response = $http({
      method: "GET",
      url: (ApiBasePath)
    });
    
    return response;
  };

}

})();
