'use strict';

angular
    .module('starter.controllers')
    .controller('SearchCtrl', SearchCtrl);

function SearchCtrl ($scope, $state, $filter, localStorageService) {
    $scope.vm = {};
    $scope.vm.battleTag = localStorageService.get('lastSearchedBattleTag');

    $scope.DisplayProfile = function (battleTag) {

        if (battleTag.trim() === '') {
            return false;
        }

        localStorageService.set('lastSearchedBattleTag', battleTag);

        $state.go('app.heroes', {
            battleTag: $filter('pound2Dash')(battleTag)
        });
    }
}
