const names: Array<string> = [];

function addName(name: string, names: string[]) {
    names.push(name);
}

function main() {
    addName("John", names);
    addName("Doe", names);
    console.log(names);
}

main();