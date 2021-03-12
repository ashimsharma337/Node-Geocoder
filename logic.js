
var NodeGeocoder = require("node-geocoder");
var options = require("./key.js");

var nodeArgs = process.argv;

var geocoder = NodeGeocoder(options);

var address = "";

for(var i = 2; i<nodeArgs.length; i++){

    address = address + " " +nodeArgs[i];
}

geocoder.geocode(address, function(err, data) {

  
  console.log(JSON.stringify(data, null, 2));
});

