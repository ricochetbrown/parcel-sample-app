import angular from 'angular';

import cardService from './service/card-service';
import playerService from './service/player-service';


export default angular.module('service',[])
.service('cardService', cardService)
.service('playerService',playerService);