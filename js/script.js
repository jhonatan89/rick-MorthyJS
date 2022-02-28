const API_RICK_MORTHY = 'https://rickandmortyapi.com/api/character';
const containerRef = document.getElementById('container');
var data_row = null;
var detail_row = null;


async function getData() {
  const result = await fetch(API_RICK_MORTHY);
  const data = await result.json();
  console.log('result', data);
  return data;
}

async function render(){
    const data = await getData();
    data_row = document.createElement('div');
    data_row.className = 'row row-cols-3 gy-5 mx-n5';
    const dataMapped = data.results.map((character) => {
      
        const auxcol = document.createElement('div');
        auxcol.className = 'col m-10 p-10';
        const card = document.createElement('div');
        card.className = 'card col-12';

        const img = document.createElement('img');
        img.className = 'card-img-top'
        img.src = character.image;
        img.alt = character.name;

        const body = document.createElement('div');
        body.className = 'card-body'
          const title = document.createElement('h5');
          title.innerText = character.name;
          title.className = 'card-title';
          body.appendChild(title);

          const status_row = document.createElement('div');
          status_row.className = 'row';
            const status_lbl = document.createElement('h6');
            status_lbl.className = 'col-6';
            status_lbl.innerText = 'Status:';
            status_row.appendChild(status_lbl);

            const status = document.createElement('h6');
            status.className = 'col-6';
            status.innerText = character.status;
            status_row.appendChild(status);
          body.appendChild(status_row);

          const species_row = document.createElement('div');
          species_row.className = 'row';
            const species_lbl = document.createElement('h6');
            species_lbl.className = 'col-6';
            species_lbl.innerText = 'Species:';
            species_row.appendChild(species_lbl);

            const species = document.createElement('h6');
            species.className = 'col-6';
            species.innerText = character.species;
            species_row.appendChild(species);
          body.appendChild(species_row);

          const origin_row = document.createElement('div');
          origin_row.className = 'row';
            const origin_lbl = document.createElement('h6');
            origin_lbl.className = 'col-6';
            origin_lbl.innerText = 'Origin:';
            origin_row.appendChild(origin_lbl);

            const origin = document.createElement('h6');
            origin.className = 'col-6';
            origin.innerText = character.origin.name;
            origin_row.appendChild(origin);
          body.appendChild(origin_row);

          const details_btn_row = document.createElement('div');
          details_btn_row.className = 'row';
          details_btn_row.style = "display: flex; justify-content: center;"
            const details_btn = document.createElement('button');
            details_btn.className = 'btn btn-primary col-4';
            details_btn.innerText = 'Details';
            details_btn.addEventListener('click', function() {renderDetails(character)});
            details_btn_row.appendChild(details_btn);
          body.appendChild(details_btn_row);

        card.appendChild(img);
        card.appendChild(body);

      auxcol.appendChild(card);
      data_row.appendChild(auxcol);
      containerRef.appendChild(data_row);
    })
  }
  
  async function renderDetails(character){
    data_row.style = "display: none;";
    detail_row = document.createElement('div');
    detail_row.style = "display: flex; justify-content: center;";

    let episodeList = "";
    for (let i = 0; i < character.episode.length; i++) {
      episode = await getEpisodeData(character.episode[i]);
      episodeList = episodeList.concat(`<li class="card-text">${episode.name}</li>\n`);
    }

    detail_row.innerHTML = 
      `<div class="card mb-6" style="width: 500px;">
        <img src="${character.image}" class="card-img-top" alt="${character.name}">
        <div class="card-body" style="padding: 2rem;">
          <div class="d-flex justify-content-between"">
            <h2 class="card-title">${character.name}</h2>
            <button class="btn btn-outline-info" onclick="renderAgain()">Return</button>
          </div>
          <div class="row">   
            <p class="card-text"><b>Gender: </b>${character.gender}</p>
            <p class="card-text"><b>Species: </b>${character.species}</p>
            <p class="card-text"><b>Location: </b>${character.location.name}</p>
          </div>      
          <div class="row">
            <p class="card-text"><b>Episode list</b></p>
            <ul>
              ${episodeList}
            </ul>
          </div>
        </div>
      </div>`;
    
    containerRef.appendChild(detail_row);
}

async function getEpisodeData(url) {
  const result = await fetch(url);
  const data = await result.json();
  return data;
}

async function renderAgain() {
  data_row.style = "display: flex;";
  detail_row.remove();
}

getData();
render();