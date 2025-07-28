let playerCounter = 1
let draw = ["😛","🧐","😤","🤯","🥵","🤔","🥶","😱"]
let num = 0

document.getElementById("grid").addEventListener('click',(e) => {
    let boxNo = e.target.id
    
    if (playerCounter % 2 != 0) {
        document.getElementById("l"+boxNo).innerText = "X"
        playerCounter++
        const win = checkGame()
        console.log(win)
        if (win === "X") {
            alert("Player A Won 😎")
            location.reload();
        } else if (win === "O") {
            alert("Player B Won 😎")
            location.reload();
        } else if (win === "full") {
            alert("Match Draw " + draw[num++])
            location.reload();
        }
    } else {
        document.getElementById("l"+boxNo).innerText = "O"
        playerCounter++
        const win = checkGame()
    }
})

function checkGame() {
    let boxes = document.querySelectorAll(".letter")
    let flag = 0
    //console.log(boxes)
    for (let i = 0; i <= 6; i++) {
        if (boxes[i].innerText != "" && boxes[i].innerText === boxes[i+1].innerText && boxes[i+1].innerText === boxes[i+2].innerText) {
            console.log("func" + boxes[i].innerText)
            return boxes[i].innerText
        }else {
            i += 2 
        }
    }
    for (let i = 0; i <= 2; i++) {

        if (boxes[i].innerText != "" && boxes[i].innerText === boxes[i+3].innerText && boxes[i + 3].innerText === boxes[i+6].innerText) {
            return boxes[i].innerText
        }
    }
    if (boxes[0].innerText != "" && boxes[0].innerText === boxes[4].innerText && boxes[4].innerText === boxes[8].innerText) {
        return boxes[0].innerText
    }
    if (boxes[2].innerText != "" && boxes[2].innerText === boxes[4].innerText && boxes[4].innerText === boxes[6].innerText) {
        return boxes[2].innerText
    }
    for (let i = 0; i <= 8; i++) {
        if (boxes[i].innerText === "") {
            flag = 1
        }
    }
    if (flag === 0) {
        return "full"
    } 
}