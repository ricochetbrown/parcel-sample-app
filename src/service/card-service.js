import dukeService from './duke-service';

export function Card(name,type, knownToMeService){
    return {
        "name": name,
        "alignment": type,
        "knownToMe": knownToMeService
    }
}

export default function(){
    var service = {}
    var cards  = [];

    var alwaysInclude = [      
    ]

    var dexter = [
        "Support Manager",
        "Scrum Lord",
        "Chicken Parm",
        "IntelleWater",
        "Level III Dev",
        "Remote Dev I",
        "Remote Dev II",
        "Billy"
    ]

    var sinister = [        
        "Nerlin",
        "Dev Slayer",
        "Village Idiot",
        "Intern",
        "Level II Dev",
        "Max Level Dev",
        "Remote Dev",
        "Billy"
    ]

    function initialize(){
        //hard set to a 7 player game.
        cards.push(new Card("The Duke", "dexter", dukeService)); //create classes for these so they are types, and they can share information
        cards.push(new Card("Level III Dev","dexter"));
        cards.push(new Card("Support Manager","dexter"));
        cards.push(new Card("Chicken Parm","dexter"));
        cards.push(new Card("Sniper", "sinister")); //same here. something like dexter() and sinister() with variables holding know to them cardws
        cards.push(new Card("Dev Slayer", "sinister"));
        cards.push(new Card("Level II Dev", "sinister"));
    }

    initialize();

    service.shuffle = function () {
        var currentIndex = cards.length, temporaryValue, randomIndex;
      
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element.
          temporaryValue = cards[currentIndex];
          cards[currentIndex] = cards[randomIndex];
          cards[randomIndex] = temporaryValue;
        }

        //hard code game to only be 5 players.
        console.log(cards);
        return cards;        
      }

    return service;

}