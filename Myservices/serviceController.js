var myApp = angular.module("serviceApp", []);

myApp.controller("serviceController", function ($scope, $timeout, $interval, $log, angularServices) {


$scope.getresult = angularServices.squareofnumber(10);

$scope.alertDemo = angularServices.myAlert;



    // Interval

    $scope.number = 0;

   $interval(function () {
        $scope.number += 1;
    }, 1000)










    // Timeout
    $scope.hello = "Hello team..."
    $timeout (function(){
        $scope.hello = "I am change by Timeout!! Thank you."

    },2000)

$scope.logTime= "hello logger!!"

$log.log($scope.logTime);
$log.warn($scope.logTime);
$log.info($scope.logTime);
$log.error($scope.logTime);


// for(var i = 0; i < 10; i++) {
    
//     (function(i){  
//         $interval(function(){
//             console.log(i);
//            $scope.number +=  $scope.number();
//         }, 1000);
//     })(i); 
// }


$scope.Mynumber=0;

$interval (function(){

$scope.Mynumber += 1;
if ($scope.Mynumber == 5){    
  //  alert("good one!!!")   
}
},1000)



})