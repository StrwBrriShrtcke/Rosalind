import * as fs from 'node:fs'
const rnaString: string = fs.readFileSync('./dataset.txt', 'utf8');
const rnaCodon: string = fs.readFileSync("./rnacodon.txt", "utf8")
// const rna: string = rnaCodon
//   .replaceAll(/\w{3}\ \w{4}/g, "")
//   .replaceAll(/\s/g, "")


// Iterate through all elements in codonTable
const codonTable = {}
const rnaCodonSplit = rnaCodon.split(/\s+/g)
for (let i = 0; i < rnaCodonSplit.length; i += 2) {
  codonTable[rnaCodonSplit[i]] = rnaCodonSplit[i + 1]
}
// Create array for RNA
const rnaArray: string[] = []

// Separate rnaString into individual RNA sequences and transform these sequences into its corresponding amino acid
for (let i: number = 0; i < rnaString.length; i += 3) {
  const threeLetters = rnaString.substring(i, i + 3)
  if (codonTable.hasOwnProperty(threeLetters) && codonTable[threeLetters] !== "Stop") {
    rnaArray.push(codonTable[threeLetters])
  }
}

// Transforming Array into String
const answer: string = rnaArray.join("")
console.log(answer)
fs.writeFileSync("./answer.txt", answer)
