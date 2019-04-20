import angular from 'angular';
import material from 'angular-material';
import 'angular-material/angular-material.css'

import services from './service.module';

angular.module('main', [material,services.name]).controller('mainController', ['gameService','playerService','cardService','userStoryService',
    function (gameService,playerService,cardService,userStoryService) {
        var vm = this;
        vm.team = [];
        vm.teamAgreedUpon = false;
        vm.$onInit = function () {
            playerService.create("Doug"); // simple names will be replaced by user accounts
            playerService.create("Nick");
            playerService.create("Kevin");
            playerService.create("Parm");
            playerService.create("John");
            playerService.create("Greg");
            playerService.create("Mike");            
            //the game will explode right now if you have more players than cards. it will get smart later.                            

            // we will start with a static set of 7 cards
            // eventually we will be able to add new cards and rules and let the users pick which ones
            // go into the game they are playing
            cardService.create("The Duke", 'Dexter');
            cardService.create("Support Manager", 'Dexter');
            cardService.create("Chicken Parm", 'Dexter');
            cardService.create("Remote Dev", 'Dexter');
            cardService.create("Nerlin", 'Sinister');
            cardService.create("Sniper", 'Sinister');
            cardService.create("Dev Slayer", 'Sinister');

            // This will also have a set amount of user stories/requirements
            // This will eventually be replaced by new game modes like OS or OU stories
            userStoryService.create("OD-1", 2, 1);
            userStoryService.create("OD-2", 3, 1);
            userStoryService.create("OD-3", 3, 1);
            userStoryService.create("OD-4", 4, 2);
            userStoryService.create("OD-5", 4, 1);

            gameService.start(playerService.getPlayers(), cardService.getCards(), userStoryService.getUserStories());
        }

        vm.start = function(){
            vm.cards = cardService.shuffle(); // shuffle // determine game size                
            playerService.deal(vm.cards);
            vm.players = playerService.getPlayers();
            vm.userStories = userStoryService.getUserStories();
            vm.currentUserStory = userStoryService.getCurrent();
            vm.players.forEach(function(p){ //move this code to reset the players to the playerservice
                p.approve = false;   
                p.included = false;             
            })
            vm.nextRound();            
        }

        vm.nextRound = function(){                        
            vm.leader = playerService.roundRobin();
            //gameService.nextRound(); //move through user stories. in this service.
        }

        vm.toggleTeam = function(player){   
            vm.proposedTeam = vm.currentUserStory.team;
            var index = vm.proposedTeam.indexOf(player);
            if(index > -1){
                player.included = false;
                vm.proposedTeam.splice(index,1);
            }
            else if(vm.proposedTeam.length < 2){ //fix this to use a new TeamService.GetTeamSize(UserStory)
                player.included = true;
                vm.proposedTeam.push(player);
            }
        }

        vm.tabulateVotes = function(){
            debugger;
            vm.planningPoker = playerService.isApproved();
        }

        vm.castVote = function(player) {
            player.approve = !player.approve;

            var count = 0;
            angular.forEach(vm.players, function (player) {
                count += player.approve ? 1 : 0;
            });
            vm.teamAgreedUpon = count >= 4;
        }

        vm.onTeam = function(player){
            vm.proposedTeam = vm.currentUserStory.team;
            return vm.proposedTeam.indexOf(player) != -1;
        }

        vm.doPullRequest = function (vote) {
            userStoryService.commitVote(vote);
        }
    }
])