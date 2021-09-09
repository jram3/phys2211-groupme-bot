var HTTPS = require('https');
const fs = require('fs');

var botID = process.env.BOT_ID;

function respond() {
	var request = JSON.parse(this.req.chunks[0]);
    if(request.sender_type == "bot"){
        //no communicating with other bots ;_;
        return;
    }
    //convert text obj to string
    var text = String(request.text).toLowerCase().trim();

    //load the json file
    var rawdata = fs.readFileSync('input.json');
    var input = JSON.parse(rawdata);

    var match = false;
    var i = 0;
    while(i < input.length){
        const key = input[i];
        console.log(key)
        if(key.keywords.indexOf(text) >= 0){
            match = true;
        }
        console.log(i)
        i++;
    }

    return;

	if (text) {
        var msg; //the message to be sent in the groupme

        //higher the if statement, higher the priority
        if(text.indexOf("test1234") >= 0) {
            msg = "message contains test1234";
        }
        else if(text.indexOf("test123") >= 0) {
            msg = "message contains test1234";
        }

        if(msg) {
            this.res.writeHead(200);
            postMessage(msg);
            this.res.end();
            return;
        }
	}
    console.log("message sent from " + request.name);
    this.res.writeHead(200);
    this.res.end();
}

function postMessage(_message) {
	var botResponse, options, body, botReq;

	botResponse = _message;

	options = {
		hostname: 'api.groupme.com',
		path: '/v3/bots/post',
		method: 'POST'
	};

	body = {
		"bot_id": botID,
		"text": botResponse
	};

	console.log('sending ' + botResponse + ' to botID');

	botReq = HTTPS.request(options, function (res) {
		if (res.statusCode == 202) {
			//neat
		} else {
			console.log('rejecting bad status code ' + res.statusCode);
		}
	});

	botReq.on('error', function (err) {
		console.log('error posting message ' + JSON.stringify(err));
	});
	botReq.on('timeout', function (err) {
		console.log('timeout posting message ' + JSON.stringify(err));
	});
	botReq.end(JSON.stringify(body));
}


exports.respond = respond;