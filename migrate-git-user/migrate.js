var github = require("octonode");
var user = process.env.GITHUB_USER;
var pass = process.env.GITHUB_PASS


var client = github.client({
  username: user,
  password: pass
});


//Person of interest

var client = github.client();

client.get('/users/stanzheng/repos', {}, function(err, status, body, headers) {
  console.log(body); //json object
});
