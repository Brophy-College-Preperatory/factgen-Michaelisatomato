var factList = [/*list of options when button clicked in order*/
 "Fact 1",
 "Fact 2", 
 "Fact 3", 
 "Fact 4"];

var fact = document.getElementById("fact");/*fact option*/
var myBtn = document.getElementById("myBtn");/*button option*/
var count = 0;/*value of count*/

myBtn.addEventListener("click", displayFact);/*generates when clicked*/

function displayFact(){/*fact displayed by fact(number of times clicked up to 4)*/
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}
