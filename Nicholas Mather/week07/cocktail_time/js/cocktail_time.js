// Gets info and puts it into the DOM
const render = function (url) {
  // Clear leftover li items
  $('#items').empty()
  //AJAX get the data
  $.ajax(url).done(function (data) {
    //get items for display
    const name = data.drinks[0].strDrink
    const thumbSrc = `${data.drinks[0].strDrinkThumb}/preview`
    //get the ingredients
    const ingredients = Object.keys( data.drinks[0] ).reduce(function (acc, key) {
      if (key.includes('Ingredient') && data.drinks[0][key]) {
        acc.push( data.drinks[0][key]);
      }
      return acc
    }, []);
    //display items
    $('#name').text(name);
    $('#thumbnail').attr('src', thumbSrc);
    for (i = 0; i < ingredients.length; i ++) {
      let ingredient = `<li>${ingredients[i]}</li>`
      $('#items').append(ingredient)
    }
  })
}

const fetchCocktail = function(event) {
  //Stop form from opeining new window
  event.preventDefault();
  //get name of cocktail from form and add to URL
  const drinkName = $('#drink_name').val();
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${ drinkName }`
  render(url)
}

const randomCocktail = function(event) {
  //Stop form from opeining new window
  event.preventDefault();
  //get name of cocktail from form and add to URL
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'
  render(url)
}
//Click listener for search
$(document).ready(function () {
   const $form = $('#cocktail-form');
   $form.on('submit', fetchCocktail)
})
//Click listener for a random cocktail
$(document).ready(function () {
   const $form = $('#random-form');
   $form.on('submit', randomCocktail)
})
