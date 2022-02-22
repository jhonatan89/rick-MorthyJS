const API_RICK_MORTHY = 'https://rickandmortyapi.com/api/character';
const containerRef = document.getElementById('container');


async function getData() {
  const result = await fetch(API_RICK_MORTHY);
  const data = await result.json();
  console.log('result', data);
  return data;
}

async function render(){
    const data = await getData();
    const dataMapped = data.results.map((character) => {
        
        let card = document.createElement('div');
        card.className = 'card';
      
        let cardImg = document.createElement('img');
        cardImg.className = 'card-img-top';
        cardImg.src = character.image;

        let cardBody = document.createElement('div');
        cardBody.className = 'card-body';
      
        let title = document.createElement('h5');
        title.innerText = character.name;
        title.className = 'card-title';
      
        let text = document.createElement('p');
        text.innerText = character.status;
        text.className = 'card-text';
      
      
        card.appendChild(cardImg);
        cardBody.appendChild(title);
        cardBody.appendChild(text);
        card.appendChild(cardBody);
        containerRef.appendChild(card);
    })
}

render();
