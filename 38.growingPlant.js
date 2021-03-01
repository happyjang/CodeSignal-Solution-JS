function growingPlant(upSpeed, downSpeed, desiredHeight) {
    
    //check the speed per day
    let daySpeed = upSpeed - downSpeed;
    let height = 0;
    let days = 0
    //using while loop to find how many days it'll take for the plant to reach this height.
    while( height < desiredHeight) {
    days++;
    height += upSpeed;
    if (height < desiredHeight)
    height -= downSpeed;
    else 
    return days;
    }
}