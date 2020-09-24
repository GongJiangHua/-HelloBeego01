//加载http模块
var http = require("http");
//2.创建服务器并监听请求事件
var server = http.createServer(function(req,resp){
//3.获取请求url
	var url =req.url;

	console.log(url);
//4.响应字符串，设置相应格式
	resp.writeHead(200,{'content-type':'text/html;charset=utf-8'});
	//访问/index是主页
	//访问/login是登录页面
	//访问/regisiter是注册页面
	//访问/product是商品页面
	if (url==="/index") {
		resp.end("个人主页");
	}else if (url==="/login") {
		resp.end("登录页面");
	}else if (url==="/product") {
		resp.end("商品页面");
	}else{
		resp.end("<h1>404</h1>  NOT Found Page!!");
	}
})
//给seerver设置端口号
server.listen(3000,function(){
	console.log("服务器启动成功！！");
});