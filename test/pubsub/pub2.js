const
        zmq = require('zmq'),
        publisher = zmq.socket('pub'),
        subscriber = zmq.socket('sub');

    // Send a beacon message to any subscribers.
    subscriber.subscribe('');
    setInterval(function () {
        let msg = {
            data: "hi I'm pub2"
        };
        publisher.send(JSON.stringify(msg));
    }, 1000);

    // Listen on TCP port 5432.
    publisher.bind('tcp://*:5433', function (err) {
        console.log('Listening for zmq subscribers...');
    });

    subscriber.on('message', function (data) {
        let msg = JSON.parse(data);
        console.log(msg.data);
        });
    subscriber.connect('tcp://localhost:5432');

