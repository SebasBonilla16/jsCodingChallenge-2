// Create a function that filters out negative numbers 

//Start off by creating/naming function

var data = [10, 4, -2, 8, 2, -9] //Create array

data = data.filter(function(x){ // Create function to only show numbers over -1
    return x > -1
});

console.log(data);