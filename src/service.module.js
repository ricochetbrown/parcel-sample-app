import angular from 'angular';

import cardService from './service/card-service';
import playerService from './service/player-service';
import userStoryService from './service/user-story-service';
import dukeService from './service/duke-service';


export default angular.module('service',[])
.service('cardService', cardService)
.service('playerService',playerService)
.service('userStoryService', userStoryService)
.service('dukeService', dukeService);