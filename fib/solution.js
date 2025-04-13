const { readFileSync, writeFileSync } = require("fs");
const datasetArray = readFileSync('../dataset/fib-dataset.txt', 'utf8').trim().split("\ ");
let cb = 1
let ca = 0
let nb = 0
let na = 0
for (let i = 0; i < datasetArray[0] - 1; i++) {
  na = cb + ca
  nb = ca * datasetArray[1]
  cb = nb
  ca = na
}

writeFileSync("../answer/fib-answer.txt", (nb + na).toString())
