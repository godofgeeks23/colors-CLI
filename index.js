#!/usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";
import gradient from "gradient-string";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import { createSpinner } from "nanospinner";

// console.log(chalk.bgGreen('hi momo'));

const sleep = (ms = 2000) => new Promise((resolve) => setTimeout(resolve, ms));

// figlet("Hi !", (err, data) => {
//     console.log(gradient.pastel.multiline(data));
// });
async function welcome(){
    
    // const spinner = createSpinner().start();
    const rainbow = chalkAnimation.rainbow("CLI is Sexy 🔥");

    await sleep();
    // rainbow.stop();
}

await welcome();
