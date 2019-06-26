var express=require('express');
var appln=express();

var gatherInformation=function(req,resp)
{
console.log('hello');
var accinfo=[
	{accountid:1,customername:'sushrut',customerbal:4000},
	{accountid:2,customername:'sush',customerbal:6000},
	{accountid:3,customername:'abc',customerbal:8000}
	];
	resp.send(accinfo);
};

appln.get('/acc',gatherInformation);

var server = appln.listen(8089, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("port is 8089", host, port)
})