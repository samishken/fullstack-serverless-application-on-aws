// Import SDK Library
var AWS = require('aws-sdk');
// Set AWS Location
AWS.config.update({region: "us-east-1"});
// Use Dynamo DB DOCUMENT CLIENT CLASS
var documentClient = new AWS.DynamoDB.DocumentClient();
// Library to read the files
var fs = require("fs");
// Use Sleep npm module for halting the execution
var sleep = require("sleep");
// Read the contacts JSON file
var musicData = fs.readFileSync("contacts_data.json");
// Parse the JSON
var jsonContent = JSON.parse(musicData);

for (entry in jsonContent) {
	console.log("This is the entry")
	console.log(jsonContent[entry])
	
	var params = {
		TableName : "phonebook_app",
		Item: jsonContent[entry]
	};
	
	documentClient.put(params, function(err, data) {
		if (err) console.log(err);
		else console.log(data);
	});
	// Halt the execution for few milliseconds
	sleep.msleep(500);
}
