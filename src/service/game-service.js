import angular from 'angular';
import player from './player-service';
import card from './card-service';
import cardService from './card-service';

export default angular.module('game',['player','card']).service('gameService',['playerService','cardService',function(playerService,cardService){
    var service = {}

    service.initialize = function(){
        //start off with user stories hardcoded to 5
        //shuffle cards
              
        
    }

    service.nextRound = function(){

    }

    return service;

}])