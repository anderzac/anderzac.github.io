var app = angular.module("YoutubeMixer", []);
app.filter('resUrl', ['$sce', function($sce) {
	return function(val) {
		return $sce.trustAsResourceUrl(val);
	};
}]);

app.controller("MainController", ["$scope", function($scope){
	$scope.videoWidth = 480;
	$scope.videoHeight = 270;
	$scope.linkPrefix = 'https://www.youtube.com/embed/';
	$scope.videos = ['MApLqq0Lqvo', 'zBdVMFpO7uw', 'Vu893zGoGnY'];
	$scope.videoOptions = '?controls=1';
	$scope.addVideo = function(videos){
		var vidId = prompt("Enter a YouTube video ID:")
		if (vidId != null) {
			videos.push(vidId);
		}
	};
	$scope.removeVideo = function(videos){
		var index = prompt("Which one? (1, 2, 3, or etc...)");
		index -= 1;
		if (index > -1) {
			videos.splice(index, 1);
		}
	};
}]);
