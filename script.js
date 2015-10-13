var box;
var box2;
var dice;
var diceCount;
var diceValue;
var currentDiv;

function checkscript() {
    box = document.getElementById("fillIn");
    dice = document.getElementById("dieRolled");
    if (box.value){
        diceCount = dice.value;
        diceValue = box.value;
        currentDiv = document.getElementById("res1");
        dicePrint();
    }else {
        alert('You haven\'t filled in ' + box.name + '!');
        box.focus();
    }
}
function checkscript2() {
    box2 = document.getElementById("fillIn2");
    dice = document.getElementById("dieRolled2");
    if (box2.value){
        diceValue = box2.value;
        currentDiv = document.getElementById("res2");
        diceCount=dice.value;
        dicePrint()
    }else {
        alert('You haven\'t filled in ' + box2.name + '!');
        box.focus();
    }
}
//actual die roller
    var getRandomNumber = function() {
    	var randomNumber = []; 
        randomNumber = Math.floor( Math.random() * diceValue ) + 1; 
        return randomNumber;
    }
// check for a value
    function dicePrint () {
        var newUl = document.createElement('ul');
        var newContent = document.createTextNode("Results: ");
        //newUl.innerHTML = 'Results: <br>' ;
        newUl.appendChild(newContent);
        for (var i=0;i < diceCount; i+=1){
            var result = getRandomNumber();
            var newLi = document.createElement('li');
            // Set the value to what you want
            newLi.innerHTML = result ;
            newUl.appendChild(newLi);
            
        }
        currentDiv.appendChild(newUl);
    } 
//clear dice rolls
    function clearDice(){
        while (currentDiv.firstChild) {
            currentDiv.removeChild(currentDiv.firstChild);
        }
    }
    function removeRolls1(){
        currentDiv = document.getElementById("res1");
        clearDice();
    }
    function removeRolls2(){
        currentDiv = document.getElementById("res2");
        clearDice();
    }
    
document.getElementById("button").onclick = checkscript;
document.getElementById("button2").onclick = checkscript2;
document.getElementById("cleton").onclick = removeRolls1;
document.getElementById("cleton2").onclick = removeRolls2;



