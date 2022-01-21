"use strict";

const RandomGenerator = require( "../../../lib/randomgenerator" );

module.exports = {
    /*
     * Rest API /randomapi/getrandom
     * Returns a simple json with a random value:
     * {
     *    success: true,
     *    payload: { randomvalue: "<string in hex with the random value>" }
     * }
     */
    getrandom : async ( req, res ) => {
        const Mantra = res.MantraAPI;
        const payload = {
            randomvalue: RandomGenerator.getRandomString(),
            timestamp: new Date().getTime()
        };

        Mantra.PostSuccess( payload );
    }
}