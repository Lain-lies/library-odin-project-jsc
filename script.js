const form = document.querySelector("form");
const animeLibrary = [];

const libraryItem = document.querySelector(".library-item");

function addAnimeToLibrary(valuesFromForm){

    const generatedAnime = new Anime(...valuesFromForm);
    animeLibrary.push(generatedAnime);
    libraryItem.textContent = `${animeLibrary[0].title}`;
    
}

function Anime(title, author, episodes, watchStatus){
    if(!(this instanceof Anime)) throw Error ("Must use the new operator to call the func");

    this.title = title;
    this.author = author;
    this.episodes = episodes;
    this.watchStatus = watchStatus;
    this.displayNode = null;    
}

function extractValuesFromForm(event){

    event.preventDefault()
    const formData = new FormData(form);
    const valuesFromForm = [...formData.values()];
    addAnimeToLibrary(valuesFromForm);

}

form.addEventListener("submit", extractValuesFzromForm);


// sample data for testing
// addAnimeToLibrary("One Piece", "Oda", "ongoing", true);
// addAnimeToLibrary("Baccano", "Ryogo Narita", 16, true);
// addAnimeToLibrary("Charlotte", "Jun Maeda", 12, false);






