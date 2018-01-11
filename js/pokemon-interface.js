import { getData } from './../js/scripts.js';

$(document).ready(function() {
  $('#button').click(function() {
    let name = $('#search1').val();
    $('#search1').val("");
    getData(name, function(response) {
      $('#poke-output').text(`Your search for ${name} found ${response.name}!`);
      $('#sprite-output').empty('');
      $('#sprite-output').append(`<img src="${response.sprites.front_default}">`);
    }, function() {
      $('#poke-output').text("There was an error processing your request. Please try again.");
    });
  });
});
