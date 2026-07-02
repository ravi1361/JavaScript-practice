// prototype inheritance

var human = {
  canFly: false,
  canTalk: true,
  canWalk: true,
  haveEmotions: true,
  haveFourLegs: false,
}


var sheriyansStudent = {
  canMakeAmazingWebsite: true,
  canMakeAmazingAnimations: true,
  canMakeWorldClassAwardedWebsites: true,
}

sheriyansStudent.__proto__ = human ; 

// we can borrow the object properties from above by prototype inheritance