console.log("working")


/*----- app's state (variables) -----*/
var turn;



/*  var squares = {
  sq1: document.getElementsByClassName('sq1'),
  sq2: document.getElementsByClassName('sq2'),
  sq3: document.getElementsByClassName('sq3'),
  sq4: document.getElementsByClassName('sq4'),
  sq5: document.getElementsByClassName('sq5'),
  sq6: document.getElementsByClassName('sq6'),
  sq7: document.getElementsByClassName('sq7'),
  sq8: document.getElementsByClassName('sq8'),
  sq9: document.getElementsByClassName('sq9'),
} 
*/


/*----- cached element references -----*/

var squares = document.getElementsByTagName('td');

var sq1 = document.getElementById('sq1');
var sq2 = document.getElementById('sq2');
var sq3 = document.getElementById('sq3');
var sq4 = document.getElementById('sq4');
var sq5 = document.getElementById('sq5');
var sq6 = document.getElementById('sq6');
var sq7 = document.getElementById('sq7');
var sq8 = document.getElementById('sq8');
var sq9 = document.getElementById('sq9');

var button = document.getElementById('button');

button.addEventListener('click', function(){
  init();
});

/*----- event listeners -----*/


/*----- functions -----*/
function init(){
  console.log(button);

  for(i=1;i <= 9; i++){
    document.getElementById('sq' + i).innerHTML = '';
  } 

  render();
}

function render(){

  checkForWin();
}

function handleClick(){
  
}

function checkForWin(){

}

init();
