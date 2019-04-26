export default function(cardService){
    var _players = [];
    var service = {};

    service.setup = function (users) {
        // TODO: only get users not in game, whatevs
        users.forEach(function (user) {
            _players.push(user);
        });

        return new GameInstance(_players, cards);
    } 
    
    return service;
}