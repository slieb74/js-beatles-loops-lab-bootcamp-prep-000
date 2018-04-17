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
  while(i < facts.length) {
    newFacts.push(`${facts[i]}!!!`)
    i++
  }
  return newFacts
}

function iLoveTheBeatles(n) {
  var emptyArr = []
  let i = 0;
  do {
    emptyArr[i] = "I love the Beatles!"
    i++
  }
  while (i < 15) 
  return emptyArr
}