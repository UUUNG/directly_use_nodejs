var http = require('http');
var fs = require('fs');
var url = require('url');
//var multer = require('multer')

function templatePages(title, list, description, image){
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
					font-size: 18px;
				}
				#jpg{
					width: 1000px;
					height: 562px;
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
			  <h1><a href=?id=${title}>${title}</a></h1>
			  <h2>${title} is beautiful island</h2>
			  ${image}
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
		
		for(var fl in filelist[i]){
			var temp_list = '';
			if (fl === ' '){
				temp_list = temp_list + '';
			}
		}
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
					var html = templatePages(title, list, description, `<img id="jpg" src="https://proxy.goorm.io//service/5fc258f48c477db5e7f801d0_deRM32F9G66dlOErU7n.run.goorm.io/9080//file/load/Malta.jpg?path=d29ya3NwYWNlJTJGbm9kZV9zdHVkeSUyRmRpcmVjdGx5X3VzZV9ub2RlanMlMkZNYWx0YS5qcGc=&docker_id=deRM32F9G66dlOErU7n&secure_session_id=yeIyeh1tQ878YKxWiVLnam4qz0tqdGmh"/>`);
					response.writeHead(200);
					response.end(html);
				});																													
			})					
		} else{ //id값이 있는 경우
			fs.readdir('./img', function(error, filelist){
				img_srcs = filelist[0];
			});
			fs.readdir('./data', function(error, filelist){											
				fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description){
					var title = queryData.id;	
					var list = makelinks(filelist);
					// var upload = multer({ dest: 'uploads/' })
					// upload.single(title+".jpg");
					var html = templatePages(title, list, description, `<img id="jpg" src="https://proxy.goorm.io//service/5fc258f48c477db5e7f801d0_deRM32F9G66dlOErU7n.run.goorm.io/9080//file/load/Guam.jpg?path=d29ya3NwYWNlJTJGbm9kZV9zdHVkeSUyRmRpcmVjdGx5X3VzZV9ub2RlanMlMkZpbWclMkZHdWFtLmpwZw==&docker_id=deRM32F9G66dlOErU7n&secure_session_id=z_-7_yShkdkkg1-1-Pb8-NdxvdF6O8SQ"/>`);							
					response.writeHead(200);
					response.end(html);
				});
			});
		}
		//https://media.timeout.com/images/105240189/1372/772/image.jpg
		
	}else{		
		response.writeHead(404);
		response.end("Not found");
	}
});

app.listen(3001);

//https://ppgin.run.goorm.io/

//pm2 start main.js --watch --ignore-watch="data/* sessions/*"  --no-daemon
