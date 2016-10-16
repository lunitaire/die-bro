var box, box2, dice, diceCount, diceValue, currentDiv, result, init, hp;

// number generator
var getRandomNumber = function () {
    var randomNumber = Math.floor(Math.random() * diceValue) + 1;
    return randomNumber;
};

// dice creation
function dicePrint() {
    var newUl = document.createElement('ul');
    var newContent = document.createTextNode("Results: ");
    //newUl.innerHTML = 'Results: <br>' ;
    newUl.appendChild(newContent);
    for (i = 0; i < diceCount; i += 1) {
        result = getRandomNumber();
        //var newLi = document.createTextNode('<li class="dice" data-type="');
        var newLi = document.createElement('li');
        newClass = "n" + diceValue;
        newLi.className="dice " + newClass;
        var newLi2 = document.createElement('li');
        newLi2.className="diceColor";
        newLi2.innerHTML = result;
        newLi.appendChild(newLi2);
        newUl.appendChild(newLi);
    }
    currentDiv.appendChild(newUl);
}

// check submissions
function checkscript() {
    box = document.getElementById("fillIn");
    dice = document.getElementById("dieRolled");
    if (isNaN(box.value)){
        alert('Make sure it\'s a number');
    } else if (isNaN(dice.value)) {
        alert('Make sure it\'s a number');
    } else if (box.value) {
        if (dice.value){
            if (dice.value<=100){
            diceCount = dice.value;
            diceValue = box.value;
            currentDiv = document.getElementById("res1");
            dicePrint();
            } else {
            alert('Please keep to 100 or less at a time!');
            dice.focus();
            }
        } else {
            alert('You haven\'t filled in the number!');
        }
    } else {
        alert('You haven\'t filled in ' + box.name + '!');
        box.focus();
    }
}
function checkscript2() {
    box2 = document.getElementById("fillIn2");
    dice = document.getElementById("dieRolled2");
    if (box2.value==="-1"){
        alert('You haven\'t filled in which die!');
        box2.focus();
    } else if (dice.value==="-1") {
        alert('You haven\'t filled in how many!');
    } else {
        diceValue = box2.value;
        currentDiv = document.getElementById("res2");
        diceCount=dice.value;
        dicePrint();
    }
}

// clear dice rolls
function clearDice() {
    while (currentDiv.firstChild) {
        currentDiv.removeChild(currentDiv.firstChild);
    }
}
function removeRolls1() {
    currentDiv = document.getElementById("res1");
    clearDice();
}
function removeRolls2() {
    currentDiv = document.getElementById("res2");
    clearDice();
}

// Monsters be here.
function summonMonsters() {
    box3 = document.getElementById("fillIn3");
    if (box3.value==="-1"){
        alert('You haven\'t filled in challenge level.');
        box3.focus();
    } else {
      // Use generator to randomnize the monster type based on challenge rating
      challenge = box3.value;
      // and pull correct monster info including image
      // need to figure out how I want to store monster data
      // Add Monster Iniative
      dicevalue = 20;
      init = getRandomNumber();
      // Add Monster HP based on challenge rating
      currentDiv = document.getElementById("monster");
      var moarMon = document.createElement("img");
      moarMon.setAttribute('src',"http://orig14.deviantart.net/c7f1/f/2015/105/2/3/unicorn_icon_by_puqqie-d8prrt7.png");
      moarMon.setAttribute('alt',"found on google, made by puqqie");
      currentDiv.appendChild(moarMon);
      // Tie each roll to a number in order to allow removal
    }
}
function banMonsters() {
      // Pull specific roll based on removal button
      currentDiv = document.getElementById("monster");
      clearDice();
}

// click all the things
document.getElementById("button").onclick = checkscript;
document.getElementById("button2").onclick = checkscript2;
document.getElementById("cleton").onclick = removeRolls1;
document.getElementById("cleton2").onclick = removeRolls2;
document.getElementById("sumMon").onclick = summonMonsters;
document.getElementById("banMon").onclick = banMonsters;

// dice themes
$('#uniDie').click(function() {
    $('.diceColor').removeClass("mothDice nesDice fooDice").addClass('uniDice');
});
$('#mothDie').click(function() {
    $('.diceColor').removeClass("uniDice nesDice fooDice").addClass('mothDice');
});
$('#nesDie').click(function() {
    $('.diceColor').removeClass("mothDice uniDice fooDice").addClass('nesDice');
});
$('#fooDie').click(function() {
    $('.diceColor').removeClass("mothDice uniDice nesDice").addClass('fooDice');
});
