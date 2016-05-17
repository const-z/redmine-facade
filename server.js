"use strict";

var express = require("express");
var path = require("path");
var requestProxy = require("express-request-proxy");
/////////////////////

var server = express();

server.use("/libs", express.static(path.join(__dirname, "node_modules")));
server.use("/", express.static(path.join(__dirname, "public")));

server.use((req, res, next) => {
	console.log("receive request");
	next();
});

server.get("/issue/:id", requestProxy({
	url: "http://192.168.0.196/redmine/issues/:id.json",
	query: {
		secret_key: process.env.SOMEAPI_SECRET_KEY,
		"include": "changesets,journals"
	},
	headers: {
		"X-Custom-Header": process.env.SOMEAPI_CUSTOM_HEADER,
        "Authorization": "Basic " + process.env.redmineBasicAuth
	}
}));

//starts YWRtaW46YWRtaW4=
server.listen(3300, () => {
    console.log("server listening at", 3300);
});