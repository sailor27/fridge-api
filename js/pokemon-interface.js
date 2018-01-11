import { getData } from './../js/scripts.js';

$(document).ready(function() {
  $('#button').click(function() {
    let search = $('#search').val();
    $('#search').val("");
    getData(search, function(response) {
      $('.solution').append(`Your result ${search} is ${response.name}`);
      $('.solution').append(`<img src="${response.sprites.front_default}">`);
    }, function() {
      $('.solution').text("There was an error processing your request. Please try again.");
    });
  });
});
