function titleCase(str) {
    const arr = str.toLowerCase()
                .split(' ')
                .map(i => i.charAt(0).toUpperCase() + i.slice(1));
    return arr.join(' ');
  }
  
  titleCase("sHoRt AnD sToUt");