import { getData } from './../js/scripts.js';

$(document).ready(function() {
  $('#button').click(function() {
    let search = $('#search2').val();
    $('#search2').val("");
    getData(search, function(response) {
      $('#poke-output').text(`Your result ${search} is ${response.name}`);
      $('#sprite-output').empty('');
      $('#sprite-output').append(`<img src="${response.sprites.front_default}">`);
    }, function() {
      $('#poke-output').text("There was an error processing your request. Please try again.");
    });
  });
});
