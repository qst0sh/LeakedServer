"use strict";

function updateHealth(url, info, sessionID) {
    health_f.healthServer.updateHealth(info, sessionID);
    return response_f.nullResponse();
}

function offraidEat(pmcData, body, sessionID) {
    return response_f.getBody(health_f.healthServer.offraidEat(pmcData, body, sessionID));
}

function offraidHeal(pmcData, body, sessionID) {
    return response_f.getBody(ealth_f.healthServer.offraidHeal(pmcData, body, sessionID));
}

router.addStaticRoute("/player/health/events", updateHealth);
item_f.itemServer.addRoute("Eat", offraidEat);
item_f.itemServer.addRoute("Heal", offraidHeal);