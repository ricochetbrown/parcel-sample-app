export function GameInstance(players, cards){
    this.players = players;
    this.currentOwner = null;

    this.start = function () {
        this.setFirstOwner();
        this.assignCards();
        this.nightPhase();
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

    this.nightPhase = function () {
        var players = this.players;
        this.players.forEach(function(p) {
            p.sinister = p.getKnownAlignment(players);
            //p.knowsPotentialRoles = p.getKnownPotentialRoles(players);
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

        var cardsInGameType = [
            new Duke(),
            new SupportManager(),
            new Intellewater(),
            new ChickenParm(),
            new Nerlin(),
            new Sniper(),
            new DevSlayer()
        ]
        cardService.setup(cardsInGameType); //use this set of cards
        var cards = cardService.shuffle();
        return new GameInstance(_players, cards);
    } 
    
    return service;
}