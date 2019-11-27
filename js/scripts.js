var pokemonrepository = (function () {
var repository = [ /* repository of pokemon*/
{
  name: 'Wartortle',
  height: 1,
  type: ['water']
},
{
  name: 'Blastoise',
  height: 1.6,
  type: ['water']
},
{
  name: 'Bulbasaur',
  height: 0.7,
  type: ['grass , poison']
},
{
  name: 'Charizard',
  height: 1.7,
  type: ['fire, flying']
},
];

function add(pokemon){
  repository.push(pokemon);
}

function getAll(){
  return repository;
}

return {
  add: add,
  getAll: getAll

};
})();

pokemonrepository.getAll().forEach(function(pokemon){document.write('<p>'+ pokemon.name+'</p>')})


// function loopBlockFunction(currentName){
//   document.write("<h3> " + currentName.name + "</h3>");
//   document.write("<p>" + 'Type: ' + currentName.types + "</p>")
//   document.write("<p>" + 'Height: ' + currentName.height + "</p>")
//
//
//   if (currentName.height > 5){
//     document.write("<p>" + ' - Wow, that\’s big!' + "</p>");
//
//   }
// }
// pokemonRepository.forEach(loopBlockFunction);
