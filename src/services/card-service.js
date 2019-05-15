export function Card(role, alignment) {   
    this.role = role;
    this.alignment = alignment;
    this.knowsAlignment = [];
    this.knowsPotentialRoles = [];
}

export function Duke() {
    Card.call(this, 'The Duke', 'Dexter');
    this.knowsAlignment = [Sniper, DevSlayer];

    this.isApproved = function(character){
       character.alignment == "Sinister" && !character instanceof Nerlin //this line is !!notbad
    }

    this.revealAlignment = function () {

    }
}

export function Intellewater() {
    Card.call(this, 'Intellewater', 'Dexter');
}

export function ChickenParm() {
    Card.call(this, 'Chicken Parm', 'Dexter');
}

export function SupportManager() {
    Card.call(this, 'Support Manager', 'Dexter');
    this.knowsPotentialRoles = [Duke, DevSlayer]
}

export function Sniper() {
    Card.call(this, 'Sniper', 'Sinister');
    this.knowsAlignment = [DevSlayer, Nerlin];
}

export function DevSlayer() {
    Card.call(this, 'Dev Slayer', 'Sinister');

    this.revealRole = function (character) {
        if (character instanceof SupportManager) {
            return this.role;
        }
    }

    this.revealAlignment = function (character) {
        if (character.isApproved(this)) {
            return this.alignment;
        }
    }
}

export function Intern() {
    Card.call(this, 'Intern', 'Sinister');
    this.isApproved = function(character){
        return character instanceof Nerlin;
    }
}

export function Nerlin() {
    Card.call(this, 'Nerlin', 'Sinister');
    this.knows = [Sniper, DevSlayer];
    
}

export function SuperNerlin() {
    Nerlin.call(this, "SuperNerlin", 'Dexter');
    this.knowsAlignment.push(Duke);
}

export default function(roleKnowledgeService){
    var cards  = [];
    var service = {};   

    service.setup = function (cardsInGameType) {
        cardsInGameType.forEach(function (card) {
            cards.push(card);
        });
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