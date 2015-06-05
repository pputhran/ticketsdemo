(function () {
    var app = angular.module('trackerApp', []);
    
    app.controller('TableController', function ($scope, $http) {
        $http.get('/issueList').success(function (data) {
            $scope.issueList = data;
        });
        
        $scope.myData = $scope.issueList;
        
        $scope.setSelectedClient = function (input) {
            // console.log($scope.issueList[0].assignee);
            
            if (this.data === undefined) {
                $scope.selectedItems = $scope.issueList;
                return $scope.selectedItems;
            }
            
            //  console.log(this.data[input]);
            var results = [];
            
            for (var i = 0; i < $scope.issueList.length; i++) {
                if ($scope.issueList[i][input] == this.data[input]) {
                    results.push($scope.issueList[i]);
                }
            }
            $scope.selectedItems = results;

            
            
        };
        
        $scope.selectedIssue = function () { 
            console.log(this.data);
        };  
    });
    
    
    app.controller('TabController', function ($scope, $http) {
        this.tab = 1;
        
        this.isSet = function (checkTab) {
            return this.tab === checkTab;
        }
        
        this.setTab = function (setTab) {
            this.tab = setTab;
        };
        
        $http.get('/issueList').success(function (data) {
            
            $scope.categoryCount = getCount(data, "category");
            $scope.projectCount = getCount(data, "project");
            $scope.assigneeCount = getCount(data, "assignee");

        });
    });
    
    //charting
    
    
    

    function getCount(data, str) {
        
        var array_elements = [];
        
        for (var i = 0; i < data.length; i++) {
            array_elements.push(data[i][str]);
        }
        
        //   console.log(array_elements);
        
        var count = {};
        var final = [];
        
        array_elements.forEach(function (i) {
            count[i] = (count[i] || 0) + 1;
        
        });
        
        //for (var i in count) {
        //    final.push({ "label": i.toString(), "value": count[i] });
        //}
        
        
        
        return count;
    }
    
    app.filter('unique', function () {
        return function (collection, keyname) {
            var output = [], 
                keys = [];
            
            angular.forEach(collection, function (item) {
                var key = item[keyname];
                if (keys.indexOf(key) === -1) {
                    keys.push(key);
                    output.push(item);
                }
            });
            
            return output;
        };
    })
    

    
 

})();