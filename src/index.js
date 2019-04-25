import angular from 'angular';
import material from 'angular-material';
import 'angular-material/angular-material.css'

import services from './service.module';

angular.module('main', [material,services.name]).controller('mainController', ['gameService','playerService',
    function (gameService,playerService) {
        var vm = this;

        vm.$onInit = function () {   
            playerService.setup();    
            console.log('Setting up the game');               
            gameService.setup();
            console.log('Finished setting up the game');
            console.log('Starting the game');
            gameService.start();
            console.log('Finished the game');
        }
    }
])