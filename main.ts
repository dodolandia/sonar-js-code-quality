import { addName } from "./controller";

const names: Array<string> = [];

function main() {
    addName("John", names);
    addName("Doe", names);
    console.log(names);
}

main();