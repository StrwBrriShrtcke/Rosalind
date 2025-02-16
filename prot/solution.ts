import * as fs from 'node:fs'
const rnaString: string = fs.readFileSync('./dataset.txt', 'utf8');

const rnaCodon: string = fs.readFileSync("./rnacodon.txt", "utf8")
rnaCodon.trim();

const rna: string = rnaCodon.
  replaceAll(/Stop/g, "s").
  replaceAll(/\s/g, "")

const codonTable: object = {}

// Function to make the codon table from rnacodon.txt into an object
function txtToObj(number: number) {
  const start: number = number * 4
  return codonTable[rna.substring(start, start + 3)] = rna[start + 3]
}

// Iterate through all elements in codonTable
for (let i: number = 0; i < rna.length; i++) {
  txtToObj(i)
}

for (let i: number = 0; i < rnaCodon.length; i++) {
  rnaCodon.trim().substring(0, 3)
}

rnaString.trim()

// Create array for RNA
const rnaArray: string[] = []

// Function to seperate rnaString into array of individual RNA sequences
function rnaCode(start: number) {
  return rnaArray.push(rnaString.substring(start, start + 3))
}

// Seperate rnaString into individual RNA sequences and transform these sequences into its corresponding amino acid
for (let i: number = 0; i <= rnaString.length / 3 - 1; i++) {
  rnaCode(i * 3)
  if (codonTable
  [rnaArray[i]] !== undefined && codonTable[rnaArray[i]] !== "s") {
    rnaArray[i] = codonTable
    [rnaArray[i]]
  }
  else {
    rnaArray.splice(i, 1)
  }

}

// Transforming Array into String
const answer = rnaArray.join("")
console.log(answer)
fs.writeFileSync("./answer.txt", answer)
