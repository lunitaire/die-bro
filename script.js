function checkscript() {
    var box = document.getElementById("fillIn");
    var dice = document.getElementById("dieRolled");
    var counter=0;
    var getRandomNumber = function() {
    	var randomNumber = []; 
        randomNumber = Math.floor( Math.random() * box.value ) + 1; 
        return randomNumber;
    }
    // check for a value
    if (box.value) {
        var currentDiv = document.getElementById("res1");
        var parentDiv = currentDiv.parentNode;
        var newUl = document.createElement('ul');
        newUl.innerHTML = 'Results: ' ;
        parentDiv.insertBefore(newUl, currentDiv);
        while (counter < dice.value){
            var result = getRandomNumber();
            var newElement = document.createElement('li');
            
            // Set the value to what you want
            newElement.innerHTML = result + ' ';
            parentDiv.insertBefore(newElement, currentDiv);
            counter ++;
        }
    } else {
        alert('You haven\'t filled in ' + box.name + '!');
        box.focus()
    }
}
document.getElementById("button").onclick = checkscript;




