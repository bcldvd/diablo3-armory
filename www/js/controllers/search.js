'use strict';

angular
    .module('starter.controllers')
    .controller('SearchCtrl', SearchCtrl);

function SearchCtrl ($scope, $state, $filter) {
    $scope.vm = {};

    $scope.DisplayProfile = function () {
        $state.go('app.heroes', {
            battleTag: $filter('pound2Dash')($scope.vm.battleTag)
        });
    }
}
