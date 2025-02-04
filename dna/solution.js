import fs from 'node:fs'
const string = fs.readFileSync('./rosalind_dna.txt', 'utf8');

const stringLength = string.length
let adenine = 0;
let cytosine = 0
let guanine = 0
let thymine = 0;

for (let i = 0; i < stringLength; i++) {
  if (string[i] === "A") {
    adenine++;
  } else if (string[i] === "C") {
    cytosine++
  } else if (string[i] === "G") {
    guanine++
  } else if (string[i] === "T") {
    thymine++
  }
}

const content = [adenine, cytosine, guanine, thymine,].join(" ")
console.log(content)

