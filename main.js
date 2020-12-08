var http = require('http');
const fs = require('fs');
var url = require('url');
var template = require('./lib/template.js');
//var multer = require('multer')

function makelinks(filelist){ //filelist의 파일이름의 링크를 생성하는 함수
	var list = '';
	var i = 0; 
	while(i < filelist.length){
		list = list + `<a href="/?id=${filelist[i]}">${filelist[i]}</a> 
`
		i = i + 1;	  
	}					
	return list 
}


function get_imgsrc(Qid, callback) { //이것이 비동기 프로그래밍인가
    fs.readdir('./img', function(error, filelist){					
		fs.readFile(`img/${Qid}`, 'utf8', function(err, description){			
			callback(null, description);									
		});			
	});
}


var app = http.createServer(function(request,response){
	var _url = request.url;
	var queryData = url.parse(_url, true).query;
	var pathname =  url.parse(_url, true).pathname;
	
	if (pathname === '/'){				
		if(queryData.id === undefined){ //홈일 때 (쿼리 데이터가 없을 때)			
			fs.readdir('./data', function(error, filelist){		
				fs.readFile(`data/${"Malta"}`, 'utf8', function(err, description){
					var title = 'Welcome';				
					var list = makelinks(filelist);
					var html = template.html(title, list, description, `<img id="jpg" src="https://proxy.goorm.io//service/5fc258f48c477db5e7f801d0_deRM32F9G66dlOErU7n.run.goorm.io/9080//file/load/Malta.jpg?path=d29ya3NwYWNlJTJGbm9kZV9zdHVkeSUyRmRpcmVjdGx5X3VzZV9ub2RlanMlMkZNYWx0YS5qcGc=&docker_id=deRM32F9G66dlOErU7n&secure_session_id=yeIyeh1tQ878YKxWiVLnam4qz0tqdGmh"/>`);
					response.writeHead(200);
					response.end(html);
				});																													
			})					
		} else{ //id값이 있는 경우					
			var imgsrc = '';
			get_imgsrc(queryData.id, function (err, content) {
				imgsrc += String(content);				
			});		
			fs.readdir('./data', function(error, filelist){											
				fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description){
					var title = queryData.id;	
					var list = makelinks(filelist);				
					console.log("imgsrc: ", imgsrc);
					var html = template.html(title, list, description, `<img id="jpg" src=${imgsrc}/>`);							
					response.writeHead(200);
					response.end(html);
				});
			});
			
		}		
		
	}else{		
		response.writeHead(404);
		response.end("Not found");
	}
});

app.listen(3001);

//https://ppgin.run.goorm.io/ 

//pm2 start main.js --watch --ignore-watch="data/* sessions/*"  --no-daemon 
