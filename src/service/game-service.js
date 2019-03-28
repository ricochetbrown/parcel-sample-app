export default (function(playerService){
    var service = {}

    service.isApproved = function(){
        return playerService.getPlayers().filter(function(p) { return p.approve}).length > (playerService.getPlayers().length / 2);
    }    

    return service;

});