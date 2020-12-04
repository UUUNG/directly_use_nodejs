var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request,response){
	var _url = request.url;
	var queryData = url.parse(_url, true).query;
	var pathname =  url.parse(_url, true).pathname;
	
	if (pathname === '/'){
		console.log("hi there");								
		var html = `
		<!doctype html>
		<html>
			<head>
			  <link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Nerko+One&display=swap" rel="stylesheet">
			  <title>WEB1 - Welcome</title>
			  <meta charset="utf-8">
			  <style>
				body { }
				p { 					
					font-family: 'Nerko One', cursive;  
					color: #111; 
				}
			  </style>
			</head>
			<body>
			  <h1><a href="index.html">Malta</a></h1>
			  <h2>Malta is beautiful island</h2>
			  <img src="https://proxy.goorm.io//service/5fc258f48c477db5e7f801d0_deRM32F9G66dlOErU7n.run.goorm.io/9080//file/load/Malta.jpg?path=d29ya3NwYWNlJTJGbm9kZV9zdHVkeSUyRmRpcmVjdGx5X3VzZV9ub2RlanMlMkZNYWx0YS5qcGc=&docker_id=deRM32F9G66dlOErU7n&secure_session_id=yeIyeh1tQ878YKxWiVLnam4qz0tqdGmh"/>
			  <p>Malta (/ˈmɒltə/,[11] /ˈmɔːltə/ (About this soundlisten); in Maltese: [ˈmɐltɐ]; Italian: [ˈmalta]), officially known as the Republic of Malta (Maltese: Repubblika ta' Malta) and formerly Melita, is a Southern European island country consisting of an archipelago in the Mediterranean Sea.[12] It lies 80 km (50 mi) south of Italy, 284 km (176 mi) east of Tunisia,[13] and 333 km (207 mi) north of Libya.[14] With a population of about 515,000[4] over an area of 316 km2 (122 sq mi),[3] Malta is the world's tenth smallest country in area[15][16] and fourth most densely populated sovereign country. Its capital is Valletta, which is the smallest national capital in the European Union by area at 0.8 km2 (0.31 sq mi). The official and national language is Maltese, which is descended from Sicilian Arabic that developed during the Emirate of Sicily, while English serves as the second official language. Italian and Sicilian also previously served as official and cultural languages on the island for centuries, with Italian being an official language in Malta until 1934 and a majority of the current Maltese population being at least conversational in the Italian language.
			  </p>
			</body>
		</html>
		`;
		response.writeHead(200);
		response.end(html);
	}else{		
		response.writeHead(404);
		response.end("Not found");
	}
});

app.listen(3001);