#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bold.blueBright("\n \tWelcome to word counter"));
console.log("=".repeat(50));

let answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message:chalk.yellowBright("Enter a Sentence"),
    }
]);

let words = answers.Sentence.trim().split(" ");
console.log("=".repeat(50));
console.log(chalk.bold.yellowBright("- Sentence Words:"));
console.log(words);
console.log(chalk.bold.yellowBright(`\n - Word Count: ${chalk.bold.red(words.length)}`));
console.log("=".repeat(50));