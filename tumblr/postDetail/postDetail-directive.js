goog.provide('tumblr.postDetail.directive');

tumblr.postDetail.directive = function ($rootScope, $location) {
  return {
    template: [
      '<div class="postDetail">',
      '  <span class="postDetail__postId">',
      '    {{postDetailCtrl.post.id}}',
      '  </span>',
      '</div>'
    ].join(''),
    controller: 'PostDetailController',
    controllerAs: 'postDetailCtrl',
    link: function (scope, element, attrs, ctrl) {
      $rootScope.$on('$locationChangeSuccess', function () {
        var search = $location.search();
        var postId = search.detail;
        ctrl.updatePostId(postId);
      });
    }
  };
};

tumblr.postDetail.directive.$inject = [
  '$rootScope',
  '$location'
];
