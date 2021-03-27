var twoSum = function(nums, target) {
  
    //check each element in the array
    for(let i = 0; i < nums.length; i++) {
        
        //check each other elements in the array
        for(let j = i + 1; j < nums.length; j++) {
            
            //determines if the sum of array elements is equal to target
            if(nums[i] + nums[j] === target) {
              return [i, j] // returns the indexes
            }
            
        }
    }
    
    
  
};
