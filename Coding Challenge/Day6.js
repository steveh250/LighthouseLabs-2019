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

    const name = 'Sally';
    const votes = [
      0, // Tim
      2, // Sally
      1 // Beth
    ]

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

// Day 3
// Remember, the possible candidates are: Tim, Sally, and Beth (in that order)
const castVote = (name, votes) => {
  // Check to see who the votes are for (note ++ works as well)
  
  if (name === "Tim") { votes[0]+=1; }
  
  if (name === "Sally") { votes[1]+=1; }

  if (name === "Beth") { votes[2]+=1; }

  // Return the votes
  return (votes);
};

// Day 4
const registerToVote = (name, unregisteredVoters) => {
  // Code here

for( var i = 0; i < unregisteredVoters.length; i++){ 
   if ( unregisteredVoters[i] === name ) {
     unregisteredVoters.splice(i, 1); 
   }
}

  // Remember to return a value
  return(unregisteredVoters);
};

// Day 5
const chooseStations = (stations) => {
  // Array to store statsions we find
  let goodStations = [];
  
  // Identify stations >= 20 that are schools or community centers 
  for (var i=0; i < stations.length; i++) {
    if (stations[i][1] >= 20 && (stations[i][2] === "school" || stations[i][2] === "community centre")) {
      // Add the station to the array
      goodStations.push(stations[i][0]);
    }
  }
  
  // Lets return the array of good stations
  return(goodStations);
};

// Day 6
const voterTurnout = (voter_signatures, voter_ids) => {
  
  // Check Array lengths
  if (voter_signatures.length !== voter_ids.length) return false;
  
  // Lengths are the same so lets compare the contents
  if (JSON.stringify(voter_signatures) == JSON.stringify(voter_ids)) return "All clear, we can count the votes!";
  
  // They must comntain different strings
  return "FRAUD!";
  
};