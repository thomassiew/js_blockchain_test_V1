const
    zmq = require('zmq'),
    subscriber = zmq.socket('sub'),
    requester = zmq.socket('req'),
    publicIp = require('public-ip');


/// sub
// Subscribe to all messages.
subscriber.subscribe('');

class SUB {

    Subscribing(SVR_PORT, PEER_port) {
        // setting the connection ports and public IP :TODO IP PUBLIC functions
        var PORT = PEER_port;
        var IP = publicIp.v4().then((IP) => {
            requester.connect(`tcp://127.0.0.1:${SVR_PORT}`);
            console.log(`Worker connected to port ${SVR_PORT}`);

            requester.on('message', function (msg) {
                var arr = [];

                var arr = msg.toString().split(",");
                
                
                for (let item of arr) {
                    console.log("Current item: " + item);
                    if (item == `${IP}:${PORT}`) {
                        console.log("Same ip , not adding");
                    } else {
                        console.log("diff ip , ");
                        subscriber.connect(`tcp://${item}`);
                        console.log("listening")
                        
                    }
                }
                

            });

            requester.send(
                `${IP}:${PORT}`
            );
            subscriber.on('message', function (data) {
                let msg = JSON.parse(data);
                console.log(msg.data);
    
            });
            

        });

        
    }
}

module.exports = SUB;