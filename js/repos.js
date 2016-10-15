var apiKey = require('./../.env').apiKey;

Repos = function() {

};

Repos.prototype.getRepos = function(name, displayFunction){
  $.get('https://api.github.com/users/' + name + '?access_token=' + apiKey).then(function(response){
    // console.log(response);
    displayFunction(name, response.login);
    console.log(response.login + "yes");
  }).fail(function(error){
    $('.showUser').text("This Username Is " + error.responseJSON.message + "." +
    "Please Enter the Correct Username");
  });
};


exports.reposModule = Repos;
