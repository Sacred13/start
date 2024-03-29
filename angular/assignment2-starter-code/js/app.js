(function() {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var toBuy = this;

    toBuy.items = ShoppingListCheckOffService.getToBuyItems();

    toBuy.buyItem = function(itemIndex) {
      ShoppingListCheckOffService.buyItem(itemIndex);
    };
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var alreadyBought = this;

    alreadyBought.items = ShoppingListCheckOffService.getAlreadyBoughtItems();
    }

  function ShoppingListCheckOffService() {
    var service = this;

    var toBuyItems = [
      { name: "Coocing", quantity: 5 },
      { name: "potato", quantity: 5 },
      { name: "Cookies", quantity: 10 },
      { name: "Chocolate", quantity: 8 },
      { name: "Milk", quantity: 5 }
    ];

    var alreadyBoughtItems = [];

    service.buyItem = function(itemIndex) {
      var item = toBuyItems[itemIndex];
      alreadyBoughtItems.push(item);
      toBuyItems.splice(itemIndex, 1);
      console.log("alreadyBoughtItems: "+alreadyBoughtItems);
    };

    service.getToBuyItems = function() {
      return toBuyItems;
    };

    service.getAlreadyBoughtItems = function() {
      return alreadyBoughtItems;
    };
  }

})();