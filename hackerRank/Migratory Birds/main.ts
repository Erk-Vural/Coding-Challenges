"use strict";

import { WriteStream, createWriteStream } from "fs";
process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString: string = "";
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on("data", function (inputStdin: string): void {
  inputString += inputStdin;
});

process.stdin.on("end", function (): void {
  inputLines = inputString.split("\n");
  inputString = "";

  main();
});

function readLine(): string {
  return inputLines[currentLine++];
}

/*
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function migratoryBirds(arr: number[]): number {
  // Write your code here
  let resultObject = getTypesWithCounts(arr);
  return getTypeWithMinId(resultObject);
}

function getTypesWithCounts(arr: number[]) {
  let results = [];
  let max = 0;
  let uniqueArr = new Set(arr);
  for (let uniqNum of uniqueArr) {
    let counter = 0;
    for (let j = 0; j < arr.length; j++) {
      if (uniqNum === arr[j]) {
        counter++;
      }
    }
    if (counter > max) {
      max = counter;
    }
    results.push([uniqNum, counter]);
  }
  return { results: results, max: max };
}

function getTypeWithMinId(resultObject: {
  results: number[][];
  max: number;
}): number {
  let typesWithMaxCounts = resultObject.results.filter(
    (typeWithCount) => typeWithCount[1] === resultObject.max
  );

  let minId = 5;
  for (let typeWithMaxCount of typesWithMaxCounts) {
    if (typeWithMaxCount[0] <= minId) {
      minId = typeWithMaxCount[0];
    }
  }
  return minId;
}

function main() {
  const ws: WriteStream = createWriteStream(process.env["OUTPUT_PATH"]);

  const arrCount: number = parseInt(readLine().trim(), 10);

  const arr: number[] = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  const result: number = migratoryBirds(arr);

  ws.write(result + "\n");

  ws.end();
}
