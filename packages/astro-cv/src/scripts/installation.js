#!/usr/bin/env node
import { fileURLToPath } from "node:url";
import { resolve, dirname } from "node:path";
import {
  readdirSync,
  statSync,
  existsSync,
  mkdirSync,
  copyFileSync,
} from "node:fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const sourceFolder = resolve(__dirname, "../content");
const destinationFolder = resolve(process.env.INIT_CWD, "src/content");

function copyDirectorySync(source, destination) {
  if (existsSync(destination)) return;
  console.log("Copying files from", sourceFolder, "to", destinationFolder);

  mkdirSync(destination);

  const files = readdirSync(source);
  for (const file of files) {
    const currentSource = resolve(source, file);
    const currentDestination = resolve(destination, file);

    if (statSync(currentSource).isDirectory()) {
      copyDirectorySync(currentSource, currentDestination);
    } else {
      copyFileSync(currentSource, currentDestination);
    }
  }
}

copyDirectorySync(sourceFolder, destinationFolder);
console.log("Content files copied successfully!");
