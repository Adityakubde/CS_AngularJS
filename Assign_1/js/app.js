(
    function () {
        'use strict';
        angular.module('firstApp', [])
            .controller('firstAppController', ctrl);
        ctrl.$inject = ['$scope', '$sce'];
        function ctrl($scope, $sce) {
            $scope.items = '';
            $scope.message = "";
            $scope.check = function () {
                let arrayofItems = $scope.items.split(',');
                var counter = 0;

                counter = arrayofItems.length;
                if ($scope.items) {
                    if (counter > 0 && counter < 4) {
                        $scope.message = 'Enjoy ! ';
                        var someHtmlVar = '<span class="spinner-grow text-success" role="status"><span class="sr-only">Loading...</span></span>';
                        $scope.UsedToInsertHTMLCode = $sce.trustAsHtml(someHtmlVar);
                    }

                    else if (counter >= 4) {
                        $scope.message = "Too Much ....!";
                        var someHtmlVar = '<span class="spinner-grow text-danger" role="status"><span class="sr-only">Loading...</span></span>';
                        $scope.UsedToInsertHTMLCode = $sce.trustAsHtml(someHtmlVar);
                    }
                }
                else {
                    $scope.message = "Enter Valid Data ";
                    var someHtmlVar = '<div class="spinner-grow text-dark" role="status"><span class="sr-only">Loading...</span></div>';
                    $scope.UsedToInsertHTMLCode = $sce.trustAsHtml(someHtmlVar);


                }
                $scope.count = arrayofItems.length;

            }

        }

    })()

