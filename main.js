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

        // Remove game over message
        document.getElementById("game-over").innerHTML = "";

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

        // Create a duplicate of nums to make sure a move happened
        nums_copy = [[],[],[],[]];
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                nums_copy[i][j] = this.nums[i][j];
            }
        }

        if (e.keyCode == '38') { // up arrow (left transpose)

            // transpose matrix
            for (let i = 0; i < 4; i++) {
                for (let j = 0; j < i; j++) {
                    tmp = this.nums[i][j];
                    this.nums[i][j] = this.nums[j][i];
                    this.nums[j][i] = tmp;
                }
            }
            // remove all zeroes
            for (let i = 0; i < 4; i++) {
                for (let j = 3; j > -1; j--) {         
                    if (this.nums[i][j] === 0) {
                        this.nums[i].splice(j, 1);
                    }
                }
            }
            // combine matching numbers
            for (let i = 0; i < 4; i++) {
                for (let j = this.nums[i].length; j > 0; j--) {
                    if (this.nums[i][j] === this.nums[i][j-1]) {
                        this.nums[i][j-1] *= 2;
                        this.nums[i][j] = 0;
                    }
                }
            }
            // remove all zeroes added due to combinations
            for (let i = 0; i < 4; i++) {
                for (let j = this.nums[i].length; j > -1; j--) {         
                    if (this.nums[i][j] === 0) {
                        this.nums[i].splice(j, 1);
                    }
                }
            }
            // add back zeroes at start of line
            for (let i = 0; i < 4; i++) {
                while (this.nums[i].length < 4) {
                    this.nums[i].push(0);
                }
            }
            // Transpose matrix back
            for (let i = 0; i < 4; i++) {
                for (let j = 0; j < i; j++) {
                    tmp = this.nums[i][j];
                    this.nums[i][j] = this.nums[j][i];
                    this.nums[j][i] = tmp;
                }
            }
        }
        else if (e.keyCode == '40') { // down arrow (right transpose)
            // transpose matrix
            for (let i = 0; i < 4; i++) {
                for (let j = 0; j < i; j++) {
                    tmp = this.nums[i][j];
                    this.nums[i][j] = this.nums[j][i];
                    this.nums[j][i] = tmp;
                }
            }

            // remove all zeroes
            for (let i = 0; i < 4; i++) {
                for (let j = 3; j > -1; j--) {         
                    if (this.nums[i][j] === 0) {
                        this.nums[i].splice(j, 1);
                    }
                }
            }
            // combine matching numbers
            for (let i = 0; i < 4; i++) {
                for (let j = this.nums[i].length; j > 0; j--) {
                    if (this.nums[i][j] === this.nums[i][j-1]) {
                        this.nums[i][j] *= 2;
                        this.nums[i][j-1] = 0;
                    }
                }
            }
            // remove all zeroes added due to combinations
            for (let i = 0; i < 4; i++) {
                for (let j = this.nums[i].length; j > -1; j--) {         
                    if (this.nums[i][j] === 0) {
                        this.nums[i].splice(j, 1);
                    }
                }
            }
            // add back zeroes at start of line
            for (let i = 0; i < 4; i++) {
                while (this.nums[i].length < 4) {
                    this.nums[i].unshift(0);
                }
            }
            // Transpose matrix back
            for (let i = 0; i < 4; i++) {
                for (let j = 0; j < i; j++) {
                    tmp = this.nums[i][j];
                    this.nums[i][j] = this.nums[j][i];
                    this.nums[j][i] = tmp;
                }
            }
        }
        else if (e.keyCode == '37') { // left arrow
            // remove all zeroes
            for (let i = 0; i < 4; i++) {
                for (let j = 3; j > -1; j--) {         
                    if (this.nums[i][j] === 0) {
                        this.nums[i].splice(j, 1);
                    }
                }
            }
            // combine matching numbers
            for (let i = 0; i < 4; i++) {
                for (let j = this.nums[i].length; j > 0; j--) {
                    if (this.nums[i][j] === this.nums[i][j-1]) {
                        this.nums[i][j-1] *= 2;
                        this.nums[i][j] = 0;
                    }
                }
            }
            // remove all zeroes added due to combinations
            for (let i = 0; i < 4; i++) {
                for (let j = this.nums[i].length; j > -1; j--) {         
                    if (this.nums[i][j] === 0) {
                        this.nums[i].splice(j, 1);
                    }
                }
            }
            // add back zeroes at start of line
            for (let i = 0; i < 4; i++) {
                while (this.nums[i].length < 4) {
                    this.nums[i].push(0);
                }
            }
        }
        else if (e.keyCode == '39') { // right arrow
            // remove all zeroes
            for (let i = 0; i < 4; i++) {
                for (let j = 3; j > -1; j--) {         
                    if (this.nums[i][j] === 0) {
                        this.nums[i].splice(j, 1);
                    }
                }
            }
            // combine matching numbers
            for (let i = 0; i < 4; i++) {
                for (let j = this.nums[i].length; j > 0; j--) {
                    if (this.nums[i][j] === this.nums[i][j-1]) {
                        this.nums[i][j] *= 2;
                        this.nums[i][j-1] = 0;
                    }
                }
            }
            // remove all zeroes added due to combinations
            for (let i = 0; i < 4; i++) {
                for (let j = this.nums[i].length; j > -1; j--) {         
                    if (this.nums[i][j] === 0) {
                        this.nums[i].splice(j, 1);
                    }
                }
            }
            // add back zeroes at start of line
            for (let i = 0; i < 4; i++) {
                while (this.nums[i].length < 4) {
                    this.nums[i].unshift(0);
                }
            }
        }

        // Check that a legal move was made
        let legalMove = 0;
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                if (this.nums[i][j] !== nums_copy[i][j]) {
                    legalMove = 1;
                    break;
                }
            }
        }
        
        if (legalMove === 1) {
            this.addNewTile();
        }

        this.displayBoard();
        this.checkGameOver();
    },

    addNewTile: function () {

        // add a single new tile to an unoccupied square
        let numsGenerated = 0;
        while (numsGenerated < 1) {
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
    },

    displayBoard: function () {
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                if (this.nums[i][j] !== 0) {
                    document.getElementById("box" + (i * 4 + j + 1)).innerHTML = this.nums[i][j];
                    switch(this.nums[i][j]) {
                        case 2:
                            document.getElementById("box" + (i * 4 + j + 1)).style.backgroundColor = "#fff8dc";
                            break;
                        case 4:
                            document.getElementById("box" + (i * 4 + j + 1)).style.backgroundColor = "#f0e68c";
                            break;
                        case 8:
                            document.getElementById("box" + (i * 4 + j + 1)).style.backgroundColor = "#eedc82";
                            break;
                        case 16:
                            document.getElementById("box" + (i * 4 + j + 1)).style.backgroundColor = "#ffd700";
                            break;
                        case 32:
                            document.getElementById("box" + (i * 4 + j + 1)).style.backgroundColor = "#f4c430";
                            break;
                        case 64:
                            document.getElementById("box" + (i * 4 + j + 1)).style.backgroundColor = "#ffaa33";
                            break;
                        case 128:
                            document.getElementById("box" + (i * 4 + j + 1)).style.backgroundColor = "#f5b20a";
                            break;
                        case 256:
                            document.getElementById("box" + (i * 4 + j + 1)).style.backgroundColor = "#ffa500";
                            break;
                        case 512:
                            document.getElementById("box" + (i * 4 + j + 1)).style.backgroundColor = "#ff5f15";
                            break;
                        case 1024:
                            document.getElementById("box" + (i * 4 + j + 1)).style.backgroundColor = "#e35335";
                            break;
                        case 2048:
                            document.getElementById("box" + (i * 4 + j + 1)).style.backgroundColor = "#00ff00";
                            break;
                    }
                } else {
                    document.getElementById("box" + (i * 4 + j + 1)).innerHTML = "";
                    document.getElementById("box" + (i * 4 + j + 1)).style.backgroundColor = "#FFFFFF";
                }
            }
        }
    },

    checkGameOver: function () {
        let gameOverFlag = 1;
        let winFlag = 0;

        // Check that all boxes are filled
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                if (this.nums[i][j] === 0) {
                    gameOverFlag = 0;
                } else if (this.nums[i][j] === 2048) {
                    winFlag = 1;
                }
            }
        }

        // Check that no two adjacent boxes are the same
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                try { if (this.nums[i][j] === this.nums[i][j-1]) {
                    gameOverFlag = 0;
                    break;
                    }
                }
                catch(TypeError) {

                }
                try { if (this.nums[i][j] === this.nums[i][j+1]) {
                    gameOverFlag = 0;
                    break;
                    }
                }
                catch(TypeError) {

                }
                try { if (this.nums[i][j] === this.nums[i+1][j]) {
                    gameOverFlag = 0;
                    break;
                    }
                }
                catch(TypeError) {

                }
                try { if (this.nums[i][j] === this.nums[i-1][j]) {
                    gameOverFlag = 0;
                    break;
                    }
                }
                catch(TypeError) {
                }
            }  
        }

        // Game over (lose) if flag is still set
        if (gameOverFlag === 1) {
            document.getElementById("game-over").innerHTML = "GAME OVER. YOU LOSE.";
        }

        // Game over (win)
        if (winFlag === 1) {
            document.getElementById("game-over").innerHTML = "GAME OVER. YOU WIN!!!";
        }
    }
}