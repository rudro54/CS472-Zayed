"use strict";

let libraryBooks = [
    {title:"The Road Ahead", author:"Bill Gates", ID :1235},
    {title:"Walter Isaacson", author:"Steve Jobs", ID:4268},
    {title:"The Road Ahead", author:"Bill Gates", ID:4268},
    {title:"Mockingjay : The Final Book Of Hunger Games", author:"Suzanne Collings",ID:3257}
];

const addBook = (title, author, ID)=>{
    const hasSameBook= libraryBooks.some(book=>book.ID===ID);
    if(!hasSameBook){
        const newBook= {title,author,ID};
        libraryBooks.push(newBook);
        return newBook;
    }
    return null;

}

const getTitle = ()=>{
    return libraryBooks.map(book=>book.title).sort();
}

const findBooks =(keyword)=>{
   return libraryBooks.filter(book=>book.title.toLowerCase().includes(keyword.toLowerCase())).sort((a,b)=>a.ID-b.ID);
};

console.log("testing ..");

// console.log(libraryBooks.length);
// addBook("A farewell to arms","arik maria romark",7890);
// console.log(libraryBooks);
// console.log(libraryBooks.length);

//console.log(getTitle());

// let result = findBooks("road");
// result.forEach(book=>console.log(book));


