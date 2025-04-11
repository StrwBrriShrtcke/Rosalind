import * as fs from "node:fs";
const dnaString: string = fs.readFileSync("../dataset/revc-dataset.txt", "utf8").trim();
const dnaStringArray: string[] = dnaString.split("")
dnaStringArray.reverse();

type Complement = { [K in Nucleotide]: Nucleotide }
type Nucleotide = "A" | "T" | "G" | "C"
const complement: Complement = { A: "T", T: "A", G: "C", C: "G" }
const answerArray = dnaStringArray.map((nucleotide: Nucleotide) => complement[nucleotide])
const answer = answerArray.join("")
console.log(answer)
fs.writeFileSync("../answer/revc-answer.txt", answer)
