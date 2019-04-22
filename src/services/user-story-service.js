export default function(){
    var userStories = [];
    var service = {};

    // user story needs
    // 1. name (e.g. OD-1)
    // 2. team size (e.g. 2 players)
    // 3. fail requirements (e.g. 1 fail)
    // 4. proposed teams
    // 4a. technical owner
    // 4b. team (e.g. Doug and Nick)
    // 4c. grooming votes (e.g. 4 agreed, 3 rethrows)
    // 5. pull requests (e.g. approve and request)
    // 6. result (e.g. closed)
    
    service.create = function(name, teamSize, failRequirements){        
        userStories.push({name: name, teamSize: teamSize, failRequirements: failRequirements, rejectedTeams: [], team: [], result: ""});
    }

    service.getUserStories = function(){
        return userStories;
    }   

    service.commitVote = function (vote) {
        userStories[0].votes.push(vote);

        if (userStories[0].votes.length == userStories[0].teamSize) {
            userStories[0].result = userStories[0].votes.includes(false) ? "closed" : "merged";
        }
    }

    return service;
}