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
			  <h2>${title} is beautiful island</h2>
			  ${image}
			  <div id="explainContainer">
				  <p>${description}</p>
              </div>
			</body>
		</html>
		`;
	}, list:function (filelist){
		var list = '<ul>';
		var i = 0; 
		while(i < filelist.length){
			list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`
			i = i + 1;	  
		}				
		list = list+'</ul>';
		return list 
	}
}