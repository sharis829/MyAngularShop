/**
 *  sharis: 
 * 
 *  数据放在Store 类里 再传入到dataservice 中，
 *  分类存放， 集中收集。Store 里 还可以放一些关于数据的方法
 * 
 * 
 */

function Store() {
	/* product数据 */
	this.products = [{
		sku: 'APL',
		name: 'Apple',
		img: 'apple.svg',
		description: 'Eat one every day to keep the doctor away!',
		price: 12,
		calories: 90,
		nutritions: {
			car: 0,
			fib: 2,
			fol: 0,
			pota: 1,
			vc: 2
		}
	}, {
		sku: 'PEAR',
		name: 'Pear',
		img: 'pear.svg',
		description: 'Guacamole anyone?',
		price: 16,
		calories: 90,
		nutritions: {
			car: 0,
			fib: 2,
			fol: 1,
			pota: 1,
			vc: 1
		}
	}, {
		sku: 'BAN',
		name: 'Banana',
		img: 'banana.svg',
		description: 'These are rich in Potassium and easy to peel.',
		price: 4,
		calories: 120,
		nutritions: {
			car: 0,
			fib: 2,
			fol: 1,
			pota: 2,
			vc: 2
		}
	}, {
		sku: 'CAN',
		name: 'Cantaloupe',
		img: 'cantaloupe.svg',
		description: 'Delicious and refreshing.',
		price: 3,
		calories: 50,
		nutritions: {
			car: 4,
			fib: 0,
			fol: 1,
			pota: 2,
			vc: 4
		}
	}, {
		sku: 'CHE',
		name: 'Cherry',
		img: 'cherry.svg',
		description: 'OK, very sweet and nutritious!',
		price: 10,
		calories: 100,
		nutritions: {
			car: 0,
			fib: 2,
			fol: 0,
			pota: 1,
			vc: 0
		}
	}, {
		sku: 'GRAP',
		name: 'Grape',
		img: 'grape.svg',
		description: 'Wine is great, but grapes are even better.',
		price: 8,
		calories: 100,
		nutritions: {
			car: 0,
			fib: 1,
			fol: 0,
			pota: 1,
			vc: 3
		}
	}, {
		sku: 'WAT',
		name: 'Watermelon',
		img: 'watermelon.svg',
		description: 'Cool your summer! Healthy and delicious.',
		price: 11,
		calories: 50,
		nutritions: {
			car: 4,
			fib: 1,
			fol: 1,
			pota: 1,
			vc: 4
		}
	}];
	this.getProduct = getProduct;
	
	function getProduct(sku){
		for(var i=0; i< this.products.length; i++){
			if(this.products[i].sku == sku){
				return this.products[i];
			}
		}
	}
}