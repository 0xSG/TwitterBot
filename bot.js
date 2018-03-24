
console.log('Bot started..');
var Twit = require('twit')
var config = require('./config')
var T = new Twit(config)

var stream = T.stream('user');





const newLocal = stream.on('follow', function (eventMSG) {
    var text = 'Thank you for following @' + eventMSG.source.name + ' ';
    T.post('statuses/update', { status: text }, function (err, data, response) {
        console.log('Posted');
    });
});
 
T.get('search/tweets', { q: 'apple', count: 100 }, function(err, data, response) {
    var tweets = data.statuses
    for (var i= 0 ; i< tweets.length;i++){
        if(i==10){
        var text = tweets[i].text;
            console.log(text);
        }
    }
  })

