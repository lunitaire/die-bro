var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if(xhr.readyState===4){
    var challenge = JSON.parse(xhr.responseText);  
};
xhr.open('GET', 'data/monsters.json');
xhr.send();
