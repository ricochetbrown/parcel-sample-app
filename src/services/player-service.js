export function User(name) {
    this.name = name;
}

export function Player(name) {
    User.call(this, name);
    this.card = {};
    this.knows = [];

    this.getKnown = function (players) {
        var card = this.card;
        var matches = players.filter(function(p){ 
            var match = card.knows.filter(function (c) { 
                return c == p.card.role 
            });
            return match.length;
        });
        return matches.map(function(m){ return { player: m.name, alignment: m.card.alignment } });
    }
}

export default function(){
    var players = [];
    var service = {};

    service.setInitialTechnicalOwner = function () {
        var randomIndex = Math.floor(Math.random() * players.length);
        players[randomIndex].isTechnicalOwner = true;
    }

    return service;
}