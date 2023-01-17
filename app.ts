

const cont = document.querySelector(".container")!;
const load = document.createElement("h2")
load.innerHTML = "Your Characters are loading...."
cont?.append(load)


const url = "https://swapi.dev/api/people/"


const p = fetch(url)
    .then(respons => {

        return respons.json()
    }).then(charObj => {

        logChar(charObj)
        load.innerHTML = ""
    })


function logChar(charObj: any) {
    for (let i = 0; i < charObj.results.length; i++) {

        console.log(charObj.results[i].name)

        const container = document.querySelector(".container")!;
        const cards = document.createElement("div");
        const name = document.createElement("p");
        const age = document.createElement("p");
        const height = document.createElement("p");
        const mass = document.createElement("p");
        cards.className = 'cards';
        name.id = 'name'
        age.className = 'age'
        height.className = 'height'
        mass.className = 'mass'

        name.innerHTML = `${charObj.results[i].name}`;
        age.innerHTML = `Birth year: ${charObj.results[i].birth_year}`;
        height.innerHTML = `Hight: ${charObj.results[i].height} cm`;
        mass.innerHTML = `Wight: ${charObj.results[i].mass} kg` ;
        container.append(cards);
        cards.append(name, age, height, mass);
    }

    };

