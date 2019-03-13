/**
 * 此文件用于定义接口返回的数据
 */

const Mock = require('mockjs'); // 引入mockjs

const Random = Mock.Random; // 获取 mock.Random 对象

const domain = 'http://mockjs.com/api'; // 定义默认域名，随便写

const code = 200; // 返回的状态码


import appData from '../db.json';
console.log('appData:', appData);


Mock.mock('/api/stapleFood', "get", {
  "code": 200,
  "data": {
    "fullName": "@CNAME", // 随机生成中文人名
    "userId": 1000234234001,
    "username": "zhangsan"
  },
  "msg": "success"
});


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

// 定义请求链接，类型，还有返回数据

// Mock.mock('/getUser', 'get', appData.userInfo);
Mock.mock('/api/newsLists', 'get', produceNewsData);
Mock.mock('/api/getCooks', 'get', appData.cooks);
// Mock.mock('/api/stapleFood', 'get', appData.stapleFood);
Mock.mock('/api/snacks', 'get', appData.snacks);
Mock.mock('/api/drinks', 'get', appData.drinks);
Mock.mock('/api/packages', 'get', appData.packages);
Mock.mock('/api/hotGoods', 'get', appData.hotGoods);
