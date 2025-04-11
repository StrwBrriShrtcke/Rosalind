const { readFileSync, writeFileSync } = require("fs");
const datasetArray = readFileSync('../dataset/subs-dataset.txt', 'utf8').trim().split("\n");
const stringT = datasetArray[0]
const stringS = datasetArray[1]
const answer = []

let substringIndex = stringT.indexOf(stringS, 0)
while (substringIndex > -1) {
  answer.push(substringIndex + 1)
  substringIndex = stringT.indexOf(stringS, substringIndex + 1);
}
writeFileSync("../answer/subs-answer.txt", answer.join(" "))
