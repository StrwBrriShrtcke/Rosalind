import * as fs from 'node:fs'
import { rnaCodon } from "./rnacodon";

const string: string = fs.readFileSync('./dataset.txt', 'utf8');
const array: string[]= string.split("")
array.pop()
array.pop()
const rnaArray: string[] = []

function rnaString(start: number) {
  return rnaArray.push(array.slice(start, start + 3).join(""))
}

for (let i = 0; i <= array.length; i++) {
  rnaString(i*3)
}

rnaString(0)
const proteinString: string[] = []
for (let i = 0; i < rnaArray.length; i++) {
  if (rnaCodon[rnaArray[i]] !== undefined) {
    proteinString.push(rnaCodon[rnaArray[i]])
  }
}

const answer = proteinString.join("")
console.log(answer)
fs.writeFileSync("./answer.txt", answer)

