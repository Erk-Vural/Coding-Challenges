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
 * Complete the 'viralAdvertising' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

function viralAdvertising(n: number): number {
  // Write your code here
  let cumulativeSum = 0;

  let shared = 5;
  for (let i = 0; i < n; i++) {
    const liked = Math.floor(shared / 2);
    shared = liked * 3;
    cumulativeSum += liked;
  }

  return cumulativeSum;
}

function main() {
  const ws: WriteStream = createWriteStream(process.env["OUTPUT_PATH"]);

  const n: number = parseInt(readLine().trim(), 10);

  const result: number = viralAdvertising(n);

  ws.write(result + "\n");

  ws.end();
}
