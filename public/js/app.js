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
    .controller('TabController', function($scope, $window, $timeout) {
        const maxMobileDeviceWidth = 700;
        
        $scope.tabs = {
            tabs: [{
                label: 'Home',
                content: 'ololo'
            }],
            activeIndex: 0
        };

        $scope.setIsMobile = function () {
            $scope.isMobile = ($window.innerWidth < maxMobileDeviceWidth);
        };

        $timeout(Array.prototype.push.bind($scope.tabs.tabs, {
            label: 'Settings',
            content: 'Src'
        }, {
            label: 'Contact us',
            content: 'ololoasdas'
        }), 5000);

        $scope.showMultipleTabs = function () {
            return $scope.tabs.tabs && $scope.tabs.tabs.length > 1;
        }

        angular.element($window).bind('resize', function() {
            $scope.$apply($scope.setIsMobile);
        });
    });
