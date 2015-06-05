
/*
 * GET home page.
 */
require('rootpath')();
var data = require('model');


exports.index = function (req, res) {
    res.render('index', { title: 'Express', year: new Date().getFullYear() });
};

// route /issueList which returns data in JSON format. 
// This route can be used by front end to make a service call.

exports.issueList = function (req, res) {
    data.getIssueList(function (err, results) {
        res.send(results);
    });
};
