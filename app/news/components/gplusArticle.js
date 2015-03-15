boomerang.directive('gplusArticle', function () {
    return {
        scope: {
            article: '=',
            attachment: '='
        },
        templateUrl: '/boomerang/app/news/components/gplusArticle.html'
    }
});