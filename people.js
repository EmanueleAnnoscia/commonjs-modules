import { hobbies } from "./hobbies.js";
import { fullName } from "./name.js";

function peoples(){
    const personName = fullName("Mario", "Draghi")
    const personHobbies = hobbies("economia", "finanza", "cavalieri");

    return {
        fullName: personName,
        hobbies: personHobbies
    };
}

export {peoples};