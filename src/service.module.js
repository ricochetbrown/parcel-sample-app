import angular from 'angular';

import cardService from './services/card-service';
import gameService from './services/game-service';


export default angular.module('service',[])
.service('gameService', gameService)
.service('cardService', cardService)