/* taking user input for maximum life
checking if its a valid number */
let health = prompt('enter max health of your player');
if (!health || isNaN(health)) {
  health = 100;
  alert('invalid input \nmax life is 100');
}
adjustHealthBars(health);

const damage = 10;
const heal = 10;

// variable to maintain log
const log = [];
let monsterDamage;
let playerDamage;

function attack() {
  monsterDamage = dealMonsterDamage(damage);
  playerDamage = dealPlayerDamage(damage);
  const displayLog = {
    damageToMonster: monsterDamage,
    damageToPlayer: playerDamage,
  };
  log.push(displayLog);
  logic();
}

function strongAttack() {
  monsterDamage = dealMonsterDamage(damage * 2);
  playerDamage = dealPlayerDamage(damage * 2);
  const displayLog = {
    damageToMonster: monsterDamage,
    damageToPlayer: playerDamage,
  };
  log.push(displayLog);
  logic();
}

function healing() {
  increasePlayerHealth(heal);
}

function loging() {
  console.log(log);
}

function logic() {
  if (monsterHealthBar.value === 0 && playerHealthBar.value > 0) {
    alert('PLAYER WON !');
    resetGame(health);
  } else if (monsterHealthBar.value > 0 && playerHealthBar.value === 0) {
    alert('MONSTER WON ! \nBetter luck next time.');
    resetGame(health);
  } else if (monsterHealthBar.value === 0 && playerHealthBar.value === 0) {
    alert('thats a DRAW !');
    resetGame(health);
  }
}

attackBtn.addEventListener('click', attack);
strongAttackBtn.addEventListener('click', strongAttack);
healBtn.addEventListener('click', healing);
logBtn.addEventListener('click', loging);
