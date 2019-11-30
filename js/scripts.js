var pokemonRepository = (function () {
var repository = [

  {name:"Bulbasaur",
  height: 7,
  types: ['grass', 'poison']},

  {name:"Jigglypuff",
  height: 0.5,
  types: "Balloon"},

  {name:"Snorlax",
  height: 2.1,
  types: "Dozing"},

  {name:"Lickilicky",
  height: 1.7,
  types: ['Licking', 'Supersonic']}

];

function add(pokemon) {
  repository.push(pokemon);
}

function getAll() {
  return repository;

}

return {
  add: add,
  getAll: getAll

}

function addListItem (pokemon){

}

})();

var $pokemonList = document.querySelector('.pokemon-list');   //create a variable above the forEach loop block, then assign it the ul element you just added to your “index.html” file

//forEach loop
pokemonRepository.getAll().forEach(function (list){

  var $listItem = document.createElement('li');   //create an li element that contains a button for each Pokémon
  var $pokemonDetailsButton = document.createElement('button');
  $pokemonDetailsButton.innerText = pokemon.name;                      //Set the innerText of the button to be the Pokémon's name
  $pokemonDetailsButton.classList.add('button__style');   //Add a class to the button using the classList.add method
  $listItem.appendChild($pokemonDetailsButton);      //append the button to the list item as its child.
  $listItem.classList.add('pokemon-list__item');
  $pokemonList.appendChild($listItem);           //append the list item to the unordered list as its child.


});








// var $title = document.querySelector('.title');
// var button = document.createElement('button');
// button.innerText = "Pokemon app";
// $title.appendChild(button);
