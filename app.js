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


}
