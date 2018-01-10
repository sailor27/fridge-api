$(document).ready(function() {
  $('#button').click(function() {
    let search = $('#search').val();
    $('#search').val("");

    $.ajax({
      url: `http://pokeapi.co/api/v2/pokemon/${search}/`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        $('.solution').text(`Your result ${search} is ${response.name}`);
      },
      error: function() {
        $('#errors').text("There was an error processing your request. Please try again.")
      }
    });
  });
});
