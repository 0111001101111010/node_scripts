

var fs = require('fs'),
    request = require('request');


var download = function(uri, filename, callback){

  request.head({
    rejectUnauthorized : false,
    stictSSL: false,
    uri:uri}, function(err, res, body){
    if (err)
        throw err;
    if (res.statusCode===200 && res.headers['content-type']==='image/gif'){
    console.log('content-type:', res.headers['content-type']);
    console.log('content-length:', res.headers['content-length']);

    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
    }
  });
};

for (var i=211632; i<220000; i++){
  var uri = 'http://mvsstudio.com/media/grow-holiday-party-2014/full/MVS100_20141220'+i+'.gif';
  var picName = uri.split('/')[6];

download(uri, 'pictures/'+picName, function(){
  console.log('done');
});

}
