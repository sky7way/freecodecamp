function findLongestWordLength(str) {
    const longestWord = str.split(' ').sort(
      function(a, b){
        return b.length - a.length
      }
    )[0];
    return longestWord.length;
   }
   
   findLongestWordLength("The quick brown fox jumped over the lazy dog");