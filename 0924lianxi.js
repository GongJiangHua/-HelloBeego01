var http = require("http")

var server = http.createServer(function(req,resp){
	var url = req.url
	console.log(url);
	resp.writeHead(200,{'content-type':'text/html;charset=utf-8'});
	if (url==="/index") {
		resp.end("个人主页")
	}else if (url==="/login") {
		resp.end("登录界面")
	}else{
		resp.end("<h1>NOT FOUND 404</h1>")
	}

})
server.listen(8090,function(){
	console.log("服务器启动成功！！");
})