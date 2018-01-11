import { getData } from './../js/scripts.js';

$(document).ready(function() {
  $('#button').click(function() {
    let search = $('#search').val();
    $('#search').val("");
    getData(search, function(response) {
      $('.solution').text(`Your result ${search} is ${response.name}`);
    }, function() {
      $('.solution').text("There was an error processing your request. Please try again.");
    });
  });
});
