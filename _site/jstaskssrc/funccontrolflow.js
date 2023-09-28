//Task 1
function outputSentence(inputSentence){
    console.log(inputSentence);
  }
  
  //Task 2
  let firstName = "Rina";
  let lastName = "Sawayama";
  
  function combineFnameLname(inpFname, inpLname){
    let fullName = inpFname + " " + inpLname;
    outputSentence(`Full name is ${fullName}.`);
  }
  combineFnameLname(firstName, lastName);
  
  //Task 3
  function combineFnameLnameAgain(inpFname, inpLname){
    let fullName = inpFname + " " + inpLname;
    return fullName;
  }
  let influentialArtist = combineFnameLnameAgain(firstName, lastName);
  console.log(influentialArtist);
  
  //Task 4
  let temperature = 42;
  if(temperature < 0){
    outputSentence("Stay inside.");
  } else if(temperature < 30){
    outputSentence("Wear a coat and a hat.");
  } else if(temperature < 50){
    outputSentence("Wear a coat.")
  } else{
    outputSentence("Just pants and vest is fine, or a dashing summer gown.")
  }