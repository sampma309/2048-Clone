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


    // NEED TO MAKE IT SO PIECE DOESN'T SPAWN IF A LEGAL MOVE WASN'T MADE
    moveTiles: function (e) {
        e = e || window.event;
        let legalMove = 0;

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
                        legalMove = 1;
                    }
                }
            }
            // combine matching numbers
            for (let i = 0; i < 4; i++) {
                for (let j = this.nums[i].length; j > 0; j--) {
                    if (this.nums[i][j] === this.nums[i][j-1]) {
                        this.nums[i][j-1] *= 2;
                        this.nums[i][j] = 0;
                        legalMove = 1;
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
                        legalMove = 1;
                    }
                }
            }
            // combine matching numbers
            for (let i = 0; i < 4; i++) {
                for (let j = this.nums[i].length; j > 0; j--) {
                    if (this.nums[i][j] === this.nums[i][j-1]) {
                        this.nums[i][j] *= 2;
                        this.nums[i][j-1] = 0;
                        legalMove = 1;
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
                        legalMove = 1;
                    }
                }
            }
            // combine matching numbers
            for (let i = 0; i < 4; i++) {
                for (let j = this.nums[i].length; j > 0; j--) {
                    if (this.nums[i][j] === this.nums[i][j-1]) {
                        this.nums[i][j-1] *= 2;
                        this.nums[i][j] = 0;
                        legalMove = 1;
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
                        legalMove = 1;
                    }
                }
            }
            // combine matching numbers
            for (let i = 0; i < 4; i++) {
                for (let j = this.nums[i].length; j > 0; j--) {
                    if (this.nums[i][j] === this.nums[i][j-1]) {
                        this.nums[i][j] *= 2;
                        this.nums[i][j-1] = 0;
                        legalMove = 1;
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
                } else {
                    document.getElementById("box" + (i * 4 + j + 1)).innerHTML = "";
                }
                
            }
        }
    },

    checkGameOver: function () {
        let gameOverFlag = 1;

        // Check that all boxes are filled
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                if (this.nums[i][j] === 0) {
                    gameOverFlag = 0;
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

        // Game over if flag is still set
        if (gameOverFlag === 1) {
            document.getElementById("game-over").innerHTML = "GAME OVER";
        }
    }
}