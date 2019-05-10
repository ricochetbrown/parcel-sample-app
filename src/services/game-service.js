export default function(cardService){
    var _players = [];
    var service = {};
    var cards = [];

    service.setup = function (users) {
        // TODO: only get users not in game, whatevs
        users.forEach(function (user) {
            _players.push(user);
        });

        cardService.setup();
        cards = cardService.shuffle();

        return new GameInstance(_players, cards);
    }

    return service;
}

function GameInstance(players, cards) {
    this.currentOnwer = null;
    this.players = players;

    this.start = function () {
        this.players = this.players.sort(function () { return Math.random() - 0.5 });

        // assign first tech owner
        this.currentOwner = this.players[0];

        // associate players with cards
        this.players.forEach(function (p, i) {
            p.card = cards[i];
        }); 
    }
}