boomerang.directive('gplusPhotoVideo', function () {
    return {
        scope: {
            article: '=',
            attachment: '='
        },
        templateUrl: '/boomerang/app/news/components/gplusPhotoVideo.html'
    }
});