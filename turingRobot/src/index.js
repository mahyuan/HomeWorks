
let colors = require('./color');
let readline = require('readline');
let http = require('http');

const API_KYT = '6824998c8b574bd1bba7ba5363a341ab';
const RESPONSE_TYPE = {
	TEXT: 100000,
	LINK: 200000,
	NEWS: 302000
}



module.exports.initChat = (function() {
	let welcomeMsg = '请开始你的表演';
	Array.prototype.forEach.call(welcomeMsg, (it) => {
		colors.colorLog('--------', it, '--------');
	})

	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	})

	let name = '';

	rl.question('> 阁下尊姓大名:', (answer) =>{
		name = answer;
		colors.colorLog('客官请提问!');
		chat();
	});

	function chat() {
		rl.question('> 请输入你的问题:', (query) => {
			if(query == ''){
				colors.colorLog('客观请慢走')
				return
			}
			let req = http.request({
				hostname: 'www.tuling123.com',
				path: '/openapi/api',
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				}
			}, (res) => {
				let data = '';
				res.on('data', (chunk) => {
					data += chunk;
				})
				res.on('end', () => {
					colors.colorLog(handleResponse(data))
				})
				chat();
			});

			req.write(JSON.stringify({
				key: API_KYT,
				info: query,
				userid: name
			}));

			req.end();
		})
	}

	function handleResponse(data) {
		let res = JSON.parse(data);
		switch(res.code) {
			case RESPONSE_TYPE.TEXT:
				return res.text;
			case RESPONSE_TYPE.LINK:
				return `${res.text} : ${res.url}`;
			case RESPONSE_TYPE.NEWS:
				let listInfo = '';
				(res.list || []).forEach((it) => {
					listInfo += `\n文章: ${it.article}\n来源: ${it.source}\n链接: ${it.detailurl}`;
				});
				return `${res.text}\n${listInfo}`;
			default:
				return res.text;
		}
	}

})()

// initChat()
