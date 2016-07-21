/*
 * sharis: 
 * Dataservice 负责从各种类中采集数据，数据通过依赖导入Dataservice 	      
 * 被controller 使用,
 * 
 * 这里直接生成 类对像，作为DataService 对象 的属性
 */

angular
	.module('angularStore')
	.factory('DataService', DataService);

function DataService() {

	var myStore = new Store();
	var myCart = new Cart();
	// 营养物质的全称
	var nutrCaptions = {
		car: 'Carotenoid',
		fib: 'Fiber',
		fol: 'Folates',
		pota: 'Potassium',
		vc: 'Vitamin C'
	};

	// 营养比例的各种级别
	var nutrRanges = [{
		level:'Negligible',
		description: 'below 5% of the recommended daily value.'
	}, {
		level:'Low',
		description: 'between 5 and 10% of the recommended daily value.'
	}, {
		level:'Average',
		description: 'between 10 and 20% of the recommended daily value.'
	}, {
		level:'Good',
		description: 'between 20 and 40% of the recommended daily value.'
	}, {
		level: 'Great',
		description: 'above 40% of the recommended daily value.'
		
	}];
	
	return {
		storeData: myStore,
		cartData: myCart,
		nutrCaptions: nutrCaptions,
		nutrRanges: nutrRanges
	}
}