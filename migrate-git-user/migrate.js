var GitHubApi = require("github");

var github = new GitHubApi({
  // required
  version: "3.0.0",
  // optional
  timeout: 5000
});
github.user.getFollowingFromUser({
  user: "mikedeboer"
}, function(err, res) {
  console.log(JSON.stringify(res));
});
