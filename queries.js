/* Fill out these functions using Mongoose queries*/

var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
  Listing.find({name: "Library West"}, function(err, Listing){
    if (err) throw err;
    console.log(Listing);
});
};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
  Listing.find({code: "CABL"}, function(err, Listing){
    if (err) throw err;
    user.remove(function(err) {
      if (err) throw err;
    console.log("CABL removed");
});
});
};
var updatePhelpsMemorial = function() {
  /*
    Phelps Memorial Hospital Center's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
    701 N Broadway, Sleepy Hollow, NY 10591
   */
  Listing.findOneAndUpdate({name: "Phelps Laboratory"}, {address: "701 N Broadway, Sleepy Hollow, NY 10591"}, function(err, Listing){
    if (err) throw err;
    console.log(Listing);
  });
};
var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
  Listing.find({}, function(err, Listing) {
    if (err) throw err;
  
    // object of all the users
    console.log(Listing);
  });
};

findLibraryWest();
removeCable();
updatePhelpsMemorial();
retrieveAllListings();