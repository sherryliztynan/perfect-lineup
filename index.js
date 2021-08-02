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


// team.Id <2 same team
function validateTeams(lineup) {
  const teamArray = lineup.map((team) => team.teamId)

  function removeUnique(arr) {
    var newArr = []

    for (var i = 0; i < arr.length; i++) {
      var count = 1

      for (var j = i + 1; j < arr.length; j++) {
        if (arr[j] === arr[i]) {
          count++
        }
      }
      if (count > 2) {
        newArr.push(arr[i])
      }
    }

    return newArr
  }
  let correctTeams = removeUnique(teamArray)

  if (correctTeams.length > 0) {
    correctTeams = false

    return correctTeams
  }
  else {
    correctTeams = true
  }

  return correctTeams
}





