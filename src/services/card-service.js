export function Card(name, type, knowledge) {
    return {
        "name": name,
        "alignment": type,
        "knowledge": knowledge
    }
}

export default function(){
    var cards  = [];

    var service = {};

    service.setup = function () {
        //Hard code the 7 cards used - this will be it's own thing later
        create('The Duke', 'Dexter');
        create('Support Manager', 'Dexter');
        create('Chicken Parm', 'Dexter');
        create('Intellewater', 'Dexter');
        create('Nerlin', 'Sinister');
        create('Sniper', 'Sinister');
        create('Dev Slayer', 'Sinister');
    }

    function create(role, alignment) {
        var knowledge = {};

        if (role === "The Duke") {
            knowledge.KnowsSinister = true;
        } else if (role === "Support Manager") {
            knowledge.SeesTheDuke = true;
            knowledge.SeesDevSlayer = true;
        } else if (role === "Nerlin") {
            knowledge.KnowsSinister = true;
        } else if (role === "Sniper") {
            knowledge.KnowsSinister = true;
        } else if (role === "Dev Slayer") {
            knowledge.KnowsSinister = true;
        }

        cards.push(new Card(role, alignment));
    }

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

        return cards;
    }

    return service;
}