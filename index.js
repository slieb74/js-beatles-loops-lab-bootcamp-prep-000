function theBeatlesPlay(musicians, instruments){
  var newArr = []
  for (let i = 0; i< musicians.length; i++) {
    newArr.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return newArr
}

function johnLennonFacts(facts){
  let i = 0;
  while(facts[i] < facts.length - i) {
    facts[i] = `${facts[i]} + !!!`
  }
  return facts
}