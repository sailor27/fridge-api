import { getData } from './../js/scripts.js';

$(document).ready(function() {
  $('#poke-form').submit(function(event) {
    event.preventDefault();
    let name = $('#search1').val();
    $('#search1').val("");
    getData(name, function(response) {
      $('#poke-output').text(`Your search for ${name} found ${response.name}!`);
      $('#sprite-output').empty('');
      $('#sprite-output').append(`<img src="${response.sprites.front_default}">`);
      if (document.getElementById('team-check').checked){
        $('#poke-team').append(`<img src="${response.sprites.front_default}">`);
      };
    }, function() {
      $('#poke-output').text("There was an error processing your request. Please try again.");
    });
  });
  $('#poke-team').children('img').click(function() {
    console.log('test');
  });
});
