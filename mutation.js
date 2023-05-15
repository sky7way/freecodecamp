// function mutation(arr) {
//     const arr1 = arr[0].toLowerCase();
//     const arr2 = arr[1].toLowerCase();
//     for(let i = 0; i < arr2.length; i++){
//       if(arr1.indexOf(arr2[i]) < 0){
//         return false;
//       }
//     }return true;
//   }

//////////////////////////

function mutation(arr) {
    return arr[1].toLowerCase().split('').every(function(e){
      return arr[0].toLowerCase().indexOf(e) !== -1;
    });
  }
  
  
mutation(["hello", "hey"]);