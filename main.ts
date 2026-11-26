import { mkdirSync, writeFileSync } from "node:fs";

function formatEntry(): string {
  const setup = "I asked my AI agent for one funny line";
  const payoff = "it billed me for the thinking time.";
  return `${setup} and ${payoff}`;
}

const ENTRY = formatEntry();

function writeEntry(text: string): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", text + "\n", "utf8");
}

writeEntry(ENTRY);
