const wordSearch = (letters, word) => {

  //checks word parameter amongts horizontal letters

  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }
  
  //checks word parameter amongts vertical letters

  const verticalJoin = [];

  for (let i = 0; i < letters[0].length; i++) {
    let joinedWord = '';
    for (let array of letters) {
      joinedWord += array[i];
    }
    verticalJoin.push(joinedWord);
  }

  for (let l of verticalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }
  return false;
};

module.exports = wordSearch;

// Pair programming with @cherieodu (GitHub)