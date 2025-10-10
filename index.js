let homeCount = document.getElementById("home-count")
let guestCount = document.getElementById("guest-count")
let homeScr = 0
let guestScr = 0

function hmPlus1() {
    homeScr += 1
    homeCount.textContent = homeScr
}

function hmPlus2() {
    homeScr += 2
    homeCount.textContent = homeScr
}

function hmPlus3() {
    homeScr += 3
    homeCount.textContent = homeScr
}

function hmMinus1() {
    homeScr -= 1
    homeCount.textContent = homeScr
}





function gsPlus1() {
    guestScr += 1
    guestCount.textContent = guestScr
}

function gsPlus2() {
    guestScr += 2
    guestCount.textContent = guestScr
}

function gsPlus3() {
    guestScr += 3
    guestCount.textContent = guestScr
}

function gsMinus1() {
    guestScr -= 1
    guestCount.textContent = guestScr
}


function newGame() {
    homeScr = 0
    guestScr = 0
    guestCount.textContent = guestScr
    homeCount.textContent = homeScr
}