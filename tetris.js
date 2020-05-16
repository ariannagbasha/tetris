document.addEventListener('DOMContentLoaded', () => {
    
    const grid = document.querySelector('.grid')
    let squares = Array.from(document.querySelectorAll('.grid div'))
    const width = 10;
    const ScoreDisplay = document.querySelector('#score') 
    const StartBin = document.querySelector('#start-button') 
    const lTertominos = [
        [1, width + 1, width*2 + 1, 2 ],
        [width, width + 1, width + 2, width * 2 +2],
        [1, width + 1, width*2 + 1, width * 2],
        [width, width * 2, width*2 + 1, width * 2*2]
    ]
    // const zTertominos = "secondShape";
    // const oTertominos = "thirdShape";
    // const iTertominos = "fourShape";
    // const tTertominos = "fiveShape";
    
    // const tetrominos = [lTertominos, zTertominos, oTertominos, iTertominos, tTertominos]


    
})