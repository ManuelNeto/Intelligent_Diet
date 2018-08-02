const SEDENTARIO = 1.2;
const LEVE = 1.375;
const MODERADO = 1.550;
const INTENSO = 1.725;

function _calculateCarbo(cal){


}
function _calculateProtein(cal){


}
function _calculateFat(cal){


}

function _calculateTotalDailyCalories(user) {
  if(user.levelOfPhysicalActivity == "sedentario"){
    return onGoal(user,calculateTBM(user) * SEDENTARIO);
  }else if(user.levelOfPhysicalActivity == "leve"){
    return onGoal(user,calculateTBM(user) * LEVE);
  }else if(user.levelOfPhysicalActivity == "moderado"){
    return onGoal(user,calculateTBM(user) * MODERADO);
  }else{
    return onGoal(user,calculateTBM(user) * INTENSO);
  }
}

function calculateTBM(user) {
  if(user.gender == "Mulher"){
    return (655.1 + (9.5 * user.weight) + (1.8 * user.height) - (4,7 * user.age));
  }else{
    return (66.5 + (13.8 * user.weight) + (5 * user.height) - (6.8 * user.age));
  }
}

function onGoal(user,  totalCal){
  if(user.goal == "Emagrecer"){
    return totalCal - totalCal * 0.2;
  }else if(user.goal == "Engordar"){
      return totalCal + totalCal * 0.2;
  }else{
    return totalCal
  }
}


module.exports = {
	calculateTotalDailyCalories: _calculateTotalDailyCalories;
    calculateCarbo = _calculateCarbo;
    calculateProtein = _calculateProtein;
    calculateFat = _calculateFat;
};
