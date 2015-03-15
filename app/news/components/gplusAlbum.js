boomerang.directive('gplusAlbum', function () {
    return {
        scope: {
            article: '=',
            attachment: '='
        },
        templateUrl: 'gplusAlbum.html'
    }
});