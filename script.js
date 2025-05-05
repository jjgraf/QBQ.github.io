let spinny = document.querySelector(".image1");
let spinbutton = document.getElementById("spinbutton");
let spinnumber = Math.ceil(Math.random() * 360) + 360;
let windowpop = document.getElementById("popupWindow");
let choices = document.querySelectorAll(".choices");
let scorecount = 0;
let scoretext = document.getElementById("score");
let imagesrc = document.getElementById("questionimage").src;
let image = document.getElementById("questionimage");
let attempts = 1;
let points = 0;
let pointtext = document.getElementById("pointtext");
let PlsSpinAgain = document.getElementById("PleaseSpinAgain");
let questioncount = 1;
let questionnumtext = document.getElementById("questioncounter");
let finalscoreoverlay = document.getElementById("finalscore");
let finalscoretext = document.getElementById("finalscoretext");
let playagainbutton = document.getElementById("playagain");

const PokaYoke = [
  {
    questionText: "Where do the words Poka and Yoke originate?",
    choices: ["Japan", "France", "Mexico", "Turkey"],
    correctAnswer: 1,
    image: "",
    beenAnswered: false
  },
  {
    questionText: "When do we check a Poka-Yoke",
    choices: [
      "Start of every shift",
      "After a major equipment accident",
      "Both 1 and 2",
      "On the 21st of every month"
    ],
    correctAnswer: 3,
    image: "",
    beenAnswered: false
  },
  {
    questionText:
      "If an S/R Poka-Yoke fails, what should you do if the back-up mode isn't defined?",
    choices: ["Stop the machine", "Restart the machine", "Ignore it", "Cry"],
    correctAnswer: 1,
    image: "",
    beenAnswered: false
  },
  {
    questionText:
      "If the Poka-Yoke is defective, which mode allows the GAP leader to run the line?",
    choices: [
      "Emergency mode",
      "Back-up mode",
      "Default mode",
      "Foolproof mode"
    ],
    correctAnswer: 2,
    image: "",
    beenAnswered: false
  },
  {
    questionText: "What is a 'red rabbit'?",
    choices: [
      "A defective part that has escaped detection",
      "Our method to simulate a failure to make sure defective parts are detected as NOK",
      "An unforeseen incident on the production line",
      "Forvia's mascot"
    ],
    correctAnswer: 2,
    image: "images/red rabbit.png",
    beenAnswered: false
  }
];

const OkFirst = [
  {
    questionText: "Who is responsible for OK first part?",
    choices: [
      "GAP leaders",
      "Supervisors",
      "Plant Director",
      "All GAP operators"
    ],
    correctAnswer: 1,
    image: "",
    beenAnswered: false
  },
  {
    questionText:
      "What do the OK First Part items and reaction rules have to be 100% compliant with?",
    choices: [
      "Control Plan",
      "FES handbook",
      "Check-Do-Check",
      "None of these"
    ],
    correctAnswer: 1,
    image: "",
    beenAnswered: false
  },
  {
    questionText: "What should you do in case of NOK?",
    choices: [
      "Immediately destroy all NOK parts",
      "You can keep 5 NOK parts in production",
      "Identify and separate all NOK parts",
      "Cry"
    ],
    correctAnswer: 3,
    image: "",
    beenAnswered: false
  },
  {
    questionText:
      "True or false? Production can start even if the validation is pending.",
    choices: ["True", "False", "", ""],
    correctAnswer: 1,
    image: "",
    beenAnswered: false
  },
  {
    questionText:
      "How can an item be labeled on the OK First Part check sheet?",
    choices: ["OK", "NOK", "Pending validation", "Either of these options"],
    correctAnswer: 4,
    image: "",
    beenAnswered: false
  }
];

