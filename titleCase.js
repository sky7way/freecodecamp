// function titleCase(str) {
//     const arr = str.toLowerCase()
//                 .split(' ')
//                 .map(i => i.charAt(0).toUpperCase() + i.slice(1));
//     return arr.join(' ');
//   }
  
  titleCase("sHoRt AnD sToUt");

  ////////////////////////////////

  function titleCase(str) {
    return str
      .toLowerCase()
      .split(" ")
      .map(val => val.replace(val.charAt(0), val.charAt(0).toUpperCase()))
      .join(" ");
  }
  
  titleCase("I'm a little tea pot");