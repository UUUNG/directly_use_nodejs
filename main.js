var http = require('http');
const fs = require('fs');
var url = require('url');
var db = require('./lib/db');
var template = require('./lib/template.js');


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
			db.query(`SELECT * FROM Topic`, function(error, Topics){
				var title = 'Welcome';				
				var list = template.makelinks(Topics);
				var html = template.html(title, list, "This is Main page", ``);
				response.writeHead(200);
				response.end(html);
			})							
		} else{ //id값이 있는 경우									
			db.query(`SELECT * FROM Topic`, function(error, Topics){
				db.query(`SELECT * FROM Topic WHERE Topic.title=?`,[queryData.id], function(error2, Topic){
					if(error2){
						throw error2;
					}
					var title = Topic[0].title;
					var description = Topic[0].description;						
					var list = template.makelinks(Topics);									
					var html = template.html(title, list, description, `<img id="jpg" src=${Topic[0].img}/>`);							
					response.writeHead(200);
					response.end(html);
				})
			})
			fs.readdir('./data', function(error, filelist){											
				fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description){
					
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