const CheckDoCheck = [
  {
    questionText: "Which is NOT a fundamental of Check-Do-Check?",
    choices: [
      "Control Plan",
      "Operator Validation",
      "Posture Check",
      "Work Instruction"
    ],
    correctAnswer: 3,
    image: "",
    beenAnswered: false
  },
  {
    questionText:
      "Check-Do-Check promotes the responsibility and accountability of...",
    choices: ["Each operator", "The supervisor", "The customers", "Peter"],
    correctAnswer: 1,
    image: "",
    beenAnswered: false
  },
  {
    questionText: "What is Check-Do-Check?",
    choices: [
      "A procedure for the GAP leader to ensure that all mistakes are eliminated by design",
      "A procedure for the operator to ensure no defect is transferred to the next workstation or to the customer",
      "A procedure for the customer to ensure that all the products he received are faultless",
      "A board game"
    ],
    correctAnswer: 2,
    image: "",
    beenAnswered: false
  },
  {
    questionText:
      "When STOP@DEFECT threshold is achieved, who is the first line of defense empowered to stop the line?",
    choices: ["The operator", "The supervisor", "Maintenance", "The CEO"],
    correctAnswer: 1,
    image: "",
    beenAnswered: false
  },
  {
    questionText:
      "In the Check-Do-Check procedure, who is responsible for creating and updating the work instructions?",
    choices: [
      "The operator",
      "The supervisor",
      "The GAP leader",
      "Both 2 and 3"
    ],
    correctAnswer: 4,
    image: "",
    beenAnswered: false
  }
];

const FinalInspection = [
  {
    questionText: "Whose point of view do Final Inspectors need to adapt?",
    choices: [
      "The worker's",
      "The car buyer's",
      "Their manager's",
      "The CEO's"
    ],
    correctAnswer: 2,
    image: "",
    beenAnswered: false
  },
  {
    questionText:
      "What is the minimum Magic Square level acceptable for being a Final Inspector on your own?",
    choices: ["Square", "U", "I", "L"],
    correctAnswer: 4,
    image: "",
    beenAnswered: false
  },
  {
    questionText: "As a Final Inspector, what are you supposed to do exactly?",
    choices: [
      "Provide feedback to Gap leader",
      "Confirm product satisfaction",
      "Identify NOK parts",
      "All of the above"
    ],
    correctAnswer: 4,
    image: "",
    beenAnswered: false
  },
  {
    questionText: "What document defines the list of your check items?",
    choices: [
      "The Inspection Path diagram",
      "The Final Inspection protocol",
      "The Ergonomics memorandum",
      "The Declaration of Independence"
    ],
    correctAnswer: 1,
    image: "",
    beenAnswered: false
  },
  {
    questionText:
      "True or false? The Temporary Quality Wall has a more extensive checklist than Final Inspection.",
    choices: ["True", "False", "", ""],
    correctAnswer: 2,
    image: "",
    beenAnswered: false
  }
];

