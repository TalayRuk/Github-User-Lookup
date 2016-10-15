var apiKey = "1482ae2b901b63efd5fde17a4f40226057c08c3e";

$(document).ready(function() {
  $('#searchName').click(function() {
    //get input value
    var name = $('#userName').val();
    $('#userName').val("");
    $.get('https://api.github.com/users/talayruk?access_token=' + apiKey, function(response) {
      console.log(response);
      $('.showUser').append("The name you have chosen is " + name +  "." + "The picture profile is " + response.login + ", " + response.avatar_url + " , " + response. html_url  + ".");
      $('.showRepos').text('<a heref="https://github.com/"' +  name + '"?page=2&tab=repositories"></a>' )
      $('#userPic').show();



    });
    $('.showUser').empty();
  });
});



// var login = $('#userName').val("");
// var html_url = href =
//
//
// <img id="userPic" src="https://avatars.githubusercontent.com/u/19232053?v=3" alt="avatar_url" />




// var Repos = require('./../js/userLookup-interface.js').reposModule;
//
// $(document).ready(function() {
//   var userNameRepos = new Repos();
//   $('#searchName').click(function() {
//     //get value from form and make any input into lowerCase
//     var name = $('#userName').val().toLowerCase();
//     $('#userName').val("");
//     //Repos.prototype.getRepos = function(methodParameter){getRepos code}
//     $('.showUser').text("The username you chose is " +name+ ".");
//
//   });
//
// });
