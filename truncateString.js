const truncateString = (str, num) => str.length > num ? str.slice(0, num) + "..." : str;
  
  truncateString("A-tisket a-tasket A green and yellow basket", 8);