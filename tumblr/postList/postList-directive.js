goog.provide('tumblr.postList.directive');

tumblr.postList.directive = function ($rootScope, $location) {
  return {
    template: [
      '<ul>',
      '  <li ng-repeat="post in postListCtrl.posts"',
      '      ng-click="postListCtrl.showDetail(post.id)">',
      '    {{post.id}}',
      '  </li>',
      '</ul>',
      '<button',
      '  ng-click="postListCtrl.prevPage()"',
      '  ng-disabled="postListCtrl.firstPage">',
      '  Previous Page',
      '</button>',
      '<button',
      '  ng-click="postListCtrl.nextPage()"',
      '  ng-disabled="postListCtrl.lastPage">',
      '  Next Page',
      '</button>'
    ].join(''),
    controller: 'PostListController',
    controllerAs: 'postListCtrl',
    link: function (scope, element, attrs, ctrl) {
      $rootScope.$on('$locationChangeSuccess', function () {
        var search = $location.search();
        var pageNumber = search.p;

        if (!pageNumber) {
          $location.search({p: '1'});
          pageNumber = '1';
          $location.replace();
        }

        ctrl.updatePageNumber(pageNumber);
      });
    }
  };
};

tumblr.postList.directive.$inject = [
  '$rootScope',
  '$location'
];
