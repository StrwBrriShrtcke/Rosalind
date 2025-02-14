import * as fs from 'node:fs'
const rnaString: string = fs.readFileSync('./dataset.txt', 'utf8');

const rnaCodon = fs.readFileSync("./rnacodon.txt", "utf8")
rnaCodon.trim();

const rna = rnaCodon.replaceAll(/\w{3}\ \w{4}/g, "").replaceAll(/\s/g, "")

const codonTable: object = {}

// Function to make the codon table from rnacodon.txt into an object
function txtToObj(start: number) {
  return Object.defineProperties(codonTable
    , { [rna.substring(start * 4, start * 4 + 3)]: { value: rna[start * 4 + 3] } })
}

// Iterate through all elements in codonTable
for (let i = 0; i < rna.length; i++) {
  txtToObj(i)
}

for (let i = 0; i < rnaCodon.length; i++) {
  rnaCodon.trim().substring(0, 3)
}

rnaString.trim()

// Create array for RNA
const rnaArray: string[] = []

// Function to seperate string of letters into array of individual RNA sequences
function rnaCode(start: number) {
  return rnaArray.push(rnaString.substring(start, start + 3))
}

// Iterate through rnaString
for (let i = 0; i <= rnaString.length / 3 - 1; i++) {
  rnaCode(i * 3)
}

// Transforming rna sequence into coresponding amino acid
for (let i = 0; i < rnaArray.length; i++) {
  if (codonTable
  [rnaArray[i]] !== undefined) {
    rnaArray[i] = codonTable
    [rnaArray[i]]
  }
  else if (codonTable
  [rnaArray[i]] === undefined) {
    rnaArray[i] = "stop"
  }
}

// removing stop codons and transforming array into string
const answer = rnaArray.filter((x) => x !== "stop").join("")
console.log(answer)
fs.writeFileSync("./answer.txt", answer)
