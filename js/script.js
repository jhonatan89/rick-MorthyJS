const API_RICK_MORTHY = 'https://rickandmortyapi.com/api/character';
const containerRef = document.getElementById('container');
const detailRef = document.getElementById('detail');

async function getData() {
  const result = await fetch(API_RICK_MORTHY);
  const data = await result.json();
  console.log('result', data);
  return data;
}

async function getEpisodeData(url) {
  const result = await fetch(url);
  const episode = await result.json();
  console.log('result', episode);
  return episode.name;
}

async function render(){
    detailRef.style.display= "none";
    const data = await getData();
    const row = document.createElement('div');
    row.className = 'row gy-5 mx-n5';
    const dataMapped = data.results.map((character) => {
      
        const auxcol = document.createElement('div');
        auxcol.className = 'col-md-4 col-sm-12 m-10 p-10';
        const card = document.createElement('div');
        card.className = 'card col-12';

        const img = document.createElement('img');
        img.className = 'card-img-top'
        img.src = character.image;
        img.alt = character.name;

        const body = document.createElement('div');
        body.className = 'card-body'
          const title = document.createElement('h4');
          const title = document.createElement('h5');
          title.innerText = character.name;
          title.className = 'card-title';
          body.appendChild(title);

          const status_row = document.createElement('div');
          status_row.className = 'row';
            const status_lbl = document.createElement('h6');
            status_lbl.className = 'col-6';
            status_lbl.innerText = 'Status';
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
            species_lbl.innerText = 'Species';
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
            origin_lbl.innerText = 'Origin';
            origin_row.appendChild(origin_lbl);

            const origin = document.createElement('h6');
            origin.className = 'col-6';
            origin.innerText = character.origin.name;
            origin_row.appendChild(origin);
          body.appendChild(origin_row);

          const button_detail = document.createElement('div');
          
          button_detail.className = 'btn btn-primary';
          button_detail.onclick = function(){
           showDetail(character);
          };
          button_detail.innerText = "Show detail";
          body.appendChild(button_detail);
          

        card.appendChild(img);
        card.appendChild(body);

      auxcol.appendChild(card);
      row.appendChild(auxcol);
      containerRef.appendChild(row);
       
    })
    
    
}

async function renderDetail(character) {
  
  console.log(character.name);
  const row = document.createElement('div');
  row.className = 'row ';
    const left = document.createElement('div');
    left.className = 'col-4 p-0';
    left.style.backgroundColor = "#A8A8A8";
    const char_img = document.createElement('img');
    char_img.className = 'rounded col-12 img-fluid m-0';
    char_img.src = character.image;
    char_img.alt = character.name;
    left.appendChild(char_img);
    const right = document.createElement('div');
    right.className= 'col-8 p-0';
    right.style.backgroundColor = "#EBECF0";
    row.appendChild(left);
    row.appendChild(right);

      const right_row = document.createElement('div');
      right_row.className = 'row m-0';

        const right_btn = document.createElement('button');
        right_btn.className = 'btn btn-close offset-11 col-1';
        right_btn.onclick = function () { detailRef.removeChild(row); showList();}
        right_row.appendChild(right_btn);
        
        const name = document.createElement('h2');
        name.innerText = character.name;
        right_row.appendChild(name);

        const gender_lbl = document.createElement('h4');
        gender_lbl.className = 'col-6';
        gender_lbl.innerText = 'Gender';
        right_row.appendChild(gender_lbl);

        const gender = document.createElement('h4');
        gender.className = 'col-6';
        gender.innerText = character.gender;
        right_row.appendChild(gender);

        const species_lbl = document.createElement('h4');
        species_lbl.className = 'col-6';
        species_lbl.innerText = 'Species';
        right_row.appendChild(species_lbl);

        const species = document.createElement('h4');
        species.className = 'col-6';
        species.innerText = character.species;
        right_row.appendChild(species);

        const location_lbl = document.createElement('h4');
        location_lbl.className = 'col-6';
        location_lbl.innerText = 'Location';
        right_row.appendChild(location_lbl);

        const location = document.createElement('h4');
        location.className = 'col-6';
        location.innerText = character.location.name;
        right_row.appendChild(location);

        const episodes_lbl = document.createElement('h4');
        episodes_lbl.className = 'col-6';
        episodes_lbl.innerText = 'Episodes';
        right_row.appendChild(episodes_lbl);

        const episodes = document.createElement('h4');
        episodes.className = 'col-6';
        for(const episode of character.episode){
          const episode_name = await getEpisodeData(episode);
          console.log(episode_name);
          episodes.append(episode_name);
          episodes.append(", ");
        }
        
        right_row.appendChild(episodes);

        
        
        right.appendChild(right_row);
        

  detailRef.appendChild(row);
  console.log(detailRef);

} 

async function showDetail(character){
  renderDetail(character);
  containerRef.style.display= 'none';
  detailRef.style.display = 'block';

}
async function showList(){
  containerRef.style.display= 'block';
  detailRef.style.display = 'none';

}


render();
