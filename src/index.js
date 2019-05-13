import angular from 'angular';
import material from 'angular-material';
import 'angular-material/angular-material.css'

import services from './service.module';
import { Player } from './services/player-service';

angular.module('main', [material,services.name]).controller('mainController', ['gameService','playerService',
    function (gameService,playerService) {
        var vm = this;

        vm.$onInit = function () { 
            vm.users = [];
            vm.users.push(new Player('Parm'));
            vm.users.push(new Player('Kevin'));
            vm.users.push(new Player('John'));
            vm.users.push(new Player('Greg'));
            vm.users.push(new Player('Khbero'));
            vm.users.push(new Player('Mike'));
            vm.users.push(new Player('Nick'));
            
            console.log('Setting up the game');               
            var gameInstance = gameService.setup(vm.users);
            gameInstance.start();
            console.log('First Technical Owner', gameInstance.currentOwner);
            console.log('Players w/ shuffled cards', gameInstance.players);
        }
    }
])
