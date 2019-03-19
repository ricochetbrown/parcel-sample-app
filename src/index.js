import angular from 'angular';
import material from 'angular-material';
import 'angular-material/angular-material.css'


angular.module('main', [material]).controller('mainController', [
    function () {
        var vm = this;
        vm.steps = {
            step_1: "Everyone close your eyes and extend your hand info a fist in front of you.",
            step_2: "Minions of Mordred open your eyes and look around so that you know all agents of Evil.",
            step_3: "Minions of Mordred close your eyes.",
            step_4: "All players should have their eyes closed and hands in a fist in front of them.",
            step_5: "Minions of Mordred - extend your thumb so that Merlin will know of you.",
            step_6: "Merlin, open your eyes and see the agents of evil.",
            step_7: "Minions of Mordred - put your thumbs down and re-form your hands into a fist.",
            step_8: "Merlin, close your eyes.",
            step_9: "All players have their eyes closed and hands in a fist in front of them.",
            step_10: "Everyone open your eyes."
        }
    }
])