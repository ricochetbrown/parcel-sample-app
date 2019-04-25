export default function(playerService, cardService){
    var _players = [];
    var service = {};

    service.setup = function () {
        _players = playerService.getPlayers();
        playerService.setInitialTechnicalOwner();
        cardService.setup();
        cardService.shuffle();
    }

    // start game
    service.start = function () {
        cardService.deal(_players);
        console.log("Players dealt cards", _players);
    }
    
    return service;
}