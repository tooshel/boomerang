boomerang.directive('gplusAlbum', function () {
    return {
        scope: {
            article: '=',
            attachment: '='
        },
        templateUrl: '/boomerang/app/news/components/gplusAlbum.html'
    }
});