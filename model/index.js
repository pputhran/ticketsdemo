// the index file within the models folder contains the getIssueList function
// which will seed the data from issueList file. In real world, this would loaded from DB

(function (data) {
    
    var seedData = require('./issuelist.js');
    data.getIssueList = function (next) {        
        next(null, seedData.issueList);
    };

})(module.exports);