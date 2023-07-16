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
 * Complete the 'pickingNumbers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function pickingNumbers(a: number[]): number {
  // Sort the array in ascending order
  a.sort((x, y) => x - y);

  let result = 0;
  let currLength = 0;
  let currNumber = a[0];

  for (let i = 0; i < a.length; i++) {
    if (Math.abs(a[i] - currNumber) <= 1) {
      currLength++;
    } else {
      currNumber = a[i];
      currLength = 1;
    }
    result = Math.max(result, currLength);
  }

  return result;
}

function main() {
  const ws: WriteStream = createWriteStream(process.env["OUTPUT_PATH"]);

  const n: number = parseInt(readLine().trim(), 10);

  const a: number[] = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((aTemp) => parseInt(aTemp, 10));

  const result: number = pickingNumbers(a);

  ws.write(result + "\n");

  ws.end();
}
