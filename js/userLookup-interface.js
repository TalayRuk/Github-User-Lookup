var Repos = require('./../js/userLookup-interface.js').reposModule;

$(document).ready(function() {
  var userNameRepos = new Repos();
  $('#searchName').click(function() {
    //get value from form and make any input into lowerCase
    var name = $('#userName').val().toLowerCase();
    $('#userName').val("");
    //Repos.prototype.getRepos = function(methodParameter){getRepos code}
    $('.showUser').text("The username you chose is " +name+ ".");

  });

});
