/* taking user input for maximum life
checking if its a valid number */
let health = parseInt(prompt('enter max health of your player'));
if (!health || health < 0) {
  health = 100;
  alert('invalid input \nmax life is 100');
}
adjustHealthBars(health);
let life = 1; //bonus life counter
const damage = health / 10;
const heal = health / 15;

// variable to maintain log
const history = [];
let monsterDamage;
let playerDamage;

function attack() {
  monsterDamage = dealMonsterDamage(damage);
  playerDamage = dealPlayerDamage(damage);
  logic();
  loging('ATTACK', monsterDamage, playerDamage);
}

function strongAttack() {
  monsterDamage = dealMonsterDamage(damage * 2);
  playerDamage = dealPlayerDamage(damage * 2);
  logic();
  loging('STRONG ATTACK', monsterDamage, playerDamage);
}

function healing() {
  playerHealthBar.value < health / 2
    ? increasePlayerHealth(heal)
    : alert('healing not allowed \npast half life !');
  loging('HEALING player', 0, 0);
}

function loging(operation, monsterDamage, playerDamage) {
  const displayLog = {
    What_Happened: operation,
    damageToMonster: monsterDamage,
    damageToPlayer: playerDamage,
  };
  history.push(displayLog);
}

function log() {
  console.log(history);
}

function logic() {
  if (playerHealthBar.value === 0 && life > 0) {
    --life;
    alert(`Bonus life saved you !
      your health is at ${health / 5}`);
    setPlayerHealth(health / 5);
    if (!life) removeBonusLife();
  } else {
    if (monsterHealthBar.value === 0 && playerHealthBar.value > 0) {
      alert('PLAYER WON !');
      resetGame(health);
      loging('PLAYER WON', 0, 0);
    } else if (monsterHealthBar.value > 0 && playerHealthBar.value === 0) {
      alert('MONSTER WON ! \nBetter luck next time.');
      resetGame(health);
      loging('MONSTER WON', 0, 0);
    } else if (monsterHealthBar.value === 0 && playerHealthBar.value === 0) {
      alert('thats a DRAW !');
      resetGame(health);
      loging('DRAW', 0, 0);
    }
  }
}

attackBtn.addEventListener('click', attack);
strongAttackBtn.addEventListener('click', strongAttack);
healBtn.addEventListener('click', healing);
logBtn.addEventListener('click', log);
