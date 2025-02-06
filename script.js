const form = document.querySelector("form");
let animeLibrary = [];

const library = document.querySelector(".library");
const libraryItem = document.querySelector(".library-item");

library.removeChild(libraryItem);

function addAnimeToLibrary(valuesFromForm){

    const generatedAnime = new Anime(...valuesFromForm);
    animeLibrary.push(generatedAnime);
    
}

function Anime(title, author, episodes, watchStatus){
    if(!(this instanceof Anime)) throw Error ("Must use the new operator to call the func");

    this.title = title;
    this.author = author;
    this.episodes = episodes;
    this.watchStatus = watchStatus;
    this.displayNode = null;    
}

function createDisplayNode(valuesFromForm){

    const libraryItemClone = libraryItem.cloneNode(true);
    const libraryItemChildren = [...libraryItemClone.children];
    const changeStatusButton = libraryItemChildren[libraryItemChildren.length - 2];
    const deleteButton = libraryItemChildren[libraryItemChildren.length - 1];

    for(let i = 0; i < valuesFromForm.length; i++){

        libraryItemChildren[i].textContent = valuesFromForm[i];
    }


    

    console.log(libraryItemChildren);

}

function extractValuesFromForm(event){

    event.preventDefault()
    const formData = new FormData(form);
    const valuesFromForm = [...formData.values()];

    createDisplayNode(valuesFromForm); 
    addAnimeToLibrary(valuesFromForm);

}

form.addEventListener("submit", extractValuesFromForm);


// sample data for testing
// addAnimeToLibrary("One Piece", "Oda", "ongoing", true);
// addAnimeToLibrary("Baccano", "Ryogo Narita", 16, true);
// addAnimeToLibrary("Charlotte", "Jun Maeda", 12, false);






