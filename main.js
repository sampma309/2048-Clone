const gameGrid = {
    nums: [[1, 2, 3, 4],
           [5, 6, 7, 8],
           [9, 10, 11, 12],
           [13, 14, 15, 16]],

    /*
    generateBoard: function () {
        let nums = 0;
        do {
            let index = Math.floor(Math.random() * 16) + 1;
            let num = 0
            if (Math.random() < 0.5) {
                num = 2;
            } else {
                num = 4;
            }
            let boxNumber = document.getElementById("box" + index).innerHTML;
            if (!boxNumber) {
                document.getElementById("box" + index).innerHTML = num;
                nums += 1;
            }
        } while (nums < 3);
        // add call to display board function below and instead just change the nums attribute
    },*/

    generateBoard: function () {
        /*let numsGenerated = 0;
        do {
            let index = Math.floor(Math.random() * 16);
            let num = 0
            if (Math.random() < 0.5) {
                num = 2;
            } else {
                num = 4;
            }
            let boxNumber = this.nums[Math.floor(index / 4)][index % 4];
            if (boxNumber !== 0) {
                this.nums[Math.floor(index / 4)][index % 4] = num
                numsGenerated += 1;
            }
            console.log(index);
            console.log(num);
        } while (numsGenerated < 3);*/
        this.displayBoard();
        console.log(this.nums[1][1]);
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
                console.log("box" + (i * 4 + j + 1));
                document.getElementById("box" + (i * 4 + j + 1)).innerHTML = this.nums[i][j];
            }
        }
    }


}