var github = require("octonode");
var user = process.env.GITHUB_USER;
var pass = process.env.GITHUB_PASS

var client = github.client({
  username: user,
  password: pass
});
