import angular from 'angular';

import cardService from './services/card-service';
import playerService from './services/player-service';
import gameService from './services/game-service';


export default angular.module('service',[])
.service('gameService', gameService)
.service('cardService', cardService)
.service('playerService',playerService)