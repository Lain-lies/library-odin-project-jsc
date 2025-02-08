const form = document.querySelector("form");
let animeLibrary = [];

const library = document.querySelector(".library");
const libraryItem = document.querySelector(".library-item");

library.removeChild(libraryItem);

function addAnimeToLibrary(valuesFromForm){

    const generatedAnime = new Anime(...valuesFromForm);
    animeLibrary.push(generatedAnime);

    generatedAnime.showInDOM(generatedAnime.createDisplayNode(generatedAnime)); 
    
    console.log(animeLibrary);
    console.log(Object.getPrototypeOf(Anime));

}

function Anime(title, author, episodes, watchStatus){
    if(!(this instanceof Anime)) throw Error ("Must use the new operator to call the func");

    this.title = title;
    this.author = author;
    this.episodes = episodes;
    this.watchStatus = watchStatus;
    
}

Anime.prototype.createDisplayNode = function (){ 

    const libraryItemClone = libraryItem.cloneNode(true);
    const libraryItemChildren = [...libraryItemClone.children];
    const currentStatus = libraryItemChildren[libraryItemChildren.length - 3]
    const changeStatusButton = libraryItemChildren[libraryItemChildren.length - 2];
    const deleteButton = libraryItemChildren[libraryItemChildren.length - 1];
    const animeValues = Object.values(this);

    for(let i = 0; i < animeValues.length; i++){

        libraryItemChildren[i].textContent = animeValues[i];

    }

    changeStatusButton.addEventListener("click", () => {

        if(this.watchStatus === "Watching"){
            
            this.watchStatus = "Finished";
            currentStatus.textContent = this.watchStatus;
            console.log(this);

        }else{

            this.watchStatus = "Watching";
            currentStatus.textContent = this.watchStatus;
            console.log(this)

        }

        libraryItemClone.classList.toggle("library-item-finished");

    }); 

    deleteButton.addEventListener("click", () => {
        
        animeLibrary = animeLibrary.filter(anime => anime.title === libraryItemChildren[0].textContent);

        library.removeChild(libraryItemClone);
        console.log(animeLibrary);

    });

    console.log(libraryItemClone);

    return libraryItemClone;

}

Anime.prototype.showInDOM = function (displayNode) {
    
    library.appendChild(displayNode);
}

function extractValuesFromForm(event){

    event.preventDefault()
    const formData = new FormData(form);
    const valuesFromForm = [...formData.values()];

    addAnimeToLibrary(valuesFromForm);

}

form.addEventListener("submit", extractValuesFromForm);
