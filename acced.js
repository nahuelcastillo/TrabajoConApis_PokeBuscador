document.addEventListener("DOMContentLoaded", async function () {
    let div = document.getElementById("container");

    const inp = document.getElementById("searchP")

    inp.addEventListener("input", function (){
        const Pokemon = inp.value.toLowerCase();

        fetch(`https://pokeapi.co/api/v2/pokemon/${Pokemon}`)
        .then(Response => Response.json())
        .then(data => {
            let datas = data;    
            var typesPoke = data.types
            var abilites = data.abilities
            
    
            console.log(datas)
    
            
                div.innerHTML += `
                <h1>Nombre del pokemon: ${data.species.name} </h1>
                <p> Tipo del pokemon: ${typesPoke[0].type.name} </p>
                <p> habilidades del pokemon: <ul>
                                            <li>${abilites[0].ability.name} </li>
                                            <li>${abilites[1].ability.name}</li>
                                                </ul> </p>
                <img src="${data.sprites.front_default}" alt="">
            `
        })
    
    })

})


