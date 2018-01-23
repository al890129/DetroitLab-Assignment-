// Requiments:
// You are given the initial starting point (x,y) of a rover and the direction (N,S,E,W) it is facing.
// The rover receives a character array of commands.
// Implement commands that move the rover forward/backward (f,b).
// Implement commands that turn the rover left/right (l,r).
// Implement wrapping from one edge of the grid to another. (planets are spheres after all)
// Implement obstacle detection before each move to a new square. If a given sequence of commands encounters an obstacle,
// the rover moves up to the last possible point and reports the obstacle.

class MarsRover {
  constructor(gridSize, currentLocation, currentFacingDirection, obstacles) {
    //intiate all the parameters in counstrutor function
      this.gridSize = gridSize;
      this.currentLocation = currentLocation;
      this.currentFacingDirection = currentFacingDirection;
      this.obstacles = obstacles;
  }

  //create command function to receive diffrent kinds of commands based on the requirments
  commands() {
    //Here are four diffrent commands refer to four diffrent move
    let commandsArray = ['f','b','l','r'];
    //loop through each command to trigger the corresponding function
    commandsArray.forEach((command) => {
      if(command === 'f' || command === 'b') {
        if(this.move(command)) {
          return
        };
      }else if(command === 'l' || command === 'r') {
        this.turn(command)
      }
    })
  }

  //create move function according to move forward or move back
  move(command) {
    //intiate orginal increment value for x and y
    let xIncrement = 0,
        yIncrement = 0,
        newLocation;
    if(this.currentFacingDirection === 'N') {
      yIncrement++
    }else if(this.currentFacingDirection === 'S') {
      yIncrement--
    }else if(this.currentFacingDirection === 'E') {
      xIncrement++
    }else if(this.currentFacingDirection === 'W') {
      xIncrement++
    }

    //modify the increment value based on command
    if(command === 'f') {
      xIncrement = xIncrement * 1;
      yIncrement = yIncrement * 1
    }
    if(conmand === 'b') {
      xIncrement = xIncrement * (-1);
      yIncrement = yIncrement * (-1)
    }

    newLocation = [this.currentLocation[0] + xIncrement, this.currentLocation[1] + yIncrement];
    //call backToEdge function to check edge to edge movement
    this.backToEdge(newLocation, this.gridSize);
    //print out new location after moving
    console.log('newLocation', newLocation);
    //print out boolean for obstacle
    console.log('isObstacle', this.isObstacle(newLocation))
  }
  //create function to check if the Rover needs to be moved from edge to edge
  backToEdge(newLocation, gridSize) {
  newLocation[0] = newLocation[0] == gridSize[0] ? 0 : newLocation[0];
  newLocation[1] = newLocation[1] == gridSize[1] ? 0 : newLocation[1]
}

  //create a function to check if our next move gonna meet obstacles
  isObstacle(newLocation) {
    for(let key of Object.keys(this.obstacles)) {
      if(this.obstacle[key].toString() == newLocation.toString()) {
        //back to previous location if detect obstacle
        newLocation = this.currentLocation;
        return true;
      }
    }
    return false
  }


}
