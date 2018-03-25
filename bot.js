
console.log('Bot started..');
var Twit = require('twit')
var config = require('./config')
var T = new Twit(config)

var stream = T.stream('user');





const newLocal = stream.on('follow', function (eventMSG) {
    var text = 'Thank you for following ' + eventMSG.source.name + '. We will try our level best to keep you up.';
    T.post('statuses/update', { status: text }, function (err, data, response) {
        console.log('Posted for '+ eventMSG);
    });
});
 

