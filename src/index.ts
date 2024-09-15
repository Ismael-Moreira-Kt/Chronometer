import { Chronometer } from './chronometer';
import * as readline from 'readline';



const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



rl.question('Enter the countdown time in seconds: ', (input) => {
    const timeInSeconds = parseInt(input);


    if (isNaN(timeInSeconds) || timeInSeconds <= 0) {
      console.log('Please enter a valid number.');
    }
});