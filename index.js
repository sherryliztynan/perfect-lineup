/* eslint-disable no-console */
function validateLineup(lineup) {
  return validateSalary(lineup) && validateTeams(lineup) && validateGames(lineup) && validatePositions(lineup)
}
// check if salary total > $45,000)
function validateSalary(lineup) {
  let checkCorrectSalary = lineup.map((correctsalary) => correctsalary.salary)

  let combinedSalary = checkCorrectSalary.reduce((acc, num) => acc + num, 0)

  if (combinedSalary > 45000) {
    combinedSalary = false
  }
  else {
    combinedSalary = true
  }

  return combinedSalary
}








