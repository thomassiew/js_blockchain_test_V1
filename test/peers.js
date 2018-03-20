
var zmq = require('zmq')
    , requester = zmq.socket('req');

requester.connect('tcp://127.0.0.1:5433');

requester.on('message', function (msg) {
    console.log(msg.toString());

});

requester.send("1.1.1.1.13");






// 'use strict';
// const
//     zmq = require('zmq'),
//     requester = zmq.socket('req');

// requester.on("message", function (data) {
//     let response = JSON.parse(data);
//     console.log("Response from " + response.pid + ': ' +
//         new Date(response.timestamp));
// });

// requester.connect("tcp://localhost:5433");

// console.log('Sending request for time.');
// requester.send(JSON.stringify({
//     pid: process.pid
// }));
