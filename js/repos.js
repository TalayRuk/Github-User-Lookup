var apiKey = require('./../.env').apiKey;

Repos = function() {

};

Repos.prototype.getRepos = function(name, displayFunction){
  $.get('https://api.github.com/users/' + name + '?access_token=' + apiKey).then(function(response){
    // console.log(response);
    displayFunction(name, response.login);
  }).fail(function(error){
    $('.showUser').text("This Username Can" + error.responseJSON.message);
  });
};


exports.reposModule = Repos;
