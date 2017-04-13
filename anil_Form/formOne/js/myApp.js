var app = angular.module("myapp", []);
app.controller("firstController", function ($scope, $timeout) {
    //$scope.hello="Hello team!"

    // $scope.alertDelete=false;  
    $scope.datademo = ["one", "two"];
    $scope.required = false;
    $scope.savesuccessfull = true;
    $scope.editTrue = false;


    $scope.team = {
        firstname: "",
        lastname: "",
        position: "",
        office: "",
        salary: ""

    };


    $scope.myData = [{
        "slNo": 1,
        "firstname": "Anil",
        "lastname": "Kumar",
        "position": "ui/ux",
        "office": "NSF INTERNATIONAL",
        "salary": 15000
}, {
        "slNo": 2,
        "firstname": "Ashu",
        "lastname": "Tyagi",
        "position": "ui/ux Designer",
        "office": "PAYTM",
        "salary": 20000
}, {
        "slNo": 3,
        "firstname": "Himanshu",
        "lastname": "Wadhwa",
        "position": "html/css",
        "office": "WUNDERMAN",
        "salary": 19000
}, {
        "slNo": 4,
        "firstname": "Ravi",
        "lastname": "Sehravat",
        "position": "html/css",
        "office": "FOODPANDA",
        "salary": 18000
}];
    
    
   
    
  function myFunction() {
    var txt;
    var r = confirm("Press a button!");
    if (r == true) {
        txt = "You pressed OK!";
    } else {
        txt = "You pressed Cancel!";
    }
    document.getElementById("demo").innerHTML = txt;
}


    $scope.deleteRecord = function (index) {

        alert(index)
        $scope.deletedName = angular.copy($scope.myData[index].firstname);
        $scope.myData.splice(index, 1);

        $scope.alertDelete = true;
        $timeout(function () {
            $scope.alertDelete = false;

        }, 1000);
    }

    //$scope.team.salary= $scope.team.salary.split("");

    //var salary= parseFloat($scope.team.salary);


    $scope.addResult = function () {
        if ($scope.team == null || $scope.team.firstname == null || $scope.team.firstname == " " || $scope.team.lastname == null || $scope.team.lastname == " " || $scope.team.office == null || $scope.team.salary == " ") {
            //alert("please insert data");
            $scope.required = true;




        } else if (isNaN($scope.team.salary)) {
            alert("Numeric value in salary");
            return false;

        } else if ($scope.team.salary.length < 5) {
            alert("Please insert Minimum 5 digit only");
            return false;

        } else {
            $scope.myData.push({
                'firstname': $scope.team.firstname,
                'lastname': $scope.team.lastname,
                'position': $scope.team.position,
                'office': $scope.team.office,
                'salary': $scope.team.salary
            });
            $scope.team = {
                firstname: " ",
                lastname: " ",
                position: " ",
                office: " ",
                salary: " "

            };
            $scope.savesuccessfull = false;
            $scope.required = false;

            $timeout(function () {
                $scope.savesuccessfull = true;

            }, 1000);
        }

    };

    $scope.editRecord = function(index) {
       // console.log($scope.myData[index])
        $scope.team = angular.copy($scope.myData[index]);

    };


}).controller("headerMain", function ($scope) {

    $scope.hello = "Hello Angular Team!!!"

});