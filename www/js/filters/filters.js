angular
    .module('starter.filters')
    .filter('pound2Dash', function() {
        return function(input) {
            return input.replace('#','-');
        };
    });