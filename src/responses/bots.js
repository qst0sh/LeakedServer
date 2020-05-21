"use strict";

function getBots(url, info, sessionID) {
    return response_f.getBody(bots_f.generate(info, sessionID));
}

function getBotLimits(url, info, sessionID) {
    return response_f.noBody(gameplayConfig.bots.limits);
}

router.addStaticRoute("/client/game/bot/generate", getBots);
router.addStaticRoute("/client/game/bots/limits", getBotLimits);