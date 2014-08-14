// A-Mailのコアとなるサービスのモジュール
var aMailServices = angular.module('AMail', []);

// URLとテンプレートそしてコントローラの対応関係を指定
function emailRouteConfig($routeProvider) {
  $routeProvider
    .when('/', {
      controller: ListController,
      templateUrl: 'list.html'
    })
    .when('/view/:id', {
      controller: DetailController,
      templateUrl: 'detail.html'
    })
    .otherwise({
      redirectTo: '/'
    });
}
