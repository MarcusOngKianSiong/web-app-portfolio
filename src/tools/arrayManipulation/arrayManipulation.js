export function concatenateArraysWithinArrayOfObjects(arrays){
    console.log("---Utility Function: concatenating arrays within array of objects---")
    console.log("Input: ",arrays)
      const length = arrays.length;
      let combined = [];
      for(let i = 0;i<length;i++){
        combined = combined.concat(arrays[i]);
      }
      console.log("Checking final output: ",combined)
      return combined;
  }

  export function findMaxAndMin(arr){
    console.log('---Utility Function: Finding max and min---');
    console.log("Checking input: ",arr);
    const final = {
      max: Math.max(...arr),
      min: Math.min(...arr)
    }
    console.log("Checking final: ",final)
    return final
  }

  export function extractArrayFromNestedArraysAndObjects(obj,name){
    console.log("---Utility Function: extract Y Axis Data---");
    console.log("Checking input: ",obj)
    const data = obj[name].map(item=>item.data);
    console.log("Checking data: ",data);
    return data
}
