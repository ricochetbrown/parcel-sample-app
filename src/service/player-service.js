import angular from 'angular';

export default angular.module('player',[]).service('playerService',function(){
    var players = [];
    var leader = null;
    var service = {};
    service.create = function(name){        
        players.push({name: name});
    }

    service.getPlayers = function(){
        return players;
    }

    service.setLeader = function(){

    }

    service.deal = function(cards){
        players.forEach(function(p,i){            
            p.card = cards[i];
        })
    }

    return service;


})