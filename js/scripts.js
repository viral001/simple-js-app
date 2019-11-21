
var repository = [ /* repository of pokemon*/
  {name: 'Wartortle', height: 1, weight: 22.5, type: ['water']},
  {name: 'Blastoise', height: 1.6, weight: 85.5, type: ['water']},
  {name: 'Bulbasaur', height: 0.7, weight: 6.90, type: ['grass , poison']},
  {name: 'Charizard', height: 1.7, weight: 90.5, type: ['fire, flying']},
];


//for (items in repository){
    //document.write(repository[items].name + '(height:' + repository[items].height + 'm)<br>');
    //if (repository[items].height > 1){
      //document.write(repository[items].name + '(height: ' + repository[items].height + 'm) - wow, that`s to big!<br><br>')}
    //else {
      //document.write(repository[items].name + '(height: ' + repository[items].height + 'm)<br><br>');}
  //}

  repository.forEach(funtion(currentItems){
    object.keys(currentItems).forEach(funtion(property){
      document.write(property + ': ' + currentItems[property] + '<br>');
    })
  })






  function divide (dividend, divisor){
    if (divisor === 0){
      return "you`re trying to divide by zero."
    }else{
      var result = dividend / divisor;
    }
  }
