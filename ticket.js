const carSpeed = 145;

const points = calculateDemeritPoints(carSpeed);

function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const kmsPerDemeritPoint = 5;
    

if (speed <= speedLimit) {
    console.log("Ok"); // when the speed is below the speed limit, it will print'Ok'
    return 0; 
} else {
    const kmAboveLimit = speed - speedLimit; 
    //  here it calculate the number of kilometers per hour that the car is above the speed limit

    const demeritPoints = Math.floor(kmAboveLimit / kmsPerDemeritPoint);  
    // the Math.floor() function is used to round off the number of demerit points to a whole number

    console.log(`Demerit Points: ${demeritPoints}`);
    
    if (demeritPoints >= 12) {
        console.log("License suspended");
    }

    return demeritPoints;
}
}