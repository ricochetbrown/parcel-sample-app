import angular from 'angular';
import material from 'angular-material';
import 'angular-material/angular-material.css'

import services from './service.module';

angular.module('main', [material,services.name]).controller('mainController', ['playerService','cardService','userStoryService',
    function (playerService,cardService,userStoryService) {
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

            userStoryService.create("OD-1", 2, 1);
            userStoryService.create("OD-2", 3, 1);
            userStoryService.create("OD-3", 3, 1);
            userStoryService.create("OD-4", 4, 2);
            userStoryService.create("OD-5", 4, 1);

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

        vm.doPullRequest = function (member, vote) {
            member.currentPR = vote;
            userStoryService.commitVote(vote);
        }
    }
])