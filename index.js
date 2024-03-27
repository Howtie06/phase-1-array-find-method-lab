// code your solution here
// Function for one to find if the Denver Broncos have won a Superbowl
function superbowlWin(record) {
    // Using the find() method to search for a win ("W") in the record
    const winningYear = record.find(game => game.result === "W");
  
    // If a win is found, return the year
    if (winningYear) {
      return winningYear.year;
    } else {
      // If no win is found, return undefined
      return undefined;
    }
  }