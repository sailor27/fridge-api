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

      $('#type-output').empty('');
      $('#type-output').append(`<li>${response.types[0].type.name}</li>`);
      // $('#type-output').append(`<li>${response.types[1].type.name}</li>`)
      //pokemon with only one type errors and refuses to continue. WHY.
      if (document.getElementById('team-check').checked){
        $('#poke-team').append(`<img src="${response.sprites.front_default}">`);
      }
    }, function() {
      $('#poke-output').text("There was an error processing your request. Please try again.");
    });
  });
});
