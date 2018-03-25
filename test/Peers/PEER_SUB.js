const
    zmq = require('zmq'),
    publisher = zmq.socket('sub'),
    requester = zmq.socket('req'),
    publicIp = require('public-ip');


/// sub
// Subscribe to all messages.
subscriber.subscribe('');

class SUB {

    GetIPAddress() {
        // setting the connection ports and public IP :TODO IP PUBLIC functions
        var PORT = "3222";
        var IP = publicIp.v4().then((IP) => {
            requester.connect('tcp://127.0.0.1:5433');
            console.log('Worker connected to port 5433');

            requester.on('message', function (msg) {
                ar = [];
                arr = msg.toString().split(",");
                ar.push(arr);
                console.log(ar.toString());

            });

            requester.send(
                `${IP}:${PORT}`
            );
            console.log(`${IP}:${PORT}`);
        });
    }

    Subscribing() {
        // Handle messages from publisher.
        subscriber.on('message', function (data) {
            let msg = JSON.parse(data);
            console.log(msg.data);

        });

        // Connect to publisher.
        subscriber.connect('tcp://localhost:4000');
        console.log("listening")

    }

}

/// res