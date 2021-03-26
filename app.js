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
    multiplier: 20
  },
  best: {
    price: 500,
    quantity: 0,
    multiplier: 40
  }
};



function mine(){
goalCount+=damage
console.log(goalCount)
update()
}

// upgradePicked=upgradeChoice(clickUpgrades)
// function upgradeChoice(banana){
//  let upgradePicked.upgradePicked2= clickUpgrades[banana]

// }



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






function update(){
  document.getElementById('tally').innerText = `${goalCount}`
  document.getElementById('normalupgrades').innerText = `${clickUpgrades.normal.quantity}`
  document.getElementById('normalBtn').innerText = `$${clickUpgrades.normal.price}`

  document.getElementById('strongerupgrades').innerText = `${clickUpgrades.stronger.quantity}`
  document.getElementById('strongerBtn').innerText = `$${clickUpgrades.stronger.price}`

  document.getElementById('betterupgrades').innerText = `${clickUpgrades.better.quantity}`
  document.getElementById('betterBtn').innerText = `$${clickUpgrades.better.price}`

  document.getElementById('bestupgrades').innerText = `${clickUpgrades.best.quantity}`
  document.getElementById('bestBtn').innerText = `$${clickUpgrades.best.price}`

}