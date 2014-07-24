'use strict';

//Global service for global variables
angular.module('mean.system').factory('Global', [

    function() {
        var _this = this;
        _this._data = {
            user: window.user,
            authenticated: false,
            isAdmin: false
        };
        if (window.user && window.user.roles) {
            _this._data.authenticated = window.user.roles.length;
            _this._data.isAdmin = window.user.roles.indexOf('admin') !== -1;
        }
        return _this._data;
    }
])
.directive('onReadFile', function ($parse) {
   return {
      restrict: 'A',
      scope: false,
      link: function(scope, element, attrs) {
         var fn = $parse(attrs.onReadFile);
 
         element.on('change', function(onChangeEvent) {
            var reader = new FileReader();
 
            reader.onload = function(onLoadEvent) {
               scope.$apply(function() {
                  fn(scope, {$fileContent:onLoadEvent.target.result});
               });
            };
 
            reader.readAsText((onChangeEvent.srcElement || onChangeEvent.target).files[0]);
         });
      }
   };
});
