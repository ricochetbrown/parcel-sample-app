export default function(){
    var service = {};
    
    service.knownToMe = function (players) {
        return players.filter(player => player.card.alignment == "sinister");
    }

    return service;
}