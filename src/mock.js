// 引入mockjs
const Mock = require('mockjs');
// 获取 mock.Random 对象
const Random = Mock.Random;
// mock一组数据
const produceNewsData = function() {
	let articles = [];
	for (let i = 0; i < 100; i++) {
		let newArticleObject = {
			title: Random.csentence(5, 30), //  Random.csentence( min, max )
			thumbnail_pic_s: Random.dataImage('300x250', Mock.mock('@county(true)')), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
			author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
			date: Random.date() + ' ' + Random.time(), // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
      addr: Mock.mock('@county(true)') //随机生成一个地址
     // 'age|18-60': 1, //随机生成一个数字 大小在18到60
     //  email:Mock.mock('@EMAIL()'), //随机生成一个邮箱
     //  'moblie|1':['13531544954','13632250649','15820292420','15999905612'], //在数组中随机找一个

		}
		articles.push(newArticleObject)
	}

	return {
		articles: articles
	}
}

// Mock.mock( url, post/get , 返回的数据)；

const appData = require('../db.json');
Mock.mock('/getUser', 'get', appData.userInfo);
Mock.mock('/api/newsLists', 'post', produceNewsData);
Mock.mock('/api/getCooks', 'post', appData.cooks);
Mock.mock('/api/stapleFood', 'post', appData.stapleFood);
Mock.mock('/api/snacks', 'post', appData.snacks);
Mock.mock('/api/drinks', 'post', appData.drinks);
Mock.mock('/api/packages', 'post', appData.packages);
Mock.mock('/api/hotGoods', 'post', appData.hotGoods);