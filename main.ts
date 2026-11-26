import { mkdirSync, writeFileSync } from "node:fs";

function formatEntry(): string {
  const setup = "I asked my AI agent for one funny line";
  const payoff = "it billed me for the thinking time.";
  return `${setup} and ${payoff}`;
}

const ENTRY = formatEntry();

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
