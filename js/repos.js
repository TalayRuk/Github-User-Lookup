var apiKey = require('./../.env').apiKey;

// Repos = function() {
//
// };
//var error.reponseJson.message = "Not found";
//
// Repos.prototype.getRepos = function(){
//   $.get('https://api.github.com/users/daneden?access_token=' + apiKey).then(function(response){
//     console.log(response);
//   }).fail(function(error){
//     console.log(error.responseJSON.message);
//   });
// };
//
//
//


function Repos() {

}

Repos.prototype.getRepos = function(name) {
  console.log("hey");
  $.get('https://api.github.com/users/' + name + '?access_token=' + apiKey).then(function(response)
  {
    displayFunction(name, response.login);

  }).fail(function(error) {
    $('.showUser').text(error.responseJson.message);
  });
};


exports.reposModule = Repos;
