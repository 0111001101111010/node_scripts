var r = require('request');
var _ = require('lodash');
var fs = require('fs');
var exec = require('child_process').exec,
    child;

//swap user out with your user;
var user = 'qwo';

r.get("https://github.com/"+ user +".json",function (err,res,body) {
  var response = (JSON.parse(body));
  var urls = [];
  console.log(response[0].repository.html_url);
  _.each(response, function (entry) {
    gitclone(entry.repository.html_url);
  });
});

var gitclone = function  (repo) {
  child = exec(repo,
    function (error, stdout, stderr) {
      console.log('stdout: ' + stdout);
      console.log('stderr: ' + stderr);
      if (error !== null) {
        console.log('exec error: ' + error);
      }
    });
};
