(function () {
    'use strict';
    
    angular.module('data')
    .controller('ItemsController', ItemsController);
    
    
    ItemsController.$inject = ['MenuDataService', '$stateParams', 'items'];
    function ItemsController(MenuDataService, $stateParams, items) {
      var itemlist = this;
      itemlist.items = items.data.menu_items;
    }
    
    })();