var github = require("octonode");
var user = process.env.GITHUB_USER;
var pass = process.env.GITHUB_PASS
var fs = require('fs');
var _ = require('lodash');

var client = github.client({
  username: user,
  password: pass
});

var ghme = client.me();

//Person of interest

var client = github.client();

client.get('/users/stanzheng/repos', {}, function(err, status, body, headers) {
  //console.log(body); //json object
  //output(JSON.stringify(body));
  //var repos = JSON.parse(body);
  var repos = body;

  //fork each repo as they come in
  console.log(repos);
  _.each(repos, function(value, key) {
    console.log(key, value);
  });
});


//I AM
ghme.info(function(err, data, headers) {
  console.log("error: " + err);
  //console.log("data: " + data);
  //output(JSON.stringify(data));
  // data.forEach(function(val, key) {
  //   console.log(key)
  // });
  console.log("headers:" + headers);
});

function output(data) {
  fs.writeFile('output.json', data, function(err) {
    if (err) throw err;
    console.log('It\'s saved!');
  });
}
