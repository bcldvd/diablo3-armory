'use strict';

angular
    .module('starter.controllers')
    .controller('HeroCtrl', HeroCtrl);

function HeroCtrl ($scope, Armory, $stateParams, $firebaseObject, $firebaseArray) {
    var firebaseUrl = 'https://glowing-inferno-3608.firebaseio.com/',
        profilesUrl = firebaseUrl + 'profiles/',
        fireRef = new Firebase(firebaseUrl);

    $scope.heroStatistics = $firebaseObject(fireRef.child('profiles').child($stateParams.battleTag + '-' + $stateParams.heroId));

    console.log($scope.heroStatistics, firebaseUrl);

    $scope.like = function (heroStatistics) {
        heroStatistics.likes ? heroStatistics.likes +=1 : 1;
        heroStatistics.$save();
    };



    // TOP 10 example :
    // $firebaseArray(customersRef.$ref().orderByChild('CreatedAt').limitToFirst(10))

    $scope.battleTag = $stateParams.battleTag;

    Armory.getHero({
        battleTag: $scope.battleTag,
        heroId: $stateParams.heroId
    }).then(function (res) {
        console.log(res.data);
        $scope.hero = res.data;
    });

    /*Armory.getItem({
        itemId: "Unique_Shoulder_Set_01_p2"
    }).then(function (res) {
        console.log(res.data);
        console.log(Armory.getItemImagePath({itemPath: res.data.icon}));
    });*/
}
