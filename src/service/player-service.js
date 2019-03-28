export default function(){
    var players = [];
    var leader = null;
    var service = {};
    
    service.create = function(name){        
        players.push({name: name});
    }

    service.getPlayers = function(){
        return players;
    }

    service.deal = function(cards){
        leader = null;
        players.forEach(function(p,i){            
            p.card = cards[i];
        });
    }
    
    service.roundRobin = function(){
        //sucky logic. basically search so we don't need conditionals;    

        var index = players.indexOf(leader);  
        index  = index == players.length - 1 ?  -1 : index;      
        leader = players[index+=1];
        console.log(index,leader.name);
        return leader;
    }

    service.isApproved = function(){
        return players.filter(function(p) { return p.approve}).length > (players.length / 2);
    }    

    return service;


}