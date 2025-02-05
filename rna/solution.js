import fs from 'node:fs'
let string = fs.readFileSync('./dataset.txt', 'utf8');

const rnaSequence = string.replaceAll("T", "U");
console.log(rnaSequence)
