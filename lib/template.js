module.exports = {
	home:function(title, anchor_list, description, img_list){
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
				#leftMenuContainer{					
					float:left;															
					display:block;
				}
				#explainContainer{
					  display:block;
					  background-color:#D7F1FA;
					  padding: 30px 100px;
					  height:100%;
				  }
				#explainContainer p{
					  padding-top:100px;
					  padding-left:150px;
				  }
				#explainContainer table{
					  margin:0 auto;
				  }
				#explainContainer img{
					width:350px;
					height:250px;
				}
				#explainContainer td{
					  padding: 0 10px;
					  text-align: center;					  
				  }
				#clear{
					clear:both;	  
				 }
				#jpg{
					
				  }
				#headContainer{									
					margin-left:870px;
				}
			  </style>
			</head>
			<body>	
 			  <div id="leftMenuContainer">
				  				  			  
			  </div>			  
			  <div id="headContainer">
			  	<h1><a href="/">${title}</a></h1>	
			  </div>
			  					  
			  
			  <div id="explainContainer">
				  <div id="clear"></div>
				  <table>
				  	<tr>
						<td><img id="jpg" src=${img_list[0]}/></td>  
						<td><img id="jpg" src=${img_list[1]}/></td>  
					</tr>
					<tr>
						<td>${anchor_list[0]}</td>  
						<td>${anchor_list[1]}</td>
					</tr>
					<tr>
						<td><img id="jpg" src=${img_list[2]}/></td>  
						<td><img id="jpg" src=${img_list[3]}/></td>
					</tr>
					<tr>
						<td>${anchor_list[2]}</td>  
						<td>${anchor_list[3]}</td>
					</tr>
				  </table>				 				  
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
	},homelink:function(Topics){		
		var anchor_list = [];
		var i = 0;
		while(i < Topics.length){					
			anchor_list.push(`<a href="/?id=${Topics[i].title}">${Topics[i].title}</a>`);
			i = i + 1;	  			
		}				
		return anchor_list;
	},homeimg:function(Topics){		
		var anchor_list = [];
		var i = 0;
		while(i < Topics.length){					
			anchor_list.push(Topics[i].img);
			i = i + 1;	  			
		}				
		return anchor_list;		
	}, html:function(title, list, description, image){
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
				h1{
					
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
					  display:block;
					  background-color:#D7F1FA;
					  padding: 30px 100px;
					  height:100%;
				  }
				#explainContainer p{
					  padding-top:100px;
					  padding-left:150px;
				  }
				#explainContainer table{
					  margin:0 auto;
				  }
				
				#clear{
					clear:both;	  
				 }
				#jpg{
					
				  }
				#headContainer{									
					margin-left:885px;
				}
			  </style>
			</head>
			<body>	
 			  <div id="leftMenuContainer">
				  				  			  
			  </div>			  
			  <div id="headContainer">
			  	<h1><a href="/">${title}</a></h1>	
			  </div>
			  					  
			  
			  <div id="explainContainer">
				  <div id="clear"></div>				 
				  ${image}
				  
				  <p>${description}</p>
              </div>
			</body>
		</html>
		`;
	}
}