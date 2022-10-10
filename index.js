function scuberGreetingForFeet(feet){
  if (feet <= 400) 
    return "This one is on me!"
  else if (feet <= 2000)
    return "That will be twenty bucks."
  else if (feet <= 2500)
    return "I will gladly take your thirty bucks." 
  else if (feet >2500)
    return "No can do."
  // Write your code here!
}

function ternaryCheckCity(destination){
  return destination === "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(comment){
  switch (comment) {
    case 'generous' : 
      return "Thank you so much.";
    case 'not as generous' :
      return "Thank you.";
    default :
      return "Bye.";


  }
  // Write your code here!
}