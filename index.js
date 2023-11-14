function superbowlWin(resultsArray) {
  // Use the find() method to search for a winning result ("W")
  const winningResult = resultsArray.find(result => result.result === "W");

  // Check if a win was found
  if (winningResult) {
    // If a win is found, return the corresponding year
    return winningResult.year;
  } else {
    // If no win is found, return undefined
    return undefined;
  }
}
