export function getData(search){
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
        $('.solution').text("There was an error processing your request. Please try again.");
      }
    });
  }
