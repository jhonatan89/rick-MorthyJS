const API_RICK_MORTHY = 'https://rickandmortyapi.com/api/character';
const containerRef = document.getElementById('container');
const containerDetailRef = document.getElementById('container-detail');


async function getData(id) {
  const result = await fetch(API_RICK_MORTHY+"/"+id);
  const data = await result.json();
  console.log('result', data);
  return data;
}

async function showDetail(id){
  while(containerRef.firstChild!=null) {containerRef.removeChild(containerRef.firstChild)}
  const character = await getData(id);
  
  const card = document.createElement('div');
  card.className = 'card col-4';

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

    const gender_row = document.createElement('div');
    gender_row.className = 'row';
      const gender_lbl = document.createElement('h6');
      gender_lbl.className = 'col-6';
      gender_lbl.innerText = 'Gender';
      gender_row.appendChild(gender_lbl);

      const gender = document.createElement('h6');
      gender.className = 'col-6';
      gender.innerText = character.gender;
      gender_row.appendChild(gender);
    body.appendChild(gender_row);

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

    const location_row = document.createElement('div');
    location_row.className = 'row';
      const location_lbl = document.createElement('h6');
      location_lbl.className = 'col-6';
      location_lbl.innerText = 'Location';
      location_row.appendChild(location_lbl);

      const location = document.createElement('h6');
      location.className = 'col-6';
      location.innerText = character.location.name;
      location_row.appendChild(location);
    body.appendChild(location_row);

    const episode_row = document.createElement('div');
    episode_row.className = 'row';
      const episode_lbl = document.createElement('h6');
      episode_lbl.className = 'col-6';
      episode_lbl.innerText = 'Episodes';
      episode_row.appendChild(episode_lbl);

      const ep_list = document.createElement('h6');
      ep_list.className = 'li';
      const episodes = character.episode.map((episode)=>{
        const ep = document.createElement('li');
        const a = document.createElement('a');
        a.href=episode
        a.innerText = episode.split("/")[episode.split("/").length - 1];

        ep.appendChild(a)
        ep_list.appendChild(ep);
      });

      episode_row.appendChild(ep_list);
    body.appendChild(episode_row);


    const detail_button = document.createElement('button');
    detail_button.innerText = 'Volver';
    detail_button.addEventListener("click", render);
    body.appendChild(detail_button);

  card.appendChild(img);
  card.appendChild(body);

  containerRef.appendChild(card)


}

async function render(){
    const data = await getData("");
    while(containerRef.firstChild!=null) {containerRef.removeChild(containerRef.firstChild)}
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


          const detail_button = document.createElement('button');
          detail_button.innerText = 'Ver detalle';
          detail_button.addEventListener("click", function(){showDetail(character.id);});
          body.appendChild(detail_button);

        card.appendChild(img);
        card.appendChild(body);

      auxcol.appendChild(card);
      row.appendChild(auxcol);
      containerRef.appendChild(row);
       
    })
}

render();
