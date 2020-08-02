(function () {
'use strict';

angular.module('data')
.controller('CategoriesController', CategoriesController);


CategoriesController.$inject = ['MenuDataService', '$stateParams', 'items'];
function CategoriesController(MenuDataService, $stateParams, items) {
  var mainlist = this;
  mainlist.items = items.data;
}

})();