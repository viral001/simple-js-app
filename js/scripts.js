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

function add(pokemon) {
  repository.push(pokemon);
}

return {
  add: add,
  getAll: getAll
}
})();

var pokemon = {name: 'Wartortle',
height: 1,
types: ["water"]};
var getAll= pokemonrepository.getAll();

pokemonrepository.add(pokemon)

getall.forEach(function(currentItems){
    document.write('name:' + currentItems.name + '<br>' + 'height:' + currentItems.height + '<br>' + 'type:' + currentItems.type + '<br>');
  })

for (items in repository){
  document.write(repository[items].name + '(height:' + repository[items].height + 'm)<br>');
    if (repository[items].height > 1){
  document.write(repository[items].name + '(height: ' + repository[items].height + 'm) - wow, that`s to big!<br><br>')}
    else {
  document.write(repository[items].name + '(height: ' + repository[items].height + 'm)<br><br>');}
}
