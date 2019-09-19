let AWS = require('aws-sdk');
const sns = new AWS.SNS();
const kinesis = new AWS.Kinesis();

exports.handler = function (event, context, callback) {
    kinesis.describeStream({
        StreamName: 'K'
    }).promise()
        .then(data => {
            // your logic goes here
        })
        .catch(err => {
            // error handling goes here
        });

    sns.getTopicAttributes({
        TopicArn: 'arn:aws:sns:us-east-1:318300609668:testhiru'
    }).promise()
        .then(data => {
            // your code goes here
        })
        .catch(err => {
            // error handling goes here
        });



    callback(null, { "message": "Successfully executeqqd" });
}