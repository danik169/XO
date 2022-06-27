const board =[
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
];

let currentPlayer = 1;

function cellClick (row, column) {
    board[0][0]="X";
    render();
}

function render () {
    for(let i=0; i<3; i++) {
        for(let j=0; j<3; j++) {
            console.log({i, j});
            if (board[i][j]!== undefined) {
                const cellName = ".table"+(i*3+j);
                const cell = document.querySelector(cellName);
                cell.innerText = 3;
            }
        }
    }
}