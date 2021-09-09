var HTTPS = require('https');

var botID = process.env.BOT_ID;

function respond() {
	var request = JSON.parse(this.req.chunks[0]);
    if(request.sender_type == "bot"){
        //no communicating with other bots ;_;
        return;
    }
    var text = String(request.text);

    console.log(text);
    this.res.writeHead(200);
    this.res.end();

	if (text) {
        //higher the if statement, higher the priority
        var msg;
        if(text.toLowerCase().indexOf("test1234") >= 0) {
            msg = "message contains test1234";
        }
        else if(text.toLowerCase().indexOf("test123") >= 0) {
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