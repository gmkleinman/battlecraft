const unitVector = (pos1, pos2) => {
    let x = pos2[0] - pos1[0]
    let y = pos2[1] - pos1[1]
    let divisor = Math.max(Math.abs(x),Math.abs(y))
    x = x/divisor
    y = y/divisor
    return [x,y]
}

unitVector([3,3],[0,0]) //-1,-1
unitVector([3,3],[7,1]) //1,-0.5
unitVector([3,3],[-1,11]) //-0.5,1




const checkCollision = (x1, x2, x3, x4, y1, y2, y3, y4) => {
    if (
        ((x1 <= x3 && x2 >= x3) || (x1 <= x4 && x2 >= x4))
        && ((y1 <= y3 && y2 >= y3) || (y1 <= y4 && y2 >= y4))
        ) {
            return true;
    }
    return false;
}

checkCollision(0,10,20,30,0,10,20,30) //false
checkCollision(0,10,20,30,0,10,0,10) //false
checkCollision(0,10,0,10,0,10,0,10) //true
checkCollision(0,10,0,10,0,10,-5,5) //true
checkCollision(0,10,0,10,0,10,5,6) //true
checkCollision(0,10,0,10,0,10,5,15) //true
checkCollision(0,10,-5,5,0,10,0,10) //true
checkCollision(0,10,-5,5,0,10,5,15) //true
checkCollision(-5,-10,0,10,-5,-10,0,10) //false
checkCollision(-20,20,0,10,-20,20,0,10) //true

