


const API_RICK_MORTHY = 'https://rickandmortyapi.com/api/character';
// Container for general cards 
const containerRef = document.getElementById('container');
// Container for detail cards
const containerDetailRef = document.getElementById('containerDetail');
var isDetail = false;

// Retrive data from API
async function getData() {
  const result = await fetch(API_RICK_MORTHY);
  const data = await result.json();
  console.log('result', data);
  return data;
}

// Function to render the general cards
async function render() {
  const data = await getData();
  const dataMapped = data.results.map((character) => {

    let card = document.createElement('div');
    card.className = 'card shadow cursor-pointer';
    card.id = character.name + "c";

    let img = document.createElement('img');
    img.className = 'card-img-top';
    img.src = character.image;
    img.alt = character.name;

    let cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    let title = document.createElement('h5');
    title.innerText = character.name;
    title.className = 'card-title';

    let text = document.createElement('p');
    text.innerText = character.species;
    text.className = 'card-text';

    let button = document.createElement('a');
    button.className = 'btn btn-primary stretched-link';
    button.text = 'Detail';
    button.id = character.name + "b";
    button.addEventListener("click", function () { spawnDetail(character.name); })

    cardBody.appendChild(title);
    cardBody.appendChild(text);
    cardBody.appendChild(button);
    card.appendChild(img);
    card.appendChild(cardBody);
    containerRef.appendChild(card);
  })
}

// Function to render the detail cards
async function renderDetail() {
  const data = await getData();
  const dataMapped = data.results.map((character) => {

    let card = document.createElement('div');
    card.className = 'card shadow cursor-pointer';
    card.id = character.name;
    card.style.display = 'none';

    let title = document.createElement('h2');
    title.innerText = "DETAIL:";
    title.className = 'card-title';

    let cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    let gender = document.createElement('p');
    gender.innerHTML = "<b>Gender:  </b>" + character.gender;
    gender.className = 'card-text';

    let location = document.createElement('p');
    location.innerHTML = "<b>Location:  </b>" + character.location.name;
    location.className = 'card-text';

    let episodes = document.createElement('ul');
    episodes.className = 'card-text';
    episodes.innerHTML = "<b>Episodes: </b> <br> <br> "  ;

    for (var ep of character.episode) {
      let episode = document.createElement('li');
      episode.innerText = ep;
      episodes.appendChild(episode);
    }
    
  
    cardBody.appendChild(title);
    cardBody.appendChild(gender);
    cardBody.appendChild(location);
    cardBody.appendChild(episodes);
    card.appendChild(cardBody);
    containerDetailRef.appendChild(card);
  })
}

// Function to display the detail once a general cards is clicked
function spawnDetail(id) {

  if(isDetail == false){
    var objects = document.getElementsByClassName("card");
    for (var obj of objects) {
      obj.style.display = 'none';
    }
    containerDetailRef.style.display = 'inline-flex';
  
    document.getElementById(id + "b").text = 'Go back';
    document.getElementById(id + "c").style.display = 'inline-flex';
    document.getElementById(id).style.display = 'inline-flex';

    isDetail = true;

  }
  else{
    dispawnDetail(id)
    isDetail = false;
  }

};


// Function to display the general cards once a detail card is clicked
function dispawnDetail(id) {
  containerDetailRef.style.display = 'none';

  var objects = document.getElementsByClassName("card");
  for (var obj of objects) {
    obj.style.display = 'inline-flex';
  }

  document.getElementById(id + "b").text = 'Detail';

};


// Render the general cards
render();
// Render the detail cards
renderDetail();

