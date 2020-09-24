const http = require('http');
const server = http.createServer(function(req,res){
	let data = '';
	req.on('data',function(chunk){
		data += chunk;
	});
	req.on('end',function(){
		let method = req.method;
		let url = req.url;
		let headers =JSON.stringify(req.headers);
		let httpVersion = req.httpVersion;
		res.writeHead(200,{
			'content-type':'text/html'
		});
	});
});
server.listen(3000,function(){
	console.log('listening port 3000');
});