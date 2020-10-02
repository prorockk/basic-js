const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
 let dreamTeamName = '';
 if (Boolean(members)) {
 for (var i=0; i<members.length; i++){
   if (typeof members[i] == 'string') {
    members[i] = members[i].replace(/\s/g, '');
  dreamTeamName += members[i].charAt(0).toUpperCase();
  }
}
  return dreamTeamName.split('').sort().join('')
  }
  else return false 
};
