import angular from 'angular';
import material from 'angular-material';
import 'angular-material/angular-material.css'

import services from './service.module';

angular.module('main', [material,services.name]).controller('mainController', ['gameService',
    function (gameService) {
        var vm = this;

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
            gameService.setup(vm.users);
            gameInstance.start();
            console.log('First Technical Owner', gameInstance.currentOwner);
            console.log('Players w/ shuffled cards', gameInstance.players);
        }
    }
])
