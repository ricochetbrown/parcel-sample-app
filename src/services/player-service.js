export default function(){
    var players = [];

    var service = {};

    service.setup = function () {
        // Hard code setup to have 7 players -- will eventually get logged in users
        create("Khbero"); 
        create("Nick");
        create("Kevin");
        create("Parm");
        create("Greg");
        create("John");
        create("Mike"); 
    }
    
    function create(name) {        
        players.push({name: name});
    }

    service.getPlayers = function () {
        return players;
    }

    service.setInitialTechnicalOwner = function () {
        var randomIndex = Math.floor(Math.random() * players.length);
        players[randomIndex].isTechnicalOwner = true;
    }

    return service;
}