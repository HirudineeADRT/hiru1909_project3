let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = function (event, context, callback) {
    //change from sigma //ktest 




    callback(null, { "message": "Successfully executed" });
}