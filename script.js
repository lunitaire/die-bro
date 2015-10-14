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
    function summonUnicorns(){
        currentDiv = document.getElementById("unicorn");
        var moarUni = document.createElement("img");
        moarUni.setAttribute('src',"http://orig14.deviantart.net/c7f1/f/2015/105/2/3/unicorn_icon_by_puqqie-d8prrt7.png");
        moarUni.setAttribute('alt',"found on google, made by puqqie");
        currentDiv.appendChild(moarUni);
    }

function banUnicorns(){
        currentDiv = document.getElementById("unicorn");
        clearDice();
    }

document.getElementById("button").onclick = checkscript;
document.getElementById("button2").onclick = checkscript2;
document.getElementById("cleton").onclick = removeRolls1;
document.getElementById("cleton2").onclick = removeRolls2;
document.getElementById("sumUni").onclick = summonUnicorns;
document.getElementById("banUni").onclick = banUnicorns;

///////////changestylesheets
// *** TO BE CUSTOMISED ***

var style_cookie_name = "style" ;
var style_cookie_duration = 30 ;
var style_domain = "" ;

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





