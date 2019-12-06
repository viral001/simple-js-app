var pokemonRepository = (function () {
  var repository = [];

    var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  function add(item) {
    repository.push(item);
  }

  function getAll() {
    return repository;

  }

    // Loading data from external API
function loadList() {
  return fetch(apiUrl).then(function (response) {
    return response.json();
  }).then(function (json) {
    json.results.forEach(function (item) {
      var pokemon = {
        name: item.name,
        detailsUrl: item.url
      };
      add(pokemon);
    });
  }).catch(function (e) {
    console.error(e);
  })
}

  function addListItem(pokemon = {}) {
    var pokemonList = document.querySelector('.pokemon-list');
    var $listItem = document.createElement('li');   //create an li element that contains a button for each Pokémon
    var button = document.createElement('button'); //creates the button element
    $listItem.classList.add('pokemon-list__item');
    button.innerText = pokemon.name;     //Set the innerText of the button to be the Pokémon's name
    button.classList.add('button__style');  //Add a class to the button using the classList.add method
    $listItem.appendChild(button);   //append the button to the list item as its child.
    pokemonList.appendChild($listItem); //append the child in the repository pokemon
    button.addEventListener('click', function(event) {
      showDetails(pokemon); // creating the button as a function/event to be able to click in the future

    });
  }

  function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function () {
      console.log(item);
    });
  }

// Get the pokemon details from URL

function loadDetails(item) {
  var url = item.detailsUrl;
  return fetch(url).then(function (response) {
    return response.json();
  }).then(function (details) {
    // Now we add the details to the $listItem
  item.imageUrl = details.sprites.front_default;
  item.height = details.height;
  item.types = Object.keys(details.types);
}).catch(function (e) {
  console.error(e);
});
}

// creating model content
function showModel(item) {
  var $modalcontainer = document.querySelector('#modal-container');

// clearing all existing modal content
$modalcontainer.innerHTML = '';

// create div element in DOM
var modal = document.createElement('div');
// Add class to div DOM element
modal.classList.add('modal');

// creating element for name in modal content
var nameElement = document.createElement('h1');
nameElement.innerText = item.name;

// creating img in modal content
var imageElement = document.createElement('img');
  imageElement.classList.add('modal-img');
  imageElement.setAttribute('src', item.imageUrl);

// Creating element for height
var heightElement = document.createElement('p');
  heightElement.innerText = 'height : ' + item.height;

// Creating element for weight in modal content
var typesElement = document.createElement('p');
  typesElement.innerText = 'weight : ' + item.weight;

// Create closing button in modal content
var closeButtonElement = document.createElement('button');
  closeButtonElement.classList.add('modal-close');
  closeButtonElement.innerText = 'Close';
  closeButtonElement.addEventListener('click', hideModal);

// Appending modal content to webpage
  modal.appendChild(closeButtonElement);
  modal.appendChild(nameElement);
  modal.appendChild(imageElement);
  modal.appendChild(heightElement);
  modal.appendChild(typesElement);
  $modalContainer.appendChild(modal);

// adds class to show the modal
  $modalContainer.classList.add('is-visible');
}

// hides modal when you click on close button
function hideModal() {
  var $modalContainer = document.querySelector('#modal-container');
    $modalContainer.classList.remove('is-visible');
}

// Hides modal when clicked on ESC on keyboard
window.addEventListener('keydown', (e) => {
  var $modalContainer = document.querySelector('#modal-container');
if (
  e.key === 'Escape' && $modalContainer.classList.contains('is-visible')
) {
  hideModal();
}
});

// Hides modal if clicked outside of it
var $modalContainer = document.querySelector('#modal-container');
  $modalContainer.addEventListener('click', (e) => {
var target = e.target;
  if (target === $modalContainer) {
    hideModal();
}
});
}

return {
  loadList: loadList,
  addListItem: addListItem,
  showDetails: showDetails,
  add: add,
  getAll: getAll,
  loadDetails: loadDetails
};

})();  //this one closes IIFE


pokemonRepository.loadList().then(function() {
//loop
  pokemonRepository.getAll().forEach(function(pokemon){   //loop
    pokemonRepository.addListItem(pokemon);
  });
});
