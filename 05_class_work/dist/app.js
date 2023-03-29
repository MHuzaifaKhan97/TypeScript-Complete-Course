"use strict";
// Define multiple types variable
function log(creature) {
    // not allowed here because flyingSpeed might be null
    // console.log(creature.flyingSpeed);
    // type guard check
    if ("flyingSpeed" in creature) {
        console.log(creature.flyingSpeed);
    }
}
//# sourceMappingURL=app.js.map