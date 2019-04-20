export function Card(name,type, knownToMeService){
    return {
        "name": name,
        "alignment": type,
        "knownToMe": knownToMeService
    }
}

export default function(){
    var service = {}
    var cards  = [];

    var alwaysInclude = [      
    ]

    var dexter = [
        "Support Manager",
        "Scrum Lord",
        "Chicken Parm",
        "IntelleWater",
        "Level III Dev",
        "Remote Dev I",
        "Remote Dev II",
        "Billy"
    ]

    var sinister = [        
        "Nerlin",
        "Dev Slayer",
        "Village Idiot",
        "Intern",
        "Level II Dev",
        "Max Level Dev",
        "Remote Dev",
        "Billy"
    ]

    service.create = function (role, alignment) {
        cards.push(new Card(role, alignment));
    }

    service.getCards = function(){
        return cards;
    }

    return service;

}