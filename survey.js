const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable 😀', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
 
  rl.question('What\'s an activity you like doing?', (answer) => {
    console.log(`Thanks for the feedback: ${answer}`);
    
    rl.question('What do you listen to while doing that?', (answer) => {
      console.log(`Thanks for the feedback: ${answer}`);
    
      rl.question('Which meal is your favourite, lunch, breakfast or dinner?', (answer) => {
        console.log(`Thanks for the feedback: ${answer}`);
 
        rl.question('What\'s your favourite thing to eat for that meal?', (answer) => {
          console.log(`Thanks for the feedback: ${answer}`);

          rl.question('Which sport is your favourite?', (answer) => {
            console.log(`Thanks for the feedback: ${answer}`);

            rl.question('Whats is your super power? in a few words, tell us what you are amazing at!', (answer) => {
              console.log(`Thanks for the feedback: ${answer}`);


              rl.close();


            });
          });
        });
      });
    });
  });
});