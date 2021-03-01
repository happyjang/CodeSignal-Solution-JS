function knapsackLight(value1, weight1, value2, weight2, maxW) {
    
    //check whether the case where maxW is less than both values.    
    if (maxW < weight1 && maxW < weight2) return 0;
  
    //checked if maxW is able to carry both objects.
    if (maxW >= weight1 + weight2) return value1 + value2;

    //check if both weight are less than maxW and if so choose the one with the higher value.
    if (maxW >= weight1 && maxW >= weight2) {
    
    //find out which we can take, choose any weight and see if it is less than maxW, if it is return that objects       value. If not return the other’s.
        return value1 > value2 ? value1 : value2;
        }
        return maxW >= weight1 ? value1 : value2;
}
