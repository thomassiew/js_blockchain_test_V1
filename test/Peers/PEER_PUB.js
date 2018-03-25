const
    zmq = require('zmq'),
    publisher = zmq.socket('pub');

class PUB {
    
    Publishing(port,data) {

        // Send a beacon message to any subscribers.
        // temporarily only until we can have a input output from clients
        // currently just using interval to establish ceonnection checks
        setInterval(function () {
            var i = `${data}`
            let msg = {
                data: i
            };
            
            publisher.send(JSON.stringify(msg));
        }, 1000);

        // Listen on TCP port 4000.
        publisher.bind(`tcp://*:${port}`, function () {
            console.log(`Listening for zmq subscribers... on tcp://*:${port}`);
            
        });
        

    }
}


module.exports = PUB;