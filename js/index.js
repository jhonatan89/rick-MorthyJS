const API_RICK_MORTY = 'https://rickandmortyapi.com/api/character';

const container = document.getElementById('cont');

function render(data){
    data.forEach((result,idx) => {
        const p = document.createElement('div');
        let content = `
            <div id="${result.name} "onclick="foo(this.id)" class="card" style="width: 18rem;">
            <a> <img class="card-img-top" src="${result.image}" alt="Card image cap"> </a>
                    <div class="card-body">
                    <h5 class="card-title"><a> ${result.name} </a> </h5>
                    </div>
                <div id="${result.name}interno" style="display: none" >
                    <div class="card-body detail">
                        <h5 class="card-title">Gender</h5>
                            <p class="card-text">${result.gender}</p>
                    </div>
                    <div class="card-body detail">
                        <h5 class="card-title">Species</h5>
                            <p class="card-text">${result.species}</p>
                    </div>
                    <div class="card-body detail">
                        <h5 class="card-title">Location</h5>
                            <p class="card-text">${result.location.name}</p>
                    </div>
                </div>
               
            </div>
            `;
        container.innerHTML += content;
        
    })
}

function foo(item){
    var x = document.getElementById(item);
    var y = x.children[2];
    
    if (y.style.display === "none") { 
     y.style.display = "block";
    } else {
    y.style.display = "none";
    }
}

async function getData(){
    const result = await fetch(API_RICK_MORTY);
    const data = await result.json()
    render(data.results)
}

getData();



