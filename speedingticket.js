function checkSpeed() {
    const speedLimit = 70;
    const maxPoints = 12;
    const carSpeed = parseInt(prompt("Enter the speed of the car (km/h):"));
   
    if (isNaN(carSpeed)) {
      console.error("Invalid speed input. Please enter a number.");
      return;
    }
   
    const points = Math.floor((carSpeed - speedLimit) / 5);
   
    let message;
    if (points <= 0) {
      message = "OK";
    } else if (points <= maxPoints) {
      message = `Points: ${points}`;
    } else {
      message = "License suspended";
    }
   
   
    console.log(message);
   }
   
   checkSpeed();