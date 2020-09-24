console.time("time1");
for (var i = 0; i <= 100; i++) {
}
console.timeEnd("time1");
//循环100个数所需时间
console.time("time2");
for (var i = 0; i <= 10000; i++) {
}
console.timeEnd("time2");
//循环10000个数所需时间
console.time("time3");
for (var i = 0; i <= 1000000; i++) {
}
console.timeEnd("time3");
//循环1000000个数所需时间