const QRCI = [
  {
    questionText:
      "______ are essential for their knowledge about the manufacturing process. ",
    choices: ["Interns", "Maintenance workers", "Operators", "HR employees"],
    correctAnswer: 3,
    image: "",
    beenAnswered: false
  },
  {
    questionText: "When should you go back a step in the Kata QRCI Process?",
    choices: [
      "When you get additional support from a different department",
      "When you find a problem that can be broken into smaller, quicker to solve problems",
      "When you don’t have enough resource to solve a problem currently",
      "When it rains outside"
    ],
    correctAnswer: 2,
    image: "",
    beenAnswered: false
  },
  {
    questionText: "The Kata QRCI Process aims to realize ________. ",
    choices: [
      "small, sustainable solutions",
      "big wins, or an ultimate solution",
      "",
      ""
    ],
    correctAnswer: 1,
    image: "",
    beenAnswered: false
  },
  {
    questionText:
      "When using Kata QRCI, which of the following approaches should you use?",
    choices: [
      "Solve the big problem therefore solving all smaller related problems.",
      "Break any big problems into smaller ones, or quick wins, and solve them individually.",
      "",
      ""
    ],
    correctAnswer: 2,
    image: "",
    beenAnswered: false
  },
  {
    questionText: "What does PDCA stand for?",
    choices: [
      "Priority, Design, Certification, Action",
      "Prepare, Dispose, Create, Assign",
      "Plan, Do, Check, Act",
      "Please, Don't, Cook, Apples"
    ],
    correctAnswer: 3,
    image: "",
    beenAnswered: false
  },
  {
    questionText:
      "Which of the following is NOT part of the four steps in Kata QRCI process?",
    choices: [
      "Grasp the current condition",
      "Perform '5 why' root cause analysis",
      "Establish a target condition",
      "Experiment against obstacles"
    ],
    correctAnswer: 2,
    image: "",
    beenAnswered: false
  },
  {
    questionText:
      "When does it make sense to escalate KATA QRCI to the next level?",
    choices: [
      "When additional expertise is needed",
      "In case there is no supervisor availability",
      "In case of poor collaboration between the shifts",
      "In case KATE QRCI COACHING is not regular practice"
    ],
    correctAnswer: 1,
    image: "",
    beenAnswered: false
  },
  {
    questionText: "What does the word 'Kata' mean?",
    choices: [
      "Skill",
      "Improvement",
      "Form - Movement - Routine",
      "Discipline"
    ],
    correctAnswer: 3,
    image: "",
    beenAnswered: false
  },
  {
    questionText: "What is NOT part of the Kata QRCI methodology at FORVIA?",
    choices: [
      "Gain knowledge",
      "Share the lessons you learned with others",
      "Wait for direction of coach to define next step",
      "Ensure sustainable actions"
    ],
    correctAnswer: 3,
    image: "",
    beenAnswered: false
  }
];

const NonConform = [
  {
    questionText:
      "Where should all scrap parts be moved to by the end of a shift?",
    choices: [
      "Break Room",
      "Scrap Area",
      "Morning Market",
      "Supervisor's Office"
    ],
    correctAnswer: 3,
    image: "",
    beenAnswered: false
  },
  {
    questionText:
      "If a part has been selected for rework or repair, can it then be scrapped?",
    choices: ["Yes", "No", "", ""],
    correctAnswer: 1,
    image: "",
    beenAnswered: false
  },
  {
    questionText:
      "Within which period of time must the rework of a NOK part be finished?",
    choices: ["3 days", "2 days", "A week", "By the end of the shift"],
    correctAnswer: 4,
    image: "",
    beenAnswered: false
  },
  {
    questionText:
      "Which of the following statements about where parts should go are correct?",
    choices: [
      "NOK Bought out parts should go in a designated red bin",
      "Reworked or repaired parts should go in the 'yellow bin'",
      "Scrap should go in the red bin",
      "All of the above"
    ],
    correctAnswer: 4,
    image: "",
    beenAnswered: false
  },
  {
    questionText: "Do all non-conformant parts need to be marked?",
    choices: ["Yes", "No", "", ""],
    correctAnswer: 1,
    image: "",
    beenAnswered: false
  }
];

const Rework = [
  {
    questionText:
      "Rework at Forvia is a non-standard operation. Is it true or false?",
    choices: ["True", "False", "", ""],
    correctAnswer: 1,
    image: "",
    beenAnswered: false
  },
  {
    questionText: "Is the result of a repair the same as that of a rework?",
    choices: ["Yes", "No", "", ""],
    correctAnswer: 2,
    image: "",
    beenAnswered: false
  },
  {
    questionText:
      "How regularly do operators need to requalify in order to perform rework?",
    choices: ["3 years", "2 years", "5 years", "At least once per year"],
    correctAnswer: 4,
    image: "",
    beenAnswered: false
  },
  {
    questionText:
      "Can an individual operator decide upon and perform off-line rework for a part without further checking?",
    choices: ["Yes", "No", "", ""],
    correctAnswer: 2,
    image: "",
    beenAnswered: false
  }
];

