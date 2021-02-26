const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {  
  let teamsName = [];  
  if (!members) {
    return false;
} else {
  for (let i = 0; i< members.length; i++) {
    if (members[i] === String(members[i])) {
    teamsName.push(members[i].trim().charAt(0).toUpperCase());
    } else {
      teamsName;
    }
  }
}
  return teamsName = teamsName.sort().join('');
}

