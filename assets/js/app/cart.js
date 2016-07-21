/**
 * 存放购物车 的 所有数据 和 操作
 * 
 * 采用json格式存放 productItems
 * {
			'APL': {
				name: 'Apple',
				quantity: 2,
				totalPrice: 10
			}
		}
 */

function Cart() {
	this.productItems = {}; //vm.cart.productItems 用来装fruit data，包括 数量，名称，总价钱
	this.totalQuantity = 0;
	this.totalPrice = 0;
}

Cart.prototype.loadProductItems = function() {
	if (window.localStorage && localStorage.getItem('products')) {
		this.productItems = JSON.parse(localStorage.getItem('products'));
		this.updateTotal();
	}
};

Cart.prototype.saveProductItems = function() {
	if (window.localStorage) {
		localStorage.setItem('products', JSON.stringify(this.productItems));
	}
};

// add button 事件，每次quantity 增一
// todo: 添加完后反馈一下
Cart.prototype.plusQuantity = function(sku) {

	//通过key去找是否存在这个水果
	// 如果存在这个水果, 只需要增加它的数量和价格, 不存在需要重新插入这种水果
	var value = this.productItems[sku],
		store = new Store(),
		productObj = store.getProduct(sku);

	if (value) {

		value['quantity'] = parseInt(value['quantity']) + 1;
		value['totalPrice'] = parseInt(value['quantity']) * productObj.price;

	} else {

		value = this.productItems[productObj.sku] = {};
		value['name'] = productObj.name;
		value['quantity'] = 1;
		value['totalPrice'] = productObj.price;
	}

	this.saveProductItems();
	this.updateTotal();
};

// quantity input 事件
Cart.prototype.updateQuantity = function(sku) {

	//通过key去找是否存在这个水果
	// 如果存在这个水果, 只需要增加它的数量和价格, 不存在需要重新插入这种水果
	var value = this.productItems[sku],
		store = new Store(),
		productObj = store.getProduct(sku);

	if (value) {
		value['totalPrice'] = parseInt(value['quantity']) * productObj.price;
	}

	this.saveProductItems();
	this.updateTotal();
};

// minus button 事件，每次quantity 减一
Cart.prototype.minusQuantity = function(sku) {
	var value = this.productItems[sku],
		store = new Store(),
		productObj = store.getProduct(sku);

	if (value) {
		var q = parseInt(value['quantity']) - 1;
		value['quantity'] = (q>=1) ? q : 1;
		value['totalPrice'] = parseInt(value['quantity']) * productObj.price;
	}

	this.saveProductItems();
	this.updateTotal();
};

Cart.prototype.removeItem = function(sku){
	
	//删除一个对象的键值对
	delete this.productItems[sku];
	this.saveProductItems();
	this.updateTotal();
}

Cart.prototype.clearCart = function() {
	this.productItems = {};
	this.saveProductItems();
	this.updateTotal();
}

/* 更新统计数据，在第一次load productItems 时候 和 更新 productItems 的时候
 */
Cart.prototype.updateTotal = function() {
	this.totalQuantity = 0;
	this.totalPrice = 0;
	//遍历对象的所有键值对 用 for(var keyIndex in obj)
	for (var key in this.productItems) {
		this.totalQuantity += parseInt(this.productItems[key]['quantity']);
		this.totalPrice += parseFloat(this.productItems[key]['totalPrice']);
	}
}