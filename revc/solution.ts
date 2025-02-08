import * as fs from "node:fs";
const dnaString: string= fs.readFileSync("./dataset.txt", "utf8");
const dnaStringArray:string[] = dnaString.split("")
dnaStringArray.pop()
dnaStringArray.reverse();

for (let i = 0; i < dnaStringArray.length; i++) {
  if (dnaStringArray[i] === "A") {
    dnaStringArray.splice(i, 1, "T")
  } 
  else if (dnaStringArray[i] === "T") {
    dnaStringArray.splice(i, 1, "A")
  } 
  else if (dnaStringArray[i] === "C") {
    dnaStringArray.splice(i, 1, "G")
  } 
  else if (dnaStringArray[i] === "G") {
    dnaStringArray.splice(i, 1, "C")
  } 
}
fs.writeFileSync("./answer.txt", dnaStringArray.join(""))
