function repeatStringNumTimes(str, num) {
    let newStr = '';
    for (let i = 1; i <= num; i++){
      if(num < 0){
        return newStr;
      } else {
        newStr += str
      }
    } return newStr;
  }
  
  repeatStringNumTimes("abc", 3);