import angular from 'angular';
import material from 'angular-material';
import 'angular-material/angular-material.css'

import services from './service.module';

angular.module('main', [material,services.name]).controller('mainController', ['gameService',
    function (gameService) {
        var vm = this;

        vm.gameInstance;
        vm.$onInit = function () { 
            vm.users = [];
            vm.users.push({name:'Parm'});
            vm.users.push({name:'Kevin'});
            vm.users.push({name:'John'});
            vm.users.push({name:'Greg'});
            vm.users.push({name:'Khbero'});
            vm.users.push({name:'Mike'});
            vm.users.push({name:'Nick'});
            
            console.log('Setting up the game');               
            vm.gameInstance = gameService.setup(vm.users);
            vm.gameInstance.start();
            console.log('First Technical Owner', vm.gameInstance.currentOwner);
            console.log('Players w/ shuffled cards', vm.gameInstance.players);
        }
    }
])
