'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');
  var theList;
   

/* Connect to your database */
mongoose.connect(config.db.uri);
fs.readFile('listings.json', 'utf8', function (err, data) {
  var tempConvert = data;
  theList = JSON.parse(tempConvert);
  /*console.log(data[1]);*/
  /*console.log(theList)*/
  console.log(theList.entries.length)
  for(var i=0;i<theList.entries.length;i++){
    if(theList.entries[i].coordinates == undefined){
      var temp = new Listing({
        code: theList.entries[i].code,
        name: theList.entries[i].name
    });
  }
  else{
    var temp = new Listing({
    code: theList.entries[i].code,
    name: theList.entries[i].name,
    coordinates: {
      latitude: theList.entries[i].coordinates.latitude, 
      longitude: theList.entries[i].coordinates.longitude
    },
    address: theList.entries[i].address
    });
  }

    temp.save(function(err){
    if (err) throw err;
    console.log('saved');
    });
    }
});




/* 
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 
 */


/* 
  Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */