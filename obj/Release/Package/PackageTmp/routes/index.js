
/*
 * GET home page.
 */
require('rootpath')();
//var data = require("../model");
var data = require('model');
//console.log(data);

exports.index = function (req, res) {
    res.render('index', { title: 'Express', year: new Date().getFullYear() });
};

exports.issueList = function (req, res) {
    data.getIssueList(function (err, results) {
        res.send(results);
    });
};
