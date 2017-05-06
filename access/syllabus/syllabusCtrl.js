myApp.controller('syllabusCtrl',function($scope, $rootScope){

$scope.syllabus = {
    uniqueId:'',
    subject:["Javascript", "Angular", "HTML", "CSS", "Jquery", "SASS", "NodeJS", "ReactJS"],
    startDate:'',
    duration:["3 Months", "6 Months", "1 year", "2 year"],
    category:["Basic", "Intermediate", "Advanced"],
    faculity:'',
    fee:'',
    topic:''
};

})