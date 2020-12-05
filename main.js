var http = require('http');
var fs = require('fs');
var url = require('url');


function templatePages(title, list, description){
	return  `
		<!doctype html>
		<html>
			<head>
			  <link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Nerko+One&display=swap" rel="stylesheet">
			  <title>${title}</title>
			  <meta charset="utf-8">
			  <style>
				a {
					color: #333333;
					text-decoration: none;
				}
				a:hover{
					color: #888888;
				}
				h1, h2 {
					text-align : center;
				}				
				p { 					
					font-family: 'Nerko One', cursive;  
					color: #111; 
				}
				#malta_jpg{
					display: block;
					margin: 0 auto;					
				}
				#explainContainer{					
					padding: 30px 100px;
				}
			  </style>
			</head>
			<body>	
 			  <div id="leftMenuContainer">
				  ${list}				  			  
			  </div>
			  <h1><a href="index.html">Malta</a></h1>
			  <h2>Malta is beautiful island</h2>
			  <img id="malta_jpg" src="https://proxy.goorm.io//service/5fc258f48c477db5e7f801d0_deRM32F9G66dlOErU7n.run.goorm.io/9080//file/load/Malta.jpg?path=d29ya3NwYWNlJTJGbm9kZV9zdHVkeSUyRmRpcmVjdGx5X3VzZV9ub2RlanMlMkZNYWx0YS5qcGc=&docker_id=deRM32F9G66dlOErU7n&secure_session_id=yeIyeh1tQ878YKxWiVLnam4qz0tqdGmh"/>
			  <div id="explainContainer">
				  <p>${description}</p>
              </div>
			</body>
		</html>
		`;
}

function makelinks(filelist){
	var list = '';
	var i = 0; 
	while(i < filelist.length){
		list = list + `<a href="/?id=${filelist[i]}">${filelist[i]}</a>
`
		i = i + 1;	  
	}					
	return list 
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
					var html = templatePages(title, list, description);
					response.writeHead(200);
					response.end(html);
				});																													
			})					
		} else{ //id값이 있는 경우
			fs.readdir('./data', function(error, filelist){							
				var filteredId = path.parse(queryData.id).base;
				fs.readFile(`data/${filteredId}`, 'utf8', function(err, description){
					var title = queryData.id;	
					var list = makelinks(filelist);
					var html = templatePages(title, list, description);
					// var list = template.list(filelist);									
					// var html = template.html(sanitizetitle, list, `<h2>${sanitizetitle}</h2>${sanitizeDescription}`, 
					// `<a href="/create">create</a> <a href="/update?id=${sanitizetitle}">update</a> 
					// <form action="delete_process" method="post"> 
					// 	<input type="hidden" name="id" value="${sanitizetitle}">
					// 	<input type="submit" value="delete">
					// </form>`);			
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
