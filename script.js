

// class Robot {
//   constructor(location, direction, destination,length) {
//     this.location = ({x:0, y:0});
//     this.direction = direction;
//     this.destination = destination;
//     this.length = 10;
//     }
// }

// let grid = new Robot()

// let destination = new Robot({north:0, south:1});
// let northDestination = new Robot({south:1, north:2});
// let southDestination = new Robot({south:2, north:3});
// let westDestination = new Robot({west:1, east:2});
// let eastDestination = new Robot({east:2, west:3});

// console.log(northDestination)
// console.log(southDestination)


function robotMove(moves) {
    let counter = 0;
    let direction = "";
    let x = 0;
    let y = 0;

    //to check if direction is clockwise or anticlockwise

    for(let i = 0; i < moves.length; i++) {
        if(moves[0] == '\n') {
            return null
        }
        else if (moves[i] == 'L') {
            counter--
        }
        else if (moves[i] == 'R') {
            counter++;
        }
        else if (moves[i] == 'A') {
            x--;
        }

    // if count is positive then it means it is moving in a clockwise direction
    if (counter > 0) {
        if(counter % 4 ==0) {
            direction = "North";
        }
        else if( counter % 4 == 1) {
            direction = "East"
        }
        else if( counter % 4 == 2) {
            direction = "South"
        }
        else if( counter % 4 == 3) {
            direction = "West"
        }

        //if count is negative that means its moving in angticlock direction
    }

    if (counter % 4 == 0) {
        direction = "North";

    }
    else if (counter % 4 == 1) {
        direction = "West"
    }
    else if (counter % 4 == 2) {
        direction = "South"
    }
    else if (counter % 4 == 3) {
        direction = "East"
    }
}

return `{x: ${x}, y:${y}, bearing: ${direction}}`

}

console.log(robotMove('RAALAL'))