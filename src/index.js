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

            vm.me = vm.users[0];
            
            console.log('Setting up the game');               
            var gameInstance = gameService.setup(vm.users);
            gameInstance.start();
            console.log('First Technical Owner', gameInstance.currentOwner);
            console.log('Players w/ shuffled cards', gameInstance.players);

            console.log('Parm character', vm.me);

            //given player return the stuff I can see

            // var data = gameInstance.getPlayers(me); //me is a player

            // //data = {
            //     sinister: [],
            //     dexter: [],
            //     characters: {
            //         duke: [player1, player2],
            //         sniper: [player3,player4]
            //     }
            // }



        }
    }
])
