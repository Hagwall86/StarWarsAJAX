

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
        const charName = document.createElement("div")
        charName.className = 'cards'
        charName.innerHTML = `Name: ${charObj.results[i].name} Birth year: ${charObj.results[i].birth_year}`
        container?.append(charName)

    }

    };

