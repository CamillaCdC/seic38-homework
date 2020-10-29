// in this gameBoard object, we use numbers to store the board state
// 0 refers to 'red', 1 refers to 'green', 2 refers to 'blue'
let gameBoard = [
    [0,0,1,0,1,1,0,1,1,1],
    [0,0,1,1,1,0,2,2,2,0],
    [1,1,0,1,2,1,0,0,1,0],
    [0,0,1,0,2,1,0,1,1,1],
    [0,2,1,2,2,0,0,0,1,0],
    [1,1,0,1,1,1,0,0,1,0],
    [0,0,1,0,1,1,0,2,1,1],
    [0,0,2,2,1,0,0,2,1,0],
    [1,1,0,2,1,1,0,2,2,0],
    [1,1,0,1,1,1,0,0,1,0]
]
// the default first color is red
let currentColor = 0;
// avoid calling the renderBoard function inside your function
// instead, call the renderSquare to only update relevant squares
function renderBoard(){
    $('#game-board').empty();
    for(let y = 0; y < 10; y++){
        const $row = $('<div/>').addClass('game-row');
        for(let x = 0; x < 10; x++){
            //each square is given x/y coordinate attributes
            const $gameSquare = $('<div/>').attr({x: x, y: y})
            //squares are also given a num attribute to track which color it is
            $gameSquare.attr('num', gameBoard[y][x])
            //when the square is clicked, the recursiveFlood function is called
            $gameSquare.click((e)=>{
                recursiveFlood(x,y, parseInt($(e.currentTarget).attr('num')), currentColor)
                //this function takes in four parameters:
                //first, the x coordinate of the square clicked
                //second, the y coordinate of the square clicked
                //third, the number value of the square clicked. This is the number to change.
                //fourth, the new number to change the flooded squares to.
            })
            $row.append($gameSquare);
        }
        $('#game-board').append($row)
    }
}
// this function lets the buttons change the choice of current color
$('.color-choice').click((e)=>{
    if($(e.currentTarget).attr('id') === "red"){
        currentColor = 0;
    } else if($(e.currentTarget).attr('id') === "green"){
        currentColor = 1;
    } else{
        currentColor = 2;
    }
    $('.current-color').text($(e.currentTarget).attr('id'))
})
renderBoard()
function renderSquare(x, y){
    const $gameSquare = $(`div[x="${x}"][y="${y}"]`)
    $gameSquare.attr('num', gameBoard[y][x])
}

function recursiveFlood(x, y, targetValue, newValue){

  if (targetValue === newValue) {return;};

  gameBoard[y][x] = newValue;
  renderBoard(x,y);

  if (x>=1 && (targetValue === gameBoard[y][x-1])){
      targetValue = gameBoard[y][x-1];
      recursiveFlood(x-1,y,targetValue,newValue)
  }
  if (x<=8 && (targetValue === gameBoard[y][x+1])){
      targetValue = gameBoard[y][x+1];
      recursiveFlood(x+1,y,targetValue,newValue)
  }

  if (y<=8 && (targetValue === gameBoard[y+1][x])){
    targetValue = gameBoard[y+1][x];
     recursiveFlood(x,y+1,targetValue,newValue)
  }

  if (y>=1 && (targetValue === gameBoard[y-1][x])){
    targetValue = gameBoard[y-1][x];
     recursiveFlood(x,y-1,targetValue,newValue)
  }

  return;
}
