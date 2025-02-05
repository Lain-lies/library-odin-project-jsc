console.log("test connection");

const library = [];

function Book(title, author, pages, readStatus){
    
    if(!(this instanceof Book)) throw Error ("Must use the new operator to call the func");

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}


function addBookToLibrary(title, author, pages, readStatus){
    
    let generatedBook = new Book(title, author, pages, readStatus);
    library.push(generatedBook);
    

}

function iterateLibrary(){
    
    library.forEach(book => {
        console.log(book);
    });
}

// sample data for testing
addBookToLibrary("Call of Cthulhu", "H.P. Lovecraft", 420, true);
addBookToLibrary("Call of Cthulhu 2", "H.P. Lovecraft", 419, true);
addBookToLibrary("Call of Cthulhu 3: Return of the electric boogaloo", "H.P. Lovecraft", 418, false);







