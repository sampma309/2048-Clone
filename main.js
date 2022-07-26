const gameGrid = {
    nums: [[0, 0, 0, 0],
           [0, 0, 0, 0],
           [0, 0, 0, 0],
           [0, 0, 0, 0]],

    generateNewBoard: function () {
        
        // Reset nums array
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                this.nums[i][j] = 0;
            }
        }

        // Place two numbers randomly (50% chance to be 2 or 4) 
        let numsGenerated = 0;
        while (numsGenerated < 2) {
            let index = Math.floor(Math.random() * 16);
            let num = 0
            if (Math.random() < 0.66) {
                num = 2;
            } else {
                num = 4;
            }
            if (this.nums[Math.floor(index / 4)][index % 4] === 0) {
                this.nums[Math.floor(index / 4)][index % 4] = num
                numsGenerated += 1;
            }
        }

        // Display board
        this.displayBoard();
    },

    moveTiles: function (e) {
        e = e || window.event;

        if (e.keyCode == '38') {
            alert('up');
            // up arrow
        }
        else if (e.keyCode == '40') {
            alert('down');
            // down arrow
        }
        else if (e.keyCode == '37') {
            alert('left');
        // left arrow
        }
        else if (e.keyCode == '39') {
            alert('right');
        // right arrow
        }
        // TODO: After pieces move call newPiece function and pass the new board state
    },

    newPiece: function () {

    },

    displayBoard: function () {
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                document.getElementById("box" + (i * 4 + j + 1)).innerHTML = this.nums[i][j];
            }
        }
    }


}