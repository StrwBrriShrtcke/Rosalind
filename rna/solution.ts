import * as fs from "node:fs"

const string: string = fs.readFileSync('./dataset.txt', 'utf8');

const rnaSequence: string = string.replaceAll("T", "U");

fs.writeFileSync("./answer.txt", rnaSequence);
console.log(rnaSequence)
