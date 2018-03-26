const PUB = require('./PEER_PUB');
const SUB = require('./PEER_SUB');
var Publisher = new PUB();
var Subscriber = new SUB();

var PORT = "4000"
var IPPORT = "4100"
var DATA = "IM PORT 4000"


Publisher.Publishing(PORT, DATA);
Subscriber.Subscribing(IPPORT,PORT);