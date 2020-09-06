(function () {
    'use strict';

    /**
     * @author:Aditya Kubde
     *  */

    var listToBuy = [
        { name: "Yaakov's Cookies", quantity: 100 },
        { name: "Ice Cream", quantity: 1 },
        { name: "Chocolates", quantity: 5 },
        { name: "Fruits", quantity: 9 },
        { name: "Coke", quantity: 12 },
        { name: "Pasta", quantity: 200 }
    ];

    var boughtItemList = [];

    angular.module('myApp', [])
        .controller('ToBuyController', TBCtrl)
        .controller('AlreadyBoughtController', ABCtrl)
        .service('ShoppingListCheckOffService', sls);




    TBCtrl.$injet = ['ShoppingListCheckOffService'];
    function TBCtrl(ShoppingListCheckOffService) {
        var tbc = this;
        tbc.items = ShoppingListCheckOffService.getItemsToBuy();
        tbc.tick = function (index) {
            ShoppingListCheckOffService.buyItem(index);
        }
    }


    ABCtrl.$iject = ['ShoppingListCheckOffService']
    function ABCtrl(ShoppingListCheckOffService) {
        var abc = this;
        abc.items = ShoppingListCheckOffService.getBoughtItems();

    }


    function sls() {
        var service = this;

        // List of shopping items to buy
        var itemsToBuy = listToBuy;
        // List of shopping items bought
        var boughtItems = boughtItemList;

        //Move item to bought list
        service.buyItem = function (itemIndex) {
            var item = itemsToBuy[itemIndex];
            service.addBoughtItem(item);
            removeFromItemsToBuy(itemIndex);
        };

        service.getItemsToBuy = function () {
            return itemsToBuy;
        };

        service.getBoughtItems = function () {
            return boughtItems;
        };

        service.addBoughtItem = function (item) {
            boughtItems.push(item);
        };

        //private function

        function removeFromItemsToBuy(itemIndex) {
            itemsToBuy.splice(itemIndex, 1);
        };

    }



})()