const Audit = [
  {
    questionText:
      "Which part of the Forvia organization represents the customer?",
    choices: [
      "The Risk Department",
      "Plant Management",
      "The Quality Department",
      "Operators"
    ],
    correctAnswer: 3,
    image: "",
    beenAnswered: false
  },
  {
    questionText: "What can the results of a Product Audit be used for?",
    choices: [
      "As the basis for salary adjustments in a plant",
      "Proof that we can, and should, work with a different customer",
      "Evidence for re-qualification with a customer",
      "To check the safety of the plant"
    ],
    correctAnswer: 3,
    image: "",
    beenAnswered: false
  },
  {
    questionText: "How regularly are Layered Process audits performed?",
    choices: ["Daily", "Monthly", "Weekly", "Quarterly"],
    correctAnswer: 1,
    image: "",
    beenAnswered: false
  },
  {
    questionText: "Why does Forvia have audit processes in place?",
    choices: [
      "To ensure that all staff are doing their work",
      "They are the first step of all of Forvia's problem solving methodologies",
      "They are a regulatory requirement",
      "To detect if a problem starts developing in our systems, processes, or products"
    ],
    correctAnswer: 4,
    image: "",
    beenAnswered: false
  },
  {
    questionText: "How often are Product Audits carried out?",
    choices: ["1 month", "12 months", "24 months", "6 months"],
    correctAnswer: 2,
    image: "",
    beenAnswered: false
  }
];

const QBasics = [
  {
    QBName: "Poka-Yoke",
    questions: PokaYoke
  },
  {
    QBName: "Ok 1st Part",
    questions: OkFirst
  },
  {
    QBName: "Check Do-Check",
    questions: CheckDoCheck
  },
  {
    QBName: "Final Inspection",
    questions: FinalInspection
  },
  {
    QBName: "QRCI",
    questions: QRCI
  },
  {
    QBName: "Non-Conform",
    questions: NonConform
  },
  {
    QBName: "Rework",
    questions: Rework
  },
  {
    QBName: "Audit",
    questions: Audit
  }
];

function checkQB(n) {
  const adjustedValue = n % 360;

  if (adjustedValue >= 0 && adjustedValue < 45) {
    return 1;
  } else if (adjustedValue >= 45 && adjustedValue < 90) {
    return 2;
  } else if (adjustedValue >= 90 && adjustedValue < 135) {
    return 3;
  } else if (adjustedValue >= 135 && adjustedValue < 180) {
    return 4;
  } else if (adjustedValue >= 180 && adjustedValue < 225) {
    return 5;
  } else if (adjustedValue >= 225 && adjustedValue < 270) {
    return 6;
  } else if (adjustedValue >= 270 && adjustedValue < 315) {
    return 7;
  } else {
    return 0;
  }
}

function reset() {
  spinny.style.transition = "0s";
  spinny.style.transform = "rotate(0deg)";
  spinbutton.disabled = false;
  setTimeout(() => {
    spinny.style.transition = "4s";
    spinbutton.disabled = false;
  }, 50);
}

spinbutton.onclick = function beginspin() {
  spinbutton.disabled = true;
  spinnumber = Math.floor(Math.random() * 360) + 360;
  spinny.style.transform = "rotate(" + spinnumber + "deg)";
  setTimeout(popup, 4500);
  setTimeout(reset, 5000);
};

playagainbutton.onclick = function resetall() {
  attempts = 1;
  questioncount = 1;
  scorecount = 0;
  scoretext.textContent = "Score: " + scorecount + "";
  questionnumtext.textContent = "Question: " + questioncount + "/10";
  finalscoreoverlay.style.visibility =
    finalscoreoverlay.style.visibility === "visible" ? "hidden" : "visible";
  finalscoreoverlay.style.opacity =
    finalscoreoverlay.style.opacity === "1" ? "0" : "1";
};

