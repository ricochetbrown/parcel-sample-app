export default function(){
    var service = {};

    // start game
    service.start = function (players, cards, userStories) {
        console.log('Starting the game');
        shuffle(cards);
        console.log('Shuffle cards', cards);
        deal(players, cards);
        console.log('Assign cards to players', players);
        setTechnicalOwner(players);
        console.log('Assign first technical owner', players.filter(p => p.isTechnicalOwner)[0]);

        //simulate going through user stories (controlled by user UI actions)
        userStories.forEach(function (u) {
            addPlayersToProposedTeam(u, players);
            console.log(u.name + ' Proposed Team', u.team);
            pointUserStory(u, players);
            players.forEach(function (p) {
                console.log(p.name + ' points it ' + p.pointing.filter(po => po.userStoryName == u.name)[0].points);
            });
        });
    }
    // 1. shuffle cards and assign to players
    function shuffle(cards) {
        var currentIndex = cards.length, temporaryValue, randomIndex;
      
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element.
          temporaryValue = cards[currentIndex];
          cards[currentIndex] = cards[randomIndex];
          cards[randomIndex] = temporaryValue;
        }
    }
    function deal(players, cards) {
        players.forEach(function(p,i){            
            p.card = cards[i];
        });
    }
    // 2. randomly select first team owner
    function setTechnicalOwner(players) {
        var randomIndex = Math.floor(Math.random() * players.length);
        players[randomIndex].isTechnicalOwner = true;
    }

    function addPlayersToProposedTeam(userStory, players) {
        for (var i = 0; i < userStory.teamSize; i++) {
            userStory.team.push(players[i]);
        }
    }
    function pointUserStory(userStory, players) {
        players.forEach(function (p) {
            var points = Math.random() >= 0.5;
            point(p, userStory, points);
        });
    }
    function point(player, userStory, points) {
        player.pointing.push({ userStoryName: userStory.name, team: userStory.team, points: points });
    }
    // going through user stories
    // 1. team owner selects team
    // 2. everyone votes on team
    // 3b. If rejected, repeat steps 2-3
    // 3c. If same user story rejected 5 times, spies automatically win
    // 4. players on team do their PRs
    // 4a. dexter must always vote to approve changes
    
    // end game
    // 1. Dexter wins when three user stories are approved
    // 2. Sinister wins when three user stories request changes

    return service;
}