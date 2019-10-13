// Three steps minimum.
// Questions must depend on previous responses to questions

let readlineSync = require('readline-sync');
var planrevealed = false;
console.log("Welcome to Batman: Arkham Asylum!");
console.log("Press Ctrl+C to quit the game at any time")

gameStart();

function gameStart() {
  console.log("What do you want to do?");
  let option = readlineSync.question("Options: look around, smack a prisoner, run away. ");

  switch (option) {
    case "look around":
      console.log("You see a bunch of angry prisoners and the Joker!");

      //Options and respective function calls go here
      lookAround();
      gameStart();
      break;

    case "smack a prisoner":
      console.log("Ouch! What did I ever do to you, man?");

      //Options and respective function calls go here
      smackPrisoner();
      gameStart();
      break;

    case "run away":
      console.log("Batman: \"Bats can't run.\"");

      //Options and respective function calls go here
      gameStart();
      break;

    default:
      console.log("A prisoner punches you in the face.");
      console.log("Prisoner: \"Quit messin' around.\"");
  }
}

//Main Menu - Option 1
function lookAround() {
  let option = readlineSync.question("Options: interrogate joker, interrogate prisoner, leave room. ");

  switch (option) {
    case "interrogate joker":

      if (planrevealed === false) {
        console.log("Joker: Do I really look like a guy with a plan?");
      } else {
        console.log("How did you know?!!?!?!")
        console.log("Who ratted me out!?!?")
        console.log("Looks like I have to start the party a little early!")
        jokerfight();
        break;
      }


      //Options and respective function calls go here

      gameStart();

      break;

    case "interrogate prisoner":
      console.log("Prisoner: I swear I don't know anything!");
      console.log("Batman: I don't enjoy beating weaklings like you to a pulp. I'll just leave you alone.");
      console.log("Prisoner: Phew! That was close!");

      //Options and respective function calls go here
      gameStart();
      break;

    case "leave room":
      console.log("Batman: \"I'll deal with all of you later.\"");

      //Options and respective function calls go here
      gameStart();
      break;

    default:
      console.log("**A prison guard appears**");
      console.log("Guard: \"We can't have you hang out here for too long, the commisioner doesn't like it\"");

  }
}

//Sub-Menu - From Option 1

function jokerfight() {


}

//Main Menu - Option 2 
function smackPrisoner() {

  let option = readlineSync.question("Options: Ask about Joker, ask about Bane");

  switch (option) {
    case "ask about joker":
      console.log("Prisoner: ALRIGHT! ALRIGHT! I'll tell you everything!");
      planrevealed = true;
      console.log("**You now know the Jokers secret plan!!!**")
      break;

    case "ask about bane":
      console.log("Prisoner: Bane...Who's that?")
      break;

    default:
      console.log("**A prison guard appears**");
      console.log("Guard: \"We can't have you hang out here for too long, the commisioner doesn't like it\"");
  }
}

