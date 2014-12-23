var GitHubApi = require("github");
var user = process.env.GITHUB_USER;
var pass = process.env.GITHUB_PASS

var github = new GitHubApi({
  // required
  version: "3.0.0",
  // optional
  timeout: 5000
});



github.authenticate({
  type: "basic",
  username: user,
  password: pass,
});
github.user.update({
  location: "Space"
}, function(err) {
  console.log(err)
  console.log("done!");
});
