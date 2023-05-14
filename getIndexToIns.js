// function getIndexToIns(arr, num) {
//     arr.sort((a, b) => {
//      return a - b;
//     })
//     if (arr.length === 0){
//       return 0; 
//     } else if(num >= arr[arr.length - 1]){
//         return arr.length;
//       }
//     else{
//     for(let i = 0; i < arr.length; i++){
//       if(num <= arr[i]){
//         return i;
//     }
//   }
//  }
// }

////////////////////////////////

function getIndexToIns(arr, num) {
    return arr
      .concat(num)
      .sort((a, b) => a - b)
      .indexOf(num);
  }
  
  getIndexToIns([2, 5, 10], 15);