'use strict';

angular
    .module('ABTabs', ['ngAnimate'])
    .directive('responsiveTabs', function() {
        return {
            templateUrl: './views/tabs.html',
            controller: 'TabController',
            link: function(scope) {
                scope.setIsMobile();
            }
        };
    })
    .controller('TabController', function($scope, $window) {
        const maxMobileDeviceWidth = 700;
        
        $scope.tabs = {
            tabs: [{
                label: 'Home',
                content: 'ololo'
            }, {
                label: 'Settings',
                content: 'Src'
            }, {
                label: 'Contact us',
                content: 'ololoasdas'
            }],
            activeIndex: 0
        };

        $scope.setIsMobile = function () {
            $scope.isMobile = ($window.innerWidth < maxMobileDeviceWidth);
        };

        angular.element($window).bind('resize', function() {
            $scope.$apply($scope.setIsMobile);
        });
    })
    .animation('.slide', [function() {
      return {
        enter: function(element, doneFn) {
          jQuery(element).slideIn(1000, doneFn);
        }
      }
    }]);
