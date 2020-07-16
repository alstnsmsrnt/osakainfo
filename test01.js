var ex = require('express');
var app = ex();
require('./router.js')(app);
app.set('views',__dirname);
app.engine('html',require('ejs').renderFile);
app.set('view engine','ejs');
app.use(ex.static(__dirname));
app.listen(3000,function() {
	console.log(__dirname)
}
);
function testerr(response) {
	response.writeHead(404, {
		"Content-Type": "text/plain"
	}
	);
	response.write("404 ERROR... ");
	response.end();
}
