import { Duke } from "./card-service";

export function User(name) {
    this.name = name;
}

export function Player(name) {
    User.call(this, name);
    this.sinister = []; //prepopulated
    this.dexter = [];

    this.getKnownAlignment = function (players, known) {
        var card = this.card;
        var matches = players.filter(function(p){ 
            var match = card.knowsAlignment.filter(function (c) { 
                return p.card instanceof c
            });
            return match.length;
        });
        return matches.map(function(m){ return { player: m.name } });
    }

    // this.getKnownPotentialRoles = function (players) {
    //     var card = this.card;
    //     var matches = players.filter(function(p){ 
    //         var match = card.knowsPotentialRoles.filter(function (c) { 
    //             return p.card instanceof c 
    //         });
    //         return match.length;
    //     });
    //     return matches.map(function(m){ return { player: m.name, potentialRoles: card.knowsPotentialRoles } });
    // }
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