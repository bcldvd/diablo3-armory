'use strict';

angular
    .module('starter.controllers')
    .controller('HeroCtrl', HeroCtrl);

function HeroCtrl ($scope, Armory, $stateParams) {
    console.log($stateParams);
    $scope.battleTag = $stateParams.battleTag;

    Armory.getHero({
        battleTag: $scope.battleTag,
        heroId: $stateParams.heroId
    }).then(function (res) {
        console.log(res.data);
        $scope.hero = res.data;
    });

    Armory.getItem({
        itemId: "Unique_Shoulder_Set_01_p2"
    }).then(function (res) {
        console.log(res.data);
        console.log(Armory.getItemImagePath({itemPath: res.data.icon}));
    });
}
