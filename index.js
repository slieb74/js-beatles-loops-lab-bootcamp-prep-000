function theBeatlesPlay(musicians, instruments){
  var newArr = []
  for (let i = 0; i< musicians.length; i++) {
    newArr.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return newArr
}

function johnLennonFacts(facts){
  let i = 0;
  var newFacts = []
  while(i < facts.length - 1) {
    newFacts.push(`${facts[i]} !!!`)
    i++
  }
  return newFacts
}