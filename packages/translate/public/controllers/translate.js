'use strict';

angular.module('mean.translate').controller('TranslateController', ['$scope','$http', 'Global', 'Translate',
    function($scope, $http ,Global, Translate) {
        $scope.global = Global;
        $scope.package = {
            name: 'translate'
        };

        $scope.clickFileOrText = function(click) {
          if (click == 'file') {
            $scope.file = true;
          }

          if (click == 'text') {
            $scope.file = false;
            $scope.content = null;
            $scope.fileUpload = null;
          }
        }

        $scope.showContent = function($fileContent){
          $scope.file = true
          $scope.content = $fileContent;
        };

        $scope.translate = function() {
      		var text;
          if ($scope.content)
            text = $scope.content;
          else
            text = $scope.txt;

          var data = {
          		'srce':$scope.srce,
          		'tget':$scope.tget,
          		'txt' : text
          	};
      		
          $http.post('/translate',data)

          .success(function(data){
              
              for (var key in data) {
                var text = data[key];
              };

              $scope.isSuccess = true;
              var element = document.createElement('a');
              element.href = 'data:text/plain;charset=utf-8,' + encodeURI(text);
              element.target = '_blank';
              element.download = 'myFile.txt';

              element.innerHTML = 'Download';
              document.getElementById('download').innerHTML = '';
              document.getElementById('download').appendChild(element);

              
              $scope.element = element;
              $scope.text = text;
      		})
          
          .error(function(error){
            $scope.isSuccess = false;
            $scope.err = error;
          });
      	
        };
    }
]);
