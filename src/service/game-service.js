import angular from 'angular';
import player from './player-service';
import card from './card-service';
import cardService from './card-service';

export default angular.module('game',['player','card']).service('gameService',['playerService','cardService',function(playerService,cardService){
    var service = {}

    service.isApproved = function(){
        return playerService.getPlayers().filter(function(p) { return p.approve}).length > (playerService.getPlayers().length / 2);
    }    

    return service;

}])