console.log("working")


/*----- app's state (variables) -----*/
var turn;



 /* var sqs = [
  document.getElementsByClassName('sq1'),
  document.getElementsByClassName('sq2'),
  document.getElementsByClassName('sq3'),
  document.getElementsByClassName('sq4'),
  document.getElementsByClassName('sq5'),
  document.getElementsByClassName('sq6'),
  document.getElementsByClassName('sq7'),
  document.getElementsByClassName('sq8'),
  document.getElementsByClassName('sq9'),
  ] */

var sqs = [null, null, null, null, null, null, null, null, null,];


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




/*----- event listeners -----*/
button.addEventListener('click', function(){
  init();
});

document.querySelector('table')
.addEventListener('click', handleClick);

/*----- functions -----*/
function init(){
  console.log(button);

  for(i=1;i <= 9; i++){
    document.getElementById('sq' + i).innerHTML = '';
  } 
  turn = 0;
  render();
}

function render(evt){

    if (document.getElementById('sq1').textContent === 'X'){
      sqs[0] = 0;
    }
    if (sq1.textContent === 'O'){
      sqs[0] = 1;
    }

    if (sq2.textContent === 'X'){
      sqs[1] = 0;
    }
    if (sq2.textContent === 'O'){
      sqs[1] = 1;
    }

    if (sq3.textContent === 'X'){
      sqs[2] = 0;
    }
    if (sq3.textContent === 'O'){
      sqs[2] = 1;
    }

  checkForWin();
}

function handleClick(evt){
  var content = evt.target;
  console.log(content)

  if(content.textContent !== ''){
    return;
  }

  switch(turn){
    case 0:
      content.textContent = 'X';
      turn = 1;
      break;
    case 1:
      content.textContent = 'O';
      turn = 0;
      break;
    default:
      break;
      
  }
  checkForWin();
}

function checkForWin(evt){
  console.log('here!');
  var letter;
  console.log(sqs);

  if(sqs[0] === sqs[1] === sqs[2]){
    console.log('haha');
    letter = evt.target.textContent;
    console.log('haha')
  }
return letter;
console.log(letter);
}

init();
