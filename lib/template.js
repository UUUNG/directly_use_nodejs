module.exports = {
	html:function(title, list, description, image){
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
			  ${image}
			  <div id="explainContainer">
				  <p>${description}</p>
              </div>
			</body>
		</html>
		`;
	}, makelinks:function (filelist){ //filelist의 파일이름의 링크를 생성하는 함수
		var list = '';
		var i = 0; 
		while(i < filelist.length){
			list = list + `<a href="/?id=${filelist[i].title}">${filelist[i].title}</a> 
	`
			i = i + 1;	  
		}					
		return list 
	}	
}