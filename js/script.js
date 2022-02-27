const API_RICK_MORTHY = 'https://rickandmortyapi.com/api/character';
const containerRef = document.getElementById('container');



async function getData() 
{
  const result = await fetch(API_RICK_MORTHY);
  const data = await result.json();
  console.log('result', data);
  return data;
}

async function getEpisodes(link) 
{
  const result = await fetch(link);
  const data = await result.json();
  console.log('resultados', data);
  return data;
}

async function render()
{
    const data = await getData();
    const row = document.createElement('div');
    row.className = 'row gy-5 mx-n5';
    const dataMapped = data.results.map((character) =>
     {
        const auxcol = document.createElement('div');
        auxcol.className = 'col-md-4 col-sm-12 m-10 p-10';

        const cardDetail = document.createElement('div');
        cardDetail.className = 'card col-12';
        cardDetail.id = character.name;
        cardDetail.style.display = "none";

        const imgDetail = document.createElement('img');
        imgDetail.className = 'card-img-top'
        imgDetail.src = character.image;
        imgDetail.alt = character.name;

        const bodyDetail = document.createElement('div');
        bodyDetail.className = 'card-body'
          const titleDetail = document.createElement('h5');
          titleDetail.innerText = character.name;
          titleDetail.className = 'card-title';
          bodyDetail.appendChild(titleDetail);

          const gender_row = document.createElement('div');
          gender_row.className = 'row';
            const gender_lbl = document.createElement('h6');
            gender_lbl.className = 'col-6';
            gender_lbl.innerText = 'Gender:';
            gender_row.appendChild(gender_lbl);

            const gender = document.createElement('p');
            gender.className = 'col-6';
            gender.innerText = character.gender;
            gender_row.appendChild(gender);
          bodyDetail.appendChild(gender_row);

          const species_row = document.createElement('div');
          species_row.className = 'row';
            const species_lbl = document.createElement('h6');
            species_lbl.className = 'col-6';
            species_lbl.innerText = 'Species:';
            species_row.appendChild(species_lbl);

            const species = document.createElement('p');
            species.className = 'col-6';
            species.innerText = character.species;
            species_row.appendChild(species);
          bodyDetail.appendChild(species_row);

          const location_row = document.createElement('div');
          location_row.className = 'row';
            const location_lbl = document.createElement('h6');
            location_lbl.className = 'col-6';
            location_lbl.innerText = 'Location:';
            location_row.appendChild(location_lbl);

            const location = document.createElement('p');
            location.className = 'col-6';
            location.innerText = character.location.name;
            location_row.appendChild(location);
          bodyDetail.appendChild(location_row);

          const episodes_row = document.createElement('div');
          episodes_row.className = 'row';
            const episodes_lbl = document.createElement('h6');
            episodes_lbl.className = 'col-6';
            episodes_lbl.innerText = 'Episodes:';
            episodes_row.appendChild(episodes_lbl);

            character.episode.map((episodio) =>
            {
              async function episodios()
              {
                const info = await getEpisodes(episodio);
                const episodes = document.createElement('p');
                episodes.className = 'col-6';
                episodes.innerText = info.name;
                episodes_row.appendChild(episodes);
              }

              episodios();
            }
            );

          bodyDetail.appendChild(episodes_row);

        cardDetail.appendChild(imgDetail);
        cardDetail.appendChild(bodyDetail);


        const card = document.createElement('div');
        card.className = 'card col-12';

        const body = document.createElement('div');
        body.className = 'card-body'
          const title = document.createElement('h5');
          title.innerText = character.name;
          title.className = 'card-title';
          body.appendChild(title);

          const button_row = document.createElement('div');
          button_row.className = 'row';
            const button_lbl = document.createElement('button');
            button_lbl.type = 'button';
            button_lbl.className = 'btn btn-secondary';
            button_lbl.innerText = 'Detalle';
            button_row.appendChild(button_lbl);

            button_lbl.onclick = function () {
              if (cardDetail.style.display !== "none") {
                cardDetail.style.display = "none";
              } else {
                cardDetail.style.display = "block";
              }
            };

          body.appendChild(button_row);

        card.appendChild(body);

      auxcol.appendChild(card);
      auxcol.appendChild(cardDetail);
      row.appendChild(auxcol);
      containerRef.appendChild(row);
       
    })
}

render();
