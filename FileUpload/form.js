var http = require('http');
var formidable = require('formidable');
var fs = require('fs');
const { isUint8ClampedArray } = require('util/types');

http.createServer(function(req, res) {
	if (req.url === '/fileupload') {
		var form = new formidable.IncomingForm();
		form.parse(req, function (err, fields, files) {
			var oldpath = files.filetoupload.filepath;
			var newpath = './media/' + files.filetoupload.originalFilename;
			console.log("Old Path: " + oldpath);
			console.log("New Path: " + newpath);
			fs.copyFile(oldpath, newpath, function (err)  {
				if (err) throw err;
				res.write("File uploaded and moved!");
				res.end();
			})
			res.write('File uploaded');
			res.end();
		});
	} else {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
		res.write('<input type="file" name="filetoupload"><br>');
		res.write('<input type="submit">');
		res.write('</form>');
		return res.end();
	}
}).listen(8080);

