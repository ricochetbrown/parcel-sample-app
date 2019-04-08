export function Votes(total, approves, rejects){
    return {
        "total": total,
        "approves": approves,
        "rejects": rejects
    }
}

export default angular.module('voting',[]).service([function(){
    var teamVotes = [];
    var service = {};
   
    service.approve = function () {
        
    }

    return service;   

}])