function updatequestions(QB, q) {
  const questionText = document.getElementById("question-text");
  questionText.textContent = QBasics[QB].questions[q].questionText;
 
  image.src = QBasics[QB].questions[q].image;
  imagesrc = QBasics[QB].questions[q].image;

  if (imagesrc.trim() === "") {
    image.style.display = "none";
  } else {
    image.style.display = "inline-block";
  }
 

  choices.forEach((choice, index) => {
    const choiceText = QBasics[QB].questions[q].choices[index];

    choice.textContent = choiceText;

    if (choiceText.trim() === "") {
      choice.style.display = "none";
    } else {
      choice.style.display = "inline-block";
    }
  });
}

function flashCorrect() {
  let correctwindow = document.getElementById("correctwindow");
  correctwindow.style.visibility =
    correctwindow.style.visibility === "visible" ? "hidden" : "visible";
  correctwindow.style.opacity = correctwindow.style.opacity === "1" ? "0" : "1";
  spinbutton.disabled = false;
}
function flashIncorrect() {
  let incorrectwindow = document.getElementById("incorrectwindow");
  incorrectwindow.style.visibility =
    incorrectwindow.style.visibility === "visible" ? "hidden" : "visible";
  incorrectwindow.style.opacity =
    incorrectwindow.style.opacity === "1" ? "0" : "1";
}

function SpinAgainScreen() {
  PlsSpinAgain.style.visibility =
    PlsSpinAgain.style.visibility === "visible" ? "hidden" : "visible";
  PlsSpinAgain.style.opacity = PlsSpinAgain.style.opacity === "1" ? "0" : "1";
}

function checkCorrect(selected, QB, q) {
  if (selected === QBasics[QB].questions[q].correctAnswer) {
    if (attempts == 1) {
      points = 4;
    } else if (attempts == 2) {
      points = 3;
    } else if (attempts == 3) {
      points = 2;
    } else if (attempts > 3) {
      points = 1;
    }
    choices.forEach((button) => {
      button.disabled = true;
    });
    pointtext.textContent = "+" + points + " points";
    questioncount += 1;
    questionnumtext.textContent = "Question: " + questioncount + "/10";
    flashCorrect();
    scorecount += points;
    windowpop.style.visibility =
      windowpop.style.visibility === "visible" ? "hidden" : "visible";
    windowpop.style.opacity = windowpop.style.opacity === "1" ? "0" : "1";
    image.style.visibility = "hidden";
    attempts = 1;
    setTimeout(flashCorrect, 2000);
    if (questioncount > 10) {
      finalscoretext.textContent = scorecount + " / 40";
      finalscoreoverlay.style.visibility =
        finalscoreoverlay.style.visibility === "visible" ? "hidden" : "visible";
      finalscoreoverlay.style.opacity =
        finalscoreoverlay.style.opacity === "1" ? "0" : "1";
    }
  } else {
    flashIncorrect();
    attempts++;
    setTimeout(flashIncorrect, 1500);
  }
  scoretext.textContent = "Score: " + scorecount + "";
}

function popup() {
  let QB = checkQB(spinnumber);

  const AllAnswered = QBasics[QB].questions.every(
    (question) => question.beenAnswered
  );

  if (AllAnswered) {
    SpinAgainScreen();
    setTimeout(SpinAgainScreen, 2000);
    beginspin();
  } else {
    let q = Math.floor(Math.random() * QBasics[QB].questions.length);
    while (QBasics[QB].questions[q].beenAnswered == true) {
      q = Math.floor(Math.random() * QBasics[QB].questions.length);
    }
    choices.forEach((button) => {
      button.disabled = false;
    });
    windowpop.style.visibility =
      windowpop.style.visibility === "visible" ? "hidden" : "visible";
    windowpop.style.opacity = windowpop.style.opacity === "1" ? "0" : "1";
    updatequestions(QB, q);

    QBasics[QB].questions[q].beenAnswered = true;
    choices.forEach((choice, index) => {
      choice.onclick = () => {
        checkCorrect(index + 1, QB, q);
      };
    });
  }
}
