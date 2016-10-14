var box, box2, dice, diceCount, diceValue, currentDiv, result;


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
        box.focus();
    } else if (dice.value==="-1") {
        alert('You haven\'t filled in how many!');
    } else {
        diceValue = box2.value;
        currentDiv = document.getElementById("res2");
        diceCount=dice.value;
        dicePrint()
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
    currentDiv = document.getElementById("monster");
    var moarMon = document.createElement("img");
    moarMon.setAttribute('src',"http://orig14.deviantart.net/c7f1/f/2015/105/2/3/unicorn_icon_by_puqqie-d8prrt7.png");
    moarMon.setAttribute('alt',"found on google, made by puqqie");
    currentDiv.appendChild(moarMon);
}
function banMonsters() {
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

///////////changestylesheets
// *** TO BE CUSTOMISED ***

var style_cookie_name = "style" ;
var style_cookie_duration = 30 ;
var style_domain = "www.atrian.xyz" ;

// *** END OF CUSTOMISABLE SECTION ***
// You do not need to customise anything below this line

function switch_style ( css_title )
{
// You may use this script on your site free of charge provided
// you do not remove this notice or the URL below. Script from
// http://www.thesitewizard.com/javascripts/change-style-sheets.shtml
  var i, link_tag ;
  for (i = 0, link_tag = document.getElementsByTagName("link") ;
    i < link_tag.length ; i++ ) {
    if ((link_tag[i].rel.indexOf( "stylesheet" ) != -1) &&
      link_tag[i].title) {
      link_tag[i].disabled = true ;
      if (link_tag[i].title == css_title) {
        link_tag[i].disabled = false ;
      }
    }
    set_cookie( style_cookie_name, css_title,
      style_cookie_duration, style_domain );
  }
}
function set_style_from_cookie()
{
  var css_title = get_cookie( style_cookie_name );
  if (css_title.length) {
    switch_style( css_title );
  }
}
function set_cookie ( cookie_name, cookie_value,
    lifespan_in_days, valid_domain )
{
    // http://www.thesitewizard.com/javascripts/cookies.shtml
    var domain_string = valid_domain ?
                       ("; domain=" + valid_domain) : '' ;
    document.cookie = cookie_name +
                       "=" + encodeURIComponent( cookie_value ) +
                       "; max-age=" + 60 * 60 *
                       24 * lifespan_in_days +
                       "; path=/" + domain_string ;
}
function get_cookie ( cookie_name )
{
    // http://www.thesitewizard.com/javascripts/cookies.shtml
    var cookie_string = document.cookie ;
    if (cookie_string.length != 0) {
        var cookie_value = cookie_string.match (
                        '(^|;)[\s]*' +
                        cookie_name +
                        '=([^;]*)' );
        return decodeURIComponent ( cookie_value[2] ) ;
    }
    return '' ;
}
