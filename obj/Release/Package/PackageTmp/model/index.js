(function (data) {
    
    var seedData = require('./issuelist.js');
    data.getIssueList = function (next) {        
        next(null, seedData.issueList);
    };

})(module.exports);