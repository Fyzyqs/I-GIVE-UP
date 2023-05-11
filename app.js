// Create a Tic Tac Toe game that people can interact with.
    // Make a function that creates functionality to the 3x3 grid
        // create a function with an if/switch statement that will push data
    // Create a functioning computer opponent that will push data to an empty spot
        // must select a random spot to place it's character
    // Create a function that checks if player or compter got 3 in a row, or checks for a draw
    
    // 

let currentPlayer = 'x'
// let computer = 'o'

let board = [null, null, null,
            null, null, null,
            null, null, null]

// board[2] = currentPlayer

function setup() {
    let cells = document.querySelectorAll('.cell')  
    

    for(let i = 0; i < cells.length; i++) {
        let cell = cells[i]

        cell.addEventListener('click', function(event) {
            console.log('this is a fucking joke')

            if('click' === board[i]) {
                board.push(currentPlayer)
            }
        })
    }
}

setup()


function checkWin() {
    
    let winningCombos = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
    ]

    for(let i = 0; i < winningCombos.length; i++) {
        winningCombos = winningCombos[i]

        if(winningCombos[i] === currentPlayer) {
            
        }
    }
}


