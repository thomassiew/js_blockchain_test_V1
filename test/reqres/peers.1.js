/*CLIENT FUNCTIONS
1. Request for IP list every 10 minutes
2. split IP and keep into database ( refresh ip database before requesting)
3. PUB remains open for hearing
4. SUB receive data
*/

// Imports
var zmq = require('zmq'),
    requester = zmq.socket('req'),
    publicIp = require('public-ip');


// setting the connection ports and public IP :TODO IP PUBLIC functions
var PORT = "3222";
var IP = "123123123";

    requester.connect('tcp://127.0.0.1:5433');
    console.log('Worker connected to port 5433');

    requester.on('message', function (msg) {
        ar =[];
        arr = msg.toString().split(",");
        ar.push(arr);
        console.log(ar.toString());

    });

    requester.send(
        `${IP}:${PORT}`
    );
    console.log(`${IP}:${PORT}`);





// var IP = new Promise(resolve=> {
//     GetIpAddress();
// }); 

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