export function DukeKnowledge() {
    return {
        'isMatch': function (role) {
            return role === 'The Duke';
        },
        'knowledge': {
            'knowsSinister': true,
            'seesNerlin': false
        }
    }
}

export function SupportManagerKnowledge() {
    return {
        'isMatch': function (role) {
            return role === 'Support Manager';
        },
        'knowledge': {
            'seesDuke': true,
            'seesDevSlayer': true,
        }
    }
}

export function NerlinKnowledge() {
    return {
        'isMatch': function (role) {
            return role === 'Nerlin';
        },
        'knowledge': {
            'knowsSinister': true
        }
    }
}

export function SniperKnowledge() {
    return {
        'isMatch': function (role) {
            return role === 'Sniper';
        },
        'knowledge': {
            'knowsSinister': true,
            'seesNerlin': true
        }
    }
}

export function DevSlayerKnowledge() {
    return {
        'isMatch': function (role) {
            return role === 'Dev Slayer';
        },
        'knowledge': {
            'knowsSinister': true,
            'seesNerlin': true
        }
    }
}

export default function(){
    var knowledgeRules = [
        new DukeKnowledge(),
        new SupportManagerKnowledge(),
        new NerlinKnowledge(),
        new SniperKnowledge(),
        new DevSlayerKnowledge()
    ];

    var service = {};

    service.getKnowledge = function (role) {
        var rule = knowledgeRules.filter(function (x) { return x.isMatch(role) });
        return rule.length ? rule[0].knowledge : {};
    }

    return service;
}