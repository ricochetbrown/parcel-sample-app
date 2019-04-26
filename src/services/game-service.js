export function GameInstance(players, cards){
    this.players = players;
    this.currentOwner = null;

    this.start = function () {
        this.setFirstOwner();
        this.assignCards();
    }

    this.setFirstOwner = function () {
        var randomIndex = Math.floor(Math.random() * this.players.length);
        this.currentOwner = this.players[randomIndex];
    }

    this.assignCards = function () { 
        this.players = this.players.sort(function () { return Math.random() - 0.5 });
        this.players.forEach(function(p,i){            
            p.card = cards[i];
        });
    }
}

export default function(cardService){
    var _players = [];
    var service = {};

    service.setup = function (users) {
        // TODO: only get users not in game, whatevs
        users.forEach(function (user) {
            _players.push(user);
        });

        cardService.setup();
        var cards = cardService.shuffle();
        return new GameInstance(_players, cards);
    } 
    
    return service;
}