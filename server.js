"use strict";

var express = require("express");
var requestProxy = require('express-request-proxy');
/////////////////////

var server = express();

server.get('/issue/:id', requestProxy({
	url: "http://192.168.1.39/redmine/issues/:id.json",
	query: {
	  secret_key: process.env.SOMEAPI_SECRET_KEY,
	  "include": "changesets,journals"
	},
	headers: {
		"X-Custom-Header": process.env.SOMEAPI_CUSTOM_HEADER,
        "Authorization":"Basic YWRtaW46YWRtaW4="
	}
}));

//starts
server.listen(3300, () => {
    console.log("server listening at", 3300);
});