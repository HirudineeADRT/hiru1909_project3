let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = function (event, context, callback) {
    ddb.scan({
        TableName: 'test'
    }).promise()
        .then((data) => {
            //your logic goes here
        })
        .catch((err) => {
            //handle error
        });

    callback(null, { "message": "Successfully executeqqd" });
}