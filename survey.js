const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('what is your name? Nicknames are acceptable :)', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
  rl.question('what\'s an activity you like doing?', (answer) => {
    console.log(`Thank you for your valuable feedback: ${answer}`);
    rl.question('which meal is your favorite (e.g. dinner, brunch, etc)?', (answer) => {
      console.log(`Thank you for your valuable feedback: ${answer}`);
      rl.question('what\'s your favorite thing to eat for that meal?', (answer) => {
        console.log(`Thank you for your valuable feedback: ${answer}`);
        rl.question('which sport is your absolute favorite?', (answer) => {
          console.log(`Thank you for your valuable feedback: ${answer}`);
          rl.question('what is your superpower? In a few words, tell us what you\'re amazing at!', (answer) => {
            console.log(`Thank you for your valuable feedback: ${answer}`);
            rl.close();
          });
        });
      });
    });
  });
});