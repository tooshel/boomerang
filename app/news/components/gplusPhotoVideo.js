boomerang.directive('gplusPhotoVideo', function () {
    return {
        scope: {
            article: '=',
            attachment: '='
        },
        templateUrl: 'gplusPhotoVideo.html'
    }
});