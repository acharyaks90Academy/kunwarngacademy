
myApp.service("deleteItem", function () {

    this.rowDelete = function ($scope, index) {
        alert(index);
        console.log(index);
        $scope.MyData.splice(index, 1);
        
        

    }


})