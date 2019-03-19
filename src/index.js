import angular from 'angular';
import material from 'angular-material';
import 'angular-material/angular-material.css'


angular.module('main', [material]).controller('mainController', [
    function () {
        var vm = this;
        vm.$onInit = function () {
            vm.dexter = [
                "The Duke",
                "Support Manager",
                "Scrum Lord",
                "Chicken Parm",
                "IntelleWater",
                "Level III Dev",
                "Remote Dev I",
                "Remote Dev II",
                "Billy"
            ]

            vm.sinister = [
                "Sniper",
                "Nerlin",
                "Dev Slayer",
                "Village Idiot",
                "Intern",
                "Level II Dev",
                "Max Level Dev",
                "Remote Dev",
                "Billy"
            ]
            vm.steps = {
                step_1: "Everyone close your eyes and extend your hand info a fist in front of you.",
                step_2: "Sinister Spies open your eyes, lift your thumbs, and look around to identify your fellow squad mates",
                step_3: "Sinister Spies, close your eyes and lower your thumbs.",
                step_4: "Sinister Spies, lift your thumbs.",
                step_5: "The Duke, open your eyes and make note of the Sinister Spies. Use your knowledge carefully to prevent them from closing too many Pull Requests",
                step_6: "Close your eyes and lower your thumbs.",
                step_7: "Everyone wake up."
            }
        }
    }
])