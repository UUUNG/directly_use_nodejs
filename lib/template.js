module.exports = {
	home:function(title, anchor_list, description, addTemp){
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
				figure:hover img{
					-webkit-filter: grayscale(100%);
				    filter: grayscale(100%);
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
				#mainContainer{
					  display:block;
					  background-color:#D7F1FA;
					  padding: 30px 100px;
					  height:1000px;
				  }
				
				#mainTable {
				   width: 960px;
				   height:70%;
				   margin: 0 auto;
				   background-color:#66CDAA;
				 }
				#mainContainer table{
					margin:0 auto;
				}
				#mainContainer img{
					width:350px;
					height:250px;					
				     -webkit-transition: .3s ease-in-out;
				    transition: .3s ease-in-out;
					
				}
				#mainContainer td{
					  padding: 0 10px;
					  text-align: center;					  
				  }
				#desContainer {
				   width: 960px;
				   height: 30%;	
				   background-color:#20B2AA;
				   margin: 0 auto;
				}
				#createContainer{
					float:right;	  
				}
				#createContainer a{
					  decoration:none;
				  }
				#clear{
					clear:both;	  					
				 }
				#jpg{
					
				  }
				#headContainer{									
					width:100%;
					margin: 0 auto;
				}
			  </style>
			</head>
			<body>	 					  
			  <div id="headContainer">
			  	<h1><a href="/">${title}</a></h1>	
			  </div>
			  					  
			  
			  <div id="mainContainer">
				  <div id="clear"></div>
				  <div id="mainTable">
					  <table>				  	
						<tr>
							<td><figure>${anchor_list[0]}</figure></td>  
							<td><figure>${anchor_list[1]}</figure></td>
						</tr>					
						<tr>
							<td><figure>${anchor_list[2]}</figure></td>  
							<td><figure>${anchor_list[3]}</figure></td>
						</tr>
					  </table>	
				  </div>
				  <div id="desContainer">
				  	 <div id="mainDes">
				  		<p>${description}</p>
				  	 </div>
					 <div id="clear"></div>
					  ${addTemp}
					  <span id="createContainer"><a href="/create">create</a></span>
				  </div>								  
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
			anchor_list.push(`<a href="/topic/${Topics[i].title}"><img id="jpg" src="/jpgs/${Topics[i].title}.jpg"/>${Topics[i].title}</a>`);
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
				#mainContainer{
					  display:block;
					  background-color:#D7F1FA;
					  padding: 30px 100px;
					  height:100%;
				  }
				#mainContainer p{
					  padding-top:100px;
					  padding-left:150px;
				  }
				#mainContainer table{
					  margin:0 auto;
				  }
				
				#clear{
					clear:both;	  
				 }
				#jpg{
					
				  }
				#headContainer{									
					
				}
			  </style>
			</head>
			<body>	 			 		  
			  <div id="headContainer">
			  	<h1><a href="/">${title}</a></h1>	
			  </div>
			  					  
			  
			  <div id="mainContainer">
				  <div id="clear"></div>				 
				  ${image}
				  
				  ${description}
              </div>
			</body>
		</html>
		`;
	},
}