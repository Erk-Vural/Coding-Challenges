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
 * Complete the 'kangaroo' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER x1
 *  2. INTEGER v1
 *  3. INTEGER x2
 *  4. INTEGER v2
 */

function kangaroo(x1: number, v1: number, x2: number, v2: number): string {
  // Write your code here
  if (v2 > v1) {
    return "NO";
  }
  /* 
  x1 - x2 = t * (v2 - v1)
  Kangaroos have a shared position if : 
  x1 - x2 / (v2 - v1) >= 0 // x1 is behind but faster
  x1 - x2 % (v2 - v1) === 0 // distance is common multiple of speedDiff so they can meet.
  */
  const startingPosDiff = x1 - x2;
  const speedDiff = v2 - v1;
  if (startingPosDiff % speedDiff === 0 && startingPosDiff / speedDiff >= 0) {
    return "YES";
  }
  return "NO";
}

function main() {
  const ws: WriteStream = createWriteStream(process.env["OUTPUT_PATH"]);

  const firstMultipleInput: string[] = readLine()
    .replace(/\s+$/g, "")
    .split(" ");

  const x1: number = parseInt(firstMultipleInput[0], 10);

  const v1: number = parseInt(firstMultipleInput[1], 10);

  const x2: number = parseInt(firstMultipleInput[2], 10);

  const v2: number = parseInt(firstMultipleInput[3], 10);

  const result: string = kangaroo(x1, v1, x2, v2);

  ws.write(result + "\n");

  ws.end();
}
