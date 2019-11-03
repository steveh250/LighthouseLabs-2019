// Source data for testing

    const volunteers = [
      'Sally',
      'Jake',
      'Brian',
      'Hamid'
    ];


    const neighbourhoods = [
      'Central Valley',
      'Big Mountain',
      'Little Bridge',
      'Bricktown',
      'Brownsville',
      "Paul's Boutique",
      'Clay Park',
      'Fox Nest'
    ];

// Day 1

 const doorToDoor = (volunteers, neighbourhoods) => {

 	  // Return the number of neighbourhoods each volunteer needs to visit
	 return (neighbourhoods.length / volunteers.length)
  }

  // Day 2
const interviewAnswer = (topic) => {

  if (topic === "arts funding") { return ("We'll have to get creative!")}

  if (topic === "economy") { return ("Time is money.")}

  if (topic === "transportation") { return ("It's going to be a long road, so we better get moving.")}
  
  return ("QUACK");
};