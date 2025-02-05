import * as fs from 'node:fs'
const string: string = fs.readFileSync('./dataset.txt', 'utf8');

let adenine: number = 0;
let cytosine: number = 0
let guanine: number = 0
let thymine: number = 0;

for (let i = 0; i < string.length; i++) {
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

const content: string = [adenine, cytosine, guanine, thymine].join(" ")
console.log(content)

