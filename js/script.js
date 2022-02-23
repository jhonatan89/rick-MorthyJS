const API_RICK_MORTHY = 'https://rickandmortyapi.com/api/character';
const containerRef = document.getElementById('container');


async function getData() {
  const result = await fetch(API_RICK_MORTHY);
  const data = await result.json();
  console.log('result', data);
  return data;
}
/* "<div class="card" style="width: 18rem;">
        <img class="card-img-top" src="..." alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>" */
async function render(){
    const data = await getData();
    const row = document.createElement('div');
    row.className = 'row gy-5 ';
    const dataMapped = data.results.map((character) => {
        const p = document.createElement('p');
        

        const card = document.createElement('div');
        card.className = 'card col-4 m-100 p-100 border';

        const img = document.createElement('img');
        img.className = 'card-img-top'
        img.src = character.image;

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

        card.appendChild(img);
        card.appendChild(body);
        
      row.appendChild(card);
      containerRef.appendChild(row);
       
    })
}

render();
