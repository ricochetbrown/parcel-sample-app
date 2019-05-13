export function Card(role, alignment) {   
    this.role = role;
    this.alignment = alignment;
    this.knows = [];
}

export function Duke() {
    Card.call(this, 'The Duke', 'Dexter');
    this.knows = ['Sniper', 'Dev Slayer'];
}

export default function(roleKnowledgeService){
    var cards  = [];
    var service = {};   

    service.setup = function () {
        //Eventually we will use rules to determine which cards are in the game;
        var cardsInGameType = [
            new Duke()
        ]

        cardsInGameType.forEach(function (card) {
            cards.push(card);
        });

        create('Intellewater', 'Dexter');
        create('Support Manager', 'Dexter');
        create('Chicken Parm', 'Dexter');
        create('Nerlin', 'Sinister');
        create('Sniper', 'Sinister');
        create('Dev Slayer', 'Sinister');
    }

    function create(role, alignment) {
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