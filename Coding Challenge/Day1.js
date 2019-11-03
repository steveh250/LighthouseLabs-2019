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