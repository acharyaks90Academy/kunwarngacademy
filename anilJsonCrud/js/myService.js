

myApp.service("DeleteItem", function(){

this.removeRow = function($scope, index){

$scope.MyData.splice(index);

alert(index);

console.log($scope, index)

}


})