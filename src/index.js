import angular from 'angular';
import material from 'angular-material';
import 'angular-material/angular-material.css'

import player from './service/player-service';
import card from './service/card-service';
import cardService from './service/card-service';
import { chmod } from 'fs';
import gameService from './service/game-service';


angular.module('main', [material,player.name,card.name]).controller('mainController', ['playerService','cardService',
    function (playerService,cardService) {
        var vm = this;
        vm.$onInit = function () {
            playerService.create("Doug"); // simple names will be replaced by user accounts
            playerService.create("Bob");
            playerService.create("Homer");
            playerService.create("Bart");
            playerService.create("Lisa");
            //the game will explode right now if you have more players than cards. it will get smart later.            
        


                   

            vm.steps = {
                step_1: "Everyone close your eyes and extend your hand info a fist in front of you.",
                step_2: "Sinister Spies open your eyes, lift your thumbs, and look around to identify your fellow squad mates",
                step_3: "Sinister Spies, close your eyes and lower your thumbs.",
                step_4: "Sinister Spies, lift your thumbs.",
                step_5: "The Duke, open your eyes and make note of the Sinister Spies. Use your knowledge carefully to prevent them from closing too many Pull Requests",
                step_6: "Close your eyes and lower your thumbs.",
                step_7: "Everyone wake up."
            }
            vm.start();
        }

        vm.start = function(){
            vm.cards = cardService.shuffle(); // shuffle // determine game size                
            playerService.deal(vm.cards);
            vm.players = playerService.getPlayers();
            vm.nextRound();            
        }

        vm.nextRound = function(){
            vm.leader = playerService.roundRobin();
            //gameService.nextRound(); //move through user stories. in this service.
        }
    }
])