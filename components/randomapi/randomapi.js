"use strict";

class randomapiStarter {
    async onStart(Mantra) { }
}

module.exports = () => {
    return {
        Start: new randomapiStarter()
    };
}