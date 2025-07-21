console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line


const myCollection=[ ];
function addToCollection(collection,title,artist,yearPublished)
{
let album = { 
  title:title,
  artist:artist,
  yearPublished:yearPublished
};

collection.push(album);
return(album);

}

console.log(addToCollection(myCollection, "qarami" , "hamda" , "1890"));
console.log(addToCollection(myCollection, "somali","khdra dahir","1991"));
console.log(addToCollection(myCollection, "bahati","mr nice","2005"));
console.log(addToCollection(myCollection, "kidalip","mwalimu","2006"));
console.log(addToCollection(myCollection, "ciigal","fartun birimo","1992"))
console.log(addToCollection(myCollection, "maryan","hawa dahir","1969"))

// second function
function showCollection(collection) {
  for (let singleCollection of collection) {
    console.log(`${singleCollection.title} by ${singleCollection.artist}, published in ${singleCollection.yearPublished}`);
  }
}

showCollection(myCollection);

// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
