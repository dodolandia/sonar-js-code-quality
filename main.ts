const names: Array<string> = [];

function addName(names: string[]) {
    names.push('John');
}

function main() {
    addName(names);
    console.log(names);
}

main();