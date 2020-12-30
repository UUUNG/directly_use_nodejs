var template = require('./template.js');
var url = require('url');
var db = require('./db');
var qs = require('querystring');
var fs = require('fs');
var path = require('path');


exports.home = function(request, response){
	db.query(`SELECT * FROM Topic`, function(error, Topics){
		var anchor_list = template.homelink(Topics);				
		var title = 'Welcome';								
		var html = template.home(title, anchor_list, "This is Main page", ``);
		response.writeHead(200);
		response.end(html);
	});	
}

exports.page = function(request, response, pageID){		
	db.query(`SELECT * FROM Topic`, function(error, Topics){
		db.query(`SELECT * FROM Topic WHERE Topic.title=?`,[pageID], function(error2, Topic){
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
}
	
exports.create = function(request, response){
	var _url = request.url;
	var queryData = url.parse(_url, true).query;
	db.query(`SELECT * FROM Topic`, function(error, Topics){										
		var title = 'Create';			
		var list = template.homelink(Topics);			
		var html = template.home(title, list, '', `
			<form action="/create_process" method="post">
				<div>
					<p><input type="text" name="title" placeholder="title"></p>					
					<p><textarea name="description" placeholder="description"></textarea></p>
					<p><input type="submit"></p>
				</div>
			</form>
		`);
		
		response.writeHead(200);
		response.end(html);				
		
	});	
}
