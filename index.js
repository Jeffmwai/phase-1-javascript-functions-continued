// Define the saturdayFun function
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
  }
  
  // Define the mondayWork function
  function mondayWork(task = 'go to the office') {
    return `This Monday, I need to ${task}.`;
  }
  
  // Define the wrapAdjective function
  function wrapAdjective(flair = '*') {
    return function(adjective = 'special') {
      return `You are ${flair}${adjective}${flair}!`;
    }
  }
  
  // Example usage of wrapAdjective
  const encouragingPromptFunction = wrapAdjective("!!!");
  
  // Test case for wrapAdjective
  let result = wrapAdjective("||");
  let emphatic = result("a dedicated programmer");
  
  function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
  }
  console.log(emphatic); // Output: "You are ||a dedicated programmer||!"
  