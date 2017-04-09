angular.module('myApp', []).controller('reviewCtrl', function($scope){
	$scope.review = {
		rating:'',
		shortDesc:'',
		emailID:''
	};

	$scope.reviewList = [
	{rating:5, shortDesc:"This is awesome product and worth while in 2k. I will recommend everyone go for it. I have been using it for the past 1 year.", emailID:"hw@gmail.com"},
	{rating:3, shortDesc:"Flipkart send damaged piece & still no replacement so next time I will not buy from flipkart.. Also customer care people are rude. So friends be cautious ...don't buy from this fraud company...", emailID:"ashu@gmail.com"},
	{rating:1, shortDesc:"Product is good... and got it installed on the same day of delivery...but voltas should improve on the behaviour on their service engineers...", emailID:"ravi@gmail.com"}

	];

	$scope.SubmitReview = function(){
		
		if($scope.review!=null && $scope.review.rating!=null && $scope.review.rating!='' && $scope.review.shortDesc!=null && $scope.review.shortDesc!='' && $scope.review.emailID!=null && $scope.review.emailID!=''){
			$scope.reviewList.push(angular.copy($scope.review));
			$scope.review = {
				rating:'',
				shortDesc:'',
				emailID:''
			};


		}else{

			alert("Please fill the details")
			$scope.review = {
				rating:'',
				shortDesc:'',
				emailID:''
			};
		}

	}

})