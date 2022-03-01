const API_RICK_MORTHY = 'https://rickandmortyapi.com/api/character';
const container = document.getElementById('container');
const detail = document.getElementById('detail');

async function getData() {
  const result = await fetch(API_RICK_MORTHY);
  const data = await result.json();
  console.log('result', data);
  return data;
}

async function render(){

  while (container.firstChild != null){
    container.removeChild(container.firstChild);
  }

  container.className = "container";
  const data = await getData();
  const row = document.createElement('div');
  row.className = 'row row-cols-lg-5 row-cols-3';
  
  const dataMapped = data.results.map((character) => {
    const div = document.createElement('div');
    div.className = 'col';

    const image = document.createElement('img');
    image.className = 'card-img-top';
    image.src = character.image;
    
    const body = document.createElement('div');
    body.className = 'card-body';

    const name = document.createElement('h5');
    name.textContent = character.name;
    name.className = 'card-title';

    const btn = document.createElement('button');
    btn.className = 'btn';
    btn.textContent = 'detail';
    btn.addEventListener("click", function () { viewDetail(character); })
    
    body.appendChild(name);
    body.appendChild(btn);

    div.appendChild(image);
    div.appendChild(body);
    row.appendChild(div);
    container.appendChild(row);
  })
}

async function renderDetail(){

  while (detail.firstChild != null){
    detail.removeChild(detail.firstChild);
  }

  detail.className = "container";
  const data = await getData();
  const row = document.createElement('div');
  row.className = 'row row-cols-lg-5 row-cols-3';
  
  const dataMapped = data.results.map((character) => {
    const div = document.createElement('div');
    div.className = 'col';

    const image = document.createElement('img');
    image.className = 'card-img-top';
    image.src = character.image;
    
    const body = document.createElement('div');
    body.className = 'card-body';

    const name = document.createElement('h5');
    name.textContent = character.name;
    name.className = 'card-title';

    const parrafo1 = document.createElement('p');
    parrafo1.textContent = 'Gender: ' + character.gender;
    parrafo1.className = 'card-text';

    const parrafo2 = document.createElement('p');
    parrafo2.textContent = 'Specie: '+ character.species;
    parrafo2.className = 'card-text';

    const parrafo3 = document.createElement('p');
    parrafo3.textContent = 'Location: '+ character.location.name;
    parrafo3.className = 'card-text';

    const btn = document.createElement('button');
    btn.className = 'btn';
    btn.textContent = 'detail';
    btn.addEventListener("click", function () { showList(); })
    
    body.appendChild(name);
    body.appendChild(parrafo1);
    body.appendChild(parrafo2);
    body.appendChild(parrafo3);
    body.appendChild(btn);

    div.appendChild(image);
    div.appendChild(body);
    row.appendChild(div);
    detail.appendChild(row);
  })
}

async function viewDetail(character){
  renderDetail(character);
  container.style.display= 'none';
  detail.style.display = 'block';

}
async function showList(){
  container.style.display= 'block';
  detail.style.display = 'none';

}

render();