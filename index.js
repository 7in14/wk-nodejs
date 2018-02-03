'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var httpRequest = require('request');
var queryString = require('querystring');

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/ping', function (req, resp) {
    resp.end("pong");
});

app.get('/notifications', function (req, resp) {
    resp.status(204);
    resp.end();
});

/**
 * Return data from City of Raleigh Daily Police Incidents:
 * https://data.raleighnc.gov/Police/Daily-Police-Incidents/guyh-emm5.
 */
app.get('/raleigh/crime', function (req, resp) {
    var urlParams = queryString.stringify(req.query);
    console.log("urlParams: " + urlParams);
    var url = 'https://data.raleighnc.gov/resource/3bhm-we7a.json?' + urlParams;
    console.log("url: " + url);
    httpRequest.get(url, null, function (httpReqErr, httpReqResp, httpReqBody) {
        resp.end(httpReqBody);
    });
});

app.get('/notifier', function (req, resp) {
    resp.status(204);
    resp.end();
});

app.delete('/notifier/:id', function (req, resp) {
    var key = req.params.id;
    console.log('key=' + key);
    resp.status(204);
    resp.end();
});

app.put('/notifier/:id', function(req, resp) {
    var key = req.params.id;
    console.log('key=' + key);
    resp.status(204);
    resp.end();
});

/**
 * Return content from README.md.
 */
app.get('/file', function (req, resp) {
    var content = fs.readFileSync(__dirname + "/README.md", 'utf8');
    var jsonObj = {
        filename: "README.md",
        content: content
    };
    var json = JSON.stringify(jsonObj);
    resp.end(json);
});

var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port);
});
