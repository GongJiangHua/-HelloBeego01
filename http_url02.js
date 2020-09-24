//js对象
var obj = {
	name : "tony",
	age : "20"
}
//转字符串
var jsonStr = JSON.stringify(obj);
//JSON字符串，一种特殊格式的字符串，里面以key-value格式
console.log("字符串"+jsonStr);
console.log(obj);

//JSON对象==JS对象
var jsonObj = JSON.parse(jsonStr);
console.log("对象"+jsonObj.name);
//