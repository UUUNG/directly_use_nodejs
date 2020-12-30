var express = require('express')
var app = express()
var http = require('http');
const fs = require('fs');
var url = require('url');
var db = require('./lib/db');
var template = require('./lib/template.js');
var Topic = require('./lib/Topic');


app.use(express.static('public'));

app.get('/topic/:pageID', function(request, response){	
	pageID = request.params.pageID;
	Topic.page(request, response, pageID); //클릭 시 그에 맞는 페이지 생성
});

app.get('/', function(request, response) { 
	//console.log("This is home")
	Topic.home(request, response);
});



app.get('/create', function(request, response) {
	Topic.create(request, response);
});


app.use(function(req, res, next) {
  res.status(404).send('Sorry cant find that!');
});
 
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(3000, function() {
  //console.log('Example app listening on port 3000!')
});
// var app = http.createServer(function(request,response){
// 	var _url = request.url;
// 	var queryData = url.parse(_url, true).query;
// 	var pathname =  url.parse(_url, true).pathname;		
	
// 	if (pathname === '/'){				
// 		if(queryData.id === undefined){ //홈일 때 (쿼리 데이터가 없을 때)			
// 			Topic.home(request,response); //메인 페이지 생성			
// 		} else{ //id값이 있는 경우		
// 			Topic.page(request,response); //클릭 시 그에 맞는 페이지 생성								
// 		}				
// 	}else if(pathname === "/create"){ 
// 		Topic.create(request, response);
// 	}else if(pathname === "/create_process"){
		
// 	}
// 	else{		
// 		response.writeHead(404);
// 		response.end("Not found");
// 	}
// });

app.listen(3001);


//https://ppgin.run.goorm.io/ 

//pm2 start main.js --watch --ignore-watch="data/* sessions/*"  --no-daemon 
