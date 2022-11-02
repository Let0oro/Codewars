const shark = (pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) =>{ 
    return pontoonDistance/youSpeed < sharkDistance/(dolphin == true ? sharkSpeed/2 : sharkSpeed) ? "Alive!" : "Shark Bait!"
}
console.log(shark(12, 50, 4, 8, true));