import * as fs from 'node:fs'
const rnaString: string = fs.readFileSync('./dataset.txt', 'utf8');

const rnaCodon: string = fs.readFileSync("./rnacodon.txt", "utf8")
const rna: string = rnaCodon
  .replaceAll(/\w{3}\ \w{4}/g, "")
  .replaceAll(/\s/g, "")

const codonTable: object = {}

// Iterate through all elements in codonTable
for (let i: number = 0; i < rna.length; i++) {
  const start: number = i * 4
  codonTable[rna.substring(start, start + 3)] = rna[start + 3]
}

// Create array for RNA
const rnaArray: string[] = []

// Seperate rnaString into individual RNA sequences and transform these sequences into its corresponding amino acid
for (let i: number = 0; i <= rnaString.length; i+=3) {
const threeLetters = rnaString.substring(i , i + 3)
  if (threeLetters in codonTable) {
    rnaArray.push(codonTable[threeLetters])
  }
}

// Transforming Array into String
const answer: string = rnaArray.join("")
console.log(answer)
fs.writeFileSync("./answer.txt", answer)
