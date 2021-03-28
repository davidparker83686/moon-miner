let goalCount=0

let damage=1

let clickUpgrades = {
  normal: {
    price: 20,
    quantity: 0,
    multiplier: 1
  },
  stronger: {
    price: 50,
    quantity: 0,
    multiplier: 2
  },
  better: {
    price: 250,
    quantity: 0,
    multiplier: 3,
    time: 2000,
    click:1
  },
  best: {
    price: 500,
    quantity: 0,
    multiplier: 4,
    time:1000,
    click:10
  }
}

function mine(){
goalCount+=damage
console.log(goalCount)
document.getElementById('music').play()
update()
}

function hit(){
  goalCount++
  console.log(goalCount)
  update()
}

function hitTwo(){
  goalCount += 10
  console.log(goalCount)
  update()
}

function upgradeChoice(banana){
  let upgradePicked= clickUpgrades[banana]
  // console.log( 'upgradePicked', upgradePicked)

  if(goalCount>= upgradePicked.price){
    console.log('purchased')

    goalCount= goalCount-upgradePicked.price
    // console.log( 'piggy')

    upgradePicked.quantity++
    // console.log(upgradePicked.quantity)

    upgradePicked.price=upgradePicked.price * 2

    damage= damage+ upgradePicked.multiplier

    }else{
      console.log('needmoremoney')
    }
    update()
}

function upgradeAutoChoice(apple){
    let autoUpgradePicked= clickUpgrades[apple]
    // console.log( 'upgradePicked', upgradePicked)

    if(goalCount>= autoUpgradePicked.price){
      console.log('purchased')
      goalCount= goalCount-autoUpgradePicked.price
      // console.log( 'piggy')
      autoUpgradePicked.quantity++
      // console.log(upgradePicked.quantity)
      autoUpgradePicked.price=autoUpgradePicked.price * 2
      setInterval(hit,2000)
     }else{
      console.log('need more money')
  }
  update()
}

function upgradeAutoChoiceTwo(pear){
    let autoUpgradePicked= clickUpgrades[pear]
    // console.log( 'upgradePicked', upgradePicked)
    if(goalCount>= autoUpgradePicked.price){
      console.log('purchased')
      goalCount= goalCount-autoUpgradePicked.price
      // console.log( 'piggy')
      autoUpgradePicked.quantity++
      // console.log(upgradePicked.quantity)
      autoUpgradePicked.price=autoUpgradePicked.price * 2
      setInterval(hitTwo,1000)
     }else{
      console.log('need more money')
  }
  update()
}




// function fiesta() {
//   document.getElementById('music').play()
// }




function update(){
  document.getElementById('tally').innerText = `${goalCount}`
  document.getElementById('normalupgrades').innerText = `${clickUpgrades.normal.quantity}`
  document.getElementById('normalBtn').innerText = `~${clickUpgrades.normal.price}`

  document.getElementById('strongerupgrades').innerText = `${clickUpgrades.stronger.quantity}`
  document.getElementById('strongerBtn').innerText = `~${clickUpgrades.stronger.price}`

  document.getElementById('betterupgrades').innerText = `${clickUpgrades.better.quantity}`
  document.getElementById('betterBtn').innerText = `~${clickUpgrades.better.price}`

  document.getElementById('bestupgrades').innerText = `${clickUpgrades.best.quantity}`
  document.getElementById('bestBtn').innerText = `~${clickUpgrades.best.price}`
}