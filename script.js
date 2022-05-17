let story = 0; //keeps the story from being undefined
let form = document.getElementById("Javascript Adventure"); // get the element with matching ids
var submit = document.getElementById("continueButton");
let reset = document.getElementById("resetButton");
let answer = "";

let story_telling = {
  start: {
    //beginning of the story
    question: "Welcome to your world Adventure, where would you like to go?",
    answers: {
      a: "Forest",
      b: "Cave",
      c: "Mountain",
    },
  },
  //if they pick option A (forest)
  "1_a": {
    question:
      "You decide to go to the forest, and you meet a unicorn.  Do you...",
    answers: {
      a: "Ask him if he wants to join you on your adventure.",
      b: "Stab him and take his horn that is known to have medicinal properties.",
      c: "Wave at him and continue on your way.",
    },
  },
  "2_a": {
    question:
      "The unicorn gladly accepts your offer and you two have a wonderful day! The End",
  },
  "2_b": {
    question:
      "The unicorn turns into an angry witch and chases you out of the forest.  The End.",
  },
  "2_c": {
    question: "The unicorn gives you a ride around the forest.  The End",
  },

  //cave

  "1_b": {
    question:
      "You go to the caves and run into a scary Troll.  What do you do?",
    answers: {
      a: "Scream and run away",
      b: "Punch him in the nose",
      c: "Ask him if he wants to do yoga",
    },
  },

  "2_d": {
    question: "The Troll is confused and you run away",
  },
  "2_e": {
    question: "He cries like a baby and you apologize and give him a hug.",
  },
  "2_f": {
    question: "The Troll grabs his mat and says Namaste. The End",
  },

  "1_c": {
    question:
      "You decide to take the mountain path and meet a magic donkey. What do you do?",
    answers: {
      a: "You talk the goat into taking you on a trip and you and the magic goat go around the world.  The End.",
      b: "You ask the goat to end world hunger and you die a hero.  The End.",
      c: "You kill the goat and steal his magic.  But his magic turns evil and you turn into a blind witch.  You live out your days in the mountain caves alone.  The End.",
    },
  },
  "2_g": {
    question:
      "The fairy gladly accepts your offer and you two have a wonderful day! The End",
  },
  "2_h": {
    question:
      "The fairy turns into an angry witch and chases you out of the forest.  The End.",
  },
  "2_i": {
    question: "The fairy gives you a beautiful necklace.  The End",
  },
};

submit.addEventListener("mouseup", function () {
  //when a button on a pointing device is released while the pointer is located inside it.
  answer = form.querySelectorAll("input[type=radio]:checked")[0].value; //a lilst of the document's elements thatmatch the specified group of selectors.
  if (answer) {
    story++;
    populateForm(story + "_" + answer);
    console.log("story time!");
  }
});

// Reset Button
function resetForm() {
  document.getElementById("JavaAdventure").reset();
}
//important part...genrate answers from story:
function populateform(story) {
  var current_story = story_telling[story];
  var text = ""; //text is declared but never read//
  //for loop through all data and print out on form//
  for (var prop in current_story["answers"]) {
    if (current_story["answers"].hasOwnProperty(prop)) {
      text +=
        '<label><input type="radio" name="answer" value> = + prop + <span> + current_story [;answers;][prop] + ;</span> </label>';
    }
  }
  form.querySelector("p").innterHTML = current_story.question;
  form.querySelector("fieldset").innerHtML = text;
}

populateform("start");
