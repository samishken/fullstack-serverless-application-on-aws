// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// set the region
AWS.config.update({region: 'us-east-1'});

// Create the DynamoDB service object
var ddb = new AWS.DynamoDB();

var params = {
  
// Set attribute to get
  AttributesToGet : [
    "emailId"
  ],
  TableName: 'phonebook_app',
  Key : {
    "contactName" : {
      "S" : "Asha"
    },
      "contactNumber" : {
                "N" : "22222222"
     }
   }
}
// Get Item from DDB
  ddb.getItem(params, function(err, data) {
    if (err) {
        console.log(err);  // an error occured
	}
    else {
        console.log(data);  // successful response
      }
});

