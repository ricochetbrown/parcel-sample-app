export default function(cardService){
    var _players = [];
    var service = {};
    var cards = [];

    service.setup = function (users) {
        // TODO: only get users not in game, whatevs
        users.forEach(function (user) {
            _players.push(user);
        });

        cards = cardService.shuffle();

        return new GameInstance(_players, cards);
    }

    service.start = function () {
        
    }

    return service;
}

function GameInstance(players, cards) {
    console.log(players, cards);
}