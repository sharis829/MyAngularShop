/*
 * sharis:
 * View Model 层， controller层， 负责页面逻辑
 * Controller 导入DataService 拿到 store 对象，取得里面的数据 用于 View层
 */

angular
	.module('angularStore')
	.controller('storeController', storeController);

	
	storeController.$inject = ['DataService','$routeParams'];
	
	function storeController(DataService, $routeParams){
		var vm = this; //view model
		
		vm.store = DataService.storeData;
		vm.nutrCaptions = DataService.nutrCaptions;
		vm.nutrRanges = DataService.nutrRanges;
		vm.cart = DataService.cartData;
		vm.activeSku  = $routeParams.activeSku;
		
		// active product detail data
		if(vm.activeSku){
			vm.activeProduct = DataService.storeData.getProduct(vm.activeSku);
		}
		
		// load product items when cart page loads
		vm.cart.loadProductItems();
//		vm.cart.clearCart();
		
		
	}
