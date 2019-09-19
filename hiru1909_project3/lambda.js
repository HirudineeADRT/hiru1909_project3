let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = function (event, context, callback) {
    ddb.scan({
        TableName: 'test'
    }).promise()
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            console.log(err);
        });

    callback(null, { "message": "Successfully executeqqd" });
}