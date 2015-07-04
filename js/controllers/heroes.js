'use strict';

angular
    .module('starter.controllers')
    .controller('HeroesCtrl', HeroesCtrl);

function HeroesCtrl ($scope, Armory, $stateParams, $state) {
    if ($stateParams.battleTag.trim() === '') {
        $state.go('app.search');
    }

    $scope.battleTag = $stateParams.battleTag;

    Armory.getProfile({ battleTag: $scope.battleTag  }).then(function (res) {
        console.log(res.data);
        $scope.heroes = res.data.heroes
    });

    /*Armory.getHero({
        battleTag: $scope.battleTag ,
        heroId: "60410378"
    }).then(function (res) {
        console.log(res.data);
    });

    Armory.getItem({
        itemId: "Unique_Shoulder_Set_01_p2"
    }).then(function (res) {
        console.log(res.data);
        console.log(Armory.getItemImagePath({itemPath: res.data.icon}));
    });*/
}
