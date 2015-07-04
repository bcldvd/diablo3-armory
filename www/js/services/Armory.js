angular.module('starter.services', [])
    .factory('Armory', function($http, d3Api, $filter) {

        var api = 'https://eu.api.battle.net',
            defaultLocale = 'en_GB',
            mediaEndpoint = 'http://media.blizzard.com/d3/icons/items/',
            defaultMediaSize = 'large',
            makeRequest = function (options) {
                return api + options.endpoint
                    + '?locale=' + (options.locale || defaultLocale)
                    + '&apikey=' + d3Api.apiKey;
            };

        return {
            getProfile : function (options) {
                options.endpoint = '/d3/profile/' + $filter('pound2Dash')(options.battleTag) + '/';
                return $http.get(makeRequest(options));
            },
            getHero : function (options) {
                options.endpoint = '/d3/profile/' + $filter('pound2Dash')(options.battleTag) + '/hero/' + options.heroId;
                return $http.get(makeRequest(options));
            },
            getItem : function (options) {
                options.endpoint = '/d3/data/item/' + options.itemId ;
                return $http.get(makeRequest(options));
            },
            getItemImagePath : function (options) {
                return mediaEndpoint + (options.size || defaultMediaSize) + '/' + options.itemPath + '.png';
            }
        };
});