const API_RICK_MORTHY = 'https://rickandmortyapi.com/api/character';
const containerRef = document.getElementById('container');
const detailRef = document.getElementById('detail');


async function getData() {
  const result = await fetch(API_RICK_MORTHY);
  const data = await result.json();
  console.log('result', data);
  return data;
}



async function render(){
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

          var button = document.createElement("button");
          button.innerHTML = "More info";
          body.appendChild(button);

          // 3. Add event handler
          button.addEventListener ("click", function() {myFunction(character)});

        card.appendChild(img);
        card.appendChild(body);

      auxcol.appendChild(card);
      row.appendChild(auxcol);
      containerRef.appendChild(row);
       
    })
}

function myFunction(character) {
  const row = document.createElement('div');
  containerRef.style.display = 'none';
  detailRef.style.display = 'block';

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

          const type_row = document.createElement('div');
          type_row.className = 'row';
            const type_lbl = document.createElement('h6');
            type_lbl.className = 'col-6';
            type_lbl.innerText = 'Genero';
            type_row.appendChild(type_lbl);

            const tipo = document.createElement('h6');
            tipo.className = 'col-6';
            tipo.innerText = character.gender;
            type_row.appendChild(tipo);
          body.appendChild(type_row);

        card.appendChild(img);
        card.appendChild(body);

      auxcol.appendChild(card);
      row.appendChild(auxcol);
      detailRef.appendChild(row);

}

